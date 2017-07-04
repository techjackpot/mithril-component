// src/views/UserView.js
import m from "mithril";
import UserFeed from "../models/UserFeed";

module.exports = {
	oninit: UserFeed.loadUsers,
    view: function() {
		return m(".users-list", UserFeed.users.map(function(user) {
			let bg = "";
			if (user.media[0] && user.media[0].hasOwnProperty("url"))
				bg = user.media[0].url;
            return m(".user-item", {class:"fl w-50 pa2"}, [
            	m(".user-pane", { class: 'br3 br--top cover', style: bg?'background-image:url("'+bg+'")':'' }, [
            		m(".user-pane-description", {class: 'pa3'}, user.description)
            	]),
            	m(".user-name-wrapper", { class: 'pa2 br3 br--bottom'}, [
                    m(".user-name", {}, user.owner.username)
                ]),
            ])
        }))
    }
}