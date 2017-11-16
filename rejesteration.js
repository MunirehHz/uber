function create_account_window() {
	var acountWindow = Ti.UI.createWindow({
		title : 'newUser',
		backgroundColor : '#d8dada',
		layout : 'vertical'
	});
	var coul = Ti.UI.createView({
		height : Ti.UI.FIIL,
		width : Ti.UI.FIIL
	});
	var userImage = Ti.UI.createImageView({
		image : 'images/user.png',
		width : '23%',
		top : '1%',
		borderRadius : '3'
	});
	var view = Ti.UI.createView({
		layout : 'horizontal',
		//backgroundColor:'blue',
		height : '17%',
		width : '97%',
	});

	var addPhoto = Ti.UI.createView({
		layout : 'vertical',
		height : '89%',
		width : '26%',
		backgroundColor : 'white',
		borderRadius : 6,
		top : '7%',
		left : '13%'
	});
	var AddPhoto = Ti.UI.createLabel({
		text : 'add your\nPhoto',
		top : '3dp',
		textAlign : 'center',
		color : 'gray',
		font : {
			fontSize : '13dp'
		}
	});
	var addPhoto_Image = Ti.UI.createImageView({
		image : 'images/add photo.png',
		top : '3%',
	});
	var NameView = Ti.UI.createView({
		layout : 'vertical',
		height : '90dp',
		width : '80%',
		left : '23%',
		top : '2%',
		borderRadius : 10,
		//backgroundColor:'red'
	});

	var userView = Ti.UI.createView({
		layout : 'horizontal',
		height : Ti.UI.SIZE,
		//height:'42%',
		width : '80%',
		left : '14%',
		//backgroundColor:'blue'
	});
	var FirstNameField = Ti.UI.createTextField({
		width : '145dp',
		hintText : 'First Name',
		hintTextColor : '#c4c8ce',
		color : '#c4c8ce',
		backgroundColor : 'white',
		font : {
			fontSize : '13dp'
		},
		borderRadius : '5dp',
		//top:'5dp'
	});
	var LastNameField = Ti.UI.createTextField({
		width : '145dp',
		hintText : 'Last Name',
		hintTextColor : '#c4c8ce',
		color : '#c4c8ce',
		backgroundColor : 'white',
		font : {
			fontSize : '13dp'
		},
		borderRadius : '5dp',
		top : '5dp'
	});
	var emailLable = Ti.UI.createLabel({
		width : '69%',
		hintText : 'E-mail',
		hintTextColor : '#c4c8ce',
		color : '#c4c8ce',
		borderRadius : 6,
		left : '15%',
		backgroundColor : 'white',
		borderRadius : 6,

	});

	/////////////////////////////////////////////
	var emailview = Ti.UI.createView({
		left : '13%',
		height : '7%',
		width : '70%',
		layout : "horizontal",
		top : '1%',
		borderRadius : 5,
		backgroundColor : 'white'
	});
	var usernameview = Ti.UI.createView({
		left : '13%',
		height : '7%',
		width : '70%',
		layout : "horizontal",
		top : '1%',
		borderRadius : 6,
		backgroundColor : 'white'
	});
	var passview = Ti.UI.createView({
		left : '13%',
		height : '7%',
		width : '70%',
		backgroundColor : 'red',
		layout : "horizontal",
		top : '1%',
		borderRadius : 6,
		backgroundColor : 'white'
	});
	var confirmpassview = Ti.UI.createView({
		left : '13%',
		height : '7%',
		width : '70%',
		layout : "horizontal",
		top : '1%',
		borderRadius : 6,
		backgroundColor : 'white'
	});
	var locationView = Ti.UI.createView({
		left : '13%',
		height : '7%',
		width : '70%',
		layout : "horizontal",
		top : '1%',
		borderRadius : 6,
		backgroundColor : 'white'
	});
	var Gender = Ti.UI.createView({
		layout : 'horizontal',
		height : Ti.UI.SIZE,
		width : '55%',
		backgroundColor : 'pink'
	});
	var maleLable = Ti.UI.createLabel({
		text : 'Male',
	});
	var maleLable = Ti.UI.createLabel({
		text : 'Male',
	});
	//////////////////////////////////////////////
	var emailField = Ti.UI.createTextField({
		width : '70%',
		hintText : 'E-mail',
		hintTextColor : '#c4c8ce',
		color : '#c4c8ce',
		borderRadius : 6,
		//left:'22%',
		backgroundColor : 'white',
		font : {
			fontSize : '13dp'
		},
	});
	var userNameField = Ti.UI.createTextField({
		hintText : 'UserNmae',
		hintTextColor : '#c4c8ce',
		//left:'22%',
		width : '69%',
		color : '#c4c8ce',
		backgroundColor : 'white',
		borderRadius : 6,
		top : '4%',
		font : {
			fontSize : '13dp'
		}
	});
	var passwordField = Ti.UI.createTextField({
		width : '70%',
		hintText : 'Password',
		hintTextColor : '#c4c8ce',
		//left:'22%',
		color : '#c4c8ce',
		borderRadius : 6,
		backgroundColor : 'white',
		top : '4%',
		font : {
			fontSize : '13dp'
		}
	});
	var confirmationField = Ti.UI.createTextField({
		width : '69%',
		hintText : 'Confirm your password',
		hintTextColor : '#c4c8ce',
		//left:'22%',
		color : '#c4c8ce',
		backgroundColor : 'white',
		top : '4%',
		borderRadius : 6,
		font : {
			fontSize : '13dp'
		}
	});
	var locationField = Ti.UI.createTextField({
		width : '70%',
		hintText : 'Location',
		hintTextColor : '#c4c8ce',
		color : '#c4c8ce',
		borderRadius : 6,
		//left:'22%',
		backgroundColor : 'white',
		font : {
			fontSize : '13dp'
		},

	});
	var container = Ti.UI.createView({
		top : '3%',
		layout : 'horizontal',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		//backgroundColor:'orange',
		left : '5%'
	});
	var FemaleView = Ti.UI.createView({
		//left : '8dp',
		height : '33dp',
		right : '25dp',
		width : '35%',
		layout : "horizontal",
		borderRadius : 3,
		//backgroundColor : '#7ab9f9'
	});

	var GenderView = Ti.UI.createView({
		left : '30dp',
		height : '33dp',
		right : '5dp',
		width : '35%',
		layout : "horizontal",
		borderRadius : 3,
		//backgroundColor : '#7ab9f9',
		//top:'1%'
	});

	var maleLable = Ti.UI.createLabel({
		text : 'Female',
		color : 'gray',
		textAlign : 'left',
		left : '7%'
	});
	var famelLable = Ti.UI.createLabel({
		text : 'Male',
		color : 'gray',
		left : '13%'
	});

	var maleImage = Ti.UI.createImageView({
		image : 'images/circle_blue.png',
		//backgroundSelectedImage:'images/radio_blue.png',
		left : '4%'
	});
	var femaleImage = Ti.UI.createImageView({
		image : 'images/circle_blue.png',
		left : '4%'
	});
	////////////////////////////////////event
	var temp = null;
	container.addEventListener('click', function(e) {
		if (e.source != null && temp != e.source) {
			maleImage.setBackgroundImage('images/radio_blue.png');
			//temp=e.source;
		} else if (temp) {
			femaleImage.setBackgroundImage('images/radio_blue.png');
		}
	});

	var emailImage = Ti.UI.createImageView({
		image : 'images/email.png',
	});
	var usernameImage = Ti.UI.createImageView({
		image : 'images/icon_person.png'
	});
	var passImage = Ti.UI.createImageView({
		image : 'images/password.png'
	});
	var confirmpassImage = Ti.UI.createImageView({
		image : 'images/password.png'
	});
	var locationImage = Ti.UI.createImageView({
		image : 'images/location.png'
	});
	var ButtonsView = Ti.UI.createView({
		layout : 'vertical',
		height : Ti.UI.SIZE,
		width : '80%',
		top : '1%',
		//backgroundColor:'red',
		left : '10%'
	});
	var saveButton = Ti.UI.createButton({
		title : 'Rejester',
		height : '45%',
		width : '83%',
		backgroundColor : '#7ab9f9',
		//left:'3%',
		borderRadius : 6,
	});
	var cacelButton = Ti.UI.createButton({
		title : 'Exit',
		height : '45%',
		width : '83%',
		backgroundColor : 'gray',
		top : '3%',
		borderRadius : 6,
		//left:'1%',
	});
	var scroll = Ti.UI.createScrollView({
		layout : 'vertical',

	});
	//////////////////////////////eventListener

	cacelButton.addEventListener('click', function(e) {
		acountWindow.close();
	});

	var warningMessage;
	var emailTest = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/;
	saveButton.addEventListener('click', function(e) {
		if (FirstNameField == '') {
			warningMessage = 'You Cann not leave this empty';
		} else if (FirstNameField.value.length < 9) {
			warningMessage = 'Your First Name is short';
		}
		if (LastNameField == '') {
			warningMessage = 'You Cann not leave this empty';
		} else if (LastNameField.value.length < 9) {
			warningMessage = 'Your Last Name is short';
		}
		if (userNameField == '') {
			warningMessage = 'You Cann not leave this empty';
		} else if (userNameField.value.length < 10) {
			warningMessage = ' User Name is short';
		}
		if (passwordField == '') {
			warningMessage = 'You Cann not leave this empty';
		} else if (passwordField.value.length < 8) {
			warningMessage = 'Use at least 8 characters';
		} else if (!emailTest.test(emailField.value)) {
			warningMessage = 'Please enter a valid Email Adress';
		}
		var notaficationMessage = Ti.UI.createNotification({
			duration : Ti.UI.NOTIFICATION_DURATION_LONG,
			message : warningMessage,
		});
		notaficationMessage.show();
	});
	acountWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			var actionBar = acountWindow.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function() {
				acountWindow.close();
			};
		}
	});
	acountWindow.add(userImage);
	addPhoto.add(addPhoto_Image);
	addPhoto.add(AddPhoto);
	NameView.add(FirstNameField);
	NameView.add(LastNameField);
	emailview.add(emailImage);
	emailview.add(emailField);
	usernameview.add(usernameImage);
	usernameview.add(userNameField);
	passview.add(passImage);
	passview.add(passwordField);
	confirmpassview.add(confirmpassImage);
	confirmpassview.add(confirmationField);
	locationView.add(locationImage);
	locationView.add(locationField);
	view.add(NameView);
	view.add(addPhoto);
	acountWindow.add(view);
	acountWindow.add(emailview);
	acountWindow.add(usernameview);
	acountWindow.add(passview);
	acountWindow.add(confirmpassview);
	acountWindow.add(locationView);
	GenderView.add(maleLable);
	GenderView.add(maleImage);
	FemaleView.add(famelLable);
	FemaleView.add(femaleImage);
	acountWindow.add(container);
	ButtonsView.add(saveButton);
	ButtonsView.add(cacelButton);
	acountWindow.add(ButtonsView);
	return acountWindow;

}

exports.create_account_window = create_account_window;
