export default {
    Query: {
        getLogger: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.logger(
                { where: { id } },
                info
            )
        },

        listLoggers: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.loggers(
                null,
                info
            )
        }
    },

    Mutation: {
        registerLogger: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createLogger(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterLogger: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteLogger(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
