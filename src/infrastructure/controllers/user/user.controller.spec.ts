import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserUsecaseModule } from '../../../use-cases/user/user.module';
import { DataServicesModule } from '../../services/data-services/data-service.module';
import { UserUsecase } from '../../../use-cases/user/user.usecase';

describe('User controller', () => {
  let userController: UserController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      // imports: [DataServicesModule, UserUsecaseModule],
      controllers: [UserController],
      providers: [UserUsecase],
    }).compile();
    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController.getAll()).toBeDefined();
  });
});
