// document.getElementById('b1').onclick = 

function sendmail() {
    // var a = document.getElementById("name").value;
    // var b = document.getElementById("email").value;
    // var c = document.getElementById("Subject").value;
    // var d = document.getElementById("message").value;
    var a = $("#name").val;
    var b = $("#email").val;
    var c = $("#Subject").val;
    var d = $("#message").val;
    var body = 'Name:    ' + a + 'Email:    ' + b + 'Subject:    ' + c + 'message:    ' + d;

    console.log(a, b, c, d)

    Email.send({
        Host: "smtp.gmail.com",
        Username: "hnhtechsolution02@gmail.com",
        Password: "hnhtech222",
        To: 'hnhtechsolution03@gmail.com',
        From: "hnhtechsolution02@gmail.com",
        Subject: "New Mail From Contact Form From " + a,
        Body: body
    }).then(
        message => {
            console.log(message, "message")
            if (message == 'ok') {
                alert("Your email has been sent Thank you for connecting...");
            } else {

                console.error(message);
                alert("There is error in sending messsages")
            }
        }


    );
}
// const b1 = document.getElementById("b1")

// b1.addEventListener("click", function() {
//     var a = document.getElementById("name").value;
//     console.log(a)
// })





function sendmail2() {
    // var a = document.getElementById("name").value;
    // var b = document.getElementById("email").value;
    // var c = document.getElementById("Subject").value;
    // var d = document.getElementById("message").value;
    var x = $("#nam").val();
    var y = $("#em").val();
    // document.getElementById(res).
    var p = $("#res").val();
    var z = $("#msg").val();
    var q = 'Name:    ' + x + 'Email:    ' + y + 'Subject:    ' + p + 'message:    ' + z;

    console.log(x, y, z);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "hnhtechsolution02@gmail.com",
        Password: "hnhtech222",
        To: 'hnhtechsolution03@gmail.com',
        From: "hnhtechsolution02@gmail.com",
        Subject: "New Mail From Contact Form From " + x,
        Body: q
    }).then(
        message => {
            console.log(message, "message")
            if (message == 'ok') {
                alert("Your email has been sent Thank you for connecting...");
            } else {

                console.error(message);
                alert("There is error in sending messsages")
            }
        }


    );
}