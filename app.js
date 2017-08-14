/**
 * Created by Administrator on 2017/8/4 0004.
 */
var express=require('express'),
    bodyParser=require('body-parser'),
    app=express(),
    cookie = require('cookie-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());//解析json 格式
app.use(bodyParser.urlencoded({extended:true}));//解析body中的url
app.use(cookie());

var connect=require('./router/com_mysql.js'),//引入数据库文件
    register=require('./router/r_register.js');//引入注册文件
    login=require('./router/r_login.js');//引入登陆文件




app.post('/code',register.code);//获取验证码
app.post('/register',register.reg);//注册用户
app.get('/login',login.login);//账户登陆









app.listen(80,function(){
    console.log('server创建成功！')
});