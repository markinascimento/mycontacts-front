// -> Import da regra de negócio
import { HTTPClient } from './HTTP/HTTPClient';

// -> Import das tipagens
import { ContactDTO } from '../types/ContactDTO';

class ContactsServices {
  httpClient: {
    get: (path: string) => Promise<ContactDTO[]>;
  };

  constructor() {
    this.httpClient = new HTTPClient('http://localhost:3001');
  }

  async listContacts(orderBy: string) {
    return await this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsServices();
