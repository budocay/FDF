var mlj_pixel_put,mlj_clear_window,mlj_key_hook,mlj_init,mlj_new_window,mlj_mouse_hook,mlj_upload_button,mlj_new_image,mlj_put_image_to_window,mlj_loop_hook,mlj_loop,mlj_xpm_file_to_image;
(function(){function p(a){var b={which:a.which,clientX:null,clientY:null};!a.which&&a.button&&(a.button&1?b.which=1:a.button&4?b.which=2:a.button&2&&(b.which=3));b.clientX=a.clientX?a.clientX:a.x;b.clientY=a.clientY?a.clientY:a.y;return b}function q(a){a=a||window.event;var b=h[e.MOUSE];a.preventDefault&&a.preventDefault();a=p(a);b&&b.func(a.which,a.clientX,a.clientY,b.params)}function v(a){a=a||window.event;var b=h[e.KEYBOARD];b&&b.func(a.keyCode,b.params)}function w(a){a=a||window.event;p(a);a=
a.target.files[0];var b=new FileReader,c=h[e.UPLOAD];b.onloadend=function(a){c.func(a.target.result,c.params)};b.readAsText(a)}function x(){var a=h[e.LOOP];a&&a.func(a.params)}var e={KEYBOARD:0,MOUSE:1,UPLOAD:2,LOOP:3};document.write("<script type='text/javascript' src=https://10.19.253.100/egraph/definitions.min.js>\x3c/script>");var h=[],r=0,s=0,m="#000000";mlj_key_hook=function(a,b){h[e.KEYBOARD]={func:a,params:b}};mlj_mouse_hook=function(a,b){h[e.MOUSE]={func:a,params:b}};mlj_new_window=function(a,
b,c,g){var l;l=document.createElement("canvas");l.id="undefined"!==typeof g?g:"e_win";l.width=a;l.height=b;document.body.appendChild(l);g=l.getContext("2d");r=a;s=b;m="undefined"!==typeof c?c:m;g.fillStyle=m;g.fillRect(0,0,a,b);return g};mlj_init=function(a){document.title="undefined"!==typeof a?a:"MinilibJS";window.addEventListener("keydown",v,!1);window.addEventListener("contextmenu",q,!1);window.addEventListener("mousedown",q,!1)};mlj_pixel_put=function(a,b,c,g){a.fillStyle=g;a.fillRect(b,c,1,
1)};mlj_upload_button=function(a,b,c){c=document.getElementById("undefined"!==typeof c?c:"body");var g=document.createElement("input");g.type="file";g.id="files";g.name="files[]";c.appendChild(g);g.addEventListener("change",w,!1);h[e.UPLOAD]={func:a,params:b}};mlj_clear_window=function(a){a.clearRect(0,0,r,s)};mlj_new_image=function(a,b,c){return a.getImageData(0,0,b,c)};mlj_put_image_to_window=function(a,b,c,g){a.putImageData(b,c,g)};mlj_loop_hook=function(a,b){h[e.LOOP]={func:a,params:b}};mlj_loop=
function(){setInterval(x,16)};var t;(function(){function a(a){return parseInt(a,16)}function b(a,b,k){var f="[",d=[],u=!0,h,e=0,n;k.chars.forEach(function(a){!0===u?(u=!1,f+=a):f=f+"|"+a});f=f+"]{"+k.width*k.nbChar+"}";for(h=new RegExp(f,"g");e<k.height;){d=h.exec(a);n=0;for(d=d[0];n<k.width&&d;){var m=d.substring(0,k.nbChar);c(b,n,e,k.colors[m]);d=d.substring(k.nbChar);n++}++e}}function c(b,c,k,f){var d=[];"None"==f?d=[0,0,0,0]:(f=f.substring(1),d[0]=a(f.substring(0,2)),d[1]=a(f.substring(2,4)),
d[2]=a(f.substring(4)),d[3]=255);f=d;c=4*(k*b.width+c);b.img[c++]=f[0];b.img[c++]=f[1];b.img[c++]=f[2];b.img[c]=f[3]}t=function(a,c,k,f){var d={width:null,height:null,nbColor:null,nbChar:null,colors:[],chars:[]},e=/([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)/g.exec(a);d.width=e[1];d.height=e[2];d.nbColor=e[3];d.nbChar=e[4];for(var e=new RegExp("(.{"+d.nbChar+"}) c ((#[0-9a-fA-F]{6}|None))","g"),h=[];h=e.exec(a);)d.colors[h[1]]=h[2],d.chars.push(h[1].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"));
d.width="undefined"!==typeof k?k:d.width;d.height="undefined"!==typeof f?f:d.height;b(a,c,d);mlj_put_image_to_window(c.win,c.img,0,0)}})();mlj_xpm_file_to_image=function(a,b,c,g){g=new FileReader;var e={win:a,img:null};e.img=mlj_new_image(e.win,b,c);g.onloadend=function(a){t(a.target.result,e,b,c);obj.func(a.target.result,obj.params)};g.readAsText(file)}})();
