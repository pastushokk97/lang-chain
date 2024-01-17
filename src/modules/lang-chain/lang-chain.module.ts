import { Module } from '@nestjs/common';

import { LangChainController } from './controllers/lang-chain.controller';
import { LangChainService } from './services/lang-chain.service';

@Module({
  controllers: [LangChainController],
  providers: [LangChainService],
  exports: [LangChainService],
})
export class LangChainModule {}
