const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


