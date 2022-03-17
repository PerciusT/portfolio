-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: eportfolio
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data` (
  `id` int NOT NULL,
  `data` text,
  PRIMARY KEY (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (26,'{\"name\":\"hello\",\"domainhost\":\"hello\",\"post\":\"hello\",\"post2\":\"\",\"post3\":\"\",\"contact\":\"\",\"email\":\"\",\"location\":\"\",\"dob\":\"\",\"message\":\"\",\"fb\":\"ad\",\"twitter\":\"\",\"linkedin\":\"\",\"insta\":\"\",\"countsk\":\"1\",\"skill1\":\"asd\",\"skill1s\":\"34\",\"matric\":\"\",\"date\":\"\",\"fsc\":\"\",\"date2\":\"\",\"uni\":\"\",\"date3\":\"\",\"countxp\":\"2\",\"exp1\":\"hell\",\"exptitle1\":\"asd\",\"xpdate1\":\"\",\"countach\":\"1\"}');
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` int NOT NULL,
  `hostname` varchar(45) NOT NULL,
  `html` text,
  PRIMARY KEY (`hostname`,`id`),
  UNIQUE KEY `hostname_UNIQUE` (`hostname`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userid_idx` (`id`),
  CONSTRAINT `userid` FOREIGN KEY (`id`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (26,'hello','<!DOCTYPE html>\n    <html>\n    \n    <head>\n      <title> hello\'s CV </title>\n      <link rel=\"icon\" href=\"images/cv.png\" type=\"image/x-icon\">\n      <meta charaset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <!-- <meta http-equiv=\"refresh\" content=\"1\"></meta> -->\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n        \n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n        <!-- <script src=\"https://kit.fontawesome.com/a54d2cbf95.js\"></script> -->\n        <link rel=\"stylesheet\" href=\"mystyle.css\">\n    </head>\n    \n    \n    <body>\n      <!-- <bgsound src = \"backsound.mp3\"> -->\n        <!-- <audio controls autoplay>\n          <source src=\"horse.ogg\" type=\"audio/ogg\">\n          <source src=\"backsoundmp3\" type=\"audio/mpeg\">\n          Your browser does not support the audio element.\n        </audio> -->\n    \n      <!--************************************************************************************************************-->\n    \n      <!-----------------------------          NAVBAR                  ------------------------------------------------->\n    \n    \n    \n      <nav class=\"navbar navbar-inverse \" style=\"position: fixed; width: 100\\%; top:0px;z-index: 20;\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>                        \n                          </button>\n            <a class=\"navbar-brand\" style=\"color: white;\" href=\"#\">hello\'s CV</a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a class=\"dropdown-toggle\" data-toggle=\"\" href=\"#\">Home</a></li>\n              <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"\" href=\"#section2\">About Me</a>\n              </li>\n              <li><a class=\"dropdown-toggle\" data-toggle=\"\" href=\"#section3\">My Education</a></li>\n              <li><a class=\"dropdown-toggle\" data-toggle=\"\" href=\"#section4\">Experience</a></li>\n              <li><a class=\"dropdown-toggle\" data-toggle=\"\" href=\"#section6\">Achievements</a></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    \n    \n    \n    \n      <!-----------------------------          /NAVBAR                  ------------------------------------------------->\n    \n    \n    \n    \n      <!----------------------------            home                 ------------------------------------------------------>\n    \n    \n    \n      <div class=\"bg-dark text-white\" id=\"home\" id=\"homePage\"  >\n        <img src=\"images/dp.JPG\" id=\"image_sizing\" alt=\"\">\n        <h1>\n          <font class=\" textCC1\" style=\"display:flex; text-align:center;\">Hi, I\'m hello</font>\n        </h1>\n    \n        <span class=\"txt-rotate textCC2\" data-period=\"2000\" data-rotate=\'[ \"hello\", \"\", \"\"]\'>\n                    </span>\n      </div>\n    \n      <!--------------------------------           /home                 -------------------------------------------------- -->\n    \n    \n    \n      <!--------------------------------           section 2                -------------------------------------------------- -->\n    \n    \n    \n      <div class=\"row-12\" style=\"margin-top:30px; margin-bottom: px; border: 0px  solid; height:500px;\" id=\"section2\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\" style=\"border: 0px  solid; margin-top: 70px;\">\n    \n    \n    \n    \n    \n    \n          <div class=\"col-lg-11 col-sm-11 \">\n            <h1 align=\"left\" style=\"color:#111;\">Hi There! I\'m hello</h1>\n            <div class=\"row add-gapp4\"></div>\n            <!--for giving vertical gap-->\n            <font text=\"center\" id=\"paraa\" style=\"color:#111; text-align: justify; text-justify: inter-word; \">\n              <p>\n              \n            </p></font>\n            <br>\n            <br>\n            <br>\n    \n    \n    \n          </div>\n    \n    \n    \n          <!--<div class=\"col-lg-1 col-sm-1 \"></div>for giving horizontal gap-->\n    \n          <div class=\"col-lg-12 col-sm-12 \" style=\"font-size:19px;margin-left: -13px; margin-top: -61px; \">\n            <!--email and date-->\n            <div class=\"col-lg-6 col-sm-6\">\n              <ul class=\"list-unstyled\" style=\"margin-bottom: 27px; margin-top: 0px;\">\n                <li>\n                  <span class=\"fa fa-envelope\" style=\"color:black;\"> &nbsp; <font style=\"font-family:sans-serif;\"><b>Email : </b>\n                                  </span></font>\n                </li>\n                <br>\n                <li>\n                  <span class=\"fa fa-map-marker\" style=\"color:black;\"> &nbsp;&nbsp; <font style=\"font-family:sans-serif;\"><b> Location : </b>\n                                  </span></font>\n                  <br>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-lg-6 col-sm-6\">\n              <ul class=\"list-unstyled\" style=\"margin-top: 0px;\">\n                <li>\n                  <span class=\"fa fa-calendar\" style=\"color:black;\"> &nbsp; <font style=\"font-family:sans-serif;\"><b>Date Of Birth : </b>\n                                 </span></font>\n                </li>\n                <br>\n                <li>\n                  <span class=\"fa fa-phone\" style=\"color:black;\"> &nbsp; <font style=\"font-family:sans-serif;\"><b>Phone : </b>\n                                  </span></font>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!--email-->\n    \n    \n    \n    \n    \n    \n          <br>\n    \n          <div class=\"row-lg-12 row-sm-12\">\n            <!-- <div class=\"col-lg-1 col-sm-1 \"></div>for giving horizontal gap&nbsp;&nbsp;&nbsp; -->\n    \n            <div class=\"col-lg-9 col-sm-9 \">\n              <a href=\"https://www.facebook.com/ad/\"  target=\"_blank\"  class=\"fa fa-facebook socialE icon-black \" style=\"font-size:25px;\"></a>&nbsp;&nbsp;&nbsp;\n              <!-- <a href=\"#\" class=\"fa fa-Instagram socialE\" style=\"font-size:20px;line-height:27px;\"></a>&nbsp;&nbsp;&nbsp; -->\n              <a href=\"https://twitter.com/\"  target=\"_blank\" class=\"fa fa-twitter socialE\" style=\"font-size:25px;line-height:37px;\"></a>&nbsp;&nbsp;&nbsp;\n              <a href=\"https://www.instagram.com//\"  target=\"_blank\" class=\"fa fa-instagram socialE\" style=\"https://www.linkedin.cn/feed/line-height:37px;\"></a>&nbsp;&nbsp;&nbsp;\n              <a href=\"https://www.linkedin.cn/in//\"  target=\"_blank\" class=\"fa fa-linkedin socialE icon-black\" style=\"font-size:25px;line-height:37px;\"></a>&nbsp;&nbsp;&nbsp;\n              <!-- <a href=\"#\" class=\"fa fa-google-plus socialE\" style=\"font-size:22px;line-height:37px;\"></a>&nbsp;&nbsp;&nbsp; -->\n    \n            </div>\n    \n    \n          </div>\n    \n        </div>\n    \n    \n    \n    \n    \n    \n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\" style=\"border: 0px solid; margin-top: 85px;font-weight: 700; height: px; font-size: large; margin-bottom: 91px;\">\n          <!-- ------------------------    Skill     --------------------------- -->\n          \n                <style>\n                  @keyframes skill1 {\n                    from {\n                      width: 0\\%;\n                    }\n                    to {\n                      width: 34\\%;\n                    }\n                  }\n                </style>\n            <div style=\"width:100\\%; display:flex ;\">\n            <span style=\"width:70\\%; border:0px solid rgb(108, 76, 223);  margin-top: 40px;\">\n                             &nbsp;&nbsp; asd\n                           </span>\n            <span style=\"width:30\\%; border:0px solid red; text-align: right; margin-top: 40px;\">\n                             34\\% &nbsp;&nbsp;\n                           </span>\n          </div>\n          <div style=\"margin-top: 4px; width:100\\%; background-color: rgb(146, 146, 150); height: 7px;border-radius: 100px 100px 100px 100px;\">\n    \n            <div style=\"width: 34\\%; background-color: black;height: 7px;border-radius: 100px 100px 100px 100px;animation-name: skill1;animation-duration: 3s; animation-delay: 1s; margin-bottom: 20px;\"></div>\n    \n          </div>\n          <!-- ------------------------    /Skill     --------------------------- -->\n    \n    \n      \n    \n    \n          \n    \n        </div>\n        <!-- coloum number 2 -->\n      </div>\n      <!--row-->\n      <!-- im not shore about it -->\n    \n      </div>\n      <!----------- left side div ends here ------->\n      <!-- im not shore about it -->\n    \n    \n      </div>\n      <!--container-->\n      <!-- im not shore about it -->\n    \n    \n    \n    \n    \n    \n    \n    \n      <!-- -------------------           degree                ---------------- -->\n    \n<style>\n .trapezoid1:after { content: \'      ()\'  }\n .trapezoid2:after { content: \'     ()\'  }\n .trapezoid3:after { content: \'     ()\'  }\n</style>\n    \n    \n    \n      <div class=\"education\" id=\"section3\">\n        <h1 style=\"font-family: arial; color: #000; \"><u>My</u> Education</h1>\n        <br><br>\n        <div data-aos=\"fade-right\" class=\"trapezoid1\"></div><br><br>\n    \n        <div data-aos=\"fade-left\" class=\"trapezoid2 \"></div><br><br>\n    \n        <div data-aos=\"fade-right\" class=\"trapezoid3 \"></div><br><br>\n    \n      </div>\n    \n    \n    \n    \n      <!-- -------------------           /degree                ---------------- -->\n    \n    \n    \n    \n    <!-- ---------------------           Reaturn top button         ---------------------- -->\n    \n    \n    \n    <a href=\"#\" class=\"to-top\">\n      <i style=\"font-size: 100\\%;\" class=\"fa fa-angle-double-up\"></i>\n    </a>\n    \n    \n    \n    <!-- ---------------------           /Reaturn Top button         ---------------------- -->\n    \n    \n    \n    \n    <!-- --------------------------------         TimeLine           ----------------------------- -->\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    <div class=\"section4\" style=\"background-color: #ffffff;\">\n      <br id=\"section4\">\n          <h1 class=\"experience\" style=\"font-family: arial; color: #000; \"><u></u> Experience</h1>\n      \n    \n    \n       \n      <section class=\"timeline\" style=\"margin-top:0px;\">\n        <div class=\"container\">\n          <!--  <div class=\"timeline-item\">\n            <div class=\"timeline-img\"></div>\n      \n            <div class=\"timeline-content \"  data-aos=\"fade-left\">\n              <h2 style=\" display:flex; justify-content: center;\">FREELANCER</h2>\n              <div class=\"date\" sty>1 MAY 2016</div>\n              <div>hello</div>\n            </div>\n          </div>  -->\n      \n          <div class=\"timeline-item\">\n      \n            <div class=\"timeline-img\"></div>\n      \n            <div class=\"timeline-content timeline-card \"  data-aos=\"fade-right\"  style=\"background-color: #dbd9d9;\">\n              <div class=\"timeline-img-header\" style=\"background-image: url(images/xp1.jpg);\">\n                <h2>asd</h2>\n              </div>\n              <div class=\"date\"></div>\n              <p style=\"color: #000000;\">hell<br><br></p>\n            </div>\n      \n          </div> \n          <div class=\"timeline-item\">\n      \n            \n            <div class=\"timeline-img\" style=\"background-color: #000;\"></div>\n      \n            <div class=\"timeline-content timeline-card \"  data-aos=\"fade-left\"style=\"background-color: #dbd9d9;\">\n              <div class=\"timeline-img-header img-fluid\" style=\"background-image: url(images/xp2.jpg); \">\n                <h2>undefined</h2>\n              </div>\n              <div class=\"date\">undefined</div>\n              <p style=\"color: #000000;\">undefined<br><br></p>\n            </div>\n          </div>       \n        </div>\n      </section>\n    \n    \n    \n    </div><!-- section 4 -->\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    <!-- --------------------------------         /TimeLine           ----------------------------- -->\n    \n    \n    \n    <!-- ---------------------------          Project                 ----------------------- -->\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    <br id=\"section5\">\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    <!-- ---------------------------          /Project                 ----------------------- -->\n    \n    \n    \n    \n    \n    \n    \n    <!-- ---------------------------          Album                 ----------------------- -->\n    \n    \n    \n      \n    <div style=\"background-color:white; \">\n    <span id=\"section6\">\n      </span>\n      <h5 class=\"section-title2 h1\" ><u>AC</u>HIEVEMENTS</h5>\n      \n      <!-- <ul class=\"nav nav-pills mb-3 \" id=\"pills-tab\" role=\"tablist\" style=\"display:flex; justify-content: center; margin-top: 18px;padding-top: px; \">\n    \n    \n        \n        <li class=\"nav-item  active\" role=\"presentation\">\n          <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-Random\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\" style=\"color: rgb(0, 0, 0); font-size: 120\\%; \">Random</a>\n        </li>\n    \n    \n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link\" id=\"pills-web-tab\" data-toggle=\"pill\" href=\"#website\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\"  style=\"color: rgb(0, 0, 0); font-size: 120\\%; \" >Web</a>\n        </li>\n    \n    \n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contactu\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\"  style=\"color: rgb(0, 0, 0); font-size: 120\\%; \">Graphic</a>\n        </li>\n      </ul> -->\n    \n    \n    \n    \n    <!-- Album number 1 -->\n    \n    \n    \n    \n      <div class=\"tab-content \" id=\"pills-tabContent\"  style=\"display:flex; justify-content: center;text-align:center;margin-top: -23px;\">\n        <div class=\"tab-pane fade in active\" id=\"pills-Random\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n    \n            <div class=\"slider\"><figure class=\"slider__item\" style=\"\"><a href=\"images/Random/achieve1.png\"><img class=\"slider__image\" src=\"images/Random/achieve1.png\"></a>\n                <!-- <figcaption class=\"slider__caption\" style=\"margin-top: 6px;\">Git Hub Activities</figcaption> -->\n              </figure> \n            </div>\n    \n    \n        <div class=\"slider__btn\"  style=\" border-right: 2vmin solid rgba(58, 58, 58, 0.8);border-bottom: 2vmin solid rgba(36, 36, 36, 0.65);margin-top:-8\\%;\" ></div>\n    \n    </div>\n    </div>\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n      <div class=\"tab-content \" id=\"pills-tabContent\"  style=\"display:flex; justify-content: center;text-align:center;margin-top: -23px;\">\n        <div class=\"tab-pane fade  \" id=\"website\" role=\"tabpanel\" aria-labelledby=\"pills-web\">\n    \n            \n    \n    \n        <div class=\"slider__btn\"  style=\" border-right: 2vmin solid rgba(58, 58, 58, 0.8);border-bottom: 2vmin solid rgba(36, 36, 36, 0.65);margin-top:-8\\%;\" ></div>\n    \n    \n    </div>\n    \n    \n    \n    \n    \n    <!-- \n    <div class=\"tab-pane fade\" id=\"pills-web-tab\" role=\"tabpanel\" aria-labelledby=\"pills-web-tab\">\n            <b>hello</b>hi\n    \n    </div> -->\n    \n    \n    \n    \n    \n    <div class=\"tab-pane fade \" id=\"pills-contactu\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n            \n                    DOG\n        </div>\n    \n    \n      </div>\n    \n    \n    </div>\n    </div><!-- content -->\n    \n    \n    \n    <!-- ---------------------------          /Album                 ------------------------>\n    \n    \n    \n    <br><br><br><br><br><br><br><br>\n    \n    \n    \n    <div class=\"jambotron\" style=\"background-color: rgb(206, 204, 204); flex-direction: column; margin-top:-72px;height: 190px; width: 100\\%;  display: flex; justify-content: center; text-align: center; \">\n      <div style=\"font-size: 139\\%;color:rgb(0, 0, 0); font-weight: 700; margin-bottom: 15px; \"> hello </div>\n      <!-- <div>share it</div> -->\n      <div style=\"margin-top:-92px;margin-left:-39px;  color: rgb(0, 0, 0);\"> <ul class=\"footer-social-list\">\n        <li><a class=\"effect\" href=\"https://www.facebook.com/sharer/sharer.php?u=https://stackoverflow.com/questions/61980062/download-button-code-is-not-working-why/61980189?noredirect=1#comment109622110_61980189\"  target=\"_blank\" ><i class=\"fa fa-facebook\"></i></a></li>\n        <li><a class=\"effect\" href=\"https://twitter.com/home\" target=\"_blank\" ><i class=\"fa fa-twitter\"></i></a></li>\n        <li><a class=\"effect\" href=\"https://github.com/mshahmirkhan\" target=\"_blank\" ><i class=\"fa fa-github\"></i></a></li>\n        <li><a class=\"effect\" href=\"https://www.linkedin.cn/feed/\" target=\"_blank\" ><b><i class=\"fa fa-linkedin\" ></i></b></a></li>\n        <!-- <li><a class=\"effect\" href=\"#\"><i class=\"fa fa-behance\"></i></a></li> -->\n        <li><a class=\"effect\" href=\"https://www.instagram.com/\" target=\"_blank\" ><i class=\"fa fa-instagram\" style=\"font-size: 55\\%;font-weight: bolder;\"></i></a></li>\n    </ul>\n    \n    \n    \n   \n    </div>\n      <div style=\"font-size: 91\\%; color: rgb(0, 0, 0);\">Life CV &copy; 2022. all right reserved, designed by <strong><a href=\"\" target=\"_blank\">GrowUp</a></strong></div>\n    </div>\n    \n    \n    \n    \n    \n    \n    \n    \n      <!---------------------------                   HOME writting animation                                 ------------------- -->\n    \n    \n      <script>\n        var TxtRotate = function(el, toRotate, period) {\n          this.toRotate = toRotate;\n          this.el = el;\n          this.loopNum = 0;\n          this.period = parseInt(period, 10) || 2000;\n          this.txt = \'\';\n          this.tick();\n          this.isDeleting = false;\n        };\n    \n        TxtRotate.prototype.tick = function() {\n          var i = this.loopNum \\% this.toRotate.length;\n          var fullTxt = this.toRotate[i];\n    \n          if (this.isDeleting) {\n            this.txt = fullTxt.substring(0, this.txt.length - 1);\n          } else {\n            this.txt = fullTxt.substring(0, this.txt.length + 1);\n          }\n    \n          this.el.innerHTML = \'<span class=\"wrap\">\' + this.txt + \'</span>\';\n    \n          var that = this;\n          var delta = 300 - Math.random() * 100;\n    \n          if (this.isDeleting) {\n            delta /= 2;\n          }\n    \n          if (!this.isDeleting && this.txt === fullTxt) {\n            delta = this.period;\n            this.isDeleting = true;\n          } else if (this.isDeleting && this.txt === \'\') {\n            this.isDeleting = false;\n            this.loopNum++;\n            delta = 500;\n          }\n    \n          setTimeout(function() {\n            that.tick();\n          }, delta);\n        };\n    \n        window.onload = function() {\n          var elements = document.getElementsByClassName(\'txt-rotate\');\n          for (var i = 0; i < elements.length; i++) {\n            var toRotate = elements[i].getAttribute(\'data-rotate\');\n            var period = elements[i].getAttribute(\'data-period\');\n            if (toRotate) {\n              new TxtRotate(elements[i], JSON.parse(toRotate), period);\n            }\n          }\n          // INJECT CSS\n          var css = document.createElement(\"style\");\n          css.type = \"text/css\";\n          css.innerHTML = \".txt-rotate > .wrap { border-right: 0.08em solid #666 }\";\n          document.body.appendChild(css);\n        };\n      </script>\n    \n    \n    \n      <!---------------------------                   /HOME writting animation                                 ------------------- -->\n    \n    \n    \n    \n    \n      <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n      <script>\n        AOS.init({\n          duration: 1000\n        });\n      </script>\n    \n    <!-----------------------    back to top    ---------------------------------->\n    <script>\n     const toTop = document.querySelector(\".to-top\");\n    \n    window.addEventListener(\"scroll\", () => {\n      if (window.pageYOffset > 500) {\n        toTop.classList.add(\"active\");\n      } else {\n        toTop.classList.remove(\"active\");\n      }\n    })\n    </script>\n    \n    <!-----------------------    /back to top    ---------------------------------->\n    \n    \n    <!-----------------------    album    ---------------------------------->\n    \n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\">\n    \n    </script>\n    <script>\n    \n    \n      $(function(){\n        var	btn = $(\".slider__btn\");\n        \n        btn.on(\"click\",function(){\n          $(\".slider__item\").first().clone().appendTo(\".slider\");\n          $(\".slider__image\").first().css({transform: \"rotateX(-180deg)\", opacity: 0});\n          setTimeout(function(){\n            $(\".slider__item\").first().remove();\n          },200);\n        });\n      });\n      \n      \n      </script>\n    \n    <!-----------------------    /album    ---------------------------------->\n    \n    \n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n    </body>\n    \n    </html> ');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('q6GN7h8_h8Uk0wdveGVehOHc1CBpHz6c',1646335762,'{\"cookie\":{\"originalMaxAge\":7200000,\"expires\":\"2022-03-03T19:18:25.717Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"userId\":26,\"user\":\"b\",\"status\":0,\"host\":\"hello\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `Status` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'a','a','a',0),(2,'abc','abc@abc.com','aaaaAAAA1',0),(3,'zxczxc','zxcszxc@xcxcx.com',NULL,0),(10,'abc','abc1@abc.com','aaaaAAAA1',0),(14,'abc','ab1c@abc.com','aaaaAAAA1',0),(16,'abc','abc1231@anc.com','aaaaAAAA1',0),(17,'hello','1234',NULL,0),(18,'name','name@name.com','aaaaAAAA1',0),(19,'Shahmir','sshhaahhmmiirr@gmail.cm','1235678Kk',0),(20,'a','a@a.com','a',1),(21,'shahnir','sshhaahhmmiirr@gmail.com','Shahmir1',0),(22,'saad razzaq','saadrazza@gmail.com','Saad-12321',0),(23,'Muhammad Anser','muhammadanser360@gmail.com','Allah786@',0),(24,'a2','a@ab.com','aaaaAAAA1',0),(25,'aasad','asd@asd.com','aaaaAAAA1',0),(26,'b','b@b.com','b',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-03 22:36:21
