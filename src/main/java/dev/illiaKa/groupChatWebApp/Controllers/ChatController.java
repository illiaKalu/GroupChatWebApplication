package dev.illiaKa.groupChatWebApp.Controllers;


import dev.illiaKa.groupChatWebApp.Model.UserMessage;
import dev.illiaKa.groupChatWebApp.Services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

@Controller
public class ChatController {

	private final ChatRepository chatRepository;

	private final Map<DeferredResult<List<String>>, Integer> chatRequests =
			new ConcurrentHashMap<DeferredResult<List<String>>, Integer>();


	private UserService userService;

	@Autowired(required = true)
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Autowired
	public ChatController(ChatRepository chatRepository) {
		this.chatRepository = chatRepository;
	}

	@RequestMapping(value = "/chat", method = RequestMethod.GET)
	@ResponseBody
	public DeferredResult<List<String>> getMessages(@RequestParam int messageIndex) {

		final DeferredResult<List<String>> deferredResult = new DeferredResult<List<String>>(null, Collections.emptyList());
		this.chatRequests.put(deferredResult, messageIndex);

		deferredResult.onCompletion(() -> chatRequests.remove(deferredResult));

		List<String> messages = this.chatRepository.getMessages(messageIndex);
		if (!messages.isEmpty()) {
			deferredResult.setResult(messages);
		}

		return deferredResult;
	}

	@RequestMapping(value = "/chat", method = RequestMethod.POST)
	@ResponseBody
	public void postMessage(@RequestParam String userName, @RequestParam String message) {

		this.chatRepository.addMessage(message);

		new Thread(() -> {
			UserMessage um = new UserMessage();
					um.setUserName(userName);
					um.setMessage(message);
					um.setTime(LocalDateTime.now());

            this.userService.addUserMessage(um);
        }).start();

		for (Entry<DeferredResult<List<String>>, Integer> entry : this.chatRequests.entrySet()) {
			List<String> messages = this.chatRepository.getMessages(entry.getValue());
			entry.getKey().setResult(messages);
		}
	}

	@RequestMapping(value = "/chat/loadStory", method = RequestMethod.GET)
	@ResponseBody
	public List<UserMessage> getMessagesStory() {

		List<UserMessage> resultList = userService.loadMessagesHistory();

		return resultList;
	}



}
