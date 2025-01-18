import Service from "@/service";
import { EventCreateRequestSchema, EventIdSchema } from "@/schemas/event";
import EventRepository from "@/repositories/event-repository";
import LockRepository from "@/repositories/lock-repository";
import { LockIdSchema } from "@/schemas/lock";

export default class EventService extends Service {
  private eventRepository: EventRepository;
  private lockRepository: LockRepository;

  constructor(eventRepository: EventRepository, lockRepository: LockRepository) {
    super();

    this.eventRepository = eventRepository;
    this.lockRepository = lockRepository;
  }

  async createEvent(data: any) {
    const validationResult = EventCreateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const { type, lock_id } = validationResult.data;

    const lockExists = await this.lockRepository.findLockById(lock_id);
    if (!lockExists) {
      return this.failure("Lock does not exist.");
    }

    await this.eventRepository.createEvent(type, lock_id);

    return this.success();
  }

  async getEvent(id: any) {
    const validationResult = EventIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const event: any = await this.eventRepository.getEvent(id);
    if (!event) {
      return this.failure("Event does not exist.");
    }

    return this.success(event);
  }

  async getAllEvents(lock_id: any) {
    const validationResult = LockIdSchema.safeParse(lock_id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const lockExists = await this.lockRepository.findLockById(lock_id);
    if (!lockExists) {
      return this.failure("Lock does not exist.");
    }

    const events: any = await this.eventRepository.getAllEvents(lock_id);

    return this.success(events);
  }
}
