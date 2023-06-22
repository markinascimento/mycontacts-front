// -> Import da lib externa de client
import axios from 'axios';

export class HTTPClient{
  private baseURL: string;

  constructor(baseURL: string){
    this.baseURL = baseURL;
  }

  async get (path: string) {
    const { data, statusText } = await axios.get(`${this.baseURL}${path}`);

    if(statusText === 'OK') {
      return data;
    }

    return new Error();
  }
}

