const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));