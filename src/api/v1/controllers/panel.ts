import { Request, Response } from "express";
import { PanelDto } from "../interfaces/dto/panel";
import { Panel } from "../models/panel";

export const createPanel = async (req: Request, res: Response) => {
  const panelRequest: PanelDto = req.body;

  const panel = await Panel.create(panelRequest);

  return res.status(201).json({
    status: 201,
    message: "Bank created successfully",
    panel,
  });
};
