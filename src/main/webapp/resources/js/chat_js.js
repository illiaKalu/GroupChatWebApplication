	var app = angular.module('chat', []).controller('chatController', function($scope, $http, $httpParamSerializerJQLike) {

		$scope.LoggedIn = false;
		$scope.loginButtonText = 'Enter chat';
		$scope.userName = '';
		$scope.message = '';

		$scope.date = new Date();

		$scope.messageIndex = 0;
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

		$scope.getFormattedDate = function(dayOfWeek, day, month){
			return dayOfWeek.formatTime() + ', ' + day + ' ' + month.formatTime();
		};

        $scope.getFormattedTime = function(hour, min){
            return hour + ':' + min ;
        };

        String.prototype.formatTime = function() {
            return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
        };

		$scope.loadStory = function(){

			$scope.messageStory = '';

				$http.get("/chat/loadMessagesHistory")
					.then(
						function(response){
						    var mess = '';

							angular.forEach(response.data, function(value) {

							    mess += '<p class="one_message">' + 'At ' + $scope.getFormattedTime(value.time.hour, value.time.minute) + ' ' +
                                    value.userName + ' wrote :  "' + value.message + '" ' + $scope.getFormattedDate(value.time.dayOfWeek,
                                        value.time.dayOfMonth, value.time.month) + '</p>';
							});

                            angular.element('#messagesHistoryArea').html(mess);

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
						$scope.userName = null;
						console.error("Error posting chat message: status=" + xhr.status + ", statusText=" + xhr.statusText);
					});

				$scope.message = '';
			}


		};

		$scope.pullMessages = function() {

			$http.get("/chat/", { params : { 'messageIndex' : $scope.messageIndex } } )
				.then(
					function(response){
						var content = angular.element('#messagesHistoryArea').html();
						for ( var i = 0; i < response.data.length; i++) {
							 content += "<p class='one_message'>" + response.data[i] + "</p>";
							 $scope.messageIndex = $scope.messageIndex + 1;
						}

                        angular.element('#messagesHistoryArea').html(content);
						angular.element('#messagesHistoryArea')[0].scrollTop = angular.element('#messagesHistoryArea')[0].scrollHeight;
					},
					function(xhr){
						keepPolling = false;
						if (xhr.statusText != "abort" && xhr.status != 503) {
							console.error("Unable to retrieve chat messages. Chat ended.");
						}
					}
				).then( $scope.pullMessages );


		};

        angular.element('#inputField').on()



	});

	app.directive('enterKey', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
						scope.$eval(attrs.enterKey);
					});

					event.preventDefault();
				}
			});
		};
	});
