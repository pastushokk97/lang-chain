import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { VALIDATION_ERROR_CONTEXT } from '../../../exceptions';

export class GetLangChainResponseDto {
  @ApiProperty({
    name: 'message',
    type: 'string',
    example: 'Hello',
    required: true,
  })
  @IsString({
    context: VALIDATION_ERROR_CONTEXT.LANG_CHAIN_MESSAGE_IS_NOT_STRING,
  })
  message: string;
}
