const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json())
const imageRoutes = require('./routes/imageRoutes')

app.use('/images', imageRoutes)


require("./config/connectDB");
const PORT = 5800;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));