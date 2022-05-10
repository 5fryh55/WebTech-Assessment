document.getElementById("contact_form").addEventListener("submit", e=>{
    let inputFirstName = document.forms["contact_form"]["first_name"].value;
    let inputSurname = document.forms["contact_form"]["surname"].value;
    let inputEmail = document.forms["contact_form"]["email"].value;
    let inputCategory = document.forms["contact_form"]["category"].value;
    let inputTextbox = document.forms["contact_form"]["textbox"].value;
    
    if (inputFirstName.trim() == ""){
        document.forms["contact_form"]["first_name"].style.border = "red";
        document.forms["contact_form"]["first_name"].style.borderStyle = "solid";
        document.getElementById("FNError").innerHTML = "Enter your first name."
        e.preventDefault()
    }
    if (inputSurname.trim() == ""){
        document.forms["contact_form"]["surname"].style.border = "red";
        document.forms["contact_form"]["surname"].style.borderStyle = "solid";
        document.getElementById("SNError").innerHTML = "Enter your surname."
        e.preventDefault()
    }
    if (inputEmail.trim() == ""){
        document.forms["contact_form"]["email"].style.border = "red";
        document.forms["contact_form"]["email"].style.borderStyle = "solid";
        document.getElementById("EmailError").innerHTML = "Enter your email."
        e.preventDefault()
    }
    if (inputCategory.trim() == "blank"){
        document.forms["contact_form"]["category"].style.border = "red";
        document.forms["contact_form"]["category"].style.borderStyle = "solid";
        document.getElementById("CatError").innerHTML = "Enter a category."
        e.preventDefault()
    }
    if (inputTextbox.trim() == ""){
        document.forms["contact_form"]["textbox"].style.border = "red";
        document.forms["contact_form"]["textbox"].style.borderStyle = "solid";
        document.getElementById("TxtError").innerHTML = "Enter some details of your query."
        e.preventDefault()
    }
    if (inputTextbox.trim() == "Enter your message here..."){
        document.forms["contact_form"]["textbox"].style.border = "red";
        document.forms["contact_form"]["textbox"].style.borderStyle = "solid";
        document.getElementById("TxtError").innerHTML = "Enter some details of your query."
        e.preventDefault()
    }

        
})