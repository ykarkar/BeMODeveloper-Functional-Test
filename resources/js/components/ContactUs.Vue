<template>
  <div>
    <div class="banner video_banner">
      <div id="feature" class="bghide">
        <img id="featureImg" src="/images/contact-us.png" />
        <div id="extraContainer11">
          <div class="videoWrapper"></div>
        </div>

        <div id="extraContainer1"></div>

        <div class="banner-text"></div>
        <div id="extraContainer9"></div>
      </div>
    </div>

    <div id="container">
      <div id="extraContainer7"></div>
      <div id="extraContainer8"></div>

      <section>
        <div id="padding">
          <div class="message-text">
            <span style="font-size: 17px; font-weight: bold"
              >BeMo Academic Consulting Inc. </span
            ><br /><span
              ><span style="font-size: 13px; font-weight: bold"
                ><u>Toll Free</u></span
              ><span style="font-size: 13px">: </span
              ><span style="font-size: 14px">1-855-900-BeMo (2366)</span
              ><span style="font-size: 13px"><br /></span
              ><span style="font-size: 13px; font-weight: bold"
                ><u>Email</u></span
              ><span style="font-size: 13px">: </span
              ><span style="font-size: 14px"
                >info@bemoacademicconsulting.com</span
              ></span
            >
          </div>
          <br />

          <form
            action="./contact-us_files/mailer.php"
            method="post"
            enctype="multipart/form-data"
          >
            <div>
              <div class="message-text">
                <span style="font-size: 17px; font-weight: bold"
                  >BeMo Academic Consulting Inc. </span
                ><br /><span
                  ><span style="font-size: 13px; font-weight: bold"
                    ><u>Toll Free</u></span
                  ><span style="font-size: 13px">: </span
                  ><span style="font-size: 14px">1-855-900-BeMo (2366)</span
                  ><span style="font-size: 13px"><br /></span
                  ><span style="font-size: 13px; font-weight: bold"
                    ><u>Email</u></span
                  ><span style="font-size: 13px">: </span
                  ><span style="font-size: 14px"
                    >info@bemoacademicconsulting.com</span
                  ></span
                >
              </div>
              <label>Name:</label> *<br />
              <input
                class="form-input-field"
                type="text"
                value=""
                name="form[element0]"
                size="40"
              /><br /><br />

              <label>Email Address:</label> *<br />
              <input
                class="form-input-field"
                type="text"
                value=""
                name="form[element1]"
                size="40"
              /><br /><br />

              <label>How can we help you?</label> *<br />
              <textarea
                class="form-input-field"
                name="form[element2]"
                rows="8"
                cols="38"
              ></textarea
              ><br /><br />

              <div style="display: none">
                <div class="message-text">
                  <span style="font-size: 17px; font-weight: bold"
                    >BeMo Academic Consulting Inc. </span
                  ><br /><span
                    ><span style="font-size: 13px; font-weight: bold"
                      ><u>Toll Free</u></span
                    ><span style="font-size: 13px">: </span
                    ><span style="font-size: 14px">1-855-900-BeMo (2366)</span
                    ><span style="font-size: 13px"><br /></span
                    ><span style="font-size: 13px; font-weight: bold"
                      ><u>Email</u></span
                    ><span style="font-size: 13px">: </span
                    ><span style="font-size: 14px"
                      >info@bemoacademicconsulting.com</span
                    ></span
                  >
                </div>
                <label>Spam Protection: Please don't fill this in:</label>
                <textarea name="comment" rows="1" cols="1"></textarea>
              </div>
              <input
                type="hidden"
                name="form_token"
                value="1158479835f6d1cb63826c"
              />
              <input
                class="form-input-button"
                type="reset"
                name="resetButton"
                value="Reset"
              />
              <input
                class="form-input-button"
                type="submit"
                name="submitButton"
                value="Submit"
              />
            </div>
          </form>

          <br />
          <div class="form-footer">
            <span style="font-size: 15px; font-weight: bold"><u>Note</u></span
            ><span style="font-size: 15px"
              >: If you are having difficulties with our contact us form above,
              send us an email to info@bemoacademicconsulting.com (copy &amp;
              paste the email address)</span
            ><span style="font-size: 13px"><br /></span>
          </div>
          <br />
        </div>
      </section>
      <div id="asidewrap">
        <aside>
          <div id="sidecontent">
            <div id="sideTitle"></div>
          </div>
        </aside>
      </div>
      <div class="clear"></div>

      <div id="ecwrap"></div>
      <div id="ec2wrap"><div id="extraContainer2"></div></div>
      <div id="ec3wrap"><div id="extraContainer3"></div></div>
      <div id="ec4wrap"><div id="extraContainer4"></div></div>
      <div id="ec5wrap"><div id="extraContainer5"></div></div>
      <div id="ec6wrap"><div id="extraContainer6"></div></div>

      <div id="extraContainer10">
        <aside>
          <div id="sidecontent">
            <div id="sideTitle"></div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "contactUs",
};
</script>
 
<style scoped>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
}

.videoWrapper {
  position: relative;
  z-index: 1;
  display: none;
}
section #padding, h1.blog-entry-title, aside, .movie-page-title, #sideTitle, section #padding h1, section #padding h2, section #padding h3, section #padding h4, section #padding h5, section #padding h6  {
	text-align: center!important;
	}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  line-height: normal !important;
}

#container {
  position: relative;
}

#container a {
  -webkit-transition: all 450ms;
  -moz-transition: all 450ms;
  -ms-transition: all 450ms;
  -o-transition: all 450ms;
  transition: all 450ms;
}

h1 {
  font-size: 38px;
}
h2 {
  font-size: 34px;
}
h3 {
  font-size: 30px;
}
h4 {
  font-size: 26px;
}
h5 {
  font-size: 22px;
}
h6 {
  font-size: 18px;
}

#extraContainer1 {
  position: relative;
  z-index: 100;
}

#extraContainer11 {
  display: none;
}

section h1 {
  line-height: 32px;
}

section h2,
section h3,
section h4,
section h5,
section h6 {
  line-height: normal;
}

#feature {
  position: relative;
  margin-bottom: -6px;
}

#featureImg {
  width: 100%;
  height: auto;
}

.fImg {
  display: none;
}

#feature.bghide {
  background-image: none;
}

#padding .message-text {
  padding-bottom: 20px;

  font-size: 22px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 32px;
}

.message-text {
  display: none;
}

form div .message-text {
  display: block;
}

form div {
  padding-top: 5px;
  padding-bottom: 50px;
}

#padding .message-text {
  background: none;
}

form div #padding .message-text {
  display: none;
}

form div label {
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 1px;
}

.form-input-field {
  width: 70%;
  width: 85%;
  margin-top: 7px;
  padding: 9px;
  outline: none;
  border: none;
}

.form-input-button {
  padding: 7px 28px 7px 28px;
  margin: 10px 10px 0 0;
  text-transform: uppercase;
  font-size: 0.75em;
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-transition: all 450ms;
  -moz-transition: all 450ms;
  -ms-transition: all 450ms;
  -o-transition: all 450ms;
  transition: all 450ms;
}

.form-input-button:hover {
  background-color: rgba(255, 255, 255, 0.3) !important;
}
.desktopScreenNavbar, nav ul ul, .mobileScreenNavbar, .mobileb, .navb {
	background-color: #FFFFFF;
}

#lt, #lm, #lb {
	background: #000000;
}


#sideTitle {
	color: #FFFFFF;
	}

aside {
	color: #373737;
}

#wrapper #titlelogo h1, #container header h1 {
	color: #000066;
	}

a.social, a.social1 {
	color: #FFFFFF!important;
}

a.social:hover, a.social1:hover {
	color: #999999!important;
}


#wrapper nav ul li a, #container nav ul li a {
	color: #000000;
	}


nav ul li a:hover, nav > ul > li#current > a, nav > ul > li > ul > li#current > a, nav > ul > li#currentAncestor > a, nav > ul > li > ul > li > ul > li#current > a, nav > ul > li > ul > li#currentAncestor > a, nav ul li ul li:hover:after   {
	color: #000066;
	
}

#extraContainer9 {
	color: #FFFFFF;
}

#extraContainer9:after {
	border-bottom-color: #FFFFFF;
}

#extraContainer8:after, .movie-page-title:after, .album-title:after  {
	color: #DDDDDD;
}


.thumbnail-caption {
	color: #373737;
}

nav ul li:hover:after, nav > ul > li#current:after, .banner-text:after, header nav > ul > li > a#currentAncestor::after, nav > ul > li > a#current:after, nav ul li a:hover:after, header nav > ul > li > a#currentAncestor::after {
	border-bottom-color: #000066;
}


section, .album-description, .photo-background p.photo-caption, .photo-background p, p.photo-links a {
	color: #373737;
	}

#footer {
	color: #FFFFFF;
	}

#container h1, #container h2, #container h3, #container h4, #container h5,#container h6, .album-title, .movie-page-title, #padding .message-text, #extraContainer8 {
	color: #373737;
} 

 #extraContainer2 h1, #extraContainer2 h2, #extraContainer2 h3, #extraContainer2 h4, #extraContainer2 h5, #extraContainer2 h6 {
 	color: #373737;
 	}

#extraContainer3 h1, #extraContainer3 h2, #extraContainer3 h3, #extraContainer3 h4, #extraContainer3 h5, #extraContainer3 h6 {
	color: #373737;
	}

#extraContainer4 h1, #extraContainer4 h2, #extraContainer4 h3, #extraContainer4 h4, #extraContainer4 h5, #extraContainer4 h6 {
	color: #373737;
	}

#extraContainer5 h1, #extraContainer5 h2, #extraContainer5 h3, #extraContainer5 h4, #extraContainer5 h5, #extraContainer5 h6 {
	color: #373737;
	}

#extraContainer6 h1, #extraContainer6 h2, #extraContainer6 h3, #extraContainer6 h4, #extraContainer6 h5, #extraContainer6 h6 {
	color: #FFFFFF;
	}



aside, section #padding,  .photo-background, #container, html   {
	background-color: #FFFFFF;
	
}

footer {background-color: #000066;}

#container a, #footer a {
	color: #FF6600;
}

#extraContainer7 a, #extraContainer8 a {
	color: #FF6600;
}

#container a:hover, #footer a:hover  {
	color: #909090;
}

#extraContainer2 {
	background-color: #DDDDDD;
}

#extraContainer3 {
	background-color: #CCCCCC;
}

#extraContainer4 {
	background-color: #BBBBBB;
}

#extraContainer5 {
	background-color: #AAAAAA;
}

#extraContainer6 {
	background-color: #999999;
}


.blog-entry{
	border-bottom-color: #DDDDDD;
	}
	
#blog-categories {
	border-top-color: #DDDDDD;
	}

.thumbnail-frame, .movie-thumbnail-frame {
	border-color: #DDDDDD;
	}
.form-input-field {
	background: #CCCCCC;
	}

.form-input-button {
	background: #999999;	
	}


form div label {
	color: #373737;
}

.form-input-field {
	color: #333333;
}

.form-input-button {
	color: #000066;
}


@media only screen and (max-width: 960px) {
nav {
	background-color: #FFFFFF;
}

}

@media only screen and (max-width: 1060px) {

nav ul li {
	padding-left: 21px;
	padding-right: 21px;
	}


}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {	
	
section #padding, aside, #extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6 {
	background-attachment: scroll!important;
	}

nav > ul > li > ul {
 	top: 83px;
 	}


body{
	-webkit-text-size-adjust: none;
	}
		
}


@media only screen and (max-width: 960px) {

#nwrap {
	width: 100%;
	padding-top: 0;
	}

#mwrap {
	display: block;
	}

.show {
	display: block!important;
	}

nav {
	display: none;
	padding-top: 0;
	position: absolute;
	text-align: center;
	margin: 0 auto;
	width: 100%;
	padding-bottom: 10px;
	}

nav ul {
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	}

nav ul li {
	display: block;
	padding-bottom: 10px;
	padding-top: 10px;
	padding-right: 0;
	padding-left: 0;
	background: none;
	}

nav ul ul {
	background: none;
	}

nav ul ul {
	position: relative;
	padding-top: 10px;
	width: 100%;
	text-align: center;
	margin-left: 0;
	}

nav li li {
	margin: 5px auto;
	}

nav li li a {
	font-size: 11px;
	}

nav li li:hover ul {
	left: 0;
	top: 0;
	}

nav > ul > li > a {
	padding-top: 0;
	}

nav > ul > li > ul {
	top: 35px;	
	}

nav ul li ul li {
	display: block;
	padding: 0;
	padding-top: 5px;
	}

.ie9 nav > ul > li > ul {
	top: 5px;
	left: 0;
	}

.ie8 nav > ul > li > ul {
	top: 5px;
	left: 0;
	}

nav > ul > li > ul {
	top: 5px;
	left: 0;
	}

nav > ul > li#current:after, header nav > ul > li#currentAncestor::after, nav ul li:hover:after  {
	border: none;
	}

nav ul li ul li a:hover:after {
	width: 5%;
	}

nav ul li a:after {
	content: ""; 
	display: block; 
	border-bottom: 1px solid #fff;
	margin: 0px auto; 
	width: 4%;
	padding-bottom: 5px;
	opacity: 0;
	}

nav ul li a:hover:after {
	opacity: 1;
	}

nav ul li ul li:hover:after {
	opacity: 0;
	}

nav > ul > li > a#current:after, nav ul li a:hover:after, header nav > ul > li > a#currentAncestor::after {
	content: ""; 
	display: block; 
	border-bottom: 1px solid #fff;
	margin: 0px auto; 
	width: 4%;
	padding-bottom: 5px;
	}

}

@media only screen and (min-width: 768px) and (max-width: 768px) {

section #padding, aside, #extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6 {
	background-attachment: scroll!important;
	}

#sideTitle {
	margin-top: 26px;
	}

}



@media only screen and (max-width: 768px) {

#mwrap {padding-top: 3.5%;}

#extraContainer9 {
	letter-spacing: 6px;
	}

body{
	-webkit-text-size-adjust: none;
	}

.form-input-field {
	width: 90%;
	}

form {
	margin-left: 0;
	}

}


@media only screen and (max-width: 767px) {

#footer {
	display: block;
	padding-bottom: 10px;
}

#socialicons, #socialicons1 {
	float: none;
	text-align: left;
	padding-bottom: 10px;
	}

.movie-thumbnail-frame {
	display: block;
	margin-left: auto;
	margin-right: auto;
	}

.form-input-field {
	width: 96.5%;
	}

form {
	margin-left: 0;
	}

}


@media only screen and (max-width: 568px) {

#mwrap {
	padding-top: 4%;
	}

header {
	position: absolute;
	}

#titlelogo h1 {
	font-size: 24px!important;
	}

#titlelogo h2 {
	font-size: 12px!important;
	}

#extraContainer9 {
	font-size: 32px!important;
	line-height: 32px;
	letter-spacing: 3px!important;
	}

#extraContainer9:after, #extraContainer8:after {
	padding-bottom: 6px;
	}

#extraContainer8, .movie-page-title, #sideTitle {
	font-size: 28px!important;
	}

h1.blog-entry-title a, #sideTitle {
	font-size: 24px!important;
	}

.blog-entry-date {
	font-size: 15px;
	}

.thumbnail-caption {
	font-size: 16px;
	}

.movie-thumbnail-caption {
	font-size: 14px;
	}

section #padding, aside, #extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6 {
	background-attachment: scroll!important;
	}

#extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6 {
	margin-top: 40px;
	}

#footer {
	padding-top: 20px;
	text-align: left;
	padding-bottom: 10px;
	}

#padding .message-text {
	font-size: 20px!important;
	}

.scrollup {
	opacity: 0!important;
	}

section h1, .album-title, .movie-page-title, .album-title, .filesharing-description, #padding .message-text, h1 {
	font-size: 28px!important;
	line-height: 28px;
	}

h1, section h1, #extraContainer2 h1, #extraContainer3 h1, #extraContainer4 h1, #extraContainer5 h1, #extraContainer6 h1 {font-size: 28px!important; line-height: 32px!important;}
h2, section h2, #extraContainer2 h2, #extraContainer3 h2, #extraContainer4 h2, #extraContainer5 h2, #extraContainer6 h2 {font-size: 24px!important;}
h3, section h3, #extraContainer2 h3, #extraContainer3 h3, #extraContainer4 h3, #extraContainer5 h3, #extraContainer6 h3 {font-size: 22px!important;}
h4, section h4, #extraContainer2 h4, #extraContainer3 h4, #extraContainer4 h4, #extraContainer5 h4, #extraContainer6 h4 {font-size: 20px!important;}
h5, section h5, #extraContainer2 h5, #extraContainer3 h5, #extraContainer4 h5, #extraContainer5 h5, #extraContainer6 h5 {font-size: 18px!important;}
h6, section h6, #extraContainer2 h6, #extraContainer3 h6, #extraContainer4 h6, #extraContainer5 h6, #extraContainer6 h6 {font-size: 16px!important;}

#blog-categories:before, #blog-archives:before, ul.blog-tag-cloud:before, #blog-rss-feeds:before {
	padding-bottom: 0;
	}

#blog-rss-feeds {
	margin-bottom: 20px;
	}

.movie-thumbnail-frame:hover{
	background-position: 55% 40%;
	}

#padding .message-text {
	font-size: 20px!important;
	}


}


@media only screen and (max-width: 320px) {

#extraContainer9 {
	font-size: 18px!important;
	line-height: 18px;
	}

#extraContainer9:after {
  border-bottom: 1px solid;
  }

#extraContainer8, .movie-page-title, #sideTitle  {
	font-size: 24px!important;
	}

#padding .message-text {
	font-size: 20px!important;
	}

#titlelogo h1 {
	font-size: 18px!important;
	margin: 0.45em 0;
	}

#mwrap {
	padding-top: 5%;
	}

.movie-thumbnail-frame, .movie-thumbnail-frame img {
	width: 220px!important;
	height: 175px!important;
	}

h1.blog-entry-title a, #sideTitle {
	font-size: 20px!important;
	}

.movie-page-title, .album-title, #extraContainer8  {
	padding-top: 30px;
	}

.album-title:after, .movie-page-title:after, #extraContainer8:after  {
	width: 15%;
	}

.album-description, .movie-page-description {padding: 0% 3% 0% 3%;}

.form-input-button {
 	padding: 7px 18px 7px 18px;
 	}

.thumbnail-wrap {
	width: 200px!important;
	height: 200px!important;
	}

.thumbnail-frame img {
	width: 200px!important;
	height: 200px!important;
	}

.thumbnail-frame  {
	width: 200px!important;
	height: 260px!important;
	}

}

</style>