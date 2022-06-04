import java.util.Scanner;

public class PetShop {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogNumber = Integer.parseInt(scanner.nextLine());
        int animalNumber = Integer.parseInt(scanner.nextLine());
        double price1 = dogNumber*2.50;
        double price2 = animalNumber*4.0;
        double result = price1 + price2;
        System.out.println(result);
    }
}
