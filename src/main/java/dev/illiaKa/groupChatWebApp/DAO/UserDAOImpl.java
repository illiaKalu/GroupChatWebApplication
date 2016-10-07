package dev.illiaKa.groupChatWebApp.DAO;


import dev.illiaKa.groupChatWebApp.Model.UserMessage;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Created by sonicmaster on 03.10.16.
 */

@Repository
public class UserDAOImpl implements UserDao {

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }


    @Override
    public void addUserMessage(UserMessage user) {
        Session session = this.sessionFactory.getCurrentSession();
        session.save(user);
    }

    @Override
    public List<UserMessage> loadMessagesHistory(){
        Session session = this.sessionFactory.getCurrentSession();

        List<UserMessage> messagesList = session.createQuery("from UserMessage").list();

        return messagesList;
    }


}
