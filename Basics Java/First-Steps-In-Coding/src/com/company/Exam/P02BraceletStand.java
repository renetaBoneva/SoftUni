package com.company.Exam;

import java.util.Scanner;

public class P02BraceletStand {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double pocketMoney = Double.parseDouble(scanner.nextLine());
        double profit = Double.parseDouble(scanner.nextLine());
        double expenses = Double.parseDouble(scanner.nextLine());
        double presentPrice = Double.parseDouble(scanner.nextLine());
        double sum = (5 * pocketMoney + 5 * profit) - expenses;
        double dif = Math.abs(sum-presentPrice);
        if (sum >= presentPrice) {
            System.out.printf("Profit: %.2f BGN, the gift has been purchased.", sum);
        } else {
            System.out.printf("Insufficient money: %.2f BGN.", dif);
        }
    }
}
