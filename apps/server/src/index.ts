import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { Context, createContext } from "./context";
import morgan from "morgan";

const app = express();

const t = initTRPC.context<Context>().create();
const appRouter = t.router({
  sayHello: t.procedure.query(() => "hello world lyg"),
});
export type AppRouter = typeof appRouter;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(
  "/info",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const PORT = 12306;
app.listen(PORT, () => {
  console.log(`🚀 Server start ${PORT}`);
});
