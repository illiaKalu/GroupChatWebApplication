package dev.illiaKa.groupChatWebApp.Services;


import dev.illiaKa.groupChatWebApp.DAO.UserDao;
import dev.illiaKa.groupChatWebApp.Model.UserMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


/**
 * Created by sonicmaster on 03.10.16.
 */

@Service
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    @Transactional
    public void addUserMessage(UserMessage u) {
        this.userDao.addUserMessage(u);
    }

    @Override
    @Transactional
    public List<UserMessage> loadMessagesHistory() {
        return this.userDao.loadMessagesHistory();
    }

}
