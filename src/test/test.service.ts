import { dragon_test } from './dragon_test';
import { TestDocument } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Test } from './schemas/test.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//TODO: Validate IDs are object ids
@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}
  async create(createTestDto: CreateTestDto) {
    const exists = await this.findOneByName(createTestDto.name);
    if (exists)
      throw new BadRequestException(
        `Test with this name already exists ${exists._id}`,
      );
    const createdTest = new this.testModel(createTestDto);
    return await createdTest.save();
  }

  async findOne(id: string) {
    return this.testModel.findById(id);
  }

  async findOneByName(name: string) {
    return this.testModel.findOne({ name });
  }

  async remove(id: string) {
    return this.testModel.findByIdAndDelete(id);
  }

  async calculateResult(id: number) {
    return `This action calculates a #${id} test result`;
  }

  async createDragonTest() {
    const dragonTest = new this.testModel(dragon_test);
    return this.create(dragonTest);
  }
}
