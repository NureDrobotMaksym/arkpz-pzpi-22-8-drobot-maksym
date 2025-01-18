import Service from "@/service";
import UserRepository from "@/repositories/user-repository";
import { UserIdSchema, UserUpdateRequestSchema } from "@/schemas/user";

export default class UserService extends Service {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    super();

    this.userRepository = userRepository;
  }

  public async updateUser(id: any, data: any) {
    let validationResult;

    validationResult = UserIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.failure("A validation error occurred.");
    }

    validationResult = UserUpdateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.failure("A validation error occurred.");
    }

    let user = await this.userRepository.findUserById(id);
    if (!user) {
      return this.failure("User does not exist.");
    }

    const { name, description } = validationResult.data;

    await this.userRepository.updateUser(id, name, description);

    return this.success();
  }

  public async deleteUser(id: any) {
    const validationResult = UserIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.failure("A validation error occurred.");
    }

    let user = await this.userRepository.findUserById(id);
    if (!user) {
      return this.failure("User does not exist.");
    }

    await this.userRepository.deleteUser(id);

    return this.success();
  }

  public async getAllUsers() {
    let users = await this.userRepository.getAllUsers();

    return this.success(users);
  }
}
