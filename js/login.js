var code=Math.floor(Math.random()*9000)+1000;
var ss3=document.getElementById("ss3");
var user=document.getElementById("username");
var pwd1=document.getElementById("pwd1");
var btn=document.getElementById("btn");
var yz=document.getElementById("yz");
window.onload=function(){
    ss3.innerHTML=code;
  }
 $('#yz').blur(function(){
    if(yz.value==code){
      this.style.border=0;
      sss3.innerHTML="<img src='images/dh4.png' height='30px' width='30px'>";
      sss3.style.background="";
    }else{
    //   this.style.border="1px solid red";
      sss3.innerHTML="验证码不正确";
      sss3.style.color="red";
      sss3.style.fontWeight="600";
    sss3.style.fontFamily="inherit"
    sss3.style.fontSize="12px";
    }
  })
  btn.onclick=function(){
   
    var auser="admin"
    var bpwd="admin123"
    if(user.value==""||yz.value==""||pwd1.value==""){
      p1.innerHTML="所有内容不能为空";
      p1.style.color="red";
      p1.style.fontSize="12px";
    }else if(user.value!==auser||pwd1.value!==bpwd){
  
        p1.innerHTML="用户名或密码错误";
        p1.style.color="red";
        p1.style.fontSize="12px";
    }else if( yz.value!=code){
        p1.innerHTML="验证码错误";
        p1.style.color="red";
        p1.style.fontSize="12px";
    }
    else{
        window.location ='html/htt.html';
    }
  }
  
