export default {
    Query: {
        getApi: async (parent, { id }, context, info) => {
            return await context.db.query.api(
                { where: { id } },
                info
            )
        },

        listApis: async (parent, args, context, info) => {
            return await context.db.query.apis(null, info)
        }
    },

    Mutation: {
        registerApi: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createApi(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterApi: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteApi(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
