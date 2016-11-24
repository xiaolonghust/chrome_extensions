document.addEventListener('DOMContentLoaded', function () {
	$("#alert-warning").hide();
	$("#edit_email").hide();
	var email = localStorage.getItem('kindle_email');
	if(email != null && email != ""){
		$("#kindle_email").text(email);
		$("#modify_btn").show();
		$("#edit_email").hide();
	} else {
		$("#edit_email").show();
		$("#modify_btn").hide();
	}
	$("#modify_btn").click(function(){
		$("#edit_email").show();
		$("#email").val($("#kindle_email").text());
	});
	$("#go_btn").click(function(){
		if (validateEmail($("#email").val())) {
			$("#kindle_email").text($("#email").val());
			$("#modify_btn").show();
			$("#edit_email").hide();
			$("#alert-warning").hide();
			window.localStorage.setItem('kindle_email', $("#email").val());
		} else {
			$("#alert-warning").show();
		}
	});
	$("#close_btn").click(function(){
		$("#alert-warning").hide();
	});
});

function validateEmail(email){
	if(email == "" || !email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
		$("#email").focus();
		return false;
	}
	return true;
}
