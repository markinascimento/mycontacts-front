// -> Import da lib externa de client
import axios from 'axios';

import { delay } from '../../utils/delay';

export class HTTPClient{
  private baseURL: string;

  constructor(baseURL: string){
    this.baseURL = baseURL;
  }

  async get (path: string) {
    const { data, statusText } = await axios.get(`${this.baseURL}${path}`);
    await delay(500)

    if(statusText === 'OK') {
      return data;
    }

    return new Error();
  }
}

