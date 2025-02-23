import SearXNGGateway from "../../../gateways/searxng.gateway";

class GetWorkplacesService {
  async handle(city: any, state: any) {
    const results = await SearXNGGateway.search(city, state);

    if (results.length === 0) return;
  }
}

export default new GetWorkplacesService();
