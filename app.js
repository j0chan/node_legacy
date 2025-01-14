const express = require('express')
const app = express()
const port = 3000

// 라우팅 하는 곳
// localhost:3000 을 통해 접속
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