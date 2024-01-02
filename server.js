const express = require('express');
const app = express();
const port = 3000; // You can use any port number


app.use(express.static('public')); // 'public' is the folder where your index.html file is located

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

