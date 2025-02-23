require("dotenv").config();
import axios from "axios";

class SearXNGGateway {
  private readonly BASE_URL =
    process.env.SEARXNG_URL || "http://localhost:8080";

  async search(city: string, state: string): Promise<[]> {
    const query = `cafés, coworkings, padarias, starbucks em ${city} - ${state}`;
    const url = `${this.BASE_URL}/?q=${query}&format=json`;

    try {
      const {
        data: { results },
      } = (await axios.get(url)) as { data: { results: [] } };

      return results;
    } catch (error) {
      console.error("Error searching in SearXNG: ", error);
      return [];
    }
  }
}

export default new SearXNGGateway();
