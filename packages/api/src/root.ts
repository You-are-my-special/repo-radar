import { authRouter } from "./router/auth";
import { issueRouter } from "./router/issue";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  issue: issueRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
