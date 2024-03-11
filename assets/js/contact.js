function SendMail(){
    var params={
      form_name:document.getElementById("custName").value,
      email:document.getElementById("custEmail").value,
      number:document.getElementById("custNumber").value,
      queries:document.getElementById("queries").value
    }
    emailjs.send("service_0dpky3n","template_7od1zh8",params).then(function(res){
      alert("Successfully message sent");
      location.reload();
    })

  }