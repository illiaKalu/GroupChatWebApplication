	var app = angular.module('chat', []).controller('chatController', function($scope, $http, $httpParamSerializerJQLike) {

		$scope.LoggedIn = false;
		$scope.loginButtonText = 'Enter chat';
		$scope.userName = '';
		$scope.chatContent = '';
		$scope.message = '';
		$scope.messageStory = '';

		var messageIndex = 0;
		var keepPolling;

		$scope.loginLogout = function(){

			$scope.loggedIn = !$scope.loggedIn;

			if($scope.loggedIn == true){
				keepPolling = true;
				$scope.loginButtonText = 'Leave chat';
				$scope.userName = $scope.name;
				$scope.pullMessages();
			}else {
				keepPolling = false;
				$scope.loginButtonText = 'Enter chat';
			}


		};

		$scope.loadStory = function(){

			$scope.messageStory = '';

				$http.get("/chat/loadStory")
					.then(
						function(response){
							for ( var i = 0; i < response.data.length; i++) {
								$scope.messageStory = $scope.messageStory + '[ ' + response.data[i].userName +
									' ] ' + response.data[i].message + '  ' + response.data[i].time.hour +
										':' + response.data[i].time.minute + ':' + response.data[i].time.second +
											'  ' + response.data[i].time.dayOfWeek + ', ' + response.data[i].time.month + "\n";
							}

						},
						function(xhr){
							if (xhr.statusText != "abort" && xhr.status != 503) {
								console.error("Unable to retrieve chat messages. Chat ended.");
							}
						}
					);

		};


		$scope.sendMessage = function () {

			if ($scope.message != '') {

				var data = {
					userName : $scope.name,
					message : $scope.message
				};

				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				};

				$http.post("/chat", $httpParamSerializerJQLike(data), config)
					.error(function (xhr) {
						console.error("Error posting chat message: status=" + xhr.status + ", statusText=" + xhr.statusText);
					});

				$scope.message = '';
			}


		};

		$scope.pullMessages = function() {

			$http.get("/chat/", { params : { 'messageIndex' : messageIndex } } )
				.then(
					function(response){
						for ( var i = 0; i < response.data.length; i++) {
							$scope.chatContent = $scope.chatContent + response.data[i] + "\n";
							messageIndex = messageIndex + 1;
						}
					},
					function(xhr){
						keepPolling = false;
						if (xhr.statusText != "abort" && xhr.status != 503) {
							console.error("Unable to retrieve chat messages. Chat ended.");
						}
					}
				).then( $scope.pullMessages );


		}

	});

