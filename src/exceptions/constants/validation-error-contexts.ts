import { validateErrorContexts } from '../utils/validate-error-contexts';

export const VALIDATION_ERROR_CONTEXT = {
  // Default
  DEFAULT_VALIDATION_ERROR: {
    errorCode: 10000,
    message: 'Validation error happened',
  },

  // Lang Chain
  LANG_CHAIN_MESSAGE_IS_NOT_STRING: {
    errorCode: 10001,
    message: 'Message should be a string',
  },
};

validateErrorContexts(VALIDATION_ERROR_CONTEXT, 'Validation');
