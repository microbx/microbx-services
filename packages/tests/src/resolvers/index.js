export default {
    Query: {
        getTest: async (parent, { id }, context, info) => {
            return await context.db.query.test(
                { where: { id } },
                info
            )
        },

        listTests: async (parent, args, context, info) => {
            return await context.db.query.tests(null, info)
        }
    },

    Mutation: {
        registerTest: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createTest(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterTest: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteTest(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
