export default {
    Query: {
        getRegistry: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.registry(
                { where: { id } },
                info
            )
        },

        listRegistries: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.registries(
                null,
                info
            )
        }
    },

    Mutation: {
        registerRegistry: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createRegistry(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterRegistry: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteRegistry(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
