
package dev.illiaKa.groupChatWebApp.Controllers;

import java.util.List;

public interface ChatRepository {

	List<String> getMessages(int messageIndex);

	void addMessage(String message);

}
