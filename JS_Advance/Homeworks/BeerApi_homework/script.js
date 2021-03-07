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

    this.currentPage = 1;
    


    this.init = function (){
        this.allBeers.addEventListener('click', () => {
            this.currentPage = 1;
            this.dataProcessingService.getAllbeers(this.currentPage, this.result);
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage);
        })

        this.beerBar.addEventListener('click', () => {
            this.removeBtns();
            this.dataProcessingService.showBeerBar(this.result);

        })

        this.randomBeer.addEventListener('click', () => {
            this.removeBtns();
            this.dataProcessingService.getRandomBeer(this.result);
             

        })
        
        this.searchBtn.addEventListener('click', () => {
            this.removeBtns();
            let searchName = this.searchInput.value;
            this.dataProcessingService.searchByBeerName(searchName, this.result);
        })

        this.nextBtn.addEventListener('click',() => {
            this.currentPage += 1;
            this.dataProcessingService.getAllbeers(this.currentPage , this.result)
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage);    
        })
    }

        this.prevBtn.addEventListener('click', () => {
            this.currentPage -= 1;
            this.dataProcessingService.getAllbeers(this.currentPage , this.result)
            this.dataProcessingService.showButtons(this.nextBtn, this.prevBtn, this.currentPage); 
        })
    
        this.removeBtns = () => {
            this.nextBtn.style.display = "none";
            this.prevBtn.style.display = "none";
        };
}

function DataProcessingService () {
    this.apicalls = new ApiCalls();

    this.getAllbeers = function(page, element) {
        this.apicalls.getDataFromApi(page)
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => {
            this.showAllBeers(beers,element)
            console.log(beers);
    })
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
                <div class="card" style="width: 18rem;">
                    <img src="${beer.img}" height="150" class="card-img-top" alt="${beer.name} beer picture">
                    <div class="card-body">
                        <h5 class="card-title">${beer.name}</h5>
                        <p class="card-text">
                            <b>Alcohol</b>: ${beer.alcohol}%,
                            <b>Bitterness</b>: ${beer.bitterness} ibu,
                            <b>Production date</b>: ${beer.productionDate}
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
                    <img src="./img/homeScreen.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./img/beersScreen.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./img/moreDeailsScreen.png" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>`
    }

    this.getRandomBeer = function (element) {
        this.apicalls.callRandomBeer()
        .then(data => this.mapBeers(data))
        .then(beer => {
            this.showFullDetails(beer, element);
            console.log(beer)
        })
        .catch(error => console.log(error))
    }

    this.showFullDetails = function(beerArray, element) {
        element.innerHTML = "";
        for (let beer of beerArray) {
        element.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${beer.img}" height="150" class="card-img-top" alt="${beer.name} beer picture">
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

    this.showButtons = function (nextBtn, prevBtn, page){
        if(page === 13) {
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
     
}

function ApiCalls (){
    this.baseUrl = "https://api.punkapi.com/v2/beers/";

    this.getDataFromApi = function(page) {
       let url = `${this.baseUrl}?page=${page}`;
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

}

let app = new App();
app.init();