export default {
    Query: {
        getEvent: async (parent, { id }, context, info) => {
            return await context.db.query.event(
                { where: { id } },
                info
            )
        },

        listEvents: async (parent, args, context, info) => {
            return await context.db.query.events(null, info)
        }
    },

    Mutation: {
        registerEvent: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createEvent(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterEvent: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteEvent(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
