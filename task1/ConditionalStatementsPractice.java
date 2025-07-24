import java.util.Scanner;

public class ConditionalStatementsPractice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. Simple if statement
        System.out.println("\n--- Simple if Statement ---");
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        
        if (number > 0) {
            System.out.println("The number is positive.");
        }

        // 2. if-else block
        System.out.println("\n--- if-else Block ---");
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        if (age >= 18) {
            System.out.println("You are eligible to vote.");
        } else {
            System.out.println("You are not eligible to vote yet.");
        }

        // 3. Multiple conditions with else-if
        System.out.println("\n--- Multiple Conditions (else-if) ---");
        System.out.print("Enter your marks (0-100): ");
        int marks = scanner.nextInt();
        
        if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 80) {
            System.out.println("Grade: B");
        } else if (marks >= 70) {
            System.out.println("Grade: C");
        } else if (marks >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }

        // 4. Switch statement for day selection
        System.out.println("\n--- Switch Statement (Days of Week) ---");
        System.out.print("Enter a day number (1-7): ");
        int day = scanner.nextInt();
        
        switch(day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day number!");
        }

        scanner.close();
    }
}