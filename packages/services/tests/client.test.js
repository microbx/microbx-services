import { registerService } from 'client'
import { unregisterService } from 'client'
import { getService } from 'client'
import { listServices } from 'client'

jest.setTimeout(10000)

describe('getService', () => {
    let testId = null

    beforeEach(async () => {
        const { service: { id } } = await registerService({
            name: 'fooService',
            description: 'fooDescription'
        })
        testId = id
    })

    it('should get service', async () => {
        const result = await getService(testId)
        console.log('result: ', result)
        console.log('testId: ', testId)
        expect(testId).toBeDefined()
    })

    beforeEach(async () => {
        await unregisterService(testId)
    })
})

// describe('listServices', () => {
//     it('should list services', async () => {
//         const result = await listServices()
//         console.log('result: ', result)
//         expect(result).toBeDefined()
//     })
// })
//
// describe('registerService', () => {
//     it('should register service', async () => {
//         const testName = 'testName'
//         const { service: { id } } = await registerService({
//             name: testName,
//             description: testName
//         })
//         expect(id).toBeDefined()
//         await unregisterService(id)
//     })
// })

// describe('unregisterService', () => {
//     let testName = null
//
//     beforeEach(() => {
//         testName = `test-${Math.random()}`
//     })
//
//     it('should unregister service', async () => {
//         const { id } = await createTestService(testName)
//         const { service } = await unregisterService(id)
//         expect(service).toBeDefined()
//         expect(service.id).toEqual(id)
//     })
// })
