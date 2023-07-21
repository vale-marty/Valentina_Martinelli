function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_8ie7s7s", "template_p4oo1bn", params).then(function (res){
        alert("Messaggio inviatto!");
        
    })
}

