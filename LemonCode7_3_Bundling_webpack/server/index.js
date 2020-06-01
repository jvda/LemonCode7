const express = require('express');
const path = require('path');

const port = 8085;
const app = express();
const distPath = path.resolve(__dirname, '../dist');

app.use(
  express.static(distPath, {
    maxAge: '1y',
  })
);
app.listen(port, function() {
  console.log('Server running on port ' + port);
}); 