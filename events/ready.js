const client = require("../index");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}! v` + process.env.APP_VERSION);
    client.user.setActivity(process.env.APP_NAME + ` v` + process.env.APP_VERSION, { type: "STREAMING" });
})