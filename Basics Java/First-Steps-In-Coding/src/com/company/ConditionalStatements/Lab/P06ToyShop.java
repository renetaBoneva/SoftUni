package com.company.ConditionalStatements.Lab;

import java.util.Scanner;

public class P06ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double tripPrice = Double.parseDouble(scanner.nextLine());
        int puzzleNum = Integer.parseInt(scanner.nextLine());
        int dollNum = Integer.parseInt(scanner.nextLine());
        int teddyNum = Integer.parseInt(scanner.nextLine());
        int miniNum = Integer.parseInt(scanner.nextLine());
        int truckNum = Integer.parseInt(scanner.nextLine());
        double sum = (puzzleNum * 2.60) + (dollNum * 3.0) +
                (teddyNum * 4.10) + (miniNum * 8.20) + (truckNum * 2.0);
        int toyNum = puzzleNum + dollNum + teddyNum + miniNum + truckNum;
        if (toyNum >= 50) {
            sum = sum - sum * 0.25;
        }
        sum = sum - sum * 0.1;
        double diff = Math.abs(sum - tripPrice);
        if (sum >= tripPrice) {
            System.out.printf("Yes! %.2f lv left.", diff);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", diff);
        }
    }
}
