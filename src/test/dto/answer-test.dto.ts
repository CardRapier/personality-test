import { IsArray, IsNotEmpty, IsPositive, Max, Min } from 'class-validator';

export class AnswerTestDto {
  @IsArray()
  @IsNotEmpty()
  @IsPositive({ each: true })
  @Min(1, { each: true })
  @Max(4, { each: true })
  points: number[];
}
