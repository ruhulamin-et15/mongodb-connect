const app = require("./app");
const connectDB = require("./models/db");

require("dotenv").config();
const PORT = process.env.PORT
app.listen(PORT, async()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    await connectDB();
});