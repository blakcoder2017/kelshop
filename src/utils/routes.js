import Home from "@pages/Home/Home";
import Cart from "@pages/Cart/Cart";
import Product from "@pages/Product/Product";
import Products from "@pages/Products/Products";

export const routes = [
    {path: '/', component: Home},
    {path: '/cart/:id', component: Cart},
    {path: '/product/:id', component: Product},
    {path: '/products/:cat', component: Products},
]