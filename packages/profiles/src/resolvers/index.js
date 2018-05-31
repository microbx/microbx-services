export default {
    Query: {
        getProfile: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.profile(
                { where: { id } },
                info
            )
        },

        listProfiles: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.profiles(
                null,
                info
            )
        }
    },

    Mutation: {
        registerProfile: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createProfile(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterProfile: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteProfile(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
