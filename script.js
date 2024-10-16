document.getElementById("form").onsubmit = function() 
{
    // clear form
    clearErrors();

    // set valid flag
    let isValid = true;

    // set variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let secondPass = document.getElementById("pass-conf").value;
    
    // check name not empty
    if (name == "")
    {
        let errSpan = document.getElementById("err-name");
        errSpan.style.display = "block";
        isValid = false;
        // console.log("name is empty")
    }
    
    // check email not empty
    if (email == "")
    {
        document.getElementById("err-empty-email").style.display = "block";
        isValid = false;
        // console.log("email is empty");
    } else if (!email.includes("@") || !email.includes("."))     //  check email format
        {
        document.getElementById("err-invalid-email").style.display = "block";
        isValid = false;
        // console.log("email is missing '@' or '.'");
        }
    
    // Confirm password has at least 8 characters
    if (pass.length < 8)
    {
        document.getElementById("err-password-init").style.display = "block";
        // console.log("password fewer than 8 characters");
    }
    if (secondPass == "")
    {
        document.getElementById("err-password-second").style.display = "block";
        // console.log("confirm password is empty");
    } else if (!(pass == secondPass))
    {
        document.getElementById("err-password-mismatch").style.display = "block";
        isValid = false;
        // console.log("password and confirm password do not match");
    }

    const agreeToTerms = document.getElementById("agree");

    const isNotChecked = !agreeToTerms.checked;

    if (isNotChecked)
    {
        document.getElementById("err-check").style.display = "block";
        isValid = false;
        // console.log("agree is not checked")
    } else {
        // console.log("agree is checked")
    }

    return isValid; 
}

function clearErrors()
{
    let errors = document.getElementsByClassName("err");
    for (let i=0; i < errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}