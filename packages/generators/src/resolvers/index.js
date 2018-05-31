export default {
    Query: {
        getGenerator: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.generator(
                { where: { id } },
                info
            )
        },

        listGenerators: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.generators(
                null,
                info
            )
        }
    },

    Mutation: {
        registerGenerator: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createGenerator(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterGenerator: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteGenerator(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
