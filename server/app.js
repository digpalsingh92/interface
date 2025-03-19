const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;;

const express = require('express');
const app = express();


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});