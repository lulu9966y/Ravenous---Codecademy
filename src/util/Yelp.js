const apiKey =
  "tAs6SSn05lEbDAUSbndR_V-767brfOn0JHG9M0yEPkBdgK3FAmwVf2iY7ebZKOOJgOC4EDOsBkLWmGtrjDNiM81_H_OsCjAbm0nLNLEP0XOae9S7-D8edc9yZv2HXHYx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
              Authorization:`Bearer ${apiKey}`
          }
      }
    ).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
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
                };
            }); 
        }
    });
  }
};

export default Yelp;