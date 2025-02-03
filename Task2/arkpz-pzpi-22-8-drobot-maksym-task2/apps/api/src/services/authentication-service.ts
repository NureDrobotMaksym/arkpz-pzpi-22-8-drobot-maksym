import Service from "@/service";
import UserRepository from "@/repositories/user-repository";
import { UserSignInRequestSchema, UserSignUpRequestSchema } from "@/schemas/user";
import { hashPassword, verifyPassword } from "@/utils/crypto";
import { generateAccessToken } from "@/utils/token";

export default class AuthenticationService extends Service {
  public constructor(private readonly userRepository: UserRepository) {
    super();
  }

  public async signUpUser(data: any) {
    const validationResult = UserSignUpRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.failure("A validation error occurred.");
    }

    const { name, email, password } = validationResult.data;

    const userExists = await this.userRepository.findUserByEmail(email);
    if (userExists) {
      return this.failure("User already exists.");
    }

    const hashedPassword = hashPassword(password);

    let user: any = undefined;

    try {
      user = await this.userRepository.createUser(name, email, hashedPassword);
    } catch (error) {
      return this.failure("An error occurred trying to create user.");
    }

    const accessToken = generateAccessToken(user.id, user.role);

    return this.success({
      id: user.id,
      accessToken: accessToken,
    });
  }

  public async signInUser(data: any) {
    const validationResult = UserSignInRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.failure("A validation error occurred.");
    }

    const { email, password } = validationResult.data;

    let user = await this.userRepository.getUser(email);
    if (!user) {
      return this.failure("User does not exist.");
    }

    const passwordMatches = verifyPassword(password, user.password);
    if (!passwordMatches) {
      return this.failure("Invalid credentials.");
    }

    const accessToken = generateAccessToken(user.id, user.role);

    return this.success({
      id: user.id,
      accessToken: accessToken,
    });
  }
}