import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

class ShopService {
  getAllProducts() {
    return axios.get(baseUrl + "/products");
  }

  getCartItems() {
    return axios.get(baseUrl + "/carts");
  }
  getcartSingleItem() {
    return axios.get(baseUrl + "/carts/1");
  }

  getCategories() {
    return axios.get(baseUrl + "/products/categories");
  }

  getOneCategory(cat) {
    return axios.get(baseUrl + "/products/category/" + cat);
  }

  getSingleProduct(prodId) {
    return axios.get(baseUrl + "/products/" + prodId);
  }
}

export default new ShopService();
