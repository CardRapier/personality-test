import {
  Answer,
  Question,
  Result,
  Test,
} from './../../common/interfaces/test.interfaces';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateTestDto implements Test {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsArray()
  @ValidateNested()
  @Type(() => QuestionDto)
  questions: Question[];

  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  @ValidateNested()
  @Type(() => ResultDto)
  results: Result[];
}
class QuestionDto implements Question {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  @ValidateNested()
  @Type(() => AnswerDto)
  answers: Answer[];
}

class AnswerDto implements Answer {
  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsPositive()
  points: number;
}

class ResultDto implements Result {
  @IsPositive()
  value: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
