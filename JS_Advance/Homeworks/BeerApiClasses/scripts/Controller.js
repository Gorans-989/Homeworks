let allBeers = document.getElementById("allBeers");
let result = document.getElementById("result");
let randomBeer = document.getElementById("randomBeer");
let homePage = document.getElementById("beerBar");
let sortingBtn = document.getElementById("sortBy");
let resultsPerPage = document.getElementById("resultsPerPage");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let currentPage = 1;
let maxPage = 0;

const elements = {
    // dali e podobro da bidat spakuvani vo objekt ili da bidat nadvor vo skriptata?
    previousBtn: document.getElementById("previousBtn"),
    nextBtn: document.getElementById("nextBtn")
}

// ja instanciram klasata.
const dataProcessingService = new DataProcessingService();

const controller = 
{
    
    init:function ()
    {
        allBeers.addEventListener("click", async () => 
        {   // so await kopcinjata nema da se pojavat dodeka ne zavrsi funckijata get all beers
            await dataProcessingService.getAllBeers()
            .then(data => view.showAllBeers(data, result));
            view.showSortingAndResultPerPage(sortingBtn,resultsPerPage);
            view.showPrevBtn(elements.previousBtn);
            view.showNextBtn(elements.nextBtn);
            //da se sredi sorting so drop down menu
            //da se sredi result per page - toa posledno
            //da se sredat kopcinjata
        });

        randomBeer.addEventListener("click", async () =>
        {
            await dataProcessingService.getRandomBeer() // async / await - primena, prednosti , negativnosti
            .then(data => view.showFullDetails(data, result));
            view.removeNextBtn(elements.nextBtn);
            view.removePreviousBtn(elements.previousBtn);
            view.removeSortingAndResultPerPage(sortingBtn, resultsPerPage);
        });
        //show full details of clicked beer
        result.addEventListener("click", (event) => 
        {
            // ne funkcionira dobro. da go pogledneme.
            const id = event.target.id;

            dataProcessingService.getBeerById(id) // ako stavam zapirki ili ja povikam vo promenliva mi dava void
            .then(data => view.showFullDetails(data, result));
            view.removeNextBtn(elements.nextBtn);
            view.removePreviousBtn(elements.previousBtn);
            view.removeSortingAndResultPerPage(sortingBtn, resultsPerPage);
        });

        // home page or beer bar
        homePage.addEventListener("click", () => 
        {   
            view.homePage(result);
            view.removeNextBtn(elements.nextBtn);
            view.removePreviousBtn(elements.previousBtn);
            view.removeSortingAndResultPerPage(sortingBtn, resultsPerPage);
        });
        // getBeerByname
        searchBtn.addEventListener("click", () => {
            let searchBar = searchInput.value; 
            dataProcessingService.getBeerByName(searchBar)
            .then(data => view.showFullDetails(data, result))
            view.removeNextBtn(elements.nextBtn);
            view.removePreviousBtn(elements.previousBtn);
            view.removeSortingAndResultPerPage(sortingBtn, resultsPerPage);
            searchInput.value = "";
        })
    }
}