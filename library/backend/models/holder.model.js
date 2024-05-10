const holderSchema = mongoose.Schema(
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
        adress: {
            type: String,
            require: true,
            maxlength: 50
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("holder", holderSchema);