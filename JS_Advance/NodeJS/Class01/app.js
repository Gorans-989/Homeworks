const http = require('http'); 


// function rqListener (req, res){
// }
// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    if(url === "/"){

        res.write('<html>');
        res.write('<head><title> Enter Message , by goran</title></head>')
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Click button to send</button></input></form></body>');
        res.write('</html>');
        return res.end();

        //in the form - action = ova e url, t.e. na koja akcija ili endpoint da se povrze. bidejki e demo kaj nas kje bide http://localhost:3000/message ;

    };

//process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Page , by goran</title></head>')
    res.write('<body><h1>Hello from my nodeJS server</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000); 