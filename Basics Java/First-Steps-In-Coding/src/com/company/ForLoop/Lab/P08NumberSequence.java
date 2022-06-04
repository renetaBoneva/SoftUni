package com.company.ForLoop.Lab;

import java.util.Scanner;

public class P08NumberSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            int numbers = Integer.parseInt(scanner.nextLine());
            if (numbers > max){
                max = numbers;
            }
            if (numbers<min){
                min = numbers;
            }
        }
        System.out.printf("Max number: %d%n", max);
        System.out.printf("Min number: %d%n", min);
    }
}
