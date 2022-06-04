package com.company.ForLoop.Lab;

import java.util.Scanner;

public class P10OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int evenSum = 0;
        int oddSum = 0;
        for (int i = 1; i <= n; i++) {
            int currentNum = Integer.parseInt(scanner.nextLine());
            if (i % 2 == 0) {
                evenSum = evenSum + currentNum;
            } else {
                oddSum = oddSum + currentNum;
            }
        }
        if (oddSum == evenSum) {
            System.out.printf("Yes%n" + "Sum = %d", oddSum);
        } else {
            System.out.printf("No%n" + "Diff = %d", Math.abs(oddSum - evenSum));
        }
    }
}
