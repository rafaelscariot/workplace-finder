import { Response } from "express";
import { ErrorsEnum } from "../../../enums/errors.enum";
import OpenAIGateway from "../../../gateways/openai.gateway";
import SearXNGGateway from "../../../gateways/searxng.gateway";

class GetWorkplacesService {
  async handle(city: any, state: any, res: Response) {
    const results = await SearXNGGateway.search(city, state);

    if (results.length === 0) {
      res.status(500).json({ error: ErrorsEnum.INTERNAL_SERVER_ERROR });
    }

    const workplaces = await OpenAIGateway.getCompletion(results);

    if (!workplaces) {
      res.status(500).json({ error: ErrorsEnum.INTERNAL_SERVER_ERROR });
    }

    res.status(200).json(workplaces);
  }
}

export default new GetWorkplacesService();
