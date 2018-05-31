export default {
    Query: {
        getEnvironment: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.environment(
                { where: { id } },
                info
            )
        },

        listEnvironments: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.environments(
                null,
                info
            )
        }
    },

    Mutation: {
        registerEnvironment: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createEnvironment(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterEnvironment: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteEnvironment(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
