package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@Controller
public class ClientController {
	@Autowired
	private RestTemplate restTemplate;

	 
	//@RequestMapping(value="/callservice",method=RequestMethod.POST)
	
	@RequestMapping(value="/callservice",method=RequestMethod.POST)

	public String invokeService(@RequestParam("t1") String  name,@RequestParam("t2") String pwd)
	{

	try {
		System.out.println(name);
		System.out.println(pwd);
		String name1=name;
		String pass=pwd;
		Class.forName("com.mysql.jdbc.Driver");
		System.out.println("before connection");
		Connection con =DriverManager.getConnection("jdbc:mysql://localhost:3306/JDB","root","Sapient123");
		System.out.println("Connection Established");
//		java.sql.PreparedStatement stmt = con.prepareStatement("insert into Employee values(?,?)");
//		stmt.setString(1, name1);
//		stmt.setString(2, pass);	
//		boolean status= stmt.execute();
		

	Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("select * from Employee");
		while(rs.next())
		{
			if((rs.getString(1).equals(name1))&&(rs.getString(2).equals(pass)))
			{
			return "welcome";
		
		}
      return "login";
		}
	}
	catch(Exception e){
		System.out.println(e);
		
	}
	return "login";
	
	//String url="http://MyAuth:8091";
	 //return restTemplate.getForObject(url,String.class);
	}
	
	public String xyz()
	{
		return "<h1>Sorry Service is down</h1><h3>try later</h3>";
	}
}
