import { Router, Request, Response } from "express";
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
    await GetWorkplacesService.handle();
    res.json({ ok: true });
  }
}

export default new WorkplacesRoutes().router;
