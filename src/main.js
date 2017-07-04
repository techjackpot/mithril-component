import "styles/main.scss"
import m from "mithril"

import UserView from "./views/UserView";
import ProductView from "./views/ProductView";

m.mount(document.getElementById('users-list-wrapper'), UserView);
m.mount(document.getElementById('products-list-wrapper'), ProductView);