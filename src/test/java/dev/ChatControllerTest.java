package dev;

import dev.illiaKa.groupChatWebApp.ChatUtils.ChatRepository;
import dev.illiaKa.groupChatWebApp.Controllers.ChatController;
import dev.illiaKa.groupChatWebApp.Model.UserMessage;
import dev.illiaKa.groupChatWebApp.Services.UserService;
import dev.illiaKa.groupChatWebApp.Services.UserServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

/**
 * Created by sonicmaster on 08.10.16.
 */
public class ChatControllerTest {

    @Mock
    private UserService userServiceMock;

    @InjectMocks
    private ChatController chatController;

    private MockMvc mockMvc;

    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(chatController).build();
    }

    @Test
    public void test() throws Exception {

        List<UserMessage> testList = new ArrayList();

        testList.add(new UserMessage());

        when(userServiceMock.loadMessagesHistory()).thenReturn(testList);

        mockMvc.perform(get("/loadStory"));
    }
}
