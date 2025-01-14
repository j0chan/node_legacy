// 라이브러리 설치 후 사용할 수 있도록 변수에 할당
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(__dirname + '/public')) // static file serving (정적파일 서빙, 보통 public에 저장)
app.use(bodyParser.urlencoded({extended: false})) // parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // parsing JSON

// 라우팅 하는 곳
// localhost:3000 을 통해 접속
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req, res) => {
    res.render('users')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/api/contact', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const memo = req.body.memo;

    const data = `${name} ${phone} ${email} ${memo}`

    res.send(data)
})


// listen은 마지막에 두는 것 권장
app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})