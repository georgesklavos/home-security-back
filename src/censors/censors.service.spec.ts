import { Test, TestingModule } from '@nestjs/testing';
import { CensorsService } from './censors.service';

describe('CensorsService', () => {
  let service: CensorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CensorsService],
    }).compile();

    service = module.get<CensorsService>(CensorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
