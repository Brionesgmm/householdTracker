import express from "express";
import { join } from "path";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import methodOverride from "method-override";
import flash from "express-flash";
import logger from "morgan";
import connectDB from "./config/database.js";
import mainRoutes from "./routes/main.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import initializePassport from "./config/passport.js";
import dotenv from "dotenv";

const app = express();

// Use .env file in config folder
dotenv.config({ path: "./config/.env" });

// Connect To Database
connectDB();

// Static Folder
app.use(express.static("frontend/dist"));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Use forms for put / delete
app.use(methodOverride("_method"));

// Dynamic import for MongoStore
const MongoStore = (await import("connect-mongo")).default(session);

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

// Passport config
initializePassport(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, etc...
app.use(flash());

// Enable CORS
app.use(cors());

// Setup Routes For Which The Server Is Listening
app.use("/api", mainRoutes);

// Serve the frontend
app.use("*", (_, res) => {
  res.sendFile(join(__dirname, "frontend/dist/index.html"));
});

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
