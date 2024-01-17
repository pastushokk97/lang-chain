import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LANG_CHAIN_API } from '../../../constants/routes';
import { LANG_CHAIN } from '../../../constants/tags';
import { GetLangChainResponseDto } from '../dto/get-lang-chain-response.dto';
import { LangChainService } from '../services/lang-chain.service';
import { GenerateResponseDocumentation } from '../swagger/generate-response-documentation.decorator';

@ApiTags(LANG_CHAIN)
@Controller(LANG_CHAIN_API)
export class LangChainController {
  constructor(private readonly langChain: LangChainService) {}

  @GenerateResponseDocumentation()
  @Get('process-text')
  generateResponse(@Query() { message }: GetLangChainResponseDto): {
    data: string;
  } {
    return this.langChain.generateResponse(message);
  }
}
