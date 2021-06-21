import express from 'express'
import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'
const app = express()
schema
app.get('/',(req, res)=>{
    res.send('up and running graphql crash course')
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(8080, ()=>{
    console.log('up and running')
})