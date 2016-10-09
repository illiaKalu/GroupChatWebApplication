/**
 * Created by sonicmaster on 09.10.16.
 */

describe("chatController", function(){
   var $rootScope,
       $scope,
       controller;


    beforeEach(function () {
        module('chat');

        inject(function ($injector, _$httpBackend_) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("chatController", {$scope: $scope});

            var mockData = [{ 'message' : 'test_msg' }, {'message' : 'test_msg2' }];

            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('/').respond(200, mockData);
            $httpBackend.whenPOST('/').respond(200, mockData);
        });

    });

    // describe("send message", function(){
    //
    //    it("??", function () {
    //
    //      $scope.sendMessage();
    //      $httpBackend.flush();
    //
    //      expect($scope.messageStory).not.toEqual('');
    //      expect($scope.messageStory).not.toBeUndefined();
    //    });
    //
    // });

    // describe("pull messages", function(){
    //
    //    it("load story should return some messages", function () {
    //
    //      $scope.pullMessages();
    //      $httpBackend.flush();
    //
    //      expect($scope.chatContent).not.toEqual('');
    //      expect($scope.chatContent).not.toBeUndefined();
    //    });
    //
    // });


    describe("authorization tests", function () {

        it("LoggedIn flag should change", function () {

            $scope.loggedIn = true;
            $scope.loginLogout();
            expect($scope.loggedIn).not.toBeTruthy();

            $scope.loggedIn = false;
            $scope.loginLogout();
            expect($scope.loggedIn).toBeTruthy();

        });

        it ("fields should be changed correctly after login", function () {

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
            expect($scope.chatContent).toBe('');
            expect($scope.message).toBe('');
        });

   });

});
