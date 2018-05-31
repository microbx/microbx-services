import { request } from 'graphql-request'

const apiEndpoint =
    process.env.SERVICE_ENDPOINT || 'http://localhost:4000'

export const getService = async id =>
    await request(
        apiEndpoint,
        `
        query GetService($id: ID!) {
            service: getService(id: $id) {
                id
                name
                description
            }
        }
    `,
        { id }
    )

export const listServices = async () =>
    await request(
        apiEndpoint,
        `
        query ListServices {
            services: listServices {
                id
                name
                description
            }
        }
    `
    )

export const registerService = async ({
    name,
    description
}) =>
    await request(
        apiEndpoint,
        `
        mutation RegisterService(
            $name: String!
            $description: String
        ) {
            service: registerService(
                name: $name
                description: $description
            ) {
                id
            }
        }
    `,
        {
            name,
            description
        }
    )

export const unregisterService = async id =>
    await request(
        apiEndpoint,
        `
            mutation UnegisterService(
                $id: ID!
            ) {
                service: unregisterService(
                    id: $id
                ) {
                    id
                }
            }
        `,
        {
            id
        }
    )
