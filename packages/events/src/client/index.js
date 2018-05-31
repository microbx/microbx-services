import { request } from 'graphql-request'

import GetServiceQuery from 'schema/queries/get.graphql'
import ListServicesQuery from 'schema/queries/list.graphql'
import RegisterServiceMutation from 'schema/mutations/register.graphql'
import UnregisterServiceMutation from 'schema/mutations/unregister.graphql'

const SERVICE_ENDPOINT =
    process.env.SERVICE_ENDPOINT || 'http://localhost:4000'

export const getService = async id =>
    await request(SERVICE_ENDPOINT, GetServiceQuery, { id })

export const listServices = async () =>
    await request(SERVICE_ENDPOINT, ListServicesQuery)

export const registerService = async service =>
    await request(
        SERVICE_ENDPOINT,
        RegisterServiceMutation,
        service
    )

export const unregisterService = async id =>
    await request(
        SERVICE_ENDPOINT,
        UnregisterServiceMutation,
        { id }
    )
