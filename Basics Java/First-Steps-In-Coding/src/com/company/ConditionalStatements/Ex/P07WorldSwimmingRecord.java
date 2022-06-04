package com.company.ConditionalStatements.Ex;

import java.util.Scanner;

public class P07WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double recordNow = Double.parseDouble(scanner.nextLine());
        double metres = Double.parseDouble(scanner.nextLine());
        double seconds = Double.parseDouble(scanner.nextLine());

        double swimmingTime = metres * seconds;
        double resistance = (Math.floor(metres / 15)) * 12.5;
        double sumTime = swimmingTime + resistance;

        if (recordNow <= sumTime) {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", sumTime);
        } else {
            double diff = Math.abs(sumTime-recordNow) ;
            System.out.printf("No, he failed! He was %.2f seconds slower.", diff);
        }
    }
}
