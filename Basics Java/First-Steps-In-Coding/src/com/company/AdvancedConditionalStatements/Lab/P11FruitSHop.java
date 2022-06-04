package com.company.AdvancedConditionalStatements.Lab;

import java.util.Scanner;

public class P11FruitSHop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());
        double price = 0;
        switch (day) {
            //(Monday / Tuesday / Wednesday / Thursday / Friday /
            //Saturday / Sunday)
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                if (fruit.equals("banana")) {
                    price = 2.5;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("apple")) {
                    price = 1.2;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("orange")) {
                    price = 0.85;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("grapefruit")) {
                    price = 1.45;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("kiwi")) {
                    price = 2.7;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("pineapple")) {
                    price = 5.5;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("grapes")) {
                    price = 3.85;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                }else {
                    System.out.println("error");
                }
                break;
            case "Saturday":
            case "Sunday":
                if (fruit.equals("banana")) {
                    price = 2.7;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("apple")) {
                    price = 1.25;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("orange")) {
                    price = 0.9;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("grapefruit")) {
                    price = 1.6;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("kiwi")) {
                    price = 3;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("pineapple")) {
                    price = 5.6;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else if (fruit.equals("grapes")) {
                    price = 4.2;
                    double total = price * quantity;
                    System.out.printf("%.2f", total);
                } else {
                    System.out.println("error");
                }
                break;
            default:
                System.out.println("error");
                break;
        }

    }
}
