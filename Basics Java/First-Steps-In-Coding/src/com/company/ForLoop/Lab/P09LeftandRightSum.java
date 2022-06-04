package com.company.ForLoop.Lab;

import java.util.Scanner;

public class P09LeftandRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int leftSum = 0;
        int rightSum = 0;
        for (int i = 0; i < n; i++) {
            int numbers = Integer.parseInt(scanner.nextLine());
            leftSum = leftSum + numbers;
        }
        for (int i = 0; i < n; i++) {
            int numbers = Integer.parseInt(scanner.nextLine());
            rightSum = rightSum + numbers;
        }
        if (leftSum == rightSum) {
            System.out.printf("Yes, sum = %d", rightSum);
        } else {
            System.out.printf("No, diff = %d", Math.abs(rightSum - leftSum));
        }
    }
}
