package sapient.datedemo;

import java.time.LocalDate;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;

public class DateTimeDemo {

	public static void main(String args[])
	{
	LocalDate currentDate=LocalDate.now();
	System.out.println(currentDate.get(ChronoField.ALIGNED_WEEK_OF_MONTH));
	System.out.println(currentDate.getMonth());
	System.out.println(currentDate.getMonthValue());
	LocalDate prev=currentDate.minusDays(4);
	System.out.println(prev.getDayOfMonth());
	LocalDate offsetDate=currentDate.plus(4,ChronoUnit.DAYS);
	System.out.println(offsetDate.getMonth());
	
    }
	
}
