// -> Import da regra de negócio
import { HTTPClient } from './HTTP/HTTPClient';

// -> Import das tipagens
import { CategoryDTO } from '../types/CategoryDTO';

class CategoriesServices {
  httpClient: {
    get: (path: string) => Promise<CategoryDTO[]>;
  };

  constructor() {
    this.httpClient = new HTTPClient('http://localhost:3001');
  }

  async listCategories() {
    return await this.httpClient.get('/categories');
  }
}

export default new CategoriesServices();
