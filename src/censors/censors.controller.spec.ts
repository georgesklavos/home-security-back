import { Test, TestingModule } from '@nestjs/testing';
import { CensorsController } from './censors.controller';

describe('CensorsController', () => {
  let controller: CensorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CensorsController],
    }).compile();

    controller = module.get<CensorsController>(CensorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
