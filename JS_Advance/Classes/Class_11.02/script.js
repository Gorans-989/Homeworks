// sekoj xml request e tip string.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//        return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error)
//     })

document.getElementById('getUser').addEventListener('click', function(){
    let id = document.getElementById('userId').value;
    
    let url = `https://jsonplaceholder.typicode.com/users/${id}`
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(error){
            alert('User does not exist');
        })
});