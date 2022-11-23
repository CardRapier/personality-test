import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { AnswerTestDto } from './dto/answer-test.dto';
import { IdParam } from 'src/common/decorators/id.decorator';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get(':id')
  async findOne(@IdParam() id: string) {
    return this.testService.findOne(id);
  }

  @Post('createDragon')
  async createDragonTest() {
    return this.testService.createDragonTest();
  }

  @Delete(':id')
  async remove(@IdParam() id: string) {
    return this.testService.remove(id);
  }

  @Post('result/:id')
  async getResult(@IdParam() id: string, @Body() pointsDto: AnswerTestDto) {
    return this.testService.getResult(id, pointsDto);
  }
}
