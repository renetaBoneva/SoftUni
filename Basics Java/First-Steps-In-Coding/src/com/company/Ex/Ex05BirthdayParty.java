package com.company.Ex;

import java.util.Scanner;

public class Ex05BirthdayParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hallPrice = Integer.parseInt(scanner.nextLine());
        double cakePrice = hallPrice*0.2;
        double beveragePrice = cakePrice*0.55;
        double animPrice = hallPrice/3;
        double sum = hallPrice + cakePrice + beveragePrice +animPrice;
        System.out.println(sum);
    }
}
