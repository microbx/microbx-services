export default {
    Query: {
        getSchema: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.schema(
                { where: { id } },
                info
            )
        },

        listSchemas: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.schemas(
                null,
                info
            )
        }
    },
    Mutation: {
        registerSchema: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createSchema(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterSchema: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteSchema(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
