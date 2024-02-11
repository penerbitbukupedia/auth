import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";

const login = getCookie("login");
getWithHeader("https://ped.fly.dev/auth/phonenumber","login",login,responseFunction);

function responseFunction(result){
    console.log(result.phone);
}