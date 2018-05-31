export default {
    Query: {
        getAuth: async (parent, { id }, context, info) => {
            return await context.db.query.auth(
                { where: { id } },
                info
            )
        },

        listAuths: async (parent, args, context, info) => {
            return await context.db.query.auths(null, info)
        }
    },

    Mutation: {
        registerAuth: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createAuth(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterAuth: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteAuth(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
