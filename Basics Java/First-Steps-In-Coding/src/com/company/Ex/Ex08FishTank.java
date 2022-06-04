package com.company.Ex;

import java.util.Scanner;

public class Ex08FishTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = Integer.parseInt(scanner.nextLine());
        int wight = Integer.parseInt(scanner.nextLine());
        int high = Integer.parseInt(scanner.nextLine());
        double percent = Double.parseDouble(scanner.nextLine());
        double v=length*wight*high;
        double allV = v*0.001;
        double percentNeeded= percent*0.01;
        double reallyNeededL=allV*(1-percentNeeded);
        System.out.printf("%.2f", reallyNeededL);

    }
}





