package calculator;

import java.util.Scanner;

public class Scientific {
	public static void main(String[] args) {
		double number1;
		double number2;
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter number");
		number1 = scanner.nextInt();
		
		System.out.println("Enter number");
		number2 = scanner.nextInt();
		
		BasicCalculations cal = new BasicCalculations(number1, number2);
		System.out.println(cal.add(number1, number2));
		System.out.println(cal.sub(number1, number2));
		System.out.println(cal.divide(number1, number2));
		System.out.println(cal.multiply(number1, number2));
	}

}
