import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

class ShopService {
  getAllProducts() {
    return axios.get(baseUrl + "/products");
  }

  getCartItems() {
    return axios.get(baseUrl + "/carts");
  }

  getCategories() {
    return axios.get(baseUrl + "/products/categories");
  }
}

export default new ShopService();
