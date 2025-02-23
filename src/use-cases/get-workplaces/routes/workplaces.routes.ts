import { Router, Request, Response } from "express";
import { validatesObjects } from "../../../utils/utils";
import GetWorkplacesDto from "../dtos/get-workplace.dto";
import GetWorkplacesService from "../services/get-workplaces.service";

class WorkplacesRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.getWorkplaces);
  }

  private async getWorkplaces(req: Request, res: Response) {
    const { query } = req;

    await validatesObjects(GetWorkplacesDto, query).catch((error) => {
      res.status(400).json(error);
    });

    const { city, state } = query;

    await GetWorkplacesService.handle(city, state);

    res.status(200).json({ ok: true });
  }
}

export default new WorkplacesRoutes().router;
