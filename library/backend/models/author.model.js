const authorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50
        },
        surname: {
            type: String,
            require: true,
            maxlength: 50
        },
        birth: {
            type: Number,
            require: true,
            maxlength: 4
        },
        death: {
            type: Number,
            require: false,
            maxlength: 4
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("author", authorSchema);