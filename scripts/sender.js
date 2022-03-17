const fs = require('fs')
const fileUpload = require('express-fileupload');
const fse = require('fs-extra')
const path = require("path");
const upload = require("./upload");
let sender = {};
sender.createdir = (id) =>{
  console.log("Creating directory")
  dir=path.join(process.cwd(),"portfolios",id)
  console.log("ID:"+id)
  console.log(dir)
  fs.mkdir(dir,{recursive:true}, (error) => {
      if(error){
          console.error('This error occured'+error)
      }
      else 
      {
          console.log('The directory for ID: '+id)
      }
  })  
};
sender.createFile = (req,id) => {
    obj=req.body
    let filer = req.files
    dir=path.join(process.cwd(),"portfolios",id)
    des=path.join(process.cwd(),"portfolios","default")
    fs.copyFile(path.join(des,"mystyle.css"), path.join(dir,"mystyle.css") , (err) =>{
        if(err)
        {
            console.log(err)
        }
    })
    fse.copy(path.join(des,"images"), path.join(dir,"images"),{ overwrite: false, errorOnExist: false }, function (err) {
        if (err) return console.error(err)
        console.log('success! copied images over!')
        

      upload.uploadimg(filer,id,"dp.JPG",filer.avatar)
      for(var achimg=1;achimg<=obj.countach;achimg++)
      {
        upload.uploadimg(filer,id,"Random/achieve"+achimg+".png",filer["achieve"+achimg+"img"])
      }
      for(var xpimg=1;xpimg<=obj.countxp;xpimg++)
      {
        upload.uploadimg(filer,id,"xp"+xpimg+".JPG",filer["exp"+xpimg+"img"])
      }
      
      });
    html = `<!DOCTYPE html>
    <html>
    
    <head>
      <title> `+obj.name+`'s CV </title>
      <link rel="icon" href="images/cv.png" type="image/x-icon">
      <meta charaset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- <meta http-equiv="refresh" content="1"></meta> -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <!-- <script src="https://kit.fontawesome.com/a54d2cbf95.js"></script> -->
        <link rel="stylesheet" href="mystyle.css">
    </head>
    
    
    <body>
      <!-- <bgsound src = "backsound.mp3"> -->
        <!-- <audio controls autoplay>
          <source src="horse.ogg" type="audio/ogg">
          <source src="backsoundmp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio> -->
    
      <!--************************************************************************************************************-->
    
      <!-----------------------------          NAVBAR                  ------------------------------------------------->
    
    
    
      <nav class="navbar navbar-inverse " style="position: fixed; width: 100%; top:0px;z-index: 20;">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                          </button>
            <a class="navbar-brand" style="color: white;" href="#">`+obj.name+`'s CV</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><a class="dropdown-toggle" data-toggle="" href="#">Home</a></li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="" href="#section2">About Me</a>
              </li>
              <li><a class="dropdown-toggle" data-toggle="" href="#section3">My Education</a></li>
              <li><a class="dropdown-toggle" data-toggle="" href="#section4">Experience</a></li>
              <li><a class="dropdown-toggle" data-toggle="" href="#section6">Achievements</a></li>
            </ul>
          </div>
        </div>
      </nav>
    
    
    
    
      <!-----------------------------          /NAVBAR                  ------------------------------------------------->
    
    
    
    
      <!----------------------------            home                 ------------------------------------------------------>
    
    
    
      <div class="bg-dark text-white" id="home" id="homePage"  >
        <img src="images/dp.JPG" id="image_sizing" alt="">
        <h1>
          <font class=" textCC1" style="display:flex; text-align:center;">Hi, I'm `+obj.name+`</font>
        </h1>
    
        <span class="txt-rotate textCC2" data-period="2000" data-rotate='[ "`+obj.post+`", "`+obj.post2+`", "`+obj.post3+`"]'>
                    </span>
      </div>
    
      <!--------------------------------           /home                 -------------------------------------------------- -->
    
    
    
      <!--------------------------------           section 2                -------------------------------------------------- -->
    
    
    
      <div class="row-12" style="margin-top:30px; margin-bottom: px; border: 0px  solid; height:500px;" id="section2">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12" style="border: 0px  solid; margin-top: 70px;">
    
    
    
    
    
    
          <div class="col-lg-11 col-sm-11 ">
            <h1 align="left" style="color:#111;">Hi There! I'm `+obj.name+`</h1>
            <div class="row add-gapp4"></div>
            <!--for giving vertical gap-->
            <font text="center" id="paraa" style="color:#111; text-align: justify; text-justify: inter-word; ">
              <p>
              `+obj.message+`
            </p></font>
            <br>
            <br>
            <br>
    
    
    
          </div>
    
    
    
          <!--<div class="col-lg-1 col-sm-1 "></div>for giving horizontal gap-->
    
          <div class="col-lg-12 col-sm-12 " style="font-size:19px;margin-left: -13px; margin-top: -61px; ">
            <!--email and date-->
            <div class="col-lg-6 col-sm-6">
              <ul class="list-unstyled" style="margin-bottom: 27px; margin-top: 0px;">
                <li>
                  <span class="fa fa-envelope" style="color:black;"> &nbsp; <font style="font-family:sans-serif;"><b>Email : </b>
                                  `+obj.email+`</span></font>
                </li>
                <br>
                <li>
                  <span class="fa fa-map-marker" style="color:black;"> &nbsp;&nbsp; <font style="font-family:sans-serif;"><b> Location : </b>
                                  `+obj.location+`</span></font>
                  <br>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6">
              <ul class="list-unstyled" style="margin-top: 0px;">
                <li>
                  <span class="fa fa-calendar" style="color:black;"> &nbsp; <font style="font-family:sans-serif;"><b>Date Of Birth : </b>
                                 `+obj.dob+`</span></font>
                </li>
                <br>
                <li>
                  <span class="fa fa-phone" style="color:black;"> &nbsp; <font style="font-family:sans-serif;"><b>Phone : </b>
                                  `+obj.contact+`</span></font>
                </li>
              </ul>
            </div>
          </div>
          <!--email-->
    
    
    
    
    
    
          <br>
    
          <div class="row-lg-12 row-sm-12">
            <!-- <div class="col-lg-1 col-sm-1 "></div>for giving horizontal gap&nbsp;&nbsp;&nbsp; -->
    
            <div class="col-lg-9 col-sm-9 ">
              <a href="https://www.facebook.com/`+obj.fb+`/"  target="_blank"  class="fa fa-facebook socialE icon-black " style="font-size:25px;"></a>&nbsp;&nbsp;&nbsp;
              <!-- <a href="#" class="fa fa-Instagram socialE" style="font-size:20px;line-height:27px;"></a>&nbsp;&nbsp;&nbsp; -->
              <a href="https://twitter.com/`+obj.twitter+`"  target="_blank" class="fa fa-twitter socialE" style="font-size:25px;line-height:37px;"></a>&nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/`+obj.insta+`/"  target="_blank" class="fa fa-instagram socialE" style="https://www.linkedin.cn/feed/line-height:37px;"></a>&nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.cn/in/`+obj.linkedin+`/"  target="_blank" class="fa fa-linkedin socialE icon-black" style="font-size:25px;line-height:37px;"></a>&nbsp;&nbsp;&nbsp;
              <!-- <a href="#" class="fa fa-google-plus socialE" style="font-size:22px;line-height:37px;"></a>&nbsp;&nbsp;&nbsp; -->
    
            </div>
    
    
          </div>
    
        </div>
    
    
    
    
    
    
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12" style="border: 0px solid; margin-top: 85px;font-weight: 700; height: px; font-size: large; margin-bottom: 91px;">
          <!-- ------------------------    Skill     --------------------------- -->
          `
          for(var ski=1;ski<=obj.countsk;ski++)
          {
            html=html+`
                <style>
                  @keyframes skill`+ski+` {
                    from {
                      width: 0%;
                    }
                    to {
                      width: `+obj['skill'+ski+'s']+`%;
                    }
                  }
                </style>
            <div style="width:100%; display:flex ;">
            <span style="width:70%; border:0px solid rgb(108, 76, 223);  margin-top: 40px;">
                             &nbsp;&nbsp; `+obj[`skill`+``+ski]+`
                           </span>
            <span style="width:30%; border:0px solid red; text-align: right; margin-top: 40px;">
                             `+obj['skill'+ski+'s']+`% &nbsp;&nbsp;
                           </span>
          </div>
          <div style="margin-top: 4px; width:100%; background-color: rgb(146, 146, 150); height: 7px;border-radius: 100px 100px 100px 100px;">
    
            <div style="width: `+parseInt(obj['skill'+ski+'s'])+`%; background-color: black;height: 7px;border-radius: 100px 100px 100px 100px;animation-name: skill`+ski+`;animation-duration: 3s; animation-delay: 1s; margin-bottom: 20px;"></div>
    
          </div>`
          }
    
    html=html+`
          <!-- ------------------------    /Skill     --------------------------- -->
    
    
      
    
    
          
    
        </div>
        <!-- coloum number 2 -->
      </div>
      <!--row-->
      <!-- im not shore about it -->
    
      </div>
      <!----------- left side div ends here ------->
      <!-- im not shore about it -->
    
    
      </div>
      <!--container-->
      <!-- im not shore about it -->
    
    
    
    
    
    
    
    
      <!-- -------------------           degree                ---------------- -->
    
<style>
 .trapezoid1:after { content: '`+obj.matric+`      (`+obj.date+`)'  }
 .trapezoid2:after { content: '`+obj.fsc+`     (`+obj.date2+`)'  }
 .trapezoid3:after { content: '`+obj.uni+`     (`+obj.date3+`)'  }
</style>
    
    
    
      <div class="education" id="section3">
        <h1 style="font-family: arial; color: #000; "><u>My</u> Education</h1>
        <br><br>
        <div data-aos="fade-right" class="trapezoid1"></div><br><br>
    
        <div data-aos="fade-left" class="trapezoid2 "></div><br><br>
    
        <div data-aos="fade-right" class="trapezoid3 "></div><br><br>
    
      </div>
    
    
    
    
      <!-- -------------------           /degree                ---------------- -->
    
    
    
    
    <!-- ---------------------           Reaturn top button         ---------------------- -->
    
    
    
    <a href="#" class="to-top">
      <i style="font-size: 100%;" class="fa fa-angle-double-up"></i>
    </a>
    
    
    
    <!-- ---------------------           /Reaturn Top button         ---------------------- -->
    
    
    
    
    <!-- --------------------------------         TimeLine           ----------------------------- -->
    
    
    
    
    
    
    
    
    
    
    <div class="section4" style="background-color: #ffffff;">
      <br id="section4">
          <h1 class="experience" style="font-family: arial; color: #000; "><u></u> Experience</h1>
      
    
    
       
      <section class="timeline" style="margin-top:0px;">
        <div class="container">
          <!--  <div class="timeline-item">
            <div class="timeline-img"></div>
      
            <div class="timeline-content "  data-aos="fade-left">
              <h2 style=" display:flex; justify-content: center;">FREELANCER</h2>
              <div class="date" sty>1 MAY 2016</div>
              <div>`+obj.name+`</div>
            </div>
          </div>  -->
      `
      for(var exp=1;exp<=obj.countxp;exp++)
      {
        if(exp%2==0)
        {
          html=html+`
          <div class="timeline-item">
      
            
            <div class="timeline-img" style="background-color: #000;"></div>
      
            <div class="timeline-content timeline-card "  data-aos="fade-left"style="background-color: #dbd9d9;">
              <div class="timeline-img-header img-fluid" style="background-image: url(images/xp`+exp+`.jpg); ">
                <h2>`+obj['exptitle'+exp]+`</h2>
              </div>
              <div class="date">`+obj['xpdate'+exp]+`</div>
              <p style="color: #000000;">`+obj['exp'+exp]+`<br><br></p>
            </div>
          </div>` 
        }
        else
        {
          html=html+`
          <div class="timeline-item">
      
            <div class="timeline-img"></div>
      
            <div class="timeline-content timeline-card "  data-aos="fade-right"  style="background-color: #dbd9d9;">
              <div class="timeline-img-header" style="background-image: url(images/xp`+exp+`.jpg);">
                <h2>`+obj['exptitle'+exp]+`</h2>
              </div>
              <div class="date">`+obj['xpdate'+exp]+`</div>
              <p style="color: #000000;">`+obj['exp'+exp]+`<br><br></p>
            </div>
      
          </div> `
        }
        
      }
         html=html+`       
        </div>
      </section>
    
    
    
    </div><!-- section 4 -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- --------------------------------         /TimeLine           ----------------------------- -->
    
    
    
    <!-- ---------------------------          Project                 ----------------------- -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <br id="section5">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- ---------------------------          /Project                 ----------------------- -->
    
    
    
    
    
    
    
    <!-- ---------------------------          Album                 ----------------------- -->
    
    
    
      
    <div style="background-color:white; ">
    <span id="section6">
      </span>
      <h5 class="section-title2 h1" ><u>AC</u>HIEVEMENTS</h5>
      
      <!-- <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist" style="display:flex; justify-content: center; margin-top: 18px;padding-top: px; ">
    
    
        
        <li class="nav-item  active" role="presentation">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-Random" role="tab" aria-controls="pills-home" aria-selected="true" style="color: rgb(0, 0, 0); font-size: 120%; ">Random</a>
        </li>
    
    
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-web-tab" data-toggle="pill" href="#website" role="tab" aria-controls="pills-profile" aria-selected="false"  style="color: rgb(0, 0, 0); font-size: 120%; " >Web</a>
        </li>
    
    
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contactu" role="tab" aria-controls="pills-contact" aria-selected="false"  style="color: rgb(0, 0, 0); font-size: 120%; ">Graphic</a>
        </li>
      </ul> -->
    
    
    
    
    <!-- Album number 1 -->
    
    
    
    
      <div class="tab-content " id="pills-tabContent"  style="display:flex; justify-content: center;text-align:center;margin-top: -23px;">
        <div class="tab-pane fade in active" id="pills-Random" role="tabpanel" aria-labelledby="pills-home-tab">
    
            <div class="slider">`
            for(var achi=1;achi<=obj.countach;achi++)
            {
              html=html+`<figure class="slider__item" style=""><a href="images/Random/achieve`+achi+`.png"><img class="slider__image" src="images/Random/achieve`+achi+`.png"></a>
                <!-- <figcaption class="slider__caption" style="margin-top: 6px;">Git Hub Activities</figcaption> -->
              </figure>`
              
            }
              
              
             html=html+` 
            </div>
    
    
        <div class="slider__btn"  style=" border-right: 2vmin solid rgba(58, 58, 58, 0.8);border-bottom: 2vmin solid rgba(36, 36, 36, 0.65);margin-top:-8%;" ></div>
    
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      <div class="tab-content " id="pills-tabContent"  style="display:flex; justify-content: center;text-align:center;margin-top: -23px;">
        <div class="tab-pane fade  " id="website" role="tabpanel" aria-labelledby="pills-web">
    
            
    
    
        <div class="slider__btn"  style=" border-right: 2vmin solid rgba(58, 58, 58, 0.8);border-bottom: 2vmin solid rgba(36, 36, 36, 0.65);margin-top:-8%;" ></div>
    
    
    </div>
    
    
    
    
    
    <!-- 
    <div class="tab-pane fade" id="pills-web-tab" role="tabpanel" aria-labelledby="pills-web-tab">
            <b>`+obj.name+`</b>hi
    
    </div> -->
    
    
    
    
    
    <div class="tab-pane fade " id="pills-contactu" role="tabpanel" aria-labelledby="pills-contact-tab">
            
                    DOG
        </div>
    
    
      </div>
    
    
    </div>
    </div><!-- content -->
    
    
    
    <!-- ---------------------------          /Album                 ------------------------>
    
    
    
    <br><br><br><br><br><br><br><br>
    
    
    
    <div class="jambotron" style="background-color: rgb(206, 204, 204); flex-direction: column; margin-top:-72px;height: 190px; width: 100%;  display: flex; justify-content: center; text-align: center; ">
      <div style="font-size: 139%;color:rgb(0, 0, 0); font-weight: 700; margin-bottom: 15px; "> `+obj.name+` </div>
      <!-- <div>share it</div> -->
      <div style="margin-top:-92px;margin-left:-39px;  color: rgb(0, 0, 0);"> <ul class="footer-social-list">
        <li><a class="effect" href="https://www.facebook.com/sharer/sharer.php?u=https://stackoverflow.com/questions/61980062/download-button-code-is-not-working-why/61980189?noredirect=1#comment109622110_61980189"  target="_blank" ><i class="fa fa-facebook"></i></a></li>
        <li><a class="effect" href="https://twitter.com/home" target="_blank" ><i class="fa fa-twitter"></i></a></li>
        <li><a class="effect" href="https://github.com/mshahmirkhan" target="_blank" ><i class="fa fa-github"></i></a></li>
        <li><a class="effect" href="https://www.linkedin.cn/feed/" target="_blank" ><b><i class="fa fa-linkedin" ></i></b></a></li>
        <!-- <li><a class="effect" href="#"><i class="fa fa-behance"></i></a></li> -->
        <li><a class="effect" href="https://www.instagram.com/" target="_blank" ><i class="fa fa-instagram" style="font-size: 55%;font-weight: bolder;"></i></a></li>
    </ul>
    
    
    
   
    </div>
      <div style="font-size: 91%; color: rgb(0, 0, 0);">Life CV &copy; 2022. all right reserved, designed by <strong><a href="" target="_blank">GrowUp</a></strong></div>
    </div>
    
    
    
    
    
    
    
    
      <!---------------------------                   HOME writting animation                                 ------------------- -->
    
    
      <script>
        var TxtRotate = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        };
    
        TxtRotate.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];
    
          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
    
          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
          var that = this;
          var delta = 300 - Math.random() * 100;
    
          if (this.isDeleting) {
            delta /= 2;
          }
    
          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }
    
          setTimeout(function() {
            that.tick();
          }, delta);
        };
    
        window.onload = function() {
          var elements = document.getElementsByClassName('txt-rotate');
          for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
          document.body.appendChild(css);
        };
      </script>
    
    
    
      <!---------------------------                   /HOME writting animation                                 ------------------- -->
    
    
    
    
    
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init({
          duration: 1000
        });
      </script>
    
    <!-----------------------    back to top    ---------------------------------->
    <script>
     const toTop = document.querySelector(".to-top");
    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    })
    </script>
    
    <!-----------------------    /back to top    ---------------------------------->
    
    
    <!-----------------------    album    ---------------------------------->
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
    
    </script>
    <script>
    
    
      $(function(){
        var	btn = $(".slider__btn");
        
        btn.on("click",function(){
          $(".slider__item").first().clone().appendTo(".slider");
          $(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
          setTimeout(function(){
            $(".slider__item").first().remove();
          },200);
        });
      });
      
      
      </script>
    
    <!-----------------------    /album    ---------------------------------->
    
    
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    </body>
    
    </html>`
    fse.copy(path.join(des,"styles"), path.join(dir,"styles"), function (err) {
        if (err) return console.error(err)
        console.log('success! copied styles')
    });
    fs.writeFile(path.join(dir,"index.ejs"), html, err => {
    if (err) {
     return console.error(err) 
    }
    console.log("done writing html")

    })
    fs.writeFile(path.join(dir,"index.html"), html, err => {
    if (err) {
     return console.error(err) 
    }
    console.log("done writing html")

    })
    html=html.toString(2)
    return html
}

module.exports = sender;

/* 
    */