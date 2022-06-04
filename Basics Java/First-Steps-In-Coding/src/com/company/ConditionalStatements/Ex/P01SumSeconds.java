package com.company.ConditionalStatements.Ex;

import java.util.Scanner;

public class P01SumSeconds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstTime = Integer.parseInt(scanner.nextLine());
        int secondTime = Integer.parseInt(scanner.nextLine());
        int thirdTime = Integer.parseInt(scanner.nextLine());
        int sumSecond = firstTime + secondTime + thirdTime;
        int min = sumSecond / 60;
        int sec = sumSecond % 60;
        if (sec < 10) {
            System.out.printf("%d:%02d", min, sec);
        } else {
            System.out.printf("%d:%d", min, sec);
        }
    }
}
