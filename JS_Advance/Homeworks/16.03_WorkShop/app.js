let result = document.getElementById('result')
// let bands = [];

class Bands {
    constructor(name, active, tags, members, albums){
        this.name = name,
        this.isActive = active,
        this.tags = tags,
        this.bandMembers = members,
        this.albums = albums 
    }

    

    getTagsAsStrings() {
        return this.tags.join(", ")
    }
    
}



function App() {


    this.init = function(){
    callApi()
    .then(data => print(data, result))
    .catch(error => console.log(error))
    // .then(data => mapData(data))
    // .then(bands => console.log(bands))
    // .catch(error => console.log(error));
    
    }   

}

async function callApi() {
    const url = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json";
    let response = await fetch(url);
    if(response){
       let data = await response.json();
       const mapedData = mapData(data);
       console.log(mapedData);
       return mapedData;
    }
    else {throw new Error ('Something went wrong, please refresh the page')}
}



function mapData(array) {
    let mapedArray = array.map(band => new Bands(band.name, band.active, band.tags, band.members, band.albums))
    return mapedArray;
}

function print(array, element) {
    element.innerHTML = "";
    let i = 1;
    for(let band of array) {
        let row = `
            <tr>    
                <th scope="row">${i}</th>
                <td>${band.name}</td>
                <td>${band.isActive}</td>
                <td>${band.getTagsAsStrings()}</td>
                <td>${filterMembers(band.bandMembers)}</td>
                <td>${band.albums.length}</td>
          </tr>`
        i++
        element.innerHTML += row;
    }    
}

function filterMembers(array) {
    return array.filter(member => !member.former)
}


$(document).ready(function (){
    let app = new App();
    app.init();
});