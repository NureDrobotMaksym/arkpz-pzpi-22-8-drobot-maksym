export default abstract class Service {
  protected failure(message: string, payload?: any) {
    return {
      status: "failure",
      message: message,
      payload: payload
    } as const;
  }

  protected success(payload?: any) {
    return {
      status: "success",
      payload: payload
    } as const;
  }

  protected invalid(payload?: any) {
    return this.failure("A validation error occurred.", payload);
  }
}