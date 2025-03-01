import OpenAI from "openai";

class OpenAIGateway {
  private readonly openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async getCompletion(content: []) {
    try {
      const completion = await this.openAI.chat.completions.create({
        model: "gpt-4",
        store: true,
        messages: [
          {
            role: "user",
            content: `Avalie neste array de varios estabelecimentos pesquisados 
            na internet quais deles sao os que possuem infraestrutura para trabalhar 
            la remotamente com laptop. Pela propriedade title e content de cada 
            objeto do array voce pode avaliar. Array: ${JSON.stringify(
              content
            )}`,
          },
        ],
      });

      return completion.choices[0].message;
    } catch (error) {
      console.error("Error getting completion from OpenAI: ", error);
      return null;
    }
  }
}

export default new OpenAIGateway();
