
module.exports = (app) =>{

    app.get('/', (req,res) => {
        res.sendFile(__dirname + "/view/index.html");        
    });

    app.post('/votos',(req,res)=>{
        res.send(req.body.nome);
        console.log(req.body.nome);
    });
};


