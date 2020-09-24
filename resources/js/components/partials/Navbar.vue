<template>
  <header
    class="navbar navbar-default navbar-inverse navbar-fixed-top"
    role="navigation"
  >
    <div id="headwrap">
      <div id="titlelogo">
        <a href="https://cdainterview.com/">
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

      <div id="mwrap">
        <div id="lt"></div>
        <div id="lm"></div>
        <div id="lb"></div>
      </div>

      <div id="nwrap">
        <div id="menuBtn"></div>
        <nav>
          <ul class="navigation">
            <li id="current">
              <a href="index.html" rel="self" id="current">Main</a>
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
            <li><a href="contactUs" rel="self">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
 
<script>
export default {
  name: "cmp-navbar",
};
</script>
 
<style scoped>

html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;background:transparent;}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}


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
#nwrap {
  display: block;
  float: right;
  width: 70%;
}

header{
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

nav > ul{
    position: relative;
    }

nav ul li  {
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

nav ul li ul li:hover{}

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

nav li li a{
    display: block;
    font-size: 12px;
   	text-shadow: none;
   	line-height: 18px;
   	text-align: center;
	}

nav li li a:hover {}

nav li li li li li{
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

ul.disc { list-style-type: disc; padding-left: 20px;}
ul.circle{ list-style-type: circle; padding-left: 20px;}
ul.square{ list-style-type: square; padding-left: 20px;}
ol.arabic-numbers{ list-style-type: decimal; padding-left: 20px;}
ol.upper-alpha{ list-style-type: upper-alpha; padding-left: 20px;}
ol.lower-alpha{ list-style-type: lower-alpha; padding-left: 20px;}
ol.upper-roman{ list-style-type: upper-roman; padding-left: 20px;}
ol.lower-roman{ list-style-type: lower-roman; padding-left: 20px;}


</style>