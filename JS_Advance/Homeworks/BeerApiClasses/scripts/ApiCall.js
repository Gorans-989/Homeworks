const apiCalls =
{
    url:"https://api.punkapi.com/v2/beers",
    getAllData: async function (pageNumber, perPage)
    {
        const url0 = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${perPage}`;
        return await fetch(url0)
    },

    getRandomElement()
    {
        const url2 = this.url + "/random";
        return new Promise( (resolve, reject) =>
        {
            $.ajax(
                {
                    url: url2,
                    success: response => resolve(response),
                    error: error => reject(error)
                })
        });
    },

    getElementById: async (id) =>
    {
        //this.url + `/${id}`;
        const url3 = `https://api.punkapi.com/v2/beers/${id}`;
        return await fetch(url3);
    },

    getElementByName: async (name) => 
    {   // mi dava error. da vidime sto e.
        const parametar = !name ? "" : `?beer_name=${name}`;
        const url4 = `https://api.punkapi.com/v2/beers${parametar}`;
        return await fetch(url4);
    },
    
    // getBeerPerPage(pageNumber, perPage) {
    //     url5 = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${perPage}`
    //     return new Promise ((resolve,reject) => {


    //     });

    // }
}