let allBeers = document.getElementById("allBeers");
let result = document.getElementById("result");
let randomBeer = document.getElementById("randomBeer");

const dataProcessingService = new DataProcessingService();

const controller = 
{
    init:function ()
    {
        allBeers.addEventListener("click", () => 
        {
            dataProcessingService.getAllBeers()
            .then(data => view.showAllBeers(data, result));
            //da se pojavi sorting so drop down menu
            //da se pojavi result per page - toa posledno
            //kopce next
            //event listener za sekoe pivo full details.
        });
        
        randomBeer.addEventListener("click", async () =>
        {
            await dataProcessingService.getRandomBeer() // async / await - primena, prednosti , negativnosti
            .then(data => view.showFullDetails(data, result));
        })

        //show full details of clicked beer
        result.addEventListener("click", (event) => 
        {
            const id = event.target.id;
            dataProcessingService.getBeerById(id)
            .then(data => view.showFullDetails(data, result))
        })
    }
}





