import { Module } from '@nestjs/common';

import { CommonModule } from '../common/common.module';
import { LangChainModule } from '../lang-chain/lang-chain.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule.forRoot(), LangChainModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
