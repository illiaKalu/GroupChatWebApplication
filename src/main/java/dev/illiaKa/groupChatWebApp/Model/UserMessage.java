package dev.illiaKa.groupChatWebApp.Model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

/**
 * Created by sonicmaster on 05.10.16.
 */
@Entity
@Table(name = "USERMESSAGES")
public class UserMessage {

    @Id
    @Column(name = "id")
    @Fetch(FetchMode.JOIN)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "USERNAME")
    String userName;

    @Column(name = "MESSAGE")
    String message;

    @Column(name = "SENT_TIME")
    Timestamp time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getTime() {
        LocalDateTime ldt = time.toLocalDateTime();
        return ldt;
    }

    public void setTime(LocalDateTime time) {
        Timestamp timeStamp = Timestamp.valueOf(time);
        this.time = timeStamp;
    }
}