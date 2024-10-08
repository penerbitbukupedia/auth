import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

if (getCookie("login")){
    getWithHeader("https://asia-southeast2-awangga.cloudfunctions.net/bukupedia/data/user","login",getCookie("login"),responseFunction);
}else{
    redirect("../");
}


function responseFunction(result){
    console.log(result);
    if(!('email' in result) || !('nik' in result) || !('pekerjaan' in result)|| !('alamatrumah' in result)|| !('alamatkantor' in result)){
        redirect("/daftar");
    }else if(!('bio' in result) || !('profpic' in result) || !('urlbio' in result)){
        redirect("/daftar/bio.html");
    }else if(('urlbio' in result)){
        redirect("/dashboard");
    }
}
