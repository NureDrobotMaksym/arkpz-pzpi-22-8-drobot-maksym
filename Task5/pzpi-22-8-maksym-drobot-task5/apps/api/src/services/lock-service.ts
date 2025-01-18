import Service from "@/service";
import LockRepository from "@/repositories/lock-repository";
import ClusterRepository from "@/repositories/cluster-repository";
import {
  LockCreateRequestSchema,
  LockIdSchema,
  LockUpdateRequestSchema,
} from "@/schemas/lock";
import { ClusterIdSchema } from "@/schemas/cluster";

export default class LockService extends Service {
  private lockRepository: LockRepository;
  private clusterRepository: ClusterRepository;

  constructor(lockRepository: LockRepository, clusterRepository: ClusterRepository) {
    super();

    this.lockRepository = lockRepository;
    this.clusterRepository = clusterRepository;
  }

  async createLock(data: any) {
    const validationResult = LockCreateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const { name, cluster_id } = validationResult.data;

    const clusterExists = await this.clusterRepository.findClusterById(cluster_id);
    if (!clusterExists) {
      return this.failure("Cluster does not exist.");
    }

    const lock: any = await this.lockRepository.createLock(name, cluster_id);

    return this.success({
      id: lock.id,
    });
  }

  async updateLock(id: any, data: any) {
    let validationResult;

    validationResult = LockIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    validationResult = LockUpdateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const lockExists = await this.lockRepository.findLockById(id);
    if (!lockExists) {
      return this.failure("Lock does not exist.");
    }

    const { name } = validationResult.data;

    await this.lockRepository.updateLock(id, name);

    return this.success();
  }

  async deleteLock(id: any) {
    const validationResult = LockIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const lockExists = await this.lockRepository.findLockById(id);
    if (!lockExists) {
      return this.failure("Lock does not exist.");
    }

    await this.lockRepository.deleteLock(id);

    return this.success();
  }

  async getLock(id: any) {
    const validationResult = LockIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const lock: any = await this.lockRepository.getLockById(id);
    if (!lock) {
      return this.failure("Lock does not exist.");
    }

    return this.success({
      id: lock.id,
      name: lock.name,
    });
  }

  async getAllLocks(cluster_id: any) {
    const validationResult = ClusterIdSchema.safeParse(cluster_id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const clusterExists = await this.clusterRepository.findClusterById(cluster_id);
    if (!clusterExists) {
      return this.failure("Cluster does not exist.");
    }

    const locks: any = await this.lockRepository.getAllLocks(cluster_id);

    return this.success(locks);
  }
}
