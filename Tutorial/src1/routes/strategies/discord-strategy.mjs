import passport from "passport";
import { Strategy } from "passport-discord";
import { DiscordUser } from "../../mongoose/schemas/discord-user.mjs";

passport.serializeUser((user, done) => {
  console.log(`Inside serialize User`);
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await DiscordUser.findById(id);
    return findUser ? done(null, findUser) : done(null, null);
  } catch (err) {
    done(err, null);
  }
});

const ID = "";
const secret = "";
const URL = "";

export default passport.use(
  new Strategy(
    {
      clientID: "1374023192112533575",
      clientSecret: "14HhHvs3iCZC9Kp0OqXT-yGgDJWqrqAq",
      callBackURL: "http://3000/api/user/login/discord/redirect",
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let findUser;
      try {
        findUser = await DiscordUser.findOne({ discord: profile.id });
      } catch (err) {
        return done(err, null);
      }

      try {
        if (!findUser) {
          const newUser = await DiscordUser({
            username: profile.username,
            discordId: profile.id,
          });
          const newSavedUser = await newUser.save();
          return done(null, newSavedUser);
        }
        return done(null, findUser);
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);
