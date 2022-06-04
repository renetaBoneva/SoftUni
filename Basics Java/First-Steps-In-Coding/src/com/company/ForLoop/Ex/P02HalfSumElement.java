package com.company.ForLoop.Ex;

import java.util.Scanner;

public class P02HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int max = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(scanner.nextLine());
            if (num > max) {
                max = num;
            }
            sum = sum + num;
        }
        if ((sum- max) == max){
            System.out.printf("Yes%n" + "Sum = %d", max);
        } else {
            System.out.printf("No%n" + "Diff = %d", Math.abs((sum-max) - max));
        }
    }
}
