document.getElementById("contact_form").addEventListener("submit", e=>{
    
    let inputFirstName = document.forms["contact_form"]["first_name"].value;
    let inputSurname = document.forms["contact_form"]["surname"].value;
    let inputEmail = document.forms["contact_form"]["email"].value;
    let inputCategory = document.forms["contact_form"]["catergory"].value;
    let inputText = document.forms["contact_form"]["textbox"].value;

    if (inputFirstName.trim() == ""){
        alert("Required field.")
    }

    if (inputSurname.trim() == ""){
        alert("Required field.")
    }

    if (inputEmail.trim() == ""){
        alert("Required field.")
    }
    
    if (inputCategory.trim() == ""){
        alert("Required field.")
    }

    if (inputText.trim() == ""){
        alert("Required field.")
    }
});


