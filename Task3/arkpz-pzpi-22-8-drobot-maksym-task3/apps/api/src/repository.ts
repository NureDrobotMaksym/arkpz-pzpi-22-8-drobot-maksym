import postgres from "postgres";

export default abstract class Repository {
  protected readonly database: postgres.Sql;

  public constructor(database: postgres.Sql) {
    this.database = database;
  }
}