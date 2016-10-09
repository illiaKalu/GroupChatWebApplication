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
 <br/> 1)  <br/>
1.1) init DB by creating propriate <i> database </i> and needed <i> tables </i>. <br/>
All commands and instruction can be found at <i>src/main/resources/database/initDB.sql </i> <br/>
1.2) fill appropriate fields ( pass, user, url )  in <i> persistence-mysql.properties </i>   <br/>
2) run <i>bower install</i> from project-root folder ( will install all needed libraries ) <br/>
3) (optional) For testing with Karma jasmine, run <i> npm install <i> ( will install karma, karma jasmine ).<br/>
run <i> karma start karma.conf.js </i> to run jasmine tests. karma.conf.js is provided. <br/>
4) run <i> mvn package </i> from project-root folder to install all maven dependencies and package war artifact.  <br/>
5) copy-paste <strong> [META-INF, resources, WEB-INF] </strong> folders from  project-root/target/group_chat_web_app/ to tomcat/webapps/ROOT folder.  <br/>
6) goto <i>tomcat/bin/</i> folder and start tomcat server by running <i> ./catalina.sh start </i> <br/>
7) visit http://localhost:8080/.  <br/>
 <br/>
  <br/>
P.S. Alternative ways ( e.g. package and start from IDE, deploy .war artifact ) is also work and can be used to run the project.  <br/>

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
