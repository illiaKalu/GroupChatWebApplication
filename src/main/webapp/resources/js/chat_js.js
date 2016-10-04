$(document).ready(function() {

	var app = angular.module('app', []).controller('chatController', function($scope) {

		$scope.LoggedIn = false;
		var keepPolling;
		$scope.loginButtonText = 'Enter chat';
		$scope.chatContent = '';
		var messageIndex = 0;

		$scope.loginLogout = function(){

		    $scope.loggedIn = !$scope.loggedIn;

			if($scope.loggedIn == true){
				keepPolling = true;
				$scope.loginButtonText = 'Leave chat';
                $scope.userName = $scope.name;
                pullMessages();
			}else {
				keepPolling = false;
				$scope.loginButtonText = 'Enter chat';
			}


		};

		$scope.sendMessage = function () {

			if ($scope.message != '') {

				$.ajax({
				    url : "/mvc/chat",
                    type : "POST",
					data : "message=[" + $scope.name + "] " + $scope.message,
                    success: function () {
                        $scope.chatContent = $scope.chatContent + $scope.message;
						$scope.$apply()
                    },
					error : function(xhr) {
						console.error("Error posting chat message: status=" + xhr.status + ", statusText=" + xhr.statusText);
					}

				});
				$scope.message = '';
			}
		};

		function pullMessages() {

			$.ajax(
				{url : "/mvc/chat",
				type : "GET",
				data : { 'messageIndex' : messageIndex},
				cache: false,
				success : function(messages) {
					for ( var i = 0; i < messages.length; i++) {
						$scope.chatContent = $scope.chatContent + messages[i] + "\n";
						$scope.$apply()
						messageIndex = messageIndex + 1;
					}

				},
				error : function(xhr) {
					keepPolling = false;
					if (xhr.statusText != "abort" && xhr.status != 503) {
						console.error("Unable to retrieve chat messages. Chat ended.");
					}
				},
				complete : pullMessages
			});

			$('#message').focus();

		}

	});

});