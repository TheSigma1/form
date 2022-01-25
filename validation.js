function seterror(id, error){
    element = document.getElementById(id, error);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validateForm(){
    var returnval = true;


    var name = document.forms['form']["fname"].value;
    if (name.length<5){
        seterror("fname", "*invalid name");
        returnval = false;
    }

    if (name.length == 0){
        seterror("fname", "enter name");
        returnval = false;
    }
    var email = document.forms['form']["femail"].value;
    if (email.length<15){
        seterror("femail", "invalid email");
        returnval = false;
    }
    if(email.length == 0){
        seterror("femail", "enter email");
        returnval = false;

    }

    var password = document.forms['form']["psw"].value;
    if (password.length < 8){

        seterror("pass", "*weak password!");
        returnval = false;
    }
    if (password.length == 0){
        seterror("pass", "enter password");
        returnval = false;
    }

    var cpassword = document.forms['form']["cpsw"].value;
    if (cpassword != password){
        seterror("cpass", "*Passwords didn't match !");
        returnval = false;
    }

    return returnval;
}