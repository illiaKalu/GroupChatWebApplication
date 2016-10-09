# GroupChatWebApplication

<strong> Software requirements: </strong>
<ul>
<li>MySQL server</li>
<li>Maven</li>
<li>Bower</li>
<li>npm ( for testing, optional )</li>
<li>Tomcat</li>
</ul>

<strong> How To: </strong>
1) 
1.1) init DB by creating propriate <i> database </i> and needed <i>tables<i>. <br/>
All commands and instruction can be found at <i>src/main/resources/database/initDB.sql </i>
1.2) fill appropriate fields ( pass, user, url )  in <i> persistence-mysql.properties </i>  
2) change directory to root of the project
3) run <i>bower install</i> ( will install all needed libraries )
4) (optional) For testing with Karma jasmine, run <i> npm install <i> ( will install karma, karma jasmine ).<br/>
run <i> karma start karma.conf.js </i> to run jasmine tests. karma.conf.js is provided.
5) run <i> mvn package </i> to install all maven dependencies and package war artifact. 
6) copy-paste <strong> [META-INF, resources, WEB-INF] </strong> folders from  project-root/target/group_chat_web_app/ to tomcat/webapps/ROOT folder. 
7) goto <i>tomcat/bin/</i> folder and start tomcat server by running <i> ./catalina.sh start </i>
8) visit http://localhost:8080/. 

P.S. Alternative ways ( e.g. package and start from IDE, deploy .war artifact ) is also work and can be used to run the project. 

<strong> Used technologies: </strong>
<ul>
<li>Spring MVC 4.0.3 RELEASE</li>
<li>Hibernate 4.3.6 Final</li>
<li>MySql 5.1</li>
<li>java Servlets ( jsp/ jstl)</li>
<li>Jackson</li>
<li>Mockito</li>
<li>JUnit</li>
<li>Maven3</li>
<li>npm</li>
<li>Bower</li>
<li>Tomcat 8.5.5</li>
<li>Angular 1.5.8</li>
<li>JQuery 3.1.1</li>
<li>Karma</li>
<li>Jasmine</li>
</ul>
