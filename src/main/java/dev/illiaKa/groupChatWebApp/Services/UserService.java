package dev.illiaKa.groupChatWebApp.Services;


import dev.illiaKa.groupChatWebApp.Model.UserMessage;

import java.util.List;

/**
 * Created by sonicmaster on 03.10.16.
 */
public interface UserService {

     void addUserMessage(UserMessage usermessage);
     List<UserMessage> loadMessagesHistory();

}
