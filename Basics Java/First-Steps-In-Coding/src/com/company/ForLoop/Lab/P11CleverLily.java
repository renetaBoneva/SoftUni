package com.company.ForLoop.Lab;

import java.util.Scanner;

public class P11CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double washMachinePrice = Double.parseDouble(scanner.nextLine());
        int toyPrice = Integer.parseInt(scanner.nextLine());
        int toysNum = 0;
        int toysSum = 0;
        int moneyNum = 0;
        double moneySum = 0.0;
        int brotherSum = 0;
        double sum = 0;
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                toysNum++;
                toysSum = toysNum * toyPrice;
            } else if (i >= 2){
                moneyNum++;
                moneySum = moneySum + 10 ;
                sum = sum + moneySum;
            }
        }
        sum = sum - moneyNum;
        double result = sum + toysSum*1.0;
        if (washMachinePrice > result) {
            System.out.printf("No! %.2f", Math.abs(washMachinePrice - result));
        } else {
            System.out.printf("Yes! %.2f", Math.abs(washMachinePrice - result));
        }
    }
}
