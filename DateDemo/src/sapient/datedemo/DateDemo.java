package sapient.datedemo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class DateDemo {

	public static void main(String args[]) throws ParseException
	{
//		Date currentdate = new Date();
//		System.out.println("Current date is " +currentdate.getDate());
//		
//		Calendar cal=Calendar.getInstance();
//		cal.set(2019, Calendar.JULY, 29);
//		cal.add(Calendar.DATE, 4);
//		System.out.println("Month is " + cal.get(Calendar.MONTH));
//		System.out.println("Day is "+cal.getTime());
		
		Scanner sc= new Scanner(System.in);
		System.out.println("Please enter the date dd-mm-yyyy");
		String date=sc.nextLine();
		SimpleDateFormat dateFormat=new SimpleDateFormat("dd-mm-yyyy");
		Date parseDate=dateFormat.parse(date);
		System.out.println("date and time is "+parseDate);
		
	}
}
