import expresse from 'express';

//instantiate an expresse apllication
const app = expresse();

//serve static files from the public directory
app.use(expresse.static('public'));//sould be the same as the file name

//define a port number for our server to listen on
const PORT = 3000;

//defin a defaulte route for our home page
app.get('/', (req, res) =>{
    //send our home pages as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);

});

//define a thank you route
app.get(`/thankyou`, (req, res) =>{

    //send the thank you
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`)
});

//tell the server to listen on our specific port
app.listen(PORT, () =>{
    console.log(`Server is running at http://localost:${PORT}`);
});

