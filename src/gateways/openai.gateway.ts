import OpenAI from "openai";

class OpenAIGateway {
  private readonly openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async getCompletion(content: string) {
    const completion = this.openAI.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content }],
    });

    completion.then((result) => console.log(result.choices[0].message));
  }
}

export default new OpenAIGateway();
