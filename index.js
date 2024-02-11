import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

if (getCookie("login")){
    getWithHeader("https://ped.fly.dev/auth/userdata","login",getCookie("login"),responseFunction);
}else{
    redirect("../");
}


function responseFunction(result){
    console.log(result.phone);
}