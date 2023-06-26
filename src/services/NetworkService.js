import axios from "axios";

class NetworkService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    try {
      return await axios.get(`${this.baseURL}${path}`);
    } catch (e) {
      throw Error(e.message);
    }
  }

  async post(path, data) {
    throw Error("Unimplemented Error");
  }

  async put(path, data) {
    throw Error("Unimplemented Error");
  }

  async delete(path) {
    throw Error("Unimplemented Error");
  }
}

export default NetworkService;
