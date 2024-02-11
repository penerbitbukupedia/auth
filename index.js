import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";

getWithHeader("https://ped.fly.dev/auth/userdata","login",getCookie("login"),responseFunction);

function responseFunction(result){
    console.log(result.phone);
}