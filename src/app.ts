import express from "express";
import controller from "./context";

const app = express().use(controller);

export default app;