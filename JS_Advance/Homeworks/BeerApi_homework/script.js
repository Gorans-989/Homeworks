function App (){
    this.dataProcessingService = new DataProcessingService();

    this.beerBar = document.getElementById('beerBar');
    this.allBeers = document.getElementById('allBeers');
    this.randomBeer = document.getElementById('randomBeer');
    this.searchInput = document.getElementById('searchInput');
    this.searchBtn = document.getElementById('searchBtn');
    this.result = document.getElementById('result');

    


    this.init = function (){
        this.allBeers.addEventListener('click', () =>{
            this.dataProcessingService.getAllbeers()
        })

    }
}

function DataProcessingService () {
    this.apicalls = new ApiCalls();

    this.getAllbeers = function() {
        this.apicalls.getDataFromApi()
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(beers => {
        //     let someBeers = beers.slice(0, 25);
        //     this.showAllBeers(someBeers,element)
        // })
        .catch(error => console.log(error))
        }

    this.mapBeers = function(beers) {
        return new Promise ((resolve, reject) =>{
            if(!beers || beers.length === 0) {
                reject('Something went wrong');
            }
            let mapedBeers = beers.map(beer => {
                return {
                name: beer.name,
                alcohol: beer.abv,
                bitterness: beer.ibu,
                productionDate: beer.first_brewed,
                img: beer.image_url
                }
            });
            resolve(mapedBeers);
        });
    }    

    // this.showAllBeers = function (beerArray, element) {
    //     element.innerHTML = "";
    //     let html = `<div class="row">`

    //     for(let beer of beerArray) {
    //         let col = `
    //             <div class="col-md-3">
    //                 <div class="card" style="width: 18rem;">
    //                     <img src=${beer.img} class="card-img-top" alt= picture of ${beer.name}>
    //                     <div class="card-body">
    //                         <h5 class="card-title">${beer.name}</h5>
    //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                     </div>
    //                     <ul class="list-group list-group-flush">
    //                         <li class="list-group-item">${beer.alcohol}%</li>
    //                         <li class="list-group-item">${beer.bitterness} IBU</li>
    //                         <li class="list-group-item">${beer.productionDate}</li>
    //                     </ul>
    //                     <div class="card-body">
    //                         <a href="#" class="card-link">Card link</a>
    //                         <a href="#" class="card-link">Another link</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //         html += col;
    //     }
    //     html += "</div>"
    // }
    
}

function ApiCalls (){
    this.baseUrl = "https://api.punkapi.com/v2/beers/?per_page=80";

    this.getDataFromApi = function() {
       let url = this.baseUrl;
       return fetch(url);
    }


}

let app = new App();
app.init();