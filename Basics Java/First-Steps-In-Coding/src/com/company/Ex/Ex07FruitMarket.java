package com.company.Ex;

import java.util.Scanner;

public class Ex07FruitMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double lvStrawberry = Double.parseDouble(scanner.nextLine());
        double banana = Double.parseDouble(scanner.nextLine());
        double orange = Double.parseDouble(scanner.nextLine());
        double raspberry = Double.parseDouble(scanner.nextLine());
        double strawberry = Double.parseDouble(scanner.nextLine());
        double priceRaspberry = lvStrawberry* 0.5;
        double priceOrange = priceRaspberry-priceRaspberry * 0.4;
        double priceBanana = priceRaspberry-priceRaspberry * 0.8;
        double sumStrawberry = strawberry * lvStrawberry;
        double sumBanana = banana * priceBanana;
        double sumOrange = orange * priceOrange;
        double sumRaspberry = raspberry * priceRaspberry;
        double finalSum=sumBanana+sumOrange+sumRaspberry+sumStrawberry;
        System.out.printf("%.2f", finalSum);
    }
}
