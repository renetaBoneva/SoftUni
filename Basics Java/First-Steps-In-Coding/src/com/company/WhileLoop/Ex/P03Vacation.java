package com.company.WhileLoop.Ex;

import java.util.Scanner;

public class P03Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int holidayPrice = Integer.parseInt(scanner.nextLine());
        int ownedSum = Integer.parseInt(scanner.nextLine());
        String action = "";
        double actionSum = 0;
        int daysNum = 0;
        int count = 0;
        int spendingDays = 0;
        double sum = ownedSum;
        while (holidayPrice >= sum && spendingDays <= 5) {
            daysNum++;
            action = scanner.nextLine();
            actionSum = Double.parseDouble(scanner.nextLine());
            if (action.equals("spend")) {
                spendingDays++;
                sum = sum - actionSum;
            } else if (action.equals("save")) {
                count++;
                spendingDays = 0;
                sum = sum + actionSum;
            }
            if (sum <= 0) {
                sum = 0;
            }
            if (spendingDays >= 5) {
                break;
            }
            if (holidayPrice <= sum) {
                break;
            }
        }
        if (spendingDays >= 5) {
            System.out.printf("You can't save the money.\n%d", daysNum);
        }
        if (holidayPrice <= sum) {
            System.out.printf("You saved the money for %d days.", daysNum);
        }
    }
}
