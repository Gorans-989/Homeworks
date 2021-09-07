class view 
{
    static showAllBeers = (beerArray, element) =>
    {
        element.innerHTML = "";
        let html = `<div class="row">`;
    
        for (let beer of beerArray) {
            let col = `<div class="col-md-3">
                <div class="card" style="width: 18rem;" id="${beer.id}">
                    <img src="${beer.img}" height="230" class="card-img-top"  alt="${beer.name} beer picture">
                    <div class="card-body">
                        <h5 class="card-title">${beer.name}</h5>
                        <p class="card-text">
                            <b>Alcohol</b>: ${beer.abv}%,
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
    };
    
    static showFullDetails = (beerArray, element) => 
    {
        element.innerHTML = "";
        let html = `<div class="row">`;
    
        for (let beer of beerArray) {
            let col = `<div class="col-md-3">
                <div class="card" style="width: 18rem;" id="${beer.id}">
                    <img src="${beer.img}" height="230" class="card-img-top"  alt="${beer.name} beer picture">
                    <div class="card-body">
                        <h5 class="card-title">${beer.name}</h5>
                            <p class="card-text">
                            <b>Tagline</b>: ${beer.tagLine}</br>
                            <b>Description</b>: ${beer.description}<br/>
                            <b>Alcohol</b>: ${beer.abv}%<br/>
                            <b>Bitterness</b>: ${beer.bitterness} ibu<br/>
                            <b>Production date</b>: ${beer.productionDate}<br/>
                            <b>Food pairing</b>: ${beer.food_pairing}
                        </p>
                    </div>
                </div>
            </div>`;
            html += col;
        }
    
        html += "</div>";
        element.innerHTML = html;
    };
    
    static homePage = (element) => 
    {
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
            </div>
        `
    };
    static showSortingAndResultPerPage = (sorting, resultsPerPage) => 
    {
        sorting.style.display = "block";
        resultsPerPage.style.display = "block";
        
    }
    static removeSortingAndResultPerPage = (sorting, resultsPerPage) => 
    {
        sorting.style.display = "none";
        resultsPerPage.style.display = "none";
    }
    static showNextBtn = (element) => {element.style.display = "block";};
    static showPrevBtn = (element) => {element.style.display = "block";};
    static removeNextBtn = element => {element.style.display = "none";};
    static removePreviousBtn = element => {element.style.display = "none";};

    // static showRemove = function (nextBtn, prevBtn, page, maxPage){
    //     if(page === maxPage) {
    //         nextBtn.style.display = "none";
    //     } else {
    //         nextBtn.style.display = "block";
    //     }

    //     if(page === 1) {
    //         prevBtn.style.display = "none";
    //     } else {
    //         prevBtn.style.display = "block";
    //     }   

    // }

}

