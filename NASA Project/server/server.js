const http = require('http')

const { loadPlanets } = require('./src/model/planets.model')
const app = require('./app')
const {mongoConnect} = require('./services/mongo')

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

async function startServer(){
    await mongoConnect()
    await loadPlanets()
    server.listen(PORT, ()=> console.log('Run at port '+ PORT))
}
startServer()