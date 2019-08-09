// HEADER JAVASCRIPT -----------------------------------------------------------------------------------------


/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="throttle"`
 */
;(function(){function t(){}function e(t){return null==t?t===l?d:y:I&&I in Object(t)?n(t):r(t)}function n(t){var e=$.call(t,I),n=t[I];try{t[I]=l;var r=true}catch(t){}var o=_.call(t);return r&&(e?t[I]=n:delete t[I]),o}function r(t){return _.call(t)}function o(t,e,n){function r(e){var n=d,r=g;return d=g=l,x=e,v=t.apply(r,n)}function o(t){return x=t,O=setTimeout(c,e),T?r(t):v}function i(t){var n=t-h,r=t-x,o=e-n;return w?k(o,j-r):o}function f(t){var n=t-h,r=t-x;return h===l||n>=e||n<0||w&&r>=j}function c(){
    var t=D();return f(t)?p(t):(O=setTimeout(c,i(t)),l)}function p(t){return O=l,S&&d?r(t):(d=g=l,v)}function s(){O!==l&&clearTimeout(O),x=0,d=h=g=O=l}function y(){return O===l?v:p(D())}function m(){var t=D(),n=f(t);if(d=arguments,g=this,h=t,n){if(O===l)return o(h);if(w)return O=setTimeout(c,e),r(h)}return O===l&&(O=setTimeout(c,e)),v}var d,g,j,v,O,h,x=0,T=false,w=false,S=true;if(typeof t!="function")throw new TypeError(b);return e=a(e)||0,u(n)&&(T=!!n.leading,w="maxWait"in n,j=w?M(a(n.maxWait)||0,e):j,S="trailing"in n?!!n.trailing:S),
    m.cancel=s,m.flush=y,m}function i(t,e,n){var r=true,i=true;if(typeof t!="function")throw new TypeError(b);return u(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),o(t,e,{leading:r,maxWait:e,trailing:i})}function u(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function f(t){return null!=t&&typeof t=="object"}function c(t){return typeof t=="symbol"||f(t)&&e(t)==m}function a(t){if(typeof t=="number")return t;if(c(t))return s;if(u(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;
    t=u(e)?e+"":e}if(typeof t!="string")return 0===t?t:+t;t=t.replace(g,"");var n=v.test(t);return n||O.test(t)?h(t.slice(2),n?2:8):j.test(t)?s:+t}var l,p="4.17.5",b="Expected a function",s=NaN,y="[object Null]",m="[object Symbol]",d="[object Undefined]",g=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,O=/^0o[0-7]+$/i,h=parseInt,x=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,w=x||T||Function("return this")(),S=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=S&&typeof module=="object"&&module&&!module.nodeType&&module,E=Object.prototype,$=E.hasOwnProperty,_=E.toString,W=w.Symbol,I=W?W.toStringTag:l,M=Math.max,k=Math.min,D=function(){
    return w.Date.now()};t.debounce=o,t.throttle=i,t.isObject=u,t.isObjectLike=f,t.isSymbol=c,t.now=D,t.toNumber=a,t.VERSION=p,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(w._=t, define(function(){return t})):N?((N.exports=t)._=t,S._=t):w._=t}).call(this);

// This function will run a throttled script every 300 ms
var checkHeader = _.throttle(() => { 
    //console.log('checkHeader');

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "sticky" class to the header
    if (scrollPosition > 100){
        document.querySelector('header').classList.add('sticky');
    }     

    // If not, remove "sticky" class from header
    else {
        document.querySelector('header').classList.remove('sticky');
    }
}, 300);

// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkHeader);

// resize background when changed window size
function backgroundResize() {
    var heightdiv = (-0.1061*window.innerHeight) + 199.3634
}

window.addEventListener("resize", backgroundResize);


// TYPEWRITER JAVASCRIPT ----------------------------------------------------------------------------------------


var allText = ["Hello, my name is Vishnu", "I love computers and programming!", "Check out my projects!"];

var currentIndex0 = 0;
var currentIndex1 = 0;
var currentIndex2 = 0;

var textHeader0 = document.getElementById("typetext0");
var textHeader1 = document.getElementById("typetext1");
var textHeader2 = document.getElementById("typetext2");


var myVar0;

var myVar1;

var myVar2;



function add0() {    
	var text =  allText[0].substring(0, currentIndex0 + 1);
	textHeader0.innerHTML = ">> " +  text;
    currentIndex0+=1;

    if(text === allText[0]) {

        clearInterval(myVar0);
        setTimeout(function() {
            myVar0 = setInterval(remove0, 50);
        }, 1000);
    }

}

function remove0() {
    var text =  allText[0].substring(0, currentIndex0 - 1);
    textHeader0.innerHTML = ">> " + text;
    currentIndex0-=1;
    
    if(text === "") {
        clearInterval(myVar0);
;
        
        currentIndex0 = 0
        setTimeout(function() {
			myVar0 = setInterval(add0, 100);
		}, 200);

    }
}


function add1() {    
	var text =  allText[1].substring(0, currentIndex1 + 1);
	textHeader1.innerHTML = ">> " +  text;
    currentIndex1+=1;

    if(text === allText[1]) {

        clearInterval(myVar1);
        setTimeout(function() {
            myVar1 = setInterval(remove1, 50);
        }, 1000);
    }

}

function remove1() {
    var text =  allText[1].substring(0, currentIndex1 - 1);
    textHeader1.innerHTML = ">> " + text;
    currentIndex1-=1;
    
    if(text === "") {
        clearInterval(myVar1);
;
        
        currentIndex1 = 0
        setTimeout(function() {
			myVar1 = setInterval(add1, 100);
		}, 200);

    }
}


function add2() {    
	var text =  allText[2].substring(0, currentIndex2 + 1);
	textHeader2.innerHTML = ">> " +  text;
    currentIndex2+=1;

    if(text === allText[2]) {

        clearInterval(myVar2);
        setTimeout(function() {
            myVar2 = setInterval(remove2, 50);
        }, 1000);
    }

}

function remove2() {
    var text =  allText[2].substring(0, currentIndex2 - 1);
    textHeader2.innerHTML = ">> " + text;
    currentIndex2-=1;
    
    if(text === "") {
        clearInterval(myVar2);
;
        
        currentIndex2 = 0
        setTimeout(function() {
			myVar2 = setInterval(add2, 100);
		}, 200);

    }
}

// RESPONSIVE PROJECTS JAVASCRIPT ------------------------------------------------------------------------------

function windowResized() {
    var projectColumn = document.getElementById("projects");
    var windowWidth = window.innerWidth;
    var proj1 = document.getElementById("proj1");
    var proj2 = document.getElementById("proj2");
    var proj3 = document.getElementById("proj3");

    if(windowWidth < 750) {
        console.log("Window Resized to 355")
        projectColumn.style.display = "block";
        proj2.style.marginRight = "auto";
        proj2.style.marginLeft = "auto";
        document.getElementById("projects").style.height = "100%";
        document.getElementById("viewallbutton").style.width = "20vw"
        document.getElementById("viewallbutton").style.marginLeft = "-10vw";


        for(i = 1; i < 4; i++) {
            document.getElementById("proj" + i).style.width = "60vw";
            document.getElementById("proj" + i).style.height = "570px";
            document.getElementById("img" + i).style.width = "60vw";
            document.getElementById("proj" + i).style.marginBottom = "5vw";

        }

    }
    else {
        projectColumn.style.display = "flex";
        proj2.style.marginRight = "-100px";
        proj2.style.marginLeft = "-100px";
        document.getElementById("projects").style.height = "550px";
        document.getElementById("viewallbutton").style.width = "9vw";
        document.getElementById("viewallbutton").style.marginLeft = "0";


        for(i = 1; i < 4; i++) {
            document.getElementById("proj" + i).style.marginBottom = "0";
            document.getElementById("proj" + i).style.height = "100%";
            document.getElementById("proj" + i).style.width = "23vw";
            document.getElementById("img" + i).style.width = "23vw";
        }
    }
}    

function bodyOnload() {
    windowResized();
    myVar0 = setInterval(add0, 100);
    setTimeout(function() {
        myVar1 = setInterval(add1, 100);
    }, 500);
    setTimeout(function() {
        myVar2 = setInterval(add2, 100);
    }, 1000);
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    console.log(OSName)
    if (OSName === "Windows") {
        document.getElementById("winload").style.visibility = "visible";
    }
    else if (OSName === "MacOS") {
        document.getElementById("macload").style.visibility = "visible";
    }
}

// TIMELINE JAVASCRIPT --------------------------------------------------

(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();

// CALCULATOR JAVASCRIPT ---------------------------------------------------------------------------------------------

var calculatorDisplay = document.getElementById("calctitle");
var currentNumber = "";


function buttonPressed(symbol) {
    if(calculatorDisplay.innerHTML == 0) {
        currentNumber = "";
        currentNumber = String(currentNumber) + String(symbol);
    }
    else if(currentNumber.length == 20) {
        alert("You can only enter up to 20 characters.");

    }
    else {
        currentNumber = String(currentNumber) + String(symbol);
    }

    
    document.getElementById("calctitle").innerHTML = (currentNumber.replace(/\*/g, "×")).replace(/\//g, "÷");

}

function equalButton(expression) {
    try {
        eval(currentNumber); 
        calculatorDisplay.innerHTML = eval(currentNumber);
        currentNumber = (eval(currentNumber));
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert('Invalid expression. ' + e.message + ".");
            currentNumber = "";
            calculatorDisplay.innerHTML = "Invalid Expression";
        }
    }

    if (String(currentNumber).includes("e") || currentNumber === 0 || currentNumber === NaN || currentNumber === Infinity) {
        currentNumber = "";
    }
}

function calcReset() {
    currentNumber = "";
    calculatorDisplay.innerHTML = 0;
}

function lastRemove() {
    if(currentNumber.length === 1 || calculatorDisplay.innerHTML === "Invalid Expression" || calculatorDisplay.innerHTML === "undefined" || calculatorDisplay.innerHTML === "NaN" || calculatorDisplay.innerHTML === "Infinity" || calculatorDisplay.innerHTML == 0) {
        currentNumber = 0;
        calculatorDisplay.innerHTML = 0;
    }
    else {
        currentNumber = currentNumber.trim();
        currentNumber = currentNumber.slice(0, -1);
        currentNumber = currentNumber.trim();
    }
    
    calculatorDisplay.innerHTML = (currentNumber.replace(/\*/g, "×")).replace(/\//g, "÷");


}