const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute')

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use('/api/auth',authRouter);

//mongo db connection
mongoose.connect('mongodb://localhost:27017/AIR_QUALITY')
.then(()=> console.log('mongoDB connecter successfully!'))
.catch((error)=> console.error('Failed to connect',error))

//global error handler
    app.use((err,req,res,next)=>{
        err.statuCode = err.statuCode ||500;
        err.status = err.status || 'error';

        res.status(err,statuCode).json({
            status :err.status,
            message:err.message,
        });
        
    });
    

//server
const port = 3000;

app.listen(port,()=>{
    console.log(`App running on  port ${port}`)
})
