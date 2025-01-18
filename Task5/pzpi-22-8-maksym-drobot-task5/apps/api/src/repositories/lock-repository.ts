import Repository from "@/repository";

export default class LockRepository extends Repository {
  async createLock(name: string, cluster_id: number) {
    return this.database`
        insert into locks (name, cluster_id)
        values (${name}, ${cluster_id})
        returning id
    `;
  }

  async updateLock(id: number, name: string) {
    return this.database`
        update locks
        set name = ${name}
        where id = ${id}
    `;
  }

  async deleteLock(id: number) {
    return this.database`
        delete
        from locks
        where id = ${id}
    `;
  }

  async findLockById(id: number) {
    const response = await this.database`
        select id
        from locks
        where id = ${id}
    `;

    return response.length > 0;
  }

  async getLockById(id: number) {
    const response = await this.database`
      select * from locks where id = ${id}
    `;

    return response.at(0);
  }

  async getAllLocks(cluster_id: number) {
    return this.database`
      select id, name from locks where cluster_id = ${cluster_id}
    `;
  }
}
