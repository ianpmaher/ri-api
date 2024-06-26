require("dotenv").config();
// Yelp API https://www.yelp.com/developers/v3/manage_app?app_created=True
let accessToken;
const clientId = process.env.YELP_CLIENT_ID;
const secret = process.env.YELP_SECRET;

const Yelp = {
    getAccessToken: function () {
        if (accessToken) {
            return new Promise((resolve) => resolve(accessToken));
        }
        // We will make a request to the /token endpoint of the Yelp API and pass
        // in our client ID and secret to obtain our access token.
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
            {
                method: "POST",
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                accessToken = jsonResponse.access_token;
            });
    },
    search: function (term, location, sortBy) {
        return Yelp.getAccessToken().then(() => {
            // To retrieve businesses, you'll have to hit the /businesses endpoint of the Yelp API.
            return fetch(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((jsonResponse) => {
                    if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map((business) => {
                            // id
                            // imageSrc
                            // name
                            // address
                            // city
                            // state
                            // zipCode
                            // category
                            // rating
                            // reviewCount
                            console.log(business);
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count,
                            };
                        });
                    }
                });
        });
    },
};

module.exports = Yelp;

// console.log("Yelp.js loaded");
// const testSearch = Yelp.search("pizza", "Providence", "best_match");

// testSearch.then((businesses) => {
//     console.log(businesses);
// });
