import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Question, Result } from '../../common/interfaces/test.interfaces';

import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  questions: Question[];

  @Prop({ required: true })
  results: Result[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
