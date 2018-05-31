import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

import resolvers from 'resolvers'

const server = new GraphQLServer({
    typeDefs: 'src/schema/api.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'src/schema/prisma.graphql',
            endpoint: process.env.PRISMA_ENDPOINT,
            secret: process.env.PRISMA_SECRET,
            debug: true
        })
    })
})

server.start(() =>
    console.log('Server is running on localhost:4000')
)
