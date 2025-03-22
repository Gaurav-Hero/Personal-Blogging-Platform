import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        }
    },{timestamps: true}
)

const Post = mongoose.model('Post',postSchema)
export default Post;
