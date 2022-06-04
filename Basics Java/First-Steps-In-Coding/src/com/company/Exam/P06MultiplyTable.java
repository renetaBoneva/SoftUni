package com.company.Exam;

import java.util.Scanner;

public class P06MultiplyTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine()); // 324
        int thirdNum = num % 10; //4
        int secondNum = (num % 100 - (num % 10)) / 10;//2
        int firstNum = (num % 1000 - (num % 100)) / 100;//3
        int sum = 0;
        for (int b = 1; b <= thirdNum; b++) {
            for (int a = 1; a <= secondNum; a++) {
                for (int i = 1; i <= firstNum; i++) {
                    sum = b * a * i;
                    System.out.printf("%d * %d * %d = %d;",b, a, i, sum);
                    System.out.println("");
                }
            }
        }
    }
}

