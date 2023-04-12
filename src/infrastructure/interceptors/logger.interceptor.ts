import {
  CallHandler,
  ExecutionContext,
  Injectable,
  LoggerService,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const requestDate = new Date();

    const ip = this.getIP(request);

    this.logger.log(
      `Incoming Request on ${request.path}`,
      `method=${request.method} ip=${ip}`,
    );

    return next.handle().pipe(
      tap((responseBody) => {
        const traceRequest = {
          request,
          response: responseBody,
          requestTime: now,
          requestDate,
          status: responseBody.statusCode,
          ip,
        };
        this.logger.log(
          `End Request for ${request.path}`,
          ` method=${request.method} ip=${ip} duration=${Date.now() - now}ms`,
        );
      }),
    );
  }

  private getIP(request: any): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.connection.remoteAddress;
    }
    return ip.replace('::ffff:', '');
  }
}
