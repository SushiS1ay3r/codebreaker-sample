function validateInput(event)
{   
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let failMsg = document.getElementById("failMsg");
    let successMsg = document.getElementById("successMsg");

    if (username !=="anonymous" && password !=="c62c53000686c40caac41095f304060c9421548a617b0e52c21cf34634bcfcee" || username==="" || password==="")
    {
        failMsg.innerHTML = "Incorrect. Try Again :)";
        successMsg.innerHTML = "";
        return false;
    }

    else
    {
        failMsg.innerHTML = "";
        successMsg.innerHTML = "Success!"
        setTimeout(function()
        {
           window.location.href = "mastercard.html"; 
        }, 2000);

    }

    document.querySelector("form").addEventListener("submit", validateInput)
}
