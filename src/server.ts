import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import passportConfig from "./config/passport";
import {MONGODB_URI, MONGOOSE_OPTIONS} from "./config/keys";
import users from "./routes/users";
import posts from "./routes/profiles";
import profiles from "./routes/users";

const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
passportConfig(passport);


// Routes
app.use('/users', users);
app.use('/posts', posts);
app.use('/profile', profiles);


const port: number | string = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI, MONGOOSE_OPTIONS)
    .then(function () {
        app.listen(port);
    }).catch(function (err) {
    console.log(err);
});