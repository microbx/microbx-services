export default {
    Query: {
        getService: async (
            parent,
            { id },
            context,
            info
        ) => {
            console.log(`getService(): id: ${id}`)
            return await context.db.query.service(
                { where: { id } },
                info
            )
        },

        listServices: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.services(
                null,
                info
            )
        }
    },

    Mutation: {
        registerService: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createService(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterService: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteService(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
