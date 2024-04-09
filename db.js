const { connect } = require('mongoose')
const { MONGO_URI, MONGO_PASS } = process.env

connect("mongodb://0.0.0.0:27017/udemy-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify  : false
}).then(()=>{
    console.log('database connected')
})
