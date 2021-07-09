function validateInputs(){
    document.querySelectorAll(".error-message").forEach(message => message.remove());
    for (let index = 0; index < document.forms[0].elements.length; index++) {
        if(document.forms[0].elements[index].value == "" && document.forms[0].elements[index].type=="text"){
            document.forms[0].elements[index].insertAdjacentHTML('afterend', '<span class="error-message" style="color:red;">**</span>');
        }
    }
}