////////////////////////////////////////////////////////////////////////////////////////
//    Project name: Aspire
//    File name: app.js
//    Description: This file is the main application js file. This file contains the  
//				   control classes.
//				   This file consists of concepts of angularJS.
//    Naming Standard used for variables and functions: Camel case
//    Submission Date: 04/26/207
//
//    Author name: Zohra Nadaf
//    Semester: Spring, 2017
//    Lecturer's name: Sunae Shin
//    Subject: Advanced Software Engineering
//    Course Id: CS 5910
//    CRN: 22797
///////////////////////////////////////////////////////////////////////////////////////

'use strict'
var indexMainApp = angular.module('indexMainApp', []);
var acadDetailsMainApp = angular.module('acadDetailsMainApp', []);

/**
*	Function name: MainCtrl
*	Description: This is a main control class of the homepage
*	@param: $scope, $http, $location, $window
*/
indexMainApp.controller('MainCtrl', function ($scope, $http, $location, $window) {
    
    /*Regular expressions to match the username and password*/
    $scope.userNamePattern = '^[a-zA-Z0-9]+$';
    $scope.passwordPattern = '^[a-zA-Z0-9]+$';
    
    /*Populates Gender dropdown*/
    $scope.gender = ["Female","Male"];
});

/**
*	Function name: LoginCtrl
*	Description: This is the login control class
*	@param: $scope
*/
indexMainApp.controller('LoginCtrl', function($scope) {
    
    /**
	*	Function name: login()
	*	Description: This is the login function which helps the student login into the system.
	*				 It checks for the boolean value submitted from the login form, if true
	*				 it redirects to acadDeatails.html page.
	*	@param: isValid
	*/
    $scope.login = function(isValid){
		if (isValid){
			if($scope.userNameRegistered == 'test123' && $scope.passwordRegistered == 'test123')
				window.location = "/acadDetails.html";
		} 
    };
});

/**
*	Function name: RegisterCtrl
*	Description: This is the register control class
*	@param: $scope
*/
indexMainApp.controller('RegisterCtrl', function($scope) {
    /**
	*	Function name: register()
	*	Description: This is the register function which helps the student register into the 
	*				 system. It checks for the boolean value submitted from the register form, 
	*				 if true it registers the student(under construction).
	*	@param: isValid
	*/
    $scope.register = function(isValid){
      	if (isValid) 
        	alert("Welcome" + $scope.firstName);
    };
});

/**
*	Function name: GPAFactory()
*	Description: This is a service used to generate the gpa for the EPS score
*	@param: none
*/
acadDetailsMainApp.factory('GPAFactory', function() {
   	var factory = {};
   	/**
	*	Function name: calcGPA()
	*	Description: This is a private function to calculate the gpa score for the EPS score
	*	@param: value
	*/
   	factory.calcGPA = function(value) {
      	return (value/20) - 1;
   	}
   	return factory;
});

/**
*	Function name: GREFactory()
*	Description: This is a service used to generate the gre score for the EPS score
*	@param: none
*/
acadDetailsMainApp.factory('GREFactory', function() {
   	var factory = {};
    /**
	*	Function name: calcGRE()
	*	Description: This is a private function to calculate the gre score for the EPS score
	*	@param: value
	*/
   	factory.calcGRE = function(value) {
      	var tempGRE;
      	if (value >= 290 && value <=300)
			return tempGRE = 1.0;
		else if (value >=301 && value <= 310)
			return tempGRE = 1.5;
		else if (value >= 311 && value <= 320)
			return tempGRE = 2.0;
		else if (value >= 321 && value <= 330)
			return tempGRE = 2.5;
		else if (value >= 331 && value <= 340)
			return tempGRE = 3.0;
		else
			return tempGRE = 0.0; 
   	}
   	return factory;
});

/**
*	Function name: TOEFLFactory()
*	Description: This is a service used to generate the toefl score for the EPS score
*	@param: none
*/
acadDetailsMainApp.factory('TOEFLFactory', function() {
   	var factory = {};
    /**
	*	Function name: calcTOEFL()
	*	Description: This is a private function to calculate the toefl score for the EPS score
	*	@param: value
	*/
   	factory.calcTOEFL = function(value) {
      	var tempToefl;
      	if (value >= 80 && value <= 90)
			return tempToefl = 0.5;
		else if (value >= 91 && value <= 100)
			return tempToefl = 1.0;
		else if (value >= 101 && value <= 110)
			return tempToefl = 1.5;
		else if (value >= 111 && value <= 120)
			return tempToefl = 2.0;
		else
			return tempToefl = 0.0; 
   	}
   	return factory;
});

/**
*	Function name: IELTSFactory()
*	Description: This is a service used to generate the ielts score for the EPS score
*	@param: none
*/
acadDetailsMainApp.factory('IELTSFactory', function() {
    var factory = {};
    /**
	*	Function name: calcIELTS()
	*	Description: This is a private function to calculate the ielts score for the EPS score
	*	@param: value
	*/
   	factory.calcIELTS = function(value) {
      	var tempIelts;
      	if (value >= 6.0 && value  <= 6.5)
			return tempIelts = 0.5;
		else if (value >= 7.0 && value <= 7.5)
			return tempIelts = 1.0;
		else if (value >= 8.0 && value  <= 8.5)
			return tempIelts = 1.5;
		else if (value  = 9.0)
			return tempIelts = 2.0;
		else
			return tempIelts = 0.0; 
   	}
   	return factory;
});

/**
*	Function name: GenListOfUnivFactory()
*	Description: This is a service used to match the rank and EPS score and generate the list of Universities 
*	@param: none
*/
acadDetailsMainApp.factory('GenListOfUnivFactory', function() {
    var factory = {};
    /**
	*	Function name: GenListOfUnivFactory()
	*	Description: This is a private function to match the rank and EPS score and generate the list of Universities 
	*	@param: data, value
	*/
   	factory.matchRank = function(data,value) {
      	var tempListOfUniv;
      	if (value <= 9 && value > 8)
			return tempListOfUniv = data[0];
		else if (value <= 8 && value > 7)
			return tempListOfUniv = data[1];
		else if (value <= 7 && value > 5)
			return tempListOfUniv = data[2];
		else if (value <= 5 && value > 4.5)
			return tempListOfUniv = data[3];
		else
			return tempListOfUniv = data[4]; 
   	}
   	return factory;
});

/**
*	Function name: CalcGPAService()
*	Description: This is a service method for servicing the request to generate the gpa for the EPS score
*	@param: GPAFactory()
*/
acadDetailsMainApp.service('CalcGPAService', function(GPAFactory){
   	/**
	*	Function name: gpa()
	*	Description: This is a public function to generate the gpa for the EPS score
	*	@param: value
	*/
   	this.gpa = function(value) {
      	return GPAFactory.calcGPA(value);
   	}
});

/**
*	Function name: CalcGREService()
*	Description: This is a service method for servicing the request to generate the gre score for the EPS score
*	@param: GREFactory()
*/
acadDetailsMainApp.service('CalcGREService', function(GREFactory){
   	/**
	*	Function name: gre()
	*	Description: This is a public function to generate the gre score for the EPS score
	*	@param: value
	*/
   	this.gre = function(value) {
      	return GREFactory.calcGRE(value);
   	}
});

/**
*	Function name: CalcTOEFLService()
*	Description: This is a service method for servicing the request to generate the toefl score for the EPS score
*	@param: TOEFLFactory()
*/
acadDetailsMainApp.service('CalcTOEFLService', function(TOEFLFactory){
   	/**
	*	Function name: toefl()
	*	Description: This is a public function to generate the toefl score for the EPS score
	*	@param: value
	*/
   	this.toefl = function(value) {
      	return TOEFLFactory.calcTOEFL(value);
   	}
});

/**
*	Function name: CalcIELTSService()
*	Description: This is a service method for servicing the request to generate the ielts score for the EPS score
*	@param: IELTSFactory()
*/
acadDetailsMainApp.service('CalcIELTSService', function(IELTSFactory){
   	/**
	*	Function name: ielts()
	*	Description: This is a public function to generate the ielts score for the EPS score
	*	@param: value
	*/
   	this.ielts = function(value) {
      	return IELTSFactory.calcIELTS(value);
   	}
});

/**
*	Function name: GenListOfUnivService()
*	Description: This is a service method for servicing the request to generate the list of Universities
*	@param: GenListOfUnivFactory()
*/
acadDetailsMainApp.service('GenListOfUnivService', function(GenListOfUnivFactory){
   	/**
	*	Function name: match()
	*	Description: This is a public function to match the rank with the EPS score
	*	@param: data, value
	*/
   	this.match = function(data,value) {
      	return GenListOfUnivFactory.matchRank(data,value);
   	}
});

/**
*	Function name: AcadDetailsCtrl
*	Description: This is the academic details
*	@param: $scope, $http, $location, $window, CalcGPAService, CalcGREService, CalcTOEFLService, CalcIELTSService, GenListOfUnivService
*/
acadDetailsMainApp.controller('AcadDetailsCtrl', function($scope, $http, $location, $window, CalcGPAService, CalcGREService, CalcTOEFLService, CalcIELTSService, GenListOfUnivService) {
   	
   	/**
	*	Function name: convertToGPA() 
	*	Description: This function converts the percentage value into GPA.
	*	@param: $scope.percentage
	*/
   	$scope.convertToGPA = function() {
      	$scope.gpa = CalcGPAService.gpa($scope.percentage);
   	}

   	/**
	*	Function name: calcEPS()
	*	Description: This function calculates the EPS score
	*	@param: $scope.gre, $scope.toeflIelts, $scope.gpa
	*/
   	$scope.calcEPS = function() {
    	
		var tempToeflIelts;
		if ($("#toefl").prop("checked")) {
			tempToeflIelts = CalcTOEFLService.toefl($scope.toeflIelts);
		}else{
			tempToeflIelts = CalcIELTSService.ielts($scope.toeflIelts);
		}

		$scope.eps = CalcGREService.gre($scope.gre) + tempToeflIelts + $scope.gpa;
		$('#genListOfUnivSubmitBtn').removeAttr('disabled');
   }
	
	/**
	*	Function name: genListOfUniv()
	*	Description: This function generates the list of Universities
	*	@param: $scope.eps, data(read from universityDataFile.json json file)
	*/
   	$scope.genListOfUniv = function() {
   		$("#listOfUniv").empty();
	   	
	   	/*reads the universityDataFile.json file and prints the list to the student*/
	   	$http.get('universityDataFile.json')
	        .success(function(data) {
	        	
	        	$scope.listOfUniv = GenListOfUnivService.match(data,$scope.eps);

				$("#listOfUnivHeader").html("List of Universities matching your profile are:").show();
	            for (var index in $scope.listOfUniv) {
					$("#listOfUniv").append("<div>" + $scope.listOfUniv[index]["name"] + "</div>");
				}

	        })
	        .error(function() {
	            alert('could not find universityDataFile.json');
	        });
   	}
});