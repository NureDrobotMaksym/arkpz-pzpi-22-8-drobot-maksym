import {
  ClusterCreateRequestSchema,
  ClusterIdSchema,
  ClusterUpdateRequestSchema,
} from "@/schemas/cluster";
import ClusterRepository from "@/repositories/cluster-repository";
import Service from "@/service";

export default class ClusterService extends Service {
  private clusterRepository: ClusterRepository;

  constructor(clusterRepository: ClusterRepository) {
    super();

    this.clusterRepository = clusterRepository;
  }

  async createCluster(data: any) {
    const validationResult = ClusterCreateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const { name, location, description } = validationResult.data;

    const cluster: any = await this.clusterRepository.createCluster(name, location, description);

    return this.success({
      id: cluster.id,
    });
  }

  async updateCluster(id: any, data: any) {
    let validationResult;

    validationResult = ClusterIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    validationResult = ClusterUpdateRequestSchema.safeParse(data);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const clusterExists = await this.clusterRepository.findClusterById(id);
    if (!clusterExists) {
      return this.failure("Cluster does not exist.");
    }

    const { name, location, description, operational } = validationResult.data;

    await this.clusterRepository.updateCluster(id, name, location, description, operational);

    return this.success();
  }

  async deleteCluster(id: any) {
    const validationResult = ClusterIdSchema.safeParse(id);
    if (!validationResult.success) {
      return this.invalid(validationResult.error);
    }

    const clusterExists = await this.clusterRepository.findClusterById(id);
    if (!clusterExists) {
      return this.failure("Cluster does not exist.");
    }

    await this.clusterRepository.deleteCluster(id);

    return this.success();
  }

  async getAllClusters() {
    const clusters = await this.clusterRepository.getAllClusters();

    return this.success(clusters);
  }
}
