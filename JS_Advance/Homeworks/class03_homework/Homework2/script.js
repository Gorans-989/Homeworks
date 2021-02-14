/* ## Exercise 2
Create a button
When the button is clicked, call the StarWars api for the first person. \
Print the person name in an **h1** tag. \
Print the person stats in a **table**:
* Height
* Weight
* Eye color
* Hair color

**URL:** https://swapi.dev/api/people/1 \
**NOTE:** JQuery will autmatically parse this call (js will not). */
$(document).ready(function(){

    $('#btn1').click(function(){
        const urlForData = "https://swapi.dev/api/people/1";

        $.ajax({
            url: urlForData,

            success: function(result) {
                console.log(`successful call`);
                console.log(result);//sakav da go isprintam resultot za da vidam od koj tip e i da go proveram nazivot na sekoe property ili key
            },
            error:function(){
                console.error('An error occured');
            }
        })
        .done(function(data){
            $('#resultH1').append(`${data.name}`); 
        })//sakav da proveram dali kje funkcionira so 2 .done
        .done(function(data){
            $('#tableBody').append(
                `
                <tr>
                <td>${data.height}</td>
                <td>${data.mass}kg</td>
                <td>${data.eye_color}</td>
                <td>${data.hair_color}</td>
                </tr>
                `
            )
        })
    })
})