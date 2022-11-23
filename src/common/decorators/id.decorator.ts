import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

import { Types } from 'mongoose';

export const IdParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { id } = request.params;
    if (
      Types.ObjectId.isValid(id) &&
      new Types.ObjectId(id).toString() === id
    ) {
      return id;
    } else {
      throw new BadRequestException('Invalid id');
    }
  },
);
