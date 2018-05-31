export default {
    Query: {
        getBlog: async (parent, { id }, context, info) => {
            return await context.db.query.blog(
                { where: { id } },
                info
            )
        },

        listBlogs: async (parent, args, context, info) => {
            return await context.db.query.blogs(null, info)
        }
    },

    Mutation: {
        registerBlog: async (
            parent,
            args,
            context,
            info
        ) => {
            return await context.db.mutation.createBlog(
                {
                    data: { ...args }
                },
                info
            )
        },
        unregisterBlog: async (
            parent,
            { id },
            context,
            info
        ) => {
            return await context.db.mutation.deleteBlog(
                {
                    where: { id }
                },
                info
            )
        }
    }
}
