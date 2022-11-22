import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.testService.findOne(id);
  }
  @Post('createDragon')
  async createDragonTest() {
    return this.testService.createDragonTest();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.testService.remove(id);
  }

  @Get('getResult/:id')
  async calculateResult(@Param('id') id: string) {
    return this.testService.calculateResult(+id);
  }
}
