const http = require('http')
const sequelize = require('./db/connect')
const app =require('./app')

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

async function startServer (){
   try{
     let res = await sequelize.sync()
     console.log(res);
    server.listen(PORT, ()=> {
        console.log(`listening on port ${PORT}..`);
    })

   }catch(error){
    console.log(error);
   }
}

startServer()