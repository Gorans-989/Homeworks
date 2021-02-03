$(document).ready(function(){

    //2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.
    $('#button').click(function(){
        $('tr:even').css("color", "red");
        $('td:nth-child(1)').css("background-color", "yellow");
        $('td:nth-child(3)').css("background-color", "yellow")
    })

    //3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.
    $('#normal').click(function(){
        $('p').css("font-size", "unset");
    })
    $('#increaseFont').click(function(){
        $('p').css("font-size", "large");
    })
    $('#reduceFont').click(function(){
        $('p').css("font-size", "small");
    })

    //4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.
    $('#secondContent').hide()
    $('#thirdContent').hide()

    $('#first').click(function(){
        $('#firstContent').show();
        $('#secondContent').hide();
        $('#thirdContent').hide();
    })

    $('#second').click(function(){
        $('#firstContent').hide();
        $('#secondContent').show();
        $('#thirdContent').hide();
    })

    $('#third').click(function(){
        $('#firstContent').hide();
        $('#secondContent').hide();
        $('#thirdContent').show();
    })

/* 
5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list. 
Potrebno e da se povikaat site sliki
 */

    $('#ajaxBtn').click(function(){
        
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            success: function(result){
                // the result is always JS object; it is automatically converted!!!
                console.log('Success!');
            },
            error: function(){
                console.error('Error occured!');
            }
        })
        .done(function(data) {
            for(let i = 0; i < 10; i++ ){
                $("#resultList").append(`<li><img src="${data[i].thumbnailUrl}"></li>`);
            }
        });
    })

})