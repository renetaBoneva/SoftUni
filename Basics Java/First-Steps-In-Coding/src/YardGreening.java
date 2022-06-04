import java.util.Scanner;

public class YardGreening {
    public static void main (String[] args){
        Scanner scanner= new Scanner(System.in);
        double sm = Double.parseDouble(scanner.nextLine());
        double price1 = sm * 7.61;
        double price2 = price1*0.18;
        Double price3= price1-price2;
        System.out.println("The final price is: "+price3+" lv.");
        System.out.println("The discount is: "+price2+" lv.");
    }
}
