require("dotenv").config();
import express from "express";
import WorkplacesRoutes from "./modules/workplaces/use-cases/get-workplaces/routes/workplaces.routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeServer();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.use("/workplaces", WorkplacesRoutes);
  }

  private initializeServer() {
    const PORT = process.env.PORT || 3000;

    this.app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

export default new App().app;
