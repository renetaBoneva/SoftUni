import java.util.Scanner;

public class InchesToCentimetres {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        double a = Double.parseDouble(input);
        double inch = a * 2.54;
        System.out.println(inch);
    }


}
