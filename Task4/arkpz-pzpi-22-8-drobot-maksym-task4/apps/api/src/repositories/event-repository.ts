import Repository from "@/repository";

export default class EventRepository extends Repository {
  async createEvent(type: string, lock_id: number) {
    return this.database`
      insert into events (type, lock_id) values (${type}, ${lock_id})
    `;
  }

  async getAllEvents(lock_id: number) {
    return this.database`
      select id, type, created_at from events where lock_id = ${lock_id}
    `;
  }

  async getEvent(id: number) {
    const events = await this.database`
      select type, created_at from events where id = ${id}
    `;

    return events.at(0);
  }
}