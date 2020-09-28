
module.exports = (app) =>{

    app.get('/', (req,res) => {
        res.sendFile(__dirname + "/view/index.html");        
    });

    app.post('/votos',(req,res)=>{
        res.status(200).send(req.body.nomeUm);
    });
};


