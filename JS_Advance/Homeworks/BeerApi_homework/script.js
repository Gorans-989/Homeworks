function App (){
    this.dataProcessingService = new DataProcessingService();
    
    this.beerBar = document.getElementById('beerBar');
    this.allBeers = document.getElementById('allBeers');
    this.randomBeer = document.getElementById('randomBeer');
    this.searchInput = document.getElementById('searchInput');
    this.searchBtn = document.getElementById('searchBtn');
    this.result = document.getElementById('result');
    this.nextBtn = document.getElementById('nextBtn');
    this.prevBtn = document.getElementById('previousBtn');
    this.selectionSizePerPage = document.getElementById('resultsPerPage');
    this.sortBy = document.getElementById('sortBy');

    this.beersPerPage = 25;
    this.currentPage = 1;
    this.maxPage = 0;
    this.sortOption = "";
    

    this.init = function (){
        this.allBeers.addEventListener('click', () => {
            this.currentPage = 1;
            this.sortOption = "name-asc";
            this.maxPage = Math.ceil(325 / this.beersPerPage);
            this.dataProcessingService.getAllbeers(this.currentPage, this.result,this.beersPerPage, this.sortOption);
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage, this.maxPage);
            this.showSortingAndPerPage();
        })

        this.beerBar.addEventListener('click', () => {
            this.removeBtns();
            this.hideSortingAndPerPage();
            this.dataProcessingService.showBeerBar(this.result);

        })

        this.randomBeer.addEventListener('click', () => {
            this.removeBtns();
            this.hideSortingAndPerPage();
            this.dataProcessingService.getRandomBeer(this.result);
        })
        
        this.searchBtn.addEventListener('click', () => {
            this.removeBtns();
            this.hideSortingAndPerPage();
            let searchName = this.searchInput.value;
            this.dataProcessingService.searchByBeerName(searchName, this.result);
        })

        this.nextBtn.addEventListener('click',() => {
            this.currentPage += 1;
            this.maxPage = Math.ceil(325 / this.beersPerPage);
            this.dataProcessingService.getAllbeers(this.currentPage , this.result,this.beersPerPage, this.sortOption)
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage, this.maxPage);    
        })
    

        this.prevBtn.addEventListener('click', () => {
            this.currentPage -= 1;
            this.maxPage = Math.ceil(325 / this.beersPerPage);
            this.dataProcessingService.getAllbeers(this.currentPage , this.result, this.beersPerPage, this.sortOption)
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage, this.maxPage); 
        })

        //function to show more details of a single beer
        this.result.addEventListener('click', (event) => {
            this.removeBtns();
            this.hideSortingAndPerPage();
            let id = event.target.id
            this.dataProcessingService.getBeerById(id, this.result);
        })
        //how many beer per page
        this.selectionSizePerPage.addEventListener('change', (event) => {
            this.beersPerPage = event.target.value;
            this.maxPage = Math.ceil(325 / this.beersPerPage);
            this.dataProcessingService.getAllbeers(this.currentPage, this.result, this.beersPerPage, this.sortOption);
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage, this.maxPage);
        })

        this.sortBy.addEventListener('change', (event) => {
            this.sortOption = event.target.value;
            console.log(this.sortOption);
            this.dataProcessingService.getAllbeers(this.currentPage, this.result, this.beersPerPage, this.sortOption);
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage, this.maxPage);
        })

    }

    //not needed in init function
        this.removeBtns = () => {
            this.nextBtn.style.display = "none";
            this.prevBtn.style.display = "none";
        }; 

        this.showSortingAndPerPage = function () {
            this.selectionSizePerPage.style.display = "block";
            this.sortBy.style.display = "block";
        };

        this.hideSortingAndPerPage = function () {
            this.selectionSizePerPage.style.display = "none";
            this.sortBy.style.display = "none";
        };    
}

function DataProcessingService () {
    this.apicalls = new ApiCalls();

    this.getAllbeers = function(page, element, resultsPerPage, sortBy) {
        this.apicalls.getDataFromApi(page,resultsPerPage)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => this.sortingScenarios(beers, sortBy))
        .then(beers => this.showAllBeers(beers,element))
        .catch(error => console.log(error))
    }

    this.mapBeers = function(beers) {
        return new Promise ((resolve, reject) =>{
            if(!beers || beers.length === 0) {
                reject('Something went wrong');
            }
            let mapedBeers = beers.map(beer => {
                return {
                id: beer.id,
                name: beer.name,
                alcohol: beer.abv,
                bitterness: beer.ibu,
                productionDate: beer.first_brewed,
                img: beer.image_url,
                tagline: beer.tagline,
                description: beer.description,
                food_pairing: beer.food_pairing
            }
            });
            resolve(mapedBeers);
        });
    }       
    
    this.showAllBeers = function (beerArray, element) {
        element.innerHTML = "";
        let html = `<div class="row">`;

        for (let beer of beerArray) {
            let col = `<div class="col-md-3">
                <div class="card" style="width: 18rem;" id="${beer.id}">
                    <img src="${beer.img}" height="230" class="card-img-top"  alt="${beer.name} beer picture">
                    <div class="card-body">
                        <h5 class="card-title">${beer.name}</h5>
                        <p class="card-text">
                            <b>Alcohol</b>: ${beer.alcohol}%,
                            <b>Bitterness</b>: ${beer.bitterness} ibu,
                            <b>Production date</b>: ${beer.productionDate}
                            <a href="#" class="btn btn-primary" id="${beer.id}">More details</a>
                        </p>
                    </div>
                </div>
            </div>`;
            html += col;
        }

        html += "</div>";
        element.innerHTML = html;
    }

    this.showBeerBar = function (element){
        element.innerHTML = "";
        element.innerHTML = `
        <div class="container"  id="result">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./img/beer_bar_3.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./img/beer_bar_2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./img/beer_bar_1.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>`
    }

    this.getRandomBeer = function (element) {
        this.apicalls.callRandomBeer()
        .then(data => this.mapBeers(data))
        .then(beer => this.showFullDetails(beer, element))
        .catch(error => console.log(error))
    }
    
    this.getBeerById = function (id, element) {
        this.apicalls.callBeerById(id)
        .then(data => this.mapBeers(data))
        .then(beer => this.showFullDetails(beer, element))
        .catch(error => console.log(error))
    }

    this.showFullDetails = function(beerArray, element) {
        element.innerHTML = "";
        for (let beer of beerArray) {
        element.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${beer.img}" height="230" class="card-img-top" alt="${beer.name} beer picture">
                        <div class="card-body">
                            <h5 class="card-title">${beer.name}</h5>
                            <p class="card-text">
                                <b>Tagline</b>: ${beer.tagline}</br>
                                <b>Description</b>: ${beer.description}<br/>
                                <b>Alcohol</b>: ${beer.alcohol}%<br/>
                                <b>Bitterness</b>: ${beer.bitterness} ibu<br/>
                                <b>Production date</b>: ${beer.productionDate}<br/>
                                <b>Food pairing</b>: ${beer.food_pairing}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    this.searchByBeerName = async function (name, element) {
        let data = await this.apicalls.searchByName(name)
        let beer = await this.mapBeers(data)
        this.showAllBeers(beer, element)
        
    }

    this.showButtons = function (nextBtn, prevBtn, page, maxPage){
        if(page === maxPage) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }

        if(page === 1) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }   

    }

    // ja povikav posle maperot i mi vrati error. mislev deka mora da imam promise.
    /*this.sortByChosenOption = function (beers, sortBy) {
        return new Promise ((resolve, reject) => {
            if(!beers || beers.length === 0) {
                reject('Something went wrong');
            }
            // let sortedBeers = beers.sort((beer1, beer2) =>   
            // // sort by name - Ascending         
            //     // if (beer1.name < beer2.name) {
            //     //     return -1;
            //     // }
            //     // if (beer1.name > beer2.name) {
            //     //     return 1;
            //     // }
            //     // return 0;

            // // sort by  - Descending
            // // if (beer1.id > beer2.id) {
            // //     return -1;
            // // }
            // // if (beer1.id < beer2.id) {
            // //     return 1;
            // // }
            // // return 0;

            // //Short version - without curly brackets
            //     //is this ok?
            // //beer1.name > beer2.name? -1:1

            // //Short version - with curly brackets
            // // {return (beer1.name > beer2.name) ? -1:1}
            // beer1.name > beer2.name? -1:1 
            // );

            
            let sortedBeers = this.dataProcessingService.sortingScenarios(beers, sortBy);
            console.log(sortedBeers);
            resolve(sortedBeers);
        })
    }*/
        //sortingot za date treba da go sredam
    this.sortingScenarios = function (beers, sortBy) {
            switch (sortBy) {
                case "name-asc":
                    return beers.sort((beer1, beer2) => beer1.name > beer2.name? 1:-1);
                case "name-dsc":
                    return beers.sort((beer1, beer2) => beer1.name > beer2.name? -1:1);
                case "alcohol-asc":
                    return beers.sort((beer1, beer2) => beer1.alcohol > beer2.alcohol? 1:-1);
                case "alcohol-dsc":
                    return beers.sort((beer1, beer2) => beer1.alcohol > beer2.alcohol? -1:1);
                case "bitternes-asc":
                    return beers.sort((beer1, beer2) => beer1.bitterness > beer2.bitterness? 1:-1);
                case "bitternes-dsc":
                    return beers.sort((beer1, beer2) => beer1.bitterness > beer2.bitterness? -1:1);
                case "date-asc":
                    return beers.sort((beer1, beer2) => beer1.productionDate > beer2.productionDate? 1:-1);
                case "date-dsc":
                    return beers.sort((beer1, beer2) => beer1.productionDate > beer2.productionDate? -1:1);
                default:
                    throw new Error("Not available sort");
            }
        }
}


function ApiCalls (){
    this.baseUrl = "https://api.punkapi.com/v2/beers/";

    this.getDataFromApi = function(page,resultsPerPage) {
       let url = `${this.baseUrl}?page=${page}&per_page=${resultsPerPage}`;
       return fetch(url);
    }

    this.callRandomBeer = function() {
        let url = `${this.baseUrl}random`;
        return new Promise ((resolve, reject)=> {
            $.ajax({
                url:url,
                success: function(response) {
                    resolve(response);
                },
                error: function(error) {
                    reject(error);
                }
            })
        })
    }

    this.searchByName = async function (name){
        let url = `${this.baseUrl}?beer_name=${name}`;
        let response = await fetch(url);
        return await response.json();
    }

    this.callBeerById = function (id) {
        let url = `${this.baseUrl}?ids=${id}`;
        return new Promise ((resolve, reject) => {
            $.ajax({
                url:url,
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })
        })
    }

}


$(document).ready(function () {
    let app = new App();
    app.init();
});