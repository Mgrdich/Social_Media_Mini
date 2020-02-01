import * as passport from "passport";

export function isAuth() {
    return passport.authenticate("jwt", {
        session: false
    })
}