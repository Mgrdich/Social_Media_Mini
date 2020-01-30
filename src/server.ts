import * as express from 'express';
import * as mongoose from "mongoose";
import {MONGODB_URI,MONGOOSE_OPTIONS} from "./config/keys";
import users from "./routes/users";
import posts from "./routes/profiles";
import profiles from "./routes/users";

const app = express();


//Routes
app.use('/users',users);
app.use('/posts',posts);
app.use('/profile',profiles);


const port: number | string = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI,MONGOOSE_OPTIONS)
    .then(function () {
        app.listen(port);
    }).catch(function (err) {
    console.log(err);
});