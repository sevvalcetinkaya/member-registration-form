$(function() {
    var $registerForm = $("#register");

    $registerForm.validate({
        rules: {
            name: {
                required: true,
                lattersonly: true
            },
            surname: {
                required: true,
                lattersonly: true
            },
             nmb: {
                required: true,
                numericonly: true,
                minlength: 10,
                maxlength: 12
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                all: true
            },
            cpassword: {
                required: true,
                equalTo: '#password'
            }

        },
        messages: {
            name: {
                required: 'name must be required',
                lattersonly: 'invalid name'
            },
            surname: {
                required: 'surname must be required',
                lattersonly: 'invalid name'
            },
            nmb: {
                required: 'phone number must be required',
                numericonly: 'Phone number invalid',
                minlength: 'min 10 digit',
                maxlength: 'mx 12 digit'
            },
            email: {
                required: 'email must be required',
                email: 'email invalid'
            },
            password: {
                required: 'password must be required',
                all: 'space is not allowed'
            },
            cpassword: {
                required: 'confirm password must be required',
                equalTo: 'password mismatch'
            }
        },
    })

    jQuery.validator.addMethod('lattersonly', function(value, element) {
        return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
    });

    jQuery.validator.addMethod('numericonly', function(value, element) {
        return /^[0-9]+$/.test(value);
    });

    jQuery.validator.addMethod('all', function(value, element) {
        return /^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
    });
})



$(document).ready(function() {
	$("button").click(function(){
	  alert("Name: " + $("#name").val() +"\n" + 
	  "Surname: " + $("#surname").val() +"\n" +
	  "Phone Number: " + $("#nmb").val() +"\n" +
	  "Email: " + $("#email").val());
	});
});