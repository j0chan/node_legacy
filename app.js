const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
// static file serving (정적파일 서빙, 보통 public에 저장)
app.use(express.static(__dirname + '/public'))


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


// listen은 마지막에 두는 것 권장
app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})