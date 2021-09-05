const apiCalls =
{
    url:"https://api.punkapi.com/v2/beers",
    getAllData: async function ()
    {
        return await fetch(this.url)
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

    getElementById(id)
    {
        const url3 = this.url + `${id}`
        return fetch(url3);
    }



}