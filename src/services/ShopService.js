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

  getOneCategory(cat) {
    return axios.get(baseUrl + "/products/category/" + cat);
  }
}
const shopService = new ShopService();
export default shopService;
