export default {
    Query: {
        getProject: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.query.project(
                { where: { id } },
                info
            )
        },

        listProjects: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.query.projects(
                null,
                info
            )
        }
    },

    Mutation: {
        registerProject: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createProject(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterProject: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteProject(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
