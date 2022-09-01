import cors from "cors";
import express, { Express } from "express";
import session from "express-session";

import { errorHandler, notFoundHandler } from "@middlewares/error.middleware";

import { routes } from "@routes/index.routes";

export function createApp(): Express {
  const app = express();

  // Enable parsing Middlewares for JSON and URL encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.set("json spaces", 2);

  // Enable CORS
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    }),
  );

  // Enable session
  app.use(
    session({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 1, // 1 day
      },
    }),
  );

  // Enable routes
  app.use("/api", routes);

  // Enable error handlers
  app.use(errorHandler);
  app.use(notFoundHandler);

  return app;
}
