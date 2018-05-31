export default {
    Query: {
        getTask: async (parent, { id }, context, info) => {
            return await context.db.query.task(
                { where: { id } },
                info
            )
        },

        listTasks: async (parent, args, context, info) => {
            return await context.db.query.tasks(null, info)
        }
    },

    Mutation: {
        registerTask: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createTask(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterTask: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteTask(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
