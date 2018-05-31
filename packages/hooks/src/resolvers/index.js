export default {
    Query: {
        getHook: async (parent, { id }, context, info) => {
            return await context.db.query.hook(
                { where: { id } },
                info
            )
        },

        listHooks: async (parent, args, context, info) => {
            return await context.db.query.hooks(null, info)
        }
    },

    Mutation: {
        registerHook: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createHook(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterHook: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteHook(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
