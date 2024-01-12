const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
