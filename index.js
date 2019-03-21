const express = require('express'); 
const app = express();

app.get('/ping', (req,res)=>{
    res.status(200)
    res.json({pong: " 😅"})
});

app.listen(process.env.PORT || 3002);
console.log('port:', process.env.PORT || 3002 ,'is listening..'); 