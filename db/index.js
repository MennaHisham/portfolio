const mongoose = require('mongoose')
const Project = require("./Project");
const url = `mongodb+srv://menna-123:menna123@menna.qd83x.mongodb.net/portfolio?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    