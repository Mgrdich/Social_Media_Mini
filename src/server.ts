import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import passportConfig from "./config/passport";
import {MONGODB_URI, MONGOOSE_OPTIONS} from "./config/keys";
import {NextFunction, Request, Response} from "express";
import users from "./routes/users";
import posts from "./routes/posts";
import profile from "./routes/profile";
import {ImyError} from "./interfaces/General";

const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, AuthorizationComponent');
    next();
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
passportConfig(passport);


// Routes
app.use('/users', users);
app.use('/posts', posts);
app.use('/profile', profile);

//errors
app.use(function (err: ImyError, req: Request, res: Response, next: NextFunction) {
    const status: number = err.statusCode || 500;
    const message: string = err.message;
    const data = err.data;
    res.status(status).json({message, data});
});


const port: number | string = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI, MONGOOSE_OPTIONS)
    .then(function () {
        app.listen(port);
    }).catch(function (err) {
    console.log(err);
});