const express = require("express");
const app = express();
// const cors =require("cors");
// const router = require ("./routes/mailSender");
const port=process.env.PORT || 4000; 

// app.use (express.json);
// app.use(express.urlencoded({extended : true}));

// app.use(cors());
// app.use("/api/mail",router);

const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res)=>{

    res.render('./pages/home');
})

app.get('/contacts', (req, res)=>{

    res.render('./pages/contactos');
})




app.listen(port, ()=>{


    console.log(`servidor corriendo en http://localhost:${port}`);
})







