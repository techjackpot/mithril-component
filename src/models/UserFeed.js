// src/models/UserFeed.js
import m from "mithril"

var UserFeed = {
    users: [],
	loadUsers: () => {
        return m.request({
            method: "GET",
            url: "https://dev-api.cosmunity.com/v2/Feeds/Posts/all",
            withCredentials: false,
        }).then((result) => {
            UserFeed.users = result.items;
        });
    }
}

module.exports = UserFeed