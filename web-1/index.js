document.getElementById("form").onsubmit = function (event) {
    document.getElementById("name").innerHTML = ""
    document.getElementById("pass").innerHTML = ""
     document.getElementById("email_error").innerHTML = ""
     document.getElementById("cpw").innerHTML = ""


    event.preventDefault()

    try {
        let Username = document.getElementById("Username").value
        let email  = document.getElementById("email").value
        let Password = document.getElementById("Password").value
        let cpw  = document.getElementById("Config_Password").value



        if (Username === "") {
            throw new Error("N")
        }
        if ( !  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            throw new Error("e")
        }
        if (Password === "") {
            throw new Error("p")
        }
        if (Password !== cpw) {
            throw new Error("cw")
        }
        if(Username !== "" || email == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || Password !== "" || Password === cpw)
        {
            throw new Error("suc")
        }
    }
    catch (err) {
        if (err.message == "N") {
            document.getElementById("name").innerHTML = "Name is required!"
        } 
        if(err.message == "e"){
             document.getElementById("email_error").innerHTML = "enter valied email"
        }
        if(err.message == "p") {
            document.getElementById("pass").innerHTML = "enter 8 characters valied password"
        }
        if(err.message === "cw") {
            document.getElementById("cpw").innerHTML = "password not match"
        }
        if(err.message == "suc"){
            alert("success")
        }
       
       
    }
}