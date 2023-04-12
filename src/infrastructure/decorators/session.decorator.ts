import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ISession = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { session } = ctx.switchToHttp().getRequest();
    return data ? (session === null ? void 0 : session[data]) : session;
  },
);
