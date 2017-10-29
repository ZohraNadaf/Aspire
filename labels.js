///////////////////////////////////////////////////////////////////////////////
//	  Project name: Aspire
//    File name: labels.js
//    Description: This file loads the labels for the application.
//                 This file consists of concept of object based javascript.
//	  Naming Standard used for variables and functions: Camel case
//	  Submission Date: 04/26/207
//                 
//    Author's name: Zohra Nadaf
//    Semester: Spring, 2017
//    Lecturer's name: Sunae Shin
//    Subject: Advanced Software Engineering
//	  Course Id: CS 5910
//    CRN: 22797
//////////////////////////////////////////////////////////////////////////////

/** This function behaves like a class which loads the labels for the application.
*	The object of this class is created in the html pages, to access the functions of this class.
*	This is the concept of Object Based Javascript.
*/
var AspireLabels = function(){

	/**
	*	Function name: initLabels()
	*	Description: This is a private function which initializes the labels required for the application
	*	@param: none
	*/
	var initLabels = function(){
		$('#header, #acadDetailsheader').html("Aspire");
		$('#aboutUs').html("About Us");
		$('#inquire').html("Inquire");
		$('#registerResetBtn, #loginResetBtn, #acadDetailsResetBtn').html("Reset");
		$('#registerSubmitBtn, #registerModalHeader').html("Register");
		$('#addressLbl').html("Address");
		$('#userNameLbl, #userNameRegisteredLbl').html("User Name");
		$('#passwordLbl, #passwordRegisteredLbl').html("Password");
		$('#phoneNoLbl').html("Phone No");
		$('#firstNameLbl').html("First Name");
		$('#lastNameLbl').html("Last Name");
		$('#emailLbl').html("Email");
		$('#genderLbl').html("Gender");
		$('#loginSubmitBtn, #loginModalHeader').html("Login");
		$('#userNameRegistered').attr('title',"Minimum: 4 characters, Maximum: 8 characters");
		$('#passwordRegistered').attr('title',"Minimum: 4 characters, Maximum: 8 characters");

		$('#enterAcadDetailsheader').html("Enter Academic Details");
		$('#calcGPAModalHeader').html("Calculate GPA");
		$('#calcGPASubmitBtn').html("Calculate");
		$('#percentageLbl').html("Percentage");
		$('#greLbl').html("GRE");
		$('#toeflIeltsLbl').html("TOEFL/ IELTS");
		$('#toefl').html("TOEFL");
		$('#ielts').html("IELTS");
		$('#gpaLbl').html("GPA");
		$('#aoiLbl').html("Area of Interest");
		$('#acadDetailsSubmitBtn').html("Submit");
		$('#epsScoreLbl').html("Your EPS score is");
		$('#genListOfUnivSubmitBtn').html("Generate List");
	}

	/**
	*	Function name: init()
	*	Description: This is a public function which calls the private functions of the class. By 
	*				 doing so we achieve data encapsulation.
	*				 This function is called from the html pages by creating the object of the class.
	*	@param: none
	*/
	this.init = function(){
		initLabels();
	}
}




