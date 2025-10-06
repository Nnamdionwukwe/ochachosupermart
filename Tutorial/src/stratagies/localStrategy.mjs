import passport from "passport";
//IF ITS ANOTHER THIRD PARTY PROVIDER YOU WILL HAVE TO PROVIDE A DIFFRENT STRATEGY IMPORT
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log("Indide the Serilize User");
  console.log(user);
});

passport.deserializeUser((id, done) => {
  console.log("Indide the Decerilizer");
  try {
    const findUser = mockUsers.find((user) => user.id === id);
    if (!findUser) throw new Error("User Not Found");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

//ADDING THE EMAIL FIELD IS OPTIONAL IF YOU ARE USING EMAIL TO AUTHENTICATE THE USER AS A USERNAME
//{ usernameField: "email" },

export default passport.use(
  new Strategy((username, password, done) => {
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password)
        throw new Error("Invalid Credentials");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
