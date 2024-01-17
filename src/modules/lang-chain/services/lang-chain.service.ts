import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LangChainService {
  private readonly logger = new Logger(LangChainService.name);

  private readonly responses = {
    hello: ['Hello!', 'Hi!', 'How are you doing?'],
    'what is your name': [
      'I call myself as LangChainBot.',
      'My name is LangChainBot.',
    ],
    'what are you doing': [
      'I work as an imitation LangChain.',
      'I answer your questions.',
    ],
    'thank you': ['Not for nothing!', 'I advise!', 'Always on duty.'],
  };

  private readonly defaultResponse = `I am sorry, I didn't get you. Can you try one more time?`;

  generateResponse(message: string): { data: string } {
    try {
      const lowerMessage = message.toLowerCase();

      for (const keyword in this.responses) {
        if (lowerMessage.includes(keyword)) {
          return { data: this.getRandomResponse(this.responses[keyword]) };
        }
      }

      return {
        data: this.defaultResponse,
      };
    } catch (error) {
      this.logger.error(error);

      throw error;
    }
  }

  private getRandomResponse(matchResponses: string[]): string {
    const randomIndex = Math.floor(Math.random() * matchResponses.length);
    return matchResponses[randomIndex];
  }
}
