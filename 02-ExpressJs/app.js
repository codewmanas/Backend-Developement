const express = require('express');

// Create an express application
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// routing
app.get("/about",(req,res)=>{
     res.send("This is about page");
})



app.listen(3000, () => {
     console.log('Server is running on http://localhost:3000');
});
