import express from "express";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { Context, createContext } from "./context";

const app = express();

const t = initTRPC.context<Context>().create();
const appRouter = t.router({
  sayHello: t.procedure.query(() => {
    return {
      message: "hello",
    };
  }),
});
export type AppRouter = typeof appRouter;

app.use(cors);

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const PORT = 12306;
app.listen(PORT, () => {
  console.log(`🚀 Server start ${PORT}`);
});
