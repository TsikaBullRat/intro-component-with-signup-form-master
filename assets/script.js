$("input[type='submit']").prop("disabled", true);

$("#details").on("focusout", event=>{
    event.preventDefault();

    let comp = false;
    const $field = $(event.target);
    const $form = $(event.currentTarget);
    const $all = $form.find('input:not([type="submit"])');
    const $error = $form.find("small");
    const index = $all.index($field);
    const id = $field.attr("id");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const strongPass = /^[a-zA-Z0-9./!@#$%^&*()_+=-]{5,6}$/
    const midPass = /^[a-zA-Z0-9]{4,6}$/

    

    if(($field.val()||"").trim() === ""){
        $all.eq(index).css({
            "border": "2px solid hsl(0, 100%, 74%)",
            "background-image": "url('./images/icon-error.svg')"
        });
        $error.eq(index).show();

    }else{
        switch(id){
        case "email":
            emailRegex.test($field.val())?null:
            $error.eq(index).text("This is not a valid email adress");
            $all.eq(index).css({
                "border": "2px solid hsl(0, 100%, 74%)",
                "background-image": "url('./images/icon-error.svg')"
            });
            $error.eq(index).show();
            break;
        case "password":
            strongPass.test($field.val())?null:    
            midPass.test($field.val())?$error.eq(index).text("Average Password"):
            $error.eq(index).text("Weak Password")
            $all.eq(index).css({
                "border": "2px solid hsl(0, 100%, 74%)",
                "background-image": "url('./images/icon-error.svg')"
            });
            $error.eq(index).show();
            break;
        default:
            $all.eq(index).css({
                "border": "solid 1px #939393",
                "background-image": "none"
            });
            $error.eq(index).hide();
            if($("#first").val() && $("#last").val() && emailRegex.test($("#email").val()) && strongPass.test($("#password").val()) )$("input[type='submit']").prop("disabled", false);
        }
        
        
    }

    
})