const express = require("express")
const bodyParser = require('body-parser');
const
    {
        getBase,
        getCatalog,
        search,
        info,
        play
    } = require("animesama-scrapper");
const port = 5000
const app =express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});



app.get('/',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e);
    })
})

app.get('/pepites',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.animes.pepites);
    })
})

app.get('/recents',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.animes.recent);
    })
})

app.get('/solo',async (req,res)=>{
    await  await search("solo leveling").then((e)=>{
        res.send(e);
    })
})


// planning///////////////////////////

app.get('/planning/lundi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.lundi);
    })
})

app.get('/planning/mardi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.mardi);
    })
})

app.get('/planning/mercredi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.mercredi);
    })
})

app.get('/planning/jeudi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.jeudi)
    })
})

app.get('/planning/vendredi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.vendredi);
    })
})

app.get('/planning/samedi',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.samedi);
    })
})

app.get('/planning/dimanche',async (req,res)=>{
    await getBase().then((e)=>{
        res.send(e.calendrier.dimanche);
    })
})




app.post('/info',async (req,res)=>{
    const data = req.body;
    console.log(data);
     await info(data.key).then((e)=>{
         res.send(e);
     })
})


app.post('/watch',async (req,res)=>{
    const data = req.body;
    console.log(data);
    await play(data.name, data.saison, data.lang, true).then((e)=>{
         res.send(e);
     })
})






app.listen(port,()=>{
    console.log('serveur en ligne')
})