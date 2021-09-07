let allBeers = document.getElementById("allBeers");
let result = document.getElementById("result");
let randomBeer = document.getElementById("randomBeer");
let homePage = document.getElementById("beerBar");
let sortingBtn = document.getElementById("sortBy");
let resultsPerPage = document.getElementById("resultsPerPage");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let currentPage = 1;
let perPage = 25;
let maxPage = Math.ceil(325 / perPage);
let sortBy = "";

//325 elements in array
const elements = {
    // dali e podobro da bidat spakuvani vo objekt ili da bidat nadvor vo skriptata?
    previousBtn: document.getElementById("previousBtn"),
    nextBtn: document.getElementById("nextBtn")
}
const dataProcessingService = new DataProcessingService();

const controller = 
{
    
    init:function ()
    {
        allBeers.addEventListener("click", async () => 
        {   // so await kopcinjata nema da se pojavat dodeka ne zavrsi funckijata get all beers
            currentPage = 1;
            perPage = 25;
            await dataProcessingService.getAllBeers(currentPage, perPage)
            .then(data => view.showAllBeers(data, result));
            view.showSortingAndResultPerPage(sortingBtn,resultsPerPage);
            view.showNextBtn(elements.nextBtn);
        });
        // show random beer
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
            dataProcessingService.getBeerByName(searchInput.value)
            .then(data => view.showFullDetails(data, result))
            view.removeNextBtn(elements.nextBtn);
            view.removePreviousBtn(elements.previousBtn);
            view.removeSortingAndResultPerPage(sortingBtn, resultsPerPage);
            searchInput.value = "";
        });
        //nextButton
        elements.nextBtn.addEventListener("click", async () => {
            currentPage++;
            if(currentPage === maxPage) {
                elements.nextBtn.style.display = "none";
            }
            await dataProcessingService.getAllBeers(currentPage, perPage)
            .then(data => view.showAllBeers(data, result));
            view.showPrevBtn(elements.previousBtn);
        });
        //previous button
        elements.previousBtn.addEventListener("click", async () => {
            currentPage--;
            if(currentPage === 1){
                elements.previousBtn.style.display = "none";
            }
            await dataProcessingService.getAllBeers(currentPage, perPage)
            .then(data => view.showAllBeers(data, result));
        });
        // result per page
        resultsPerPage.addEventListener("change", async (event) => {
            perPage = event.target.value;
            await dataProcessingService.getAllBeers(currentPage, perPage)
            .then(data => view.showAllBeers(data, result));
            // kako da go iscistam inputot;
        });
        //sorting data
        sortingBtn.addEventListener("change", async(event) => {
            sortBy = event.target.value;
            await dataProcessingService.getAllBeers(currentPage, perPage)
            .then(data => dataProcessingService.sortScenario(data, sortBy))
            .then(sortedData => view.showAllBeers(sortedData, result));
            
        });
    }
}