package com.company.ConditionalStatements.Ex;

import java.util.Scanner;

public class P05Time15MIn {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int entranceHour = Integer.parseInt(scanner.nextLine());
        int entranceMin = Integer.parseInt(scanner.nextLine());
        int min = entranceMin + 15;
        if (min >= 60) {
            entranceHour = entranceHour + 1;
            min = min % 60;
            if (entranceHour < 24) {
                System.out.printf("%d:%02d", entranceHour, min);
            } else if (entranceHour > 24) {
                entranceHour = entranceHour % 24;
                System.out.printf("%d:%02d", entranceHour, min);
            } else if (entranceHour == 24) {
                entranceHour = 0;
                System.out.printf("%d:%02d", entranceHour, min);
            }
        } else {
            min = min % 60;
            System.out.printf("%d:%02d", entranceHour, min);
        }
    }
}
