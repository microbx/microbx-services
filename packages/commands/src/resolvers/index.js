export default {
    Query: {
        getCommand: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.command(
                { where: { id } },
                info
            )
        },

        listCommands: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.commands(
                null,
                info
            )
        }
    },

    Mutation: {
        registerCommand: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createCommand(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterCommand: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteCommand(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
