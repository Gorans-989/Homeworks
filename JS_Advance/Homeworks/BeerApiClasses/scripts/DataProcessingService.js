class DataProcessingService
{
    getAllBeers = async (pageNumber, perPage)=> 
    {
       return await apiCalls.getAllData(pageNumber, perPage)
       .then(response => response.json())
    //    .then(data0 => console.log(data0))
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
    sortScenario(data, sortOption) {
        switch (sortOption) {
            case "name-asc":
                return data.sort( (beer1, beer2) => beer1.name > beer2.name? 1:-1);
            case "name-dsc":
                return data.sort( (beer1, beer2) => beer1.name > beer2.name? -1:1);
            case "alcohol-asc":
                return data.sort((beer1, beer2) => beer1.abv > beer2.abv? 1:-1);
            case "alcohol-dsc":
                return data.sort((beer1, beer2) => beer1.abv > beer2.abv? -1:1);
            case "bitternes-asc":
                return data.sort((beer1, beer2) => beer1.bitterness > beer2.bitterness? 1:-1);
            case "bitternes-dsc":
                return data.sort((beer1, beer2) => beer1.bitterness > beer2.bitterness? -1:1);
            case "date-asc":
                return data.sort((beer1, beer2) => beer1.productionDate > beer2.productionDate? 1:-1);
            case "date-dsc":
                return data.sort((beer1, beer2) => beer1.productionDate > beer2.productionDate? 1:-1);
            default:
                throw new Error("Not available sort");
        }

    }
}