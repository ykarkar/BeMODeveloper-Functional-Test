<template>
  <footer>
    <div id="footer">
      ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
      <a
        href="http://www.cdainterview.com/disclaimer-privacy-policy.html"
        target="_blank"
        ><span style="text-decoration: underline"
          >Disclaimer &amp; Privacy Policy</span
        ></a
      >
      <a href="mailto:info@bemoacademicconsulting.com" id="rw_email_contact"
        ><span style="text-decoration: underline">Contact Us</span></a
      >
    
</div>
    <!-- <div id="socialicons"> -->
      <!-- <div id="socialicons1"></div> -->
      <span id="socialicons" style="float:right;">
      <a class="social" href="https://www.facebook.com/bemoacademicconsulting"
        ><img
              src="/images/fb.png"
              alt="fb icon"
              width="21.79"
              height="22"
            /></a
      ><a class="social" href="https://twitter.com/BeMo_AC"><img
              src="/images/twit.png"
              alt="twiter icon"
              width="21.5"
              height="22"
            /></a>
            </span>
            <!-- </div> -->
    
  </footer>
</template>
 
<script>
export default {
  name: "cmp-footer",
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
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}
footer {
  background-color: #000066;
}
footer {
  padding: 2% 5% 2% 5%;
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
#footer {
  font-size: 16px;
  display: inline-block;
      color: #FFFFFF;
font-size: 13px;
font-family: arial;
}
#container a, #footer a {
    color: #FF6600;
    text-decoration: underline;
}
#container a:hover, #footer a:hover {
    color: #909090;
    font-family: arial;
    text-decoration: underline;
}

@media only screen and (max-width: 767px) {
  #footer {
    display: block;
    padding-bottom: 10px;
  }

  #socialicons,
  #socialicons1 {    
    float: right;
    /* display: inline-block; */
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
  #footer {
    padding-top: 20px;
    text-align: left;
    padding-bottom: 10px;
  }
}
</style>