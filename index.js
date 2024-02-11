import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";

const login = getCookie("login");
getWithHeader(target_url,tokenkey,tokenvalue,responseFunction);

function responseFunction(result){
    console.log(result.phone);
}