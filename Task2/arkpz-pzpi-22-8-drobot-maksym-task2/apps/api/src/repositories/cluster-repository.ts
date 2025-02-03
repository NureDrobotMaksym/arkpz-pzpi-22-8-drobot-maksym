import Repository from "@/repository";

export default class ClusterRepository extends Repository {
  createCluster(name: string, location: string, description: string) {
    return this.database`
        insert into clusters 
            (name, location, description) 
        values 
            (${name}, ${location}, ${description})
    `;
  }

  async updateCluster(
    id: number,
    name: string,
    location: string,
    description: string,
    operational: boolean,
  ) {
    return this.database`
        update clusters
        set name        = ${name},
            location    = ${location},
            description = ${description},
            operational = ${operational}
        where id = ${id}
    `;
  }

  async deleteCluster(id: number) {
    return this.database`
        delete
        from clusters
        where id = ${id}
    `;
  }

  async findClusterById(id: number) {
    const response = await this.database`
      select id from clusters where id = ${id}
    `;

    return response.length > 0;
  }

  async getAllClusters() {
    return this.database`
      select * from clusters
    `;
  }
}
