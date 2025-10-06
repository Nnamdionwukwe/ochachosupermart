import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../../mongoose/schemas/users.mjs";
import { comparedPassword } from "../../utils/bcrypt.mjs";

passport.serializeUser((user, done) => {
  console.log(`Inside serialize User`);
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("user Not Found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not found");
      if (!comparedPassword(password, findUser.password))
        throw new Error("Bad Credentials");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);

//VERIFY FUNCTION FOR THE USER IN THE DATABASE
// //WITHOUT A DATABASE SHOWING RAW PASSWORDS

// passport.deserializeUser((id, done) => {
//   console.log(`Inside Deserializer`);
//   console.log(` Deserializing User ID: ${id}`);
//   try {
//     const findUser = mockUsers.find((user) => user.id === id);
//     if (!findUser) throw new Error("user Not Found");
//     done(null, findUser);
//   } catch (err) {
//     done(err, null);
//   }
// });

// export default passport.use(
//   new Strategy((username, password, done) => {
//     console.log(`Username: ${username}`);
//     console.log(`password: ${password}`);
//     try {
//       const findUser = mockUsers.find((user) => user.username === username);
//       if (!findUser) throw new Error("User not found");
//       if (findUser.password !== password)
//         throw new Error("Invalid Credentials");
//       done(null, findUser);
//     } catch (err) {
//       done(err, null);
//     }
//   })
// );
