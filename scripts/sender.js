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
    var css = `html {
  /* scroll-behavior: smooth; */
}

body {
}

#home {
  background-image: url(images/background2.png);
  background-size: cover;
  height: 100vh;
  /*           i use vh unit becouse to make it fit in the screen               */
  width: 100%;
  z-index: -1;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  /**/
  /* filter:  grayscale(50%) ; */
}
.fa-instagram:before {
  content: "\f16d";
  font-size: 160%;
  font-weight: bolder;

  color: black;
}
.fa-facebook:before {
  color: black;
}
.fa-linkedin:before {
  color: black;
}
.fa-twitter:before {
  color: black;
}

a:focus {
  text-decoration: none;
}

#image_sizing {
  border: 3px white solid;
  border-radius: 90%;
  width: 12rem;
  height: 17rem;
  /* z-index: 100; */
}

p {
  text-align: justify;
  text-justify: inter-word;
}

.textCC1 {
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 5vh;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.textCC2 {
  color: azure;
  font-size: 5vh;
  text-align: center;
}

.socialE {
  border: solid black 2px;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  text-align: center;
  line-height: 40px;
  color: #111;
}

.socialE:hover {
  /* background-color: black; */
  color: white;
  text-decoration: none;
}

#paraa {
  font-size: 20px;
  /* word-spacing:4px; */
  /* letter-spacing:0.6px; */
}

.fa {
  font-size: 17px;
}
fa:link {
  color: red important;
}
@keyframes skill1 {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}

@keyframes skill2 {
  from {
    width: 0%;
  }
  to {
    width: 98%;
  }
}

@keyframes skill3 {
  from {
    width: 0%;
  }
  to {
    width: 65%;
  }
}

@keyframes skill4 {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}

@keyframes skill5 {
  from {
    width: 0%;
  }
  to {
    width: 80%;
  }
}

.education {
  background-color: rgb(233, 231, 231);
  height: 100vh;
  width: 100%;
  z-index: -1;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /**/
}
/* **************    degree 1    ******************* */

.trapezoid1 {
  width: 70%;
  height: 0px;
  border-top: 10vh solid #20a3bf;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
}

.trapezoid1::before {
  color: #ffff;
  content: "`+obj.eduTitleu+`";
  height: 7vh;
  white-space: pre; /* or pre-wrap */
  font-weight: 600;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}
.trapezoid1::after {
  
  color: #ffff;
  font-size: inherit;
  height: 30px;
  white-space: pre; /* or pre-wrap */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}
/* **************    /degree 1   ******************* */
/* **************    degree 2    ******************* */

.trapezoid2 {
  width: 54%;
  height: 0px;
  border-top: 10vh solid #20a3bf;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
}

.trapezoid2::before {
  color: #ffff;
  content: "`+obj.eduTitlef+`";
  height: 7vh;
  white-space: pre; /* or pre-wrap */
  font-weight: 600;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}
.trapezoid2::after {
  color: #ffff;
  font-size: inherit;
  height: 30px;
  white-space: pre; /* or pre-wrap */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}
/* **************    /degree 2******************* */
/* **************    degree 3******************* */

.trapezoid3 {
  width: 36%;
  height: 0px;
  border-top: 10vh solid #20a3bf;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
}
.trapezoid3::before {
  color: #ffff;
  content: "`+obj.eduTitlem+`";
  height: 7vh;
  white-space: pre; /* or pre-wrap */
  font-weight: 600;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}
.trapezoid3::after {
  color: #ffff;
  font-size: inherit;
  height: 30px;
  white-space: pre; /* or pre-wrap */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -13vh;
}

/* **************   degree 3   ******************* */
/* ************   media qureas  **************** */

@media only screen and (max-width: 330px) {
  .trapezoid1 {
    width: 91%;
    height: 0px;
    border-top: 12vh solid #000000;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
  .trapezoid2 {
    width: 69%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
  .trapezoid3 {
    width: 46%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
}
/* media query ends here   (max-width: 760px)  */

@media only screen and (min-width: 330px) and (max-width: 380px) {
  .trapezoid1 {
    width: 91%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .trapezoid2 {
    width: 65%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .trapezoid3 {
    width: 41%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
}

@media only screen and (min-width: 381px) and (max-width: 420px) {
  .trapezoid1 {
    width: 91%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .trapezoid2 {
    width: 68%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .trapezoid3 {
    width: 45%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
}

@media only screen and (min-width: 421px) and (max-width: 699px) {
  .trapezoid1 {
    width: 71%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
  .trapezoid2 {
    width: 50%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
  .trapezoid3 {
    width: 29%;
    height: 0px;
    border-top: 12vh solid #000;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
}
/* media query ends here  range (min-width: 760px)  */

@media only screen and (min-width: 700px) and (max-width: 834px) {
  .trapezoid1 {
    width: 68%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 53px solid transparent;
    border-right: 53px solid transparent;
  }
  .trapezoid2 {
    width: 49%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 53px solid transparent;
    border-right: 53px solid transparent;
  }
  .trapezoid3 {
    width: 29%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 53px solid transparent;
    border-right: 53px solid transparent;
  }

  .trapezoid1::before {
    top: -14vh;
  }
  .trapezoid1::after {
    top: -15vh;
  }
  .trapezoid2::before {
    top: -14vh;
  }
  .trapezoid2::after {
    top: -15vh;
  }
  .trapezoid3::before {
    top: -14vh;
  }
  .trapezoid3::after {
    top: -15vh;
  }
}
/* media query ends here  range (min-width: 700px)  */

@media only screen and (min-width: 835px) and (max-width: 990px) {
  .trapezoid1 {
    width: 60%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid2 {
    width: 44%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid3 {
    width: 27%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  #image_sizing {
    width: 13vw;
  }

  .trapezoid1::before {
    top: -14vh;
  }
  .trapezoid1::after {
    top: -15vh;
  }
  .trapezoid2::before {
    top: -14vh;
  }
  .trapezoid2::after {
    top: -15vh;
  }
  .trapezoid3::before {
    top: -14vh;
  }
  .trapezoid3::after {
    top: -15vh;
  }
}

@media only screen and (min-width: 991px) and (max-width: 1090px) {
  .trapezoid1 {
    width: 55%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid2 {
    width: 41%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid3 {
    width: 26%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  .trapezoid1::before {
    top: -14vh;
  }
  .trapezoid1::after {
    top: -15vh;
  }
  .trapezoid2::before {
    top: -14vh;
  }
  .trapezoid2::after {
    top: -15vh;
  }
  .trapezoid3::before {
    top: -14vh;
  }
  .trapezoid3::after {
    top: -15vh;
  }
}

@media only screen and (min-width: 1091px) and (max-width: 1220px) {
  .trapezoid1 {
    width: 50%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid2 {
    width: 38%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid3 {
    width: 26%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  .trapezoid1::before {
    top: -14vh;
  }
  .trapezoid1::after {
    top: -15vh;
  }
  .trapezoid2::before {
    top: -14vh;
  }
  .trapezoid2::after {
    top: -15vh;
  }
  .trapezoid3::before {
    top: -14vh;
  }
  .trapezoid3::after {
    top: -15vh;
  }
  #image_sizing {
    width: 13vw;
  }
}

@media only screen and (min-width: 1221px) {
  .trapezoid1 {
    width: 50%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid2 {
    width: 39%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }
  .trapezoid3 {
    width: 28%;
    height: 0px;
    border-top: 14vh solid #000;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  .trapezoid1::before {
    top: -14vh;
  }
  .trapezoid1::after {
    top: -15vh;
  }
  .trapezoid2::before {
    top: -14vh;
  }
  .trapezoid2::after {
    top: -15vh;
  }
  .trapezoid3::before {
    top: -14vh;
  }
  .trapezoid3::after {
    top: -15vh;
  }
  #image_sizing {
    width: 13vw;
  }
}
/* media query ends here   (min-width: 760px)  */
/* ************   /media qureas  **************** */

/************  Reaturn to top     ****************/

html {
  scroll-behavior: smooth;
}

.to-top {
  background: black;
  position: fixed;
  bottom: 16px;
  right: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffff;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
  z-index: 99;
}

.to-top.active {
  bottom: 32px;
  pointer-events: auto;
  opacity: 1;
}

.to-top i {
  color: #fff;
  margin: 0;
  position: relative;

  top: 0px;
  font-size: 19px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.to-top:hover {
  background: black;
  text-decoration: none;
}
.to-top:hover i {
  color: rgb(255, 255, 255);
  top: -13%;
}
.to-top:visited {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

/************  /Reaturn to top     ****************/

/****************    scroll bar      *******************/

::-webkit-scrollbar {
  width: 12px;
  background-color: rgb(214, 214, 214);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-image: -webkit-linear-gradient(
    160deg,
    rgb(68, 67, 67),
    rgb(129, 127, 127),
    rgb(68, 67, 67)
  );
}

/****************    /scroll bar      ********************/

/****************    TimeLine      ********************/

.experience {
  width: 100%;
  z-index: 1;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/****************    TimeLine      ********************/

.experience {
  width: 100%;
  z-index: 1;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  padding: 100px 0;
  margin-bottom: -60px;
}

html,
body {
  overflow-x: hidden;
}

body {
  font-family: "Roboto";
  font-size: 17px;
  font-weight: 400;
}

h1 {
  font-size: 200%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
}

header {
  background: rgb(97, 97, 97);
  color: #ffffff;
  padding: 150px 0;
}

header p {
  font-family: "Allura";
  color: rgba(255, 0, 0, 0.2);
  margin-bottom: 0;
  font-size: 60px;
  margin-top: -30px;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: "";
  background: rgb(122, 122, 122);
  width: 5px;
  height: 78%;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;
}

.timeline-item:nth-child(even) .timeline-content {
  float: right;
  padding: 40px 30px 10px 30px;
}

.timeline-item:nth-child(even) .timeline-content .date {
  right: auto;
  left: 0;
}

.timeline-item:nth-child(even) .timeline-content::after {
  content: "";
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  left: -15px;
  border-width: 10px 15px 10px 0;
  border-color: transparent #f5f5f5 transparent transparent;
}

.timeline-item::after {
  content: "";
  display: block;
  clear: both;
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 10px 30px;
  border-radius: 4px;
  background: #f5f5f5;
  -webkit-box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}

.timeline-content::after {
  content: "";
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  right: -15px;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #f5f5f5;
}

.timeline-img {
  width: 25px;
  height: 25px;
  background: rgb(12, 12, 12);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 25px;
  margin-left: -13px;
}

.timeline-card {
  padding: 0 !important;
}

.timeline-card p {
  padding: 0 20px;
}

.timeline-card a {
  margin-left: 20px;
}

.timeline-item .timeline-img-header {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 0.4))
    ),
    url("https://picsum.photos/1000/800/?random") center center no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url("https://picsum.photos/1000/800/?random") center center no-repeat;
  background-size: cover;
}

.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;
}

.timeline-img-header h2 {
  color: #ffffff;
  position: absolute;
  bottom: 5px;
  left: 20px;
}

blockquote {
  margin-top: 30px;
  color: #757575;
  border-left-color: #3f51b5;
  padding: 0 20px;
}

.date {
  background: rgb(0, 0, 0);
  display: inline-block;
  color: #ffffff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (max-width: 568px) {
  .timeline::before {
    left: 50px;
  }
  .timeline .timeline-img {
    left: 50px;
  }
  .timeline .timeline-content {
    max-width: 100%;
    width: auto;
    margin-left: 70px;
  }
  .timeline .timeline-item:nth-child(even) .timeline-content {
    float: none;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-content::after {
    content: "";
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent transparent transparent transparent;
  }
}
/*# sourceMappingURL=main.css.map */

body {
  font-family: Arial, Helvetica, sans-serif;
}

/****************    /TimeLine      ********************/

/* ******** /project ******** */

.fa-github:before {
  content: "\f09b";
  color: black;
}

#team {
  background: rgb(231, 230, 230) !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #000000;
  margin-bottom: 50px;
  text-transform: uppercase;
  margin-top: 0%;
}

#team .card {
  border: none;
  background: #ffffff;
  box-shadow: 0px 1px 7px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10%; */
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
  /* display: flex;
        justify-content: center;
        text-align: center; */
  /* margin-top: 30%;*/
  /* padding-top: 40%; */
}

.backside .card a {
  font-size: 18px;
  color: #000000 !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #000000 !important;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 0%;
}
.p1 {
  padding-left: 10%;
  padding-right: 10%;
}
h4 {
  font-size: 21px;
  color: #111;
}

.fa:visited {
  color: rgb(0, 0, 0);
}
.fa:link {
  color: rgb(0, 240, 40);
}

/* ******** /project ******** */

/*******   Album  *******/

ul {
  margin-top: 90px;
}

.nav-pills > li.active > a,
.nav-pills > li.active > a:focus,
.nav-pills > li.active > a:hover {
  color: #fff;
  text-decoration: underline;
  background-color: transparent;
}

img {
  max-width: 100%;
  height: auto;
}

.slider {
  width: 90vmin;
  height: 90vmin;
  -webkit-perspective: 100vmin;
  perspective: 100vmin;
  margin: auto;
  -webkit-perspective-origin: top center;
  perspective-origin: top center;
  position: relative;
  box-sizing: border-box;
}
.slider__item {
  position: absolute;
  bottom: 0;
  /* left: 10%; */
  width: 100%;
  height: 100%;
  padding-top: 15vmin;
  box-sizing: border-box;
  -webkit-transition: -webkit-transform 0.18s ease;
  transition: -webkit-transform 0.18s ease;
  transition: transform 0.18s ease;
  transition: transform 0.18s ease, -webkit-transform 0.18s ease;
}
.slider__item:nth-child(1) {
  -webkit-transform: translate3d(0, 0, 0vmin);
  transform: translate3d(0, 0, 0vmin);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  z-index: 7;
}
.slider__item:nth-child(2) {
  -webkit-transform: translate3d(0, 0, -15vmin);
  transform: translate3d(0, 0, -15vmin);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  z-index: 6;
}
.slider__item:nth-child(3) {
  -webkit-transform: translate3d(0, 0, -30vmin);
  transform: translate3d(0, 0, -30vmin);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  z-index: 5;
}
.slider__item:nth-child(4) {
  -webkit-transform: translate3d(0, 0, -45vmin);
  transform: translate3d(0, 0, -45vmin);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
  z-index: 4;
}
.slider__item:nth-child(5) {
  -webkit-transform: translate3d(0, 0, -60vmin);
  transform: translate3d(0, 0, -60vmin);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  z-index: 3;
}
.slider__item:nth-child(6) {
  -webkit-transform: translate3d(0, 0, -75vmin);
  transform: translate3d(0, 0, -75vmin);
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  z-index: 2;
}
.slider__item:nth-child(7) {
  -webkit-transform: translate3d(0, 0, -90vmin);
  transform: translate3d(0, 0, -90vmin);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  z-index: 1;
}
.slider__item:nth-child(8) {
  -webkit-transform: translate3d(0, 0, -105vmin);
  transform: translate3d(0, 0, -105vmin);
  -webkit-transition-delay: 0.35s;
  transition-delay: 0.35s;
  z-index: 0;
}
.slider__image {
  width: 100%;
  height: 80%;
  margin-left: 0%;
  background-color: #999;
  border: 1.5vmin solid rgb(66, 65, 65);
  box-sizing: border-box;
  box-shadow: 0px 0vmin 0vmin 0px rgba(0, 0, 0, 0.75),
    1px 1vmin 2vmin rgba(0, 0, 0, 0.75);
  overflow: hidden;
  display: block;
  -webkit-transition: opacity 0.2s ease, -webkit-transform 0.18s ease;
  transition: opacity 0.2s ease, -webkit-transform 0.18s ease;
  transition: transform 0.18s ease, opacity 0.2s ease;
  transition: transform 0.18s ease, opacity 0.2s ease,
    -webkit-transform 0.18s ease;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
}
.slider__caption {
  /* height: 20%; */
  font-size: 150%;
  margin-top: -2%;
  /* top:-42px; */
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.slider__btn {
  /* position: absolute; */
  /* bottom: 0; */
  left: 0;
  right: 0;
  /* top: 88%;  */
  width: 9vmin;
  height: 9vmin;
  margin: 2vmin auto;
  border-right: 2vmin solid rgba(255, 255, 255, 0.8);
  border-bottom: 2vmin solid rgba(255, 255, 255, 0.65);
  z-index: 100;
  cursor: pointer;
  -webkit-transform: perspective(10vmin) rotateX(-30deg) rotateZ(45deg);
  transform: perspective(10vmin) rotateX(-30deg) rotateZ(45deg);
}
.slider__btn:active {
  border-right-color: #dd6;
  border-bottom-color: #dd6;
}
.section-title2 {
  text-align: center;
  color: #000000;
  margin-bottom: 10px;

  text-transform: uppercase;
  /* margin-top: 50PX; */
  padding-top: 79px;
}

/*******   /Album    ***********/

/*******   Footer    ***********/

/*----------------------------------------
    Footer
    ----------------------------------------*/
.footer {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  background-color: #f1f1f1;
}
.footer-title {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: 700;
  color: #111;
}
.footer-social {
  padding: 10px 0;
}
.footer-social-list li {
  display: inline-block;
}
.footer-social-list li a {
  font-size: 17px;
  color: #434343;
  margin: 0 9px;
}
.footer-social-list li a:hover {
  color: #111;
}
.footer .copy-text {
  margin: 8px 0;
  font-size: 15px;
  text-transform: capitalize;
}

/*******   /Footer    ***********/
`
    var html = `<!DOCTYPE html>
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
 .trapezoid1::before { content: ''; }
 .trapezoid2::before { content: ''; }
 .trapezoid3::before { content: ''; }
 .trapezoid1::after { content: '`+obj.matric+`      (`+obj.date+`)';  }
 .trapezoid2::after { content: '`+obj.fsc+`     (`+obj.date2+`)';  }
 .trapezoid3::after { content: '`+obj.uni+`     (`+obj.date3+`)';  }
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
        <li><a class="effect" href="https://www.instagram.com/" target="_blank" ><i class="fa fa-instagram" style="font-size: 80%;font-weight: bolder;"></i></a></li>
    </ul>
    
    
    
   
    </div>
      <div style="font-size: 91%; color: rgb(0, 0, 0);">Life CV &copy; 2022. all right reserved, designed by <strong><a href="http://growupinfo.com/" target="_blank">GrowUp</a></strong></div>
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
    var ejs = `<!DOCTYPE html>
    <html>
    
    <head>
      <title> `+obj.name+`'s CV </title>
      <link rel="icon" href="`+id+`/images/cv.png" type="image/x-icon">
      <meta charaset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- <meta http-equiv="refresh" content="1"></meta> -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <!-- <script src="https://kit.fontawesome.com/a54d2cbf95.js"></script> -->
        <link rel="stylesheet" href="`+id+`/mystyle.css">
    </head>
    
    
    <body>
      <!-- <bgsound src = "`+id+`/backsound.mp3"> -->
        <!-- <audio controls autoplay>
          <source src="`+id+`/horse.ogg" type="audio/ogg">
          <source src="`+id+`/backsoundmp3" type="audio/mpeg">
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
        <img src="`+id+`/images/dp.JPG" id="image_sizing" alt="">
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
            ejs=ejs+`
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
    
    ejs=ejs+`
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
          ejs=ejs+`
          <div class="timeline-item">
      
            
            <div class="timeline-img" style="background-color: #000;"></div>
      
            <div class="timeline-content timeline-card "  data-aos="fade-left"style="background-color: #dbd9d9;">
              <div class="timeline-img-header img-fluid" style="background-image: url(`+id+`/images/xp`+exp+`.jpg); ">
                <h2>`+obj['exptitle'+exp]+`</h2>
              </div>
              <div class="date">`+obj['xpdate'+exp]+`</div>
              <p style="color: #000000;">`+obj['exp'+exp]+`<br><br></p>
            </div>
          </div>` 
        }
        else
        {
          ejs=ejs+`
          <div class="timeline-item">
      
            <div class="timeline-img"></div>
      
            <div class="timeline-content timeline-card "  data-aos="fade-right"  style="background-color: #dbd9d9;">
              <div class="timeline-img-header" style="background-image: url(`+id+`/images/xp`+exp+`.jpg);">
                <h2>`+obj['exptitle'+exp]+`</h2>
              </div>
              <div class="date">`+obj['xpdate'+exp]+`</div>
              <p style="color: #000000;">`+obj['exp'+exp]+`<br><br></p>
            </div>
      
          </div> `
        }
        
      }
         ejs=ejs+`       
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
              ejs=ejs+`<figure class="slider__item" style=""><a href="images/Random/achieve`+achi+`.png"><img class="slider__image" src="`+id+`/images/Random/achieve`+achi+`.png"></a>
                <!-- <figcaption class="slider__caption" style="margin-top: 6px;">Git Hub Activities</figcaption> -->
              </figure>`
              
            }
              
              
             ejs=ejs+` 
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
        <li><a class="effect" href="https://www.instagram.com/" target="_blank" ><i class="fa fa-instagram" style="font-size: 80%;font-weight: bolder;"></i></a></li>
    </ul>
    
    
    
   
    </div>
      <div style="font-size: 91%; color: rgb(0, 0, 0);">Life CV &copy; 2022. all right reserved, designed by <strong><a href="http://growupinfo.com/" target="_blank">GrowUp</a></strong></div>
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
        var btn = $(".slider__btn");
        
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
    
    fs.writeFile(path.join(dir,"mystyle.css"), css, err => {
    if (err) {
     return console.error(err) 
    }
    console.log("done writing css")

    })
    fs.writeFile(path.join(dir,"index.ejs"), ejs, err => {
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