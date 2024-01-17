import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ApiThrowExceptions } from '../../../decorators/throw-exceptions.decorator';
import { VALIDATION_ERROR_CONTEXT } from '../../../exceptions';

const { LANG_CHAIN_MESSAGE_IS_NOT_STRING } = VALIDATION_ERROR_CONTEXT;

const validGeneratedResponse = {
  data: 'Some response',
};
export function GenerateResponseDocumentation() {
  return applyDecorators(
    ApiOperation({
      description: 'Generate response by input',
      summary: 'Generate response',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Response was successfully got',
      content: {
        'application/json': {
          examples: {
            response: {
              value: validGeneratedResponse,
            },
          },
        },
      },
    }),
    ApiThrowExceptions({
      '400': {
        errors: [LANG_CHAIN_MESSAGE_IS_NOT_STRING],
        description:
          'Please, make sure that you follow the contract and pass only valid properties and values',
      },
    }),
  );
}
