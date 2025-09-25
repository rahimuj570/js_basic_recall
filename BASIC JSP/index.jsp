<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<% 
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/xe","c##sw_lab","oracle123");


session.setAttribute("n", "value");
session.getAttribute("n");
%>



<form action="check_login.jsp">
<input type="text"placeholder="email" name="my_email"/>
<br>
<input type="password"placeholder="password" name="my_password"/>
<br>
<button>Login</button>
</form>
</body>
</html>