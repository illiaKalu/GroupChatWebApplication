<!DOCTYPE html>
<html >
<head>

	<script src="../../resources/lib/angular/angular.min.js"></script>
	<script src="../../resources/lib/jquery/jquery.min.js"></script>
	<script src="../../resources/js/chat_js.js"> </script>

	<link rel='shortcut icon' type='image/x-icon' href='../../resources/favicon.ico'/>
	<title>Chat</title>
</head>

<body ng-app="chat" ng-controller="chatController">

<div>
	<button ng-click="loginLogout()">{{loginButtonText}}</button>
</div>


<div ng-show="loggedIn" >

	Entered As: {{userName}} <br></br>
	<textarea ng-model="chatContent" rows="15" cols="60" readonly="readonly"></textarea>

	<br></br>
	<br></br>

	<textarea ng-model="messageStory" rows="15" cols="60" readonly="readonly"></textarea>
	<button ng-click="loadStory()">Load Story</button>

	<br></br>

	<form id="postMessageForm" >
		<p>
			<input ng-model="message" id="message" name="message" type="text" />
			<button ng-click="sendMessage()" id="post" type="submit" >Post</button>
		</p>
	</form>

</div>

<form id="joinChatForm" ng-show="!loggedIn">

	<label for="user">User: </label>
	<input ng-model="name" ng-required="true" id="user" name="user" type="text"/>

</form>

</body>




</html>