<template>
  <header
    class="navbar navbar-default navbar-inverse navbar-fixed-top mobileb"
    role="navigation"
  >
    <div id="headwrap">
      <div id="titlelogo">
        <a href="/">
          <div id="logo">
            <img
              src="/images/bemo-logo2.png"
              alt="Site logo"
              width="167"
              height="100"
            />
          </div>
          <h1></h1
        ></a>
        <h2></h2>
      </div>
    </div>

    
    <div id="mwrap">
      <div id="lt"></div>
      <div id="lm"></div>
      <div id="lb"></div>
    </div>
    <div id="nwrap">
      <nav class="show navb">
        <ul class="navigation">
          <li id="current">
            <a href="/" rel="self" id="current">Main</a>
          </li>
          <li>
            <a href="how-to-prepare-for-cda-interview.html" rel="self"
              >How To Prepare</a
            >
          </li>
          <li>
            <a href="sample-cda-interview-questions.html" rel="self"
              >CDA Interview Questions</a
            >
          </li>
          <li><a href="/contactUs" rel="self">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
 
<script>
var isClicked = $(this).data("clicked");
if (isClicked) {
  isClicked = false;
} else {
  isClicked = true;
}
$(this).data("clicked", isClicked);

if (isClicked) {
  jQuery("nav, #menuBtn").addClass("show"), "open";
  $("header").addClass("mobileb");
  $("nav").addClass("navb");
  $("nav ul ul").addClass("navul");
} else {
  jQuery("nav, #menuBtn").removeClass("show"), "open";
  $("header").removeClass("mobileb");
  $("nav").removeClass("navb");
  $("nav ul ul").removeClass("navul");
}

export default {
  name: "cmp-navbar",
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

#titlelogo {
  display: inline-block;
  float: left;
  width: 25%;
  padding-left: 3%;
}
#titlelogo h1 {
  display: inline-block;
  margin: 0.9em 0;
}

#titlelogo h2 {
  letter-spacing: 2px;
  line-height: 32px !important;
  text-align: center;
  display: none;
}
#logo {
  display: inline-block;
}

#lt,
#lm,
#lb {
  width: 20px;
  height: 3px;
  margin-bottom: 2px;
}
#mwrap {
  display: inline-block;
  float: right;
  padding-right: 3%;
  padding-top: 4%;
  display: none;
  z-index: 1000;
}
#nwrap {
  display: block;
  float: right;
  width: 70%;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3000;
}

.photo-header navigation {
  margin: 20px auto 0 auto;
  padding: 20px;
  border-top: none;
  height: 111px;
  position: relative;
  font-size: 2.5em;
  text-align: center;
}

nav {
  z-index: 10000;
  text-align: right;
  letter-spacing: 1px;
  padding-right: 3%;
  position: relative;
}

nav > ul {
  position: relative;
}

nav ul li {
  display: inline-block;
  position: relative;
  padding-bottom: 30px;
  padding: 0 27px;
  padding-top: 30px;
  padding-bottom: 30px;
}

nav ul li a {
  padding-bottom: 30px;
}

nav ul li ul li a {
  padding-bottom: 0;
}

nav > ul > li#current:after {
  content: "";
  display: block;
  opacity: 1;
  border-bottom: 1px solid;
  margin: 0px auto;
  width: 40%;
}

nav ul li:after {
  content: "";
  display: block;
  border-bottom: 1px solid;
  margin: 0px auto;
  width: 40%;
  opacity: 0;
}

nav ul li:hover:after {
  content: "";
  display: block;
  border-bottom: 1px solid;
  width: 40%;
  opacity: 1;
}

nav ul li ul li:hover:after {
  opacity: 0;
}

nav ul li ul li:after {
  content: "";
  display: block;
  border-bottom: 1px solid;
  width: 25%;
  opacity: 0;
  padding-bottom: 3px;
}

nav ul li ul li:hover:after {
  content: "";
  display: block;
  width: 25%;
  opacity: 1;
  padding-bottom: 3px;
}

nav ul li ul li:hover {
}

.ie8 nav ul li:after {
  display: none;
}

.ie8 header nav > ul > li > a#currentAncestor:after {
  display: none;
}

.ie8 nav > ul > li#current:after {
  display: none;
}

nav ul ul {
  position: absolute;
  display: none;
  list-style: none;
  line-height: 0;
  z-index: 1000;
  padding-top: 12px;
  padding-bottom: 6px;
  width: 150px;
  left: 50%;
  margin-left: -75px;
}

nav li li {
  text-shadow: none;
  line-height: 0px;
  position: relative;
  display: block;
  padding: 0;
  font-size: 12px;
  line-height: 14px;
  padding: 7px 20px 7px 20px;
}

nav li li a {
  display: block;
  font-size: 12px;
  text-shadow: none;
  line-height: 18px;
  text-align: center;
}

nav li li a:hover {
}

nav li li li li li {
  display: none;
}
nav {
  text-align: right;
  letter-spacing: 1px;
}

nav > ul > li#current:after {
  content: "";
  display: block;
  opacity: 1;
  border-bottom: 1px solid;
  margin: 0px auto;
  width: 40%;
}

ul.disc {
  list-style-type: disc;
  padding-left: 20px;
}
ul.circle {
  list-style-type: circle;
  padding-left: 20px;
}
ul.square {
  list-style-type: square;
  padding-left: 20px;
}
ol.arabic-numbers {
  list-style-type: decimal;
  padding-left: 20px;
}
ol.upper-alpha {
  list-style-type: upper-alpha;
  padding-left: 20px;
}
ol.lower-alpha {
  list-style-type: lower-alpha;
  padding-left: 20px;
}
ol.upper-roman {
  list-style-type: upper-roman;
  padding-left: 20px;
}
ol.lower-roman {
  list-style-type: lower-roman;
  padding-left: 20px;
}

@media only screen and (max-width: 1060px) {
  nav ul li {
    padding-left: 21px;
    padding-right: 21px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  section #padding,
  aside,
  #extraContainer2,
  #extraContainer3,
  #extraContainer4,
  #extraContainer5,
  #extraContainer6 {
    background-attachment: scroll !important;
  }

  nav > ul > li > ul {
    top: 83px;
  }

  body {
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
    display: block !important;
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

  nav > ul > li#current:after,
  header nav > ul > li#currentAncestor::after,
  nav ul li:hover:after {
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

  nav > ul > li > a#current:after,
  nav ul li a:hover:after,
  header nav > ul > li > a#currentAncestor::after {
    content: "";
    display: block;
    border-bottom: 1px solid #fff;
    margin: 0px auto;
    width: 4%;
    padding-bottom: 5px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 768px) {
  section #padding,
  aside,
  #extraContainer2,
  #extraContainer3,
  #extraContainer4,
  #extraContainer5,
  #extraContainer6 {
    background-attachment: scroll !important;
  }

  #sideTitle {
    margin-top: 26px;
  }
}

@media only screen and (max-width: 768px) {
  #mwrap {
    padding-top: 3.5%;
  }

  #extraContainer9 {
    letter-spacing: 6px;
  }

  body {
    -webkit-text-size-adjust: none;
  }

  .form-input-field {
    width: 90%;
  }

  form {
    margin-left: 0;
  }
}

.desktopScreenNavbar,
nav ul ul,
.navb,
.mobileScreenNavbar,
.mobileb {
  background-color: rgba(255, 255, 255, 0.9);
}

.navul {
  background: none;
}

@media only screen and (max-width: 767px) {
  #footer {
    display: block;
    padding-bottom: 10px;
  }

  #socialicons,
  #socialicons1 {
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
    font-size: 24px !important;
  }

  #titlelogo h2 {
    font-size: 12px !important;
  }

  #extraContainer9 {
    font-size: 32px !important;
    line-height: 32px;
    letter-spacing: 3px !important;
  }

  #extraContainer9:after,
  #extraContainer8:after {
    padding-bottom: 6px;
  }

  #extraContainer8,
  .movie-page-title,
  #sideTitle {
    font-size: 28px !important;
  }

  h1.blog-entry-title a,
  #sideTitle {
    font-size: 24px !important;
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

  section #padding,
  aside,
  #extraContainer2,
  #extraContainer3,
  #extraContainer4,
  #extraContainer5,
  #extraContainer6 {
    background-attachment: scroll !important;
  }

  #extraContainer2,
  #extraContainer3,
  #extraContainer4,
  #extraContainer5,
  #extraContainer6 {
    margin-top: 40px;
  }

  #footer {
    padding-top: 20px;
    text-align: left;
    padding-bottom: 10px;
  }

  #padding .message-text {
    font-size: 20px !important;
  }

  .scrollup {
    opacity: 0 !important;
  }

  section h1,
  .album-title,
  .movie-page-title,
  .album-title,
  .filesharing-description,
  #padding .message-text,
  h1 {
    font-size: 28px !important;
    line-height: 28px;
  }

  h1,
  section h1,
  #extraContainer2 h1,
  #extraContainer3 h1,
  #extraContainer4 h1,
  #extraContainer5 h1,
  #extraContainer6 h1 {
    font-size: 28px !important;
    line-height: 32px !important;
  }
  h2,
  section h2,
  #extraContainer2 h2,
  #extraContainer3 h2,
  #extraContainer4 h2,
  #extraContainer5 h2,
  #extraContainer6 h2 {
    font-size: 24px !important;
  }
  h3,
  section h3,
  #extraContainer2 h3,
  #extraContainer3 h3,
  #extraContainer4 h3,
  #extraContainer5 h3,
  #extraContainer6 h3 {
    font-size: 22px !important;
  }
  h4,
  section h4,
  #extraContainer2 h4,
  #extraContainer3 h4,
  #extraContainer4 h4,
  #extraContainer5 h4,
  #extraContainer6 h4 {
    font-size: 20px !important;
  }
  h5,
  section h5,
  #extraContainer2 h5,
  #extraContainer3 h5,
  #extraContainer4 h5,
  #extraContainer5 h5,
  #extraContainer6 h5 {
    font-size: 18px !important;
  }
  h6,
  section h6,
  #extraContainer2 h6,
  #extraContainer3 h6,
  #extraContainer4 h6,
  #extraContainer5 h6,
  #extraContainer6 h6 {
    font-size: 16px !important;
  }

  #blog-categories:before,
  #blog-archives:before,
  ul.blog-tag-cloud:before,
  #blog-rss-feeds:before {
    padding-bottom: 0;
  }

  #blog-rss-feeds {
    margin-bottom: 20px;
  }

  .movie-thumbnail-frame:hover {
    background-position: 55% 40%;
  }

  #padding .message-text {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 320px) {
  #extraContainer9 {
    font-size: 18px !important;
    line-height: 18px;
  }

  #extraContainer9:after {
    border-bottom: 1px solid;
  }

  #extraContainer8,
  .movie-page-title,
  #sideTitle {
    font-size: 24px !important;
  }

  #padding .message-text {
    font-size: 20px !important;
  }

  #titlelogo h1 {
    font-size: 18px !important;
    margin: 0.45em 0;
  }

  #mwrap {
    padding-top: 5%;
  }

  .movie-thumbnail-frame,
  .movie-thumbnail-frame img {
    width: 220px !important;
    height: 175px !important;
  }

  h1.blog-entry-title a,
  #sideTitle {
    font-size: 20px !important;
  }

  .movie-page-title,
  .album-title,
  #extraContainer8 {
    padding-top: 30px;
  }

  .album-title:after,
  .movie-page-title:after,
  #extraContainer8:after {
    width: 15%;
  }

  .album-description,
  .movie-page-description {
    padding: 0% 3% 0% 3%;
  }

  .form-input-button {
    padding: 7px 18px 7px 18px;
  }

  .thumbnail-wrap {
    width: 200px !important;
    height: 200px !important;
  }

  .thumbnail-frame img {
    width: 200px !important;
    height: 200px !important;
  }

  .thumbnail-frame {
    width: 200px !important;
    height: 260px !important;
  }
}
</style>