const Koa = require('koa')
const os = require('os')
const path = require('path')
const fs = require('fs')
const koaBody = require('koa-body')
var cors = require('koa2-cors')
const app = new Koa()
// cross domain http head Allow-origin-access 跨域

const main = async function(ctx) {
    const tmpdir = os.tmpdir()
    const filePaths = []
    const files = ctx.request.body.files || {}
    for(let key in files){
        // 保存文件
        // saveFile 异步的
        // 文件上传快慢不一，所有文件上传完成后， 再返回结果？ 异步变同步
        // path
        const file = files[key]
        const filePath = path.join(tmpdir, file.name)
        console.log(filePath)
        console.log(file.path)
        // 里面有内容 读取流打开
        const reader = fs.createReadStream(file.path)
        // filePath 目的地有了， 等内容
        const writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
        filePaths.push(filePath)
    }
    ctx.body = filePaths
    // ctx.body = 'upload'
}

app.use(cors({
    // localhost:8080/upload
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return false
        }
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))


app.use(koaBody({
    multipart: true
}))

app.use(main)
app.listen(3000)
