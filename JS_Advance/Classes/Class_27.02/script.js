/*
da napravam 3 servisi :
 1.Prvo za aplikacijata - tuka se povikuvaat site funkcii da se izvrshata i 
 2.Data processing  -   tuka se pravat site obrabotki na podatoci
 3.Api service    -     tuka se povicite kon api-to  
 */

function App(){
    this.dataProcessingService = new DataProcessingService();
    this.result = document.getElementById('result');
    this.allCountries = document.getElementById('allCountries');
    this.searchInput = document.getElementById('searchInput');
    this.searchBtn = document.getElementById('searchBtn');
    this.selectionList = document.getElementById('searchSelection');
    this.searchSelection = "0";
    const selections = {
        "0": "search-by-country-name",
        "1": "search-by-capitol"
    }

    this.init = function(){
        this.allCountries.addEventListener('click',()=>{
            this.dataProcessingService.getAllCountries(this.result);
            
        });

        this.searchBtn.addEventListener('click', () => { 
            this.searchBySelection();
        });

        this.searchInput.addEventListener('keyup', (event) => {
            this.searchBySelection();
        });

        this.selectionList.addEventListener('change', (event)=>{
            this.searchSelection = event.target.value;
        });
    }

    this.searchBySelection = function () {
        let name = this.searchInput.value;
        switch (selections[this.searchSelection]) {
            case selections[0]:
                this.dataProcessingService.searchCountriesByName(name, this.result);
                break;
            case selections[1]:
                this.dataProcessingService.searchCountriesByCapitol(name, this.result);
                break;
            default:
                console.log("error");
                break;
        };
    }
}

function DataProcessingService (){
    this.apiService = new ApiService();

    this.getAllCountries = function (element){
        this.apiService.getAll ()
            .then(response => response.json())
            .then(data => this.mapCountries(data))
            .then(countries => {
                let someCountries = countries.slice(0, 16);
                this.showCountries(someCountries, element)
            })

            .catch(error => {
                console.log(error)
            })
            
        }
    
    this.mapCountries = function(countries) {
        return new Promise((resolve, reject) =>{
            if(!countries || countries.length === 0) {
                reject("Something went wrong!");
            }
            let mapedCountries = countries.map(country => {
                return {
                    name: country.name,
                    capital: country.capital,
                    flag: country.flag,
                    area: country.area,
                    population: country.population
                }
            }); 
            resolve(mapedCountries);
        });
    };

    this.showCountries = function (countries, element){
        element.innerHTML = "";
        let html = `<div class="row">`
        for(let country of countries) {
            let col = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${country.flag}" class="card-img-top" height="200" alt="The national flag of ${country.name}">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text">
                        Capital: ${country.capital},
                        Area: ${country.area},
                        Population: ${country.population}
                        </p>
                    </div>
                </div>
            </div>`;
            html += col;
        }
        html += "</div>";
        element.innerHTML = html;
    }

    this.searchCountriesByName = function(name, element) {
        this.apiService.searchByName(name)
            .then(data => this.mapCountries(data))
            .then(countries => this.showCountries(countries, element))
            .catch(error =>{
                console.log(error);
            });
    }

    
    this.searchCountriesByCapitol = function (capitol, element) {
        this.apiService.searchByCapitol(capitol)
            .then(data => this.mapCountries(data))
            .then(countries => this.showCountries (countries, element))
            .catch(error => {
                console.log(error)
            });
    }
}

function ApiService(){
    this.baseUrl = "https://restcountries.eu/rest/v2/",
    
    this.getAll = () => {
        let url = `${this.baseUrl}all`
        return fetch(url);
    }

    this.searchByName = function(name){
        let url = `${this.baseUrl}name/${name}`;
        return new Promise ((resolve, reject) =>{
            $.ajax({
                url:url,
                success: function(response) {
                    resolve(response)
                },
                error: function (error) {
                    reject(error);
                }
            })
        });
    };

    this.searchByCapitol = function (capitol) {
        let url = `${this.baseUrl}capital/${capitol}`;
        return new Promise ((resolve, reject) =>{
            $.ajax({
                url:url,
                success: function (response){
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })
        });
    };
}


let app = new App();
app.init();
console.log(app.selectionList.value);
