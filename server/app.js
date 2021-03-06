const express = require('express')
const route = require('./api/index.js')
const app = express()
const bodyParser = require('body-parser')



app.set('port', (process.env.port || 10000))
//设置跨域访问
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /*让options请求快速返回*/
    } else {
      next();
    }
  })

route(app)



app.listen(app.get('port'), function() {
    console.log('GetData  http://localhost:' + app.get('port') )
})
