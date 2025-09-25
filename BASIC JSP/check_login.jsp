<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
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

PreparedStatement pst = con.prepareStatement("select * from users where user_email =? and user_password=?");
String email = request.getParameter("my_email");
String password = request.getParameter("my_password");

pst.setString(1,email);
pst.setString(2, password);

ResultSet res = pst.executeQuery();

if(res.next()){
	///paise
	response.sendRedirect("home.jsp");
}else{
	//paynai
	response.sendRedirect("index.jsp");
}



%>


</body>
</html>