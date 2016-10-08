
package dev.illiaKa.groupChatWebApp.ChatUtils;

import java.util.List;

public interface ChatRepository {

	List<String> getMessages(int messageIndex);

	void addMessage(String message);

}
