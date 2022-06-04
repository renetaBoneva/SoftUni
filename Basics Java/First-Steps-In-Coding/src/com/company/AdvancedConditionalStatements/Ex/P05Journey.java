package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P05Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();
        String place = "0";
        String hc = "0";
        double spend = 0;
        if (budget <= 100) {
            place = "Bulgaria";
            switch (season) {
                case "summer":
                    hc = "Camp";
                    spend = budget * 0.3;
                    break;
                case "winter":
                    hc = "Hotel";
                    spend = budget * 0.7;
                    break;
            }

        } else if (budget <= 1000) {
            place = "Balkans";
            switch (season) {
                case "summer":
                    hc = "Camp";
                    spend = budget * 0.4;
                    break;
                case "winter":
                    hc = "Hotel";
                    spend = budget * 0.8;
                    break;
            }

        } else if (budget > 1000) {
            place = "Europe";
            switch (season) {
                case "summer":
                case "winter":
                    hc = "Hotel";
                    spend = budget * 0.9;
                    break;
            }

        }
        System.out.printf("Somewhere in %s", place);
        System.out.println("");
        System.out.printf("%s - %.2f", hc, spend);
    }
}
