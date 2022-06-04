package com.company.Ex;

import java.util.Scanner;

public class Ex03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double deposit = Double.parseDouble(scanner.nextLine());
        int months = Integer.parseInt(scanner.nextLine());
        double yearInterestPercent = Double.parseDouble(scanner.nextLine());
        double interest = (deposit*yearInterestPercent)/100;
        double interestPerMonth= interest/12;
        double sum = deposit + months* interestPerMonth;
        System.out.println(sum);
    }
}
