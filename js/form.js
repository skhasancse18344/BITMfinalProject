function checkFirstName(){
    var firstName = $('#firstName').val();
    var reg = /^[A-Za-z .-]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text('');
		
        return true;
    } else {
        $('#firstNameError').text('* First Name must be 2 to 10 Characters Long');
		$('#firstNameError').css("color","red");
        return false;
    }
}

$('#firstName').keyup(function () {
    checkFirstName();
});


function checkLastName(){
    var lastName = $('#lastName').val();
    var reg = /^[A-Za-z .-]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text('');
		
        return true;
    } else {
        $('#lastNameError').text('* Last Name must be 2 to 10 Characters Long');
		$('#lastNameError').css("color","red");
        return false;
    }
}

$('#lastName').keyup(function () {
    checkLastName();
});

function emailAddressCheck(){
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text('');
        return true;
    } else {
        $('#emailAddressError').text('* Please provide a valid email address');
		$('#emailAddressError').css("color","red");
        return false;
    }
}
$('#emailAddress').keyup(function () {
    emailAddressCheck();
});

function phoneNumberCheck() {
    var phoneNumber = $('#phone').val();
    var reg = /^(?:\88|01)?\d{11}$/;
    if(reg.test(phoneNumber)){
        $('#phoneError').text('');
        return true;
    } else {
        $('#phoneError').text('* Please provide a valid phone number');
		$('#phoneError').css("color","red");
        return false;
    }
}

$('#phone').keyup(function () {
    phoneNumberCheck();
})


function checkMsgName(){
    var MsgName = $('#msg').val();
    var reg = /^[A-Za-z .-]{100,150}$/;
    if(reg.test(MsgName)){
        $('#msgError').text('');
        return true;
    } else {
        $('#msgError').text('* Message about 100 to 150 Characters Long');
		$('#msgError').css("color","red");
        return false;
    }
}

$('#msg').keyup(function () {
    checkMsgName();
});


$('#form').submit(function () {
    if(checkFirstName() == true && checkLastName() == true && emailAddressCheck() == true && phoneNumberCheck() == true && checkMsgName() == true){
        return true;
    } else {
        return false;
    }
})





