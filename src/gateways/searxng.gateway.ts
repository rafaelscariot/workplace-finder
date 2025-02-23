class SearXNGGateway {
  private readonly BASE_URL = process.env.SEARXNG_URL || "localhost:8080";

  async search(city: string, state: string) {
    const query = `cafés, coworkings, padarias, starbucks em ${city} - ${state}`;

    const response = await fetch(`${this.BASE_URL}/?q=${query}&format=json`);

    const data = await response.json();

    return data;
  }
}

export default new SearXNGGateway();
