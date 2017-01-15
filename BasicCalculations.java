package calculator;
import java.util.Scanner;

// gets input from user and then performs necessary calculation

public class BasicCalculations{
	

public BasicCalculations(double number1, double number2) {
	double numb1 = number1;
	double numb2 = number2;
	}
	
	public double add(double a, double b){
		double result;
		result = a + b;
		return result;
	}

	public double sub(double a, double b){
		double result;
		result = a - b;
		return result;
	}
	
	public double divide(double a, double b){
		double result;
		result = a / b;
		return result;
	}
	
	public double multiply(double a, double b){
		double result;
		result = a * b;
		return result;
	}
}
