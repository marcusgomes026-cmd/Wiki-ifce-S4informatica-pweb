import express, { type Request, type Response } from "express";

const app = express();

app.use(express.json());

app.get("/task", (_req: Request, res: Response) => {
  return res.status(200).json({
    tasks: [{ id: 1, name: "Lavar os pratos", done: false }],
  });
});

export default app;
