function create_sign_window() {
	var loginWindow = Ti.UI.createWindow({
		backgroundColor : "white",
		title : "Sign in",
		layout : "vertical",
	});
	var loginView = Ti.UI.createView({
		width : "80%",
		borderColor : "#ddd",
		height : Ti.UI.SIZE,
		layout : "vertical",
		top : "50dp",
		borderRadius : 5,
	});
	var loginImage = Ti.UI.createImageView({
		image : "images/login.png",
		top : "20dp",
	});
	var usernameView = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : "horizontal",
		top : "20dp"
	});
	var userNameLabel = Ti.UI.createLabel({
		text : "User name: ",
		font : {
			fontSize : "13dp",
		},
		color : "#999",
		left : "10dp",
		textAlign : "right"
	});
	var userName = Ti.UI.createTextField({
		width : "70%",
		height : "35dp",
		hintText : "Enter user name",
		hintTextColor : "#ddd",
		color : "#888",
		font : {
			fontSize : "12dp"
		},
		left : "5dp",
	});
	usernameView.add(userNameLabel);
	usernameView.add(userName);
	var passworView = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : "horizontal",
		top : "10dp"
	});
	var passwordLabel = Ti.UI.createLabel({
		text : "Password: ",
		font : {
			fontSize : "13dp",
		},
		color : "#999",
		left : "10dp",
		textAlign : "left"
	});
	var password = Ti.UI.createTextField({
		width : "70%",
		height : "35dp",
		hintText : "Enter password",
		hintTextColor : "#ddd",
		color : "#888",
		font : {
			fontSize : "12dp"
		},
		passwordMask : true,
		left : "10dp",
	});
	passworView.add(passwordLabel);
	passworView.add(password);
	var loginButton = Ti.UI.createButton({
		title : "Sign in",
		backgroundColor : "#7ab9f9",
		color : "white",
		font : {
			fontSize : "13dp",
			fontWeight : "bold"
		},
		width : Ti.UI.FILL,
		height : "30dp",
		borderRadius : 5,
		right : "10dp",
		left : "10dp",
		top : "20dp",
		bottom : "20dp"
	});
	loginWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			var actionBar = loginWindow.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function() {
				loginWindow.close();
			};
		}
	});
	loginView.add(loginImage);
	loginView.add(usernameView);
	loginView.add(passworView);
	loginView.add(loginButton);

	//****************** Adding all component to window ****************
	loginWindow.add(loginView);
	return loginWindow;
}

exports.create_sign_window = create_sign_window;
