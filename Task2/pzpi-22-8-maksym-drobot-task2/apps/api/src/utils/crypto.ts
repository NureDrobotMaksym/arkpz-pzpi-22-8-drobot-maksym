import bcryptjs from "bcryptjs";

export function hashPassword(password: string) {
  return bcryptjs.hashSync(password);
}

export function verifyPassword(password: string, hash: string) {
  return bcryptjs.compareSync(password, hash);
}