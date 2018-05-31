import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

// Test 1
import fetch from 'node-fetch'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import { introspectSchema } from 'graphql-tools'
import { mergeSchemas } from 'graphql-tools'
import { createHttpLink } from 'apollo-link-http'
import resolvers from 'resolvers'

const getIntrospectSchema = async url => {
    const makeDatabaseServiceLink = () =>
        createHttpLink({
            uri: url,
            fetch
        })

    const databaseServiceSchemaDefinition = await introspectSchema(
        makeDatabaseServiceLink()
    )

    return makeRemoteExecutableSchema({
        schema: databaseServiceSchemaDefinition,
        link: makeDatabaseServiceLink()
    })
}

const SERVICE_ENDPOINT_AUTH = 'http://localhost:4001'
const SERVICE_ENDPOINT_BLOGS = 'http://localhost:4002'

const endpoints = [
    SERVICE_ENDPOINT_AUTH,
    SERVICE_ENDPOINT_BLOGS
]

const startService = async () => {
    try {
        const allSchemas = await Promise.all(
            endpoints.map(ep => getIntrospectSchema(ep))
        )

        const server = new GraphQLServer({
            // typeDefs: 'src/schema/api.graphql',
            // resolvers,
            schema: mergeSchemas({
                schemas: allSchemas
            })
            // context: req => ({
            //     ...req,
            //     db: new Prisma({
            //         typeDefs: 'src/schema/prisma.graphql',
            //         endpoint: process.env.PRISMA_ENDPOINT,
            //         secret: process.env.PRISMA_SECRET,
            //         debug: true
            //     })
            // })
        })

        server.start(() =>
            console.log(
                'Server is running on localhost:4000'
            )
        )
    } catch (error) {
        console.error('Oops! error: ', error)
    }
}

startService()
