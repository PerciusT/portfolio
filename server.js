
const express= require('express');
require("dotenv").config();
const session = require('express-session');
const bodyParser = require('body-parser');
//const db = require('./scripts/db');
const mysql = require('mysql');
const app=express();
const cors=require("cors");
const path = require("path");
// const multer = require('multer');
// const morgan = require('morgan')
const fs=require('fs')
app.use(cors());
const favicon = require('serve-favicon');

const mysqlStore = require('express-mysql-session')(session);
const PORT= process.env.APP_PORT;
const fileUpload = require('express-fileupload');
const upload = require("./scripts/upload.js");
const IN_PROD = process.env.NODE_ENV === 'production'
const sender = require('./scripts/sender')
const TWO_HOURS = 1000 * 60 * 60 * 2
const options ={
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
    
}
const pool = mysql.createPool(options);


app.use(favicon(__dirname + '/public/favicon.ico'));
const  sessionStore = new mysqlStore(options);
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json())
app.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: TWO_HOURS,
        sameSite: true,
        secure: IN_PROD
    }
}))
app.use(fileUpload());
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public','register')));
app.use(express.static(path.join(__dirname, 'public','login')));
app.use(express.static(path.join(__dirname, 'public','dashboard')));

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.get('/', (req, res)=>{
    const { userId } = req.session
    console.log(userId);
    if(userId)
    {
        try{
            res.redirect("/dashboard") 
        }
        catch(e)
        {
            console.log(e)
            res.redirect("/dashboard")
        }
    }
    else 
    {
        res.redirect("/register")
    }
})
app.get('/dashboard',  async(req,res)=>{
    const {userId} =req.session
     if(userId){
    try{
      if(req.session.status == 1)
      {
        if(req.session.host)
          res.render(path.join(__dirname,'views','dashboard', 'dashboard.ejs'),{user:req.session.user, statuscolor:'card-header-success',status:"Online",taken:"",site:""+req.session.host+""});  
        else
          res.render(path.join(__dirname,'views','dashboard', 'dashboard.ejs'),{user:req.session.user, statuscolor:'card-header-success',status:"Online",taken:"",site:""});  
      
      }
      else if(req.session.status == 0)
      {
        if(req.session.host)
          res.render(path.join(__dirname,'views','dashboard', 'dashboard.ejs'),{user:req.session.user, statuscolor:'card-header-warning', status:"Pending",taken:"",site:""+req.session.host+"" });  
        else
          res.render(path.join(__dirname,'views','dashboard', 'dashboard.ejs'),{user:req.session.user, statuscolor:'card-header-warning', status:"Pending",taken:"",site:"" });  

      }
        
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
    
}
else 
{
    res.redirect('/register')
}
})
// var skillin='{'
// var skillprof='{'
app.post('/upload', async(req,res,next)=>{
  let obj=await updater(req);
  if(obj=="")
  {
    obj=req.body
  }
  else
  {
    req.body=obj
  }
  try {
    pool.query("Select id,hostname from pages where hostname='"+obj.domainhost+"' OR id='"+req.session.userId+"'", function(err,result,fields) {
      if(err)
      {
        console.log("error was in select")
        throw err
      }
      else if(result=="")
      {
        console.log(req.domainhost+ "domain host")
        pool.query("Insert into pages (id,hostname,html) values('"+req.session.userId+"','"+obj.domainhost+"','Dummy html')",function(err,result,fields){
          if(err)
          {
            console.log("error was in insert")
            throw err 
          }
          else
          {
            //skill into json format
                // for(var ski=1;ski<=obj.countsk;ski++)
                // {
                //   console.log(obj.countsk)
                //   skillin=skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"'
                //   skillprof=skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"'
                //   if(ski==obj.countsk)
                //   {
                //     skillin=skillin+'}'
                //     skillprof=skillprof+'}'
                //   }
                //   else
                //   {
                //     skillin=skillin+','
                //     skillprof=skillprof+',' 
                //   }
                // }

           pool.query("Insert into data values('"+req.session.userId+"','"+JSON.stringify(req.body)+"')");
            req.session.host=obj.domainhost
            console.log(obj.domainhost+"domain host is")
            sender.createdir(obj.domainhost)
            var html = sender.createFile(req,obj.domainhost)
            pool.query("Update pages set html='"+mysql_real_escape_string(html)+"' where id='"+req.session.userId+"'",function(err,result,fields){
              if(err)
              {
                console.log("error was in update ")
                throw err
                res.redirect("/dashboard/user")
              }
            })
            res.redirect("/dashboard/user")
          }
        })
        
      }
      else 
      {
        if(result[0].id!=req.session.userId)
        {
          console.log("In domain exists")
          res.render(path.join(__dirname,'views','dashboard', 'user.ejs'),{user:req.session.user, taken:"This domain is taken",obj})
        }
        else if(result[0].id==req.session.userId)
        {
          console.log(result[0].hostname)
            sender.createdir(result[0].hostname)

            console.log(obj.domainhost+"domain host is")
            var html = sender.createFile(req,result[0].hostname)
            // for(var ski=1;ski<=obj.countsk;ski++)
            //     {
            //       console.log(obj.countsk)
            //       skillin=skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"'
            //       skillprof=skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"'
            //       if(ski==obj.countsk)
            //       {
            //         skillin=skillin+'}'
            //         skillprof=skillprof+'}'
            //       }
            //       else
            //       {
            //         skillin=skillin+','
            //         skillprof=skillprof+',' 
            //       }
            //     }

            pool.query("Update data set data='"+JSON.stringify(obj)+"' where id='"+req.session.userId+"'",function(err,result,fields){
              if(err)
              {
                console.log("error was in update data")
                throw err
              }
            });
            pool.query("Update pages set html='"+mysql_real_escape_string(html)+" ' where id='"+req.session.userId+"'",function(err,result,fields){
              if(err)
              {
                console.log("error was in update2")
                throw err
              }
            })
            res.redirect("/dashboard/user")
        }
      }

    })
     
  } catch(e) {
    // statements
    console.log(e);
  }
  
   
})
function mysql_real_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}
app.post('/dashboard', (req,res,next)=>{
  try{
    pool.query("Select id,hostname,html from pages where id='"+req.session.userId+"'",function(err, result, fields){
        if(err)
        {
          console.log(err)
        }
        else if(result=="")
        {
          return res.render(path.join(__dirname,'views','dashboard', 'user.ejs'),{user:req.session.user, taken:"Please make a portfolio first",obj:""});
          console.log("in empty")  
        }
        else if(result!="")
        {
          upload.uploadimg(req.files,result[0].hostname,"../receipt.jpg",req.files.receipt)
          console.log(req.session.userId+"/"+result[0].hostname+" Has uploaded his receipt!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
          res.redirect("/dashboard/")
        }
      })
  }
  catch(e)
  {
    console.log(e)
  }
})
app.post('/userlogin', async(req, res, next)=>{
    try{ 
    const email = req.body.email;
    let obj = req.body;
    pool.query("SELECT ID,Status,Email,Password,Username FROM user where Email = '"+req.body.name+"' AND Password = '"+req.body.pass+"'", function (err, result, fields) {
        if(err) 
        {
          throw err;
        }
        else if(result=="")
        {
          res.render('./login/login.ejs',{ wrongpass:'Wrong username or password'})
        }
        else{
            console.log("done loging in")
            req.session.userId = result[0].ID
            req.session.user = result[0].Username
            req.session.status = result[0].Status
            
           
            
            return res.redirect('/dashboard');
        }
        // pool.getConnection(function(err, connection) {
        //   // execute query
        //   // ...
        //   connnection.release();
        // });
        
    })
    
    
    } catch(e){
        console.log(e);
    }
});
app.post('/register',  async (req, res, next)=>{
    try{
        var obj=req.body
        console.log(req.body)
        pool.query("SELECT Email FROM user where Email = '"+obj.email+"'", function (err, result, fields) {
          console.log(result)
          if(err) 
          {
            throw err;
          }
          else if(result=="")
          {
            console.log("no account")
            try{
              if(obj.pass==obj.re_pass)
            {
              // console.log(obj.pass);
              pool.query("INSERT into user (Username,Email,Password,Status) values('"+obj.name+"','"+obj.email+"','"+obj.pass+"','0')",(err,rows) => {
                if(err)
                {
                  throw err;
                }
                else 
                {
                  console.log("Inside");
                  console.log(rows);
                }
              })
              res.redirect("/login")
            }
            }
            catch{
              res.redirect("/register");
            }
            
          }
          else if(result!="")
          {
            res.render('./register/register.ejs',{ wrong:'This user already exists'})
          }
          // pool.getConnection(function(err, connection) {
          //   // execute query
          //   // ...
          //   connnection.release();
          // });
        });
        
    } catch(e){    
        console.log(e);
        res.sendStatus(400);
    }
});
app.post('/logout', (req, res)=>{
    req.session.destroy(err => {
        if(err){
            return res.redirect('/')
        }
        res.clearCookie(process.env.SESS_NAME)
        res.redirect('/login')
    })
})
app.get('/register', (req, res) => {
    // console.log(req.session.userId)
    if(req.session.userId!=null)
    {
      console.log("in if")
      return res.redirect("/dashboard")
    }
    res.render(path.join(__dirname,'views','register', 'register.ejs'),{ wrong:'' });
  })
  app.get('/login', (req, res) => {
    // console.log(req.session.userId)
    if(req.session.userId!=null)
    {
      return res.redirect("/dashboard")
    }
    // res.render('./login/login.ejs',{ wrongpass:''})
    res.render(path.join(__dirname,'views','login', 'login.ejs'),{ wrongpass:'Login to your account' });
  })
  // app.get('/dashboard', (req, res) => {
  //   console.log("dashboard"+req.session.userId)
  //   if(req.session.userId==null)
  //   {
  //     return res.redirect("/login")
  //   }
  //   res.render(path.join(__dirname,'views','dashboard', 'dashbord.ejs'));  
    
  // })
  app.get('/dashboard/icons', (req,res) => {
    // console.log(req.session.userId)
    if(req.session.userId=="")
    {
     return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'icons.ejs'));   
  })
  app.get('/dashboard/map', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'map.ejs'));   
  })
  app.get('/dashboard/notifications', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'notifications.ejs'));   
  })
  app.get('/dashboard/tables', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'tables.ejs'));   
  })
  app.get('/dashboard/typography', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'typography.ejs'));   
  })
  app.get('/dashboard/upgrade', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'upgrade.ejs'));   
  })
  app.get('/dashboard/guide', (req,res) => {
    if(req.session.userId=="")
    {
      return res.redirect("/login")
    }
    res.render(path.join(__dirname,'views','dashboard', 'guide.ejs'),{user:req.session.user});   
  })

  app.get('/dashboard/user', async(req,res) => {
     const {userId} =req.session
     if(userId){
      let obj = await updater(req);
      console.log(obj)
          return res.render(path.join(__dirname,'views','dashboard', 'user.ejs'),{
          user:req.session.user, 
          taken:"",obj
          // name: ""+obj.name+"",
          // domainhost: ""+obj.domainhost+"",
          // post: "",
          // post2: "",
          // post3: "",
          // contact: "",
          // email: "",
          // location: "",
          // dob: "",
          // message: "",
          // fb: "",
          // twitter: "",
          // linkedin: "",
          // insta: "",
          // countsk: "1",
          // skill1: "",
          // skill1s: "",
          // matric: "",
          // date: "",
          // fsc: "",
          // date2: "",
          // uni: "",
          // date3: "",
          // countxp: "1",
          // exp1: "",
          // exptitle1: "",
          // xpdate1: "",
          // countach: "1"
          }); 
        
     
     }
    else
    {
      return res.redirect("/login")
    }
      
  })
  app.get('/preview',(req,res)=>{
    const {userId} =req.session
     if(userId)
     {
      pool.query("Select id,hostname,html from pages where id='"+req.session.userId+"'",function(err, result, fields){
        if(err)
        {
          console.log(err)
        }
        else if(result=="")
        {
          res.send("<h1>No Preview available please make a portfolio first</h1>") 
        }
        else if(result!="")
        {
          app.use(express.static(path.join(__dirname,'portfolios')));
          // res.render(path.join(__dirname,result[0].hostname+'.growupinfo.com','index.ejs')); 
          res.render(path.join(__dirname,'portfolios',result[0].hostname,'index.ejs'))
        }
      })
     }
    else
    {
      res.redirect("/login")
    }
  })

function updater(req)
{
  return new Promise(resolve => {
    let obj=req.body
    pool.query("Select data from data where id ='"+req.session.userId+"'", function(err,result,fields){
                if(err)
                {
                  console.log("error was in select data")
                  throw err
                }
                if(result=="")
                {
                  console.log("Data was empty when it shouldnt be")
                  obj=""
                  resolve(obj)
                }
                if(result!="")
                {
                  result=JSON.parse(result[0].data)
                  if(!obj.name)
                  {
                    obj=result
                  }
                  else
                  {
                  if(obj.name=="")
                    obj.name=result.name
                  if(obj.domainhost=="")
                    obj.domainhost=result.domainhost
                  if(obj.post=="")
                    obj.post==result.post
                  if(obj.post2=="")
                    obj.post2==result.post2
                  if(obj.post3=="")
                    obj.post3==result.post3
                  if(obj.contact=="")
                    obj.contact==result.contact
                  if(obj.email=="")
                    obj.email==result.email
                  if(obj.location=="")
                    obj.location==result.location
                  if(obj.dob=="")
                    obj.dob==result.dob
                  if(obj.message=="")
                    obj.message==result.message
                  if(obj.fb=="")
                    obj.fb==result.fb
                  if(obj.twitter=="")
                    obj.twitter==result.twitter
                  if(obj.linkedin=="")
                    obj.linkedin==result.linkedin
                  if(obj.insta=="")
                    obj.insta==result.insta
                  if(obj.countsk<result.countsk)
                    obj.countsk==result.countsk
                  for(var ski=1;ski<=obj.countsk;ski++)
                  {
                    if(obj['skill'+ski]=="")
                      obj['skill'+ski]=result['skill'+ski]
                    if(obj['skill'+ski+'s']=="")
                      obj['skill'+ski+'s']=result['skill'+ski+'s']
                    // console.log(obj.countsk)
                    // skillin=','+skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"\n'
                    // skillprof=','+skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"\n'
                  }
                  if(obj.matric=="")
                    obj.matric==result.matric
                  if(obj.date=="")
                    obj.date==result.date
                  if(obj.fsc=="")
                    obj.fsc==result.fsc
                  if(obj.date2=="")
                    obj.date2==result.date2
                  if(obj.uni=="")
                    obj.uni==result.uni
                  if(obj.date3=="")
                    obj.date3==result.date3
                  if(obj.countxp<result.countxp)
                    obj.countxp==result.countxp
                  for(var ski=1;ski<=obj.countxp;ski++)
                  {
                    if(obj['exp'+ski]=="")
                      obj['exp'+ski]=result['exp'+ski]
                    if(obj['exptitle'+ski]=="")
                      obj['exptitle'+ski]=result['exptitle'+ski]
                    if(obj['xpdate'+ski]=="")
                      obj['xpdate'+ski]=result['xpdate'+ski]
  
                    // console.log(obj.countsk)
                    // skillin=','+skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"\n'
                    // skillprof=','+skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"\n'
                  }
                  if(obj.countach<result.countach)
                    obj.countach=result.countach
                  }
                  resolve(obj)
                }
              })
  });
}

app.listen(process.env.PORT || PORT, ()=>{console.log(`server is listening on ${PORT}`)});

