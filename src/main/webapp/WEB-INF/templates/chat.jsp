
<html>
<head>
    <title>Chat Room</title>

    <script src="../../resources/lib/jQuery/dist/jquery.min.js"></script>
    <script src="../../resources/lib/angular/angular.min.js"></script>
    <script src="../../resources/js/chat_js.js"> </script>

    <link rel='shortcut icon' type='image/x-icon' href='../../resources/favicon.ico'/>

    <link rel="stylesheet" type="text/css" href="../../resources/css/signin.css">
    <link rel="stylesheet" type="text/css" href="../../resources/css/styles.css">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
<body ng-app="chat" ng-controller="chatController">

<div class="container bootstrap snippet">
    <div class="row">

        <div class="container" ng-show="!loggedIn">
            <form id="joinChatForm" class="form-signin" role="form">

                <h2 class="form-signin-heading">Please sign in</h2>
                <input ng-model="name"
                       ng-required="true"
                       id="user"
                       type="text"
                       class="form-control"
                       placeholder="Login"
                       required
                       autocomplete="false"
                       autofocus>

                <button ng-click="loginLogout()"
                        class="btn btn-lg btn-primary btn-block"
                        type="submit">
                    {{loginButtonText}}
                </button>

            </form>
        </div>


        <div ng-show="loggedIn" class="col-md-12">
            <div class="portlet portlet-default">

                <div class="portlet-heading">

                    <div class="pull-left">
                        <img class="media-object img-circle" src="../../resources/default_avatar.png" alt="">
                    </div>

                    <div class="portlet-title">
                        <h4><i class="fa fa-circle text-green"></i> {{ userName }} </h4>
                    </div>

                    <div class="clearfix"></div>
                </div>

                <div id="chat" class="panel-collapse collapse in">
                    <div>
                        <div class="portlet-body chat-widget" style="overflow-y: auto; width: auto; height: 300px;">

                            <div class="row">
                                <div class="col-lg-12">
                                    <p class="text-center text-muted small"> {{date | date:'yyyy-MM-dd'}}</p>
                                </div>
                            </div>

                            <div id="messagesHistoryArea"></div>

                        </div>
                    </div>
                    <div class="portlet-footer">
                        <form role="form">
                            <div class="form-group">
                                <textarea enter-key="sendMessage()" ng-model="message" class="form-control" placeholder="Enter message..."></textarea>
                            </div>
                            <div class="form-group">
                                <div class="pull-right">
                                    <button ng-click="loadStory()"
                                            type="button"
                                            class="btn btn-default">load history</button>
                                    <button ng-click="sendMessage()"
                                            type="button"
                                            class="btn btn-default">Send</button>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
