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
    }
    
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
                            <b>Tagline</b>: ${beer.tagline}</br>
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
    }
    

}

