const express = require("express")
const app = express()
const router = express.Router()
const mysql = require('mysql')
const path = require('path')
const moment = require('moment')
// const multer = require('multer');

//调用 mysql 提供的createPool方法  创建数据库   
const db = mysql.createPool({
    host: "sj.kyyfz.xyz",
    user: "root",
    password: "123456",
    database: "my_db_01"
});


// 这个用不到但是要下载art-template 
const artTemplate = require('art-template')
const expressTemplate = require('express-art-template')

//配置模板引擎
app.set('views',__dirname+'/view/')
app.engine('html',expressTemplate);
app.set('view engine','html')



app.get('/index',function(req,res){
    let {shoujihao} = req.query
    // let data = new Date()
    // let data = moment().format('YYYY-MM-DD-HH:mm:ss')
    let minte = moment().format('YYYY-MM-DD-HH:mm:ss')
    console.log({minte});
    const sql = `insert into ev_relation (iPhone,data) values ('${shoujihao}','${minte}');`
    db.query(sql,function(err,arr) {
        console.log(arr);   //传出信息的数据    
        console.log(err); //报错信息
    } )
    console.log(shoujihao);
    console.log({minte});
    res.send("提交成功")
})

app.get('/inquire',function(req,res){
    const sql = "select * from ev_relation"
    db.query(sql,function(err,arr) {
        console.log(arr);   //传出信息的数据
        // console.log(err); //报错信息

        res.render('storage.html',{age:"110",arr})
    } )
   
})


//启动服务器
app.listen(7000, () => {
    console.log("The server has opened port number 7000");
})
