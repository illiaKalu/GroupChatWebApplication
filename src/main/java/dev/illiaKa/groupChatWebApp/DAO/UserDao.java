package dev.illiaKa.groupChatWebApp.DAO;


import dev.illiaKa.groupChatWebApp.Model.UserMessage;

import java.util.List;

/**
 * Created by sonicmaster on 03.10.16.
 */
public interface UserDao {

      void addUserMessage(UserMessage userMessage);
      List<UserMessage> loadMessagesHistory();


}
