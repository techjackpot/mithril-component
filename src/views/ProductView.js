// src/views/UserView.js
import m from "mithril";
import ProductFeed from "../models/ProductFeed";

module.exports = {
	view: function() {
		return m(".products-list", ProductFeed.products.map(function(product) {
			return m(".product-item", {class:"fl w-third pa2"}, [
				m(".product-pane", { class: "br3" }, [
					m(".price-tag", { class: "br2 br--right" }, '$'+product.price)
				]),
			])
		}))
	}
}