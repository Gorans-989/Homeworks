let result = document.getElementById('result');

function App () {
    this.dataProcess = new DataProcess();


    this.init = function () {
        this.dataProcess.getAllBand(result);
    }
}


function DataProcess () {
    this.callApi = new CallApi();


    this.getAllBand = async function (element) {
        let data = await this.callApi.call()
        console.log(data)
        let sortedData = this.sortBy(data);
        this.printResult(sortedData, element);
    }

    //ova ne mi beshe potrebno.
    this.mapedData = (data) => {
        let mapedBands = data.map(bands =>{
            return {
                name: bands.name,
                isActive: bands.active,
                tags: bands.tags,
                bandMembers: bands.members,
                numberOfAlbums: bands.albums 
            }
        })
        return mapedBands;    
    }

    this.printResult = (data, element) => {
        element.innerHTML = "";
        let i = 1;
        for(let band of data) {
            let row = `
            <tr>
                <th scope="row">${i}</th>
                <td>${band.name}</td>
                <td>${band.active}</td>
                <td>${band.tags.join(", ")}</td>
                <td>${this.filter(band.members)}</td>
                <td>${band.albums.length}</td>
          </tr>`
          i++
          element.innerHTML += row;
        }
    }

    this.filter = function (array) {
        let filteredArray = [];
        for(member of array) {
            if(!member.former) {
                filteredArray.push(member.name);
            }
        }
        return filteredArray;
    }
   
    this.sortBy = (array) => {
        return array.sort((a,b) => a.name.localeCompare(b.name));
    }
}


function CallApi () {
    this.url = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json"
    
    this.call = async function () {
        const url = this.url;
        let response = await fetch(url);
        return await response.json(); 
    }
}


$(document).ready(function () {
    let app = new App();
    app.init();
});