/**
 * Created by sonicmaster on 09.10.16.
 */

describe("chatController", function () {
    var $rootScope,
        $scope,
        controller;


    beforeEach(function () {
        module('chat');

        inject(function ($injector, _$httpBackend_) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("chatController", {$scope: $scope});

            var mockData = [{'message': 'test_msg'}, {'message': 'test_msg2'}];

            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('/chat/loadMessagesHistory').respond(200, mockData);
            $httpBackend.whenPOST('/chat').respond(200, mockData);
        });

    });

    describe("pull  messages returns something", function () {

        it("send message should increase messageIndex ", function () {

            $scope.pullMessages();
            $httpBackend.flush();

            expect($scope.messageIndex).toBeGreaterThan(0);

        });

    });


    describe("send message test", function () {

        it("send message should response 200 ", function () {

            $scope.message = 'some test message to send';

            $scope.sendMessage();
            $httpBackend.flush();

            expect($scope.userName).not.toBeUndefined();

        });

    });

    describe("load messages history test", function () {

        it("load history should return some messages", function () {

            $scope.loadStory();
            $httpBackend.flush();

            expect($scope.getFormattedDate()).toHaveBeenCalled();
            expect($scope.getFormattedTime()).toHaveBeenCalled();

        });

    });


    describe("authorization tests", function () {

        it("LoggedIn flag should change", function () {

            $scope.loggedIn = true;
            $scope.loginLogout();
            expect($scope.loggedIn).not.toBeTruthy();

            $scope.loggedIn = false;
            $scope.loginLogout();
            expect($scope.loggedIn).toBeTruthy();

        });

        it("fields should be changed correctly after login", function () {

            expect($scope.loginButtonText).toBe('Enter chat');
            expect($scope.userName).toBe('');

            $scope.loggedIn = false;
            $scope.loginLogout();


            expect($scope.loginButtonText).toBe('Leave chat');

        })

    });

    describe("Initialization", function () {
        it("fields should be initialize properly", function () {
            expect($scope.userName).toBe('');
            expect($scope.LoggedIn).toBe(false);
            expect($scope.messageIndex).toBe(0);
            expect($scope.message).toBe('');
        });

    });

});
