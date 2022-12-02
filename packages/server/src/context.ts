import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  console.log(req, res)
  return ({ req, res })
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
