import Repository from "@/repository";

export default class UserRepository extends Repository {
  public async createUser(name: string, email: string, password: string) {
    const user = await this.database`
        insert into users
            (name, email, password)
        values (${name}, ${email}, ${password}) returning "id", "role"
    `;

    return user.at(0);
  }

  public async updateUser(id: number, name: string, description: string | undefined) {
    if (description) {
      return this.database`
        update users
        set name = ${name}, description = ${description}
        where id = ${id}
      `;
    } else {
      return this.database`
        update users
        set name = ${name}
        where id = ${id}
      `;
    }
  }

  public async deleteUser(id: number) {
    return this.database`
        delete
        from users
        where id = ${id}
    `;
  }

  public async findUserByEmail(email: string) {
    const response = await this.database`
        select id
        from users
        where email = ${email}
    `;

    return response.length > 0;
  }

  public async findUserById(id: number) {
    const response = await this.database`
        select id
        from users
        where id = ${id}
    `;

    return response.length > 0;
  }

  public async getAllUsers() {
    return this.database`
        select id, email
        from users
    `;
  }

  public async getUser(email: string) {
    const users = await this.database`
        select id, role, password
        from users
        where email = ${email}
    `;

    return users.at(0);
  }
}
