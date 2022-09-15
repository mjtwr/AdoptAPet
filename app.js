// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");
const moment =require("moment")
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
// hbs.registerHelper(“dateformat”, (date)=>{
//     const formated = moment(date).format(“YYYY/MM/DD”)
//   const fecha = formated.replace(/\//g,“-”)
//    return fecha
// })
hbs.registerHelper("quizresults", (result)=>{
    if(result.length == 0){
        return true
    }
})

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "adoptapet";

app.locals.appTitle = `${capitalized(projectName)}`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const petRoutes = require("./routes/pet.routes");
app.use("/pet", petRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
