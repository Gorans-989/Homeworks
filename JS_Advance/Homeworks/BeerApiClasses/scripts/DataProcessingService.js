class DataProcessingService
{
    
    getAllBeers = async ()=> 
    {
       return await apiCalls.getAllData()
       .then(response => response.json())
       .then(data => this.mapBeers(data))
       .catch(error => console.log(error))
    }

    mapBeers(beers) 
    {
        return new Promise((resolve,reject) =>
        {
            if(!beers || beers.length === 0) {
                reject('Something went wrong');
            };
            let mappedBeers = beers.map(beer => new Beer(beer));
            resolve(mappedBeers);
        })

    };

    

    getRandomBeer = async () => 
    {
        return await apiCalls.getRandomElement()
        .then(data => this.mapBeers(data))
        .catch(error => console.log(error)); // dali e potrebno da imam catch tuka. Vo funkcijata getRandomElement imam reject vekje.


    }

   getBeerById = async (id) => 
   {
        return await apiCalls.getElementById(id)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .catch(error => console.log(error))
   }

   getBeerByName = async (name) => 
   {
        return await apiCalls.getElementByName(name)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .catch(error => console.log(error))

   }
}