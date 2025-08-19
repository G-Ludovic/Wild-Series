import type { RequestHandler } from "express";

const theWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

export default { theWelcome };
