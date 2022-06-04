package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P04FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int numFishingMen = Integer.parseInt(scanner.nextLine());
        double sum = 0;
        switch (season) {
            case "Spring":
                sum = 3000;
                if (numFishingMen <= 6) {
                    sum = sum * 0.9;
                } else if (numFishingMen <= 11) {
                    sum = sum * 0.85;
                } else if (numFishingMen >= 12) {
                sum = sum * 0.75;
            }
            break;
            case "Summer":
            case "Autumn":
                sum = 4200;
                if (numFishingMen <= 6) {
                    sum = sum * 0.9;
                } else if (numFishingMen <= 11) {
                    sum = sum * 0.85;
                } else if (numFishingMen >= 12) {
                sum = sum * 0.75;
            }
            break;
            case "Winter":
                sum = 2600;
                if (numFishingMen <= 6) {
                    sum = sum * 0.9;
                } else if (numFishingMen <= 11) {
                    sum = sum * 0.85;
                } else if (numFishingMen >= 12) {
                sum = sum * 0.75;
            }
            break;
        }
        switch (season){
            case "Spring":
            case "Summer":
            case "Winter":
                if (numFishingMen % 2 == 0){
                    sum = sum * 0.95;
                }
                break;
        }
        double result = Math.abs(budget - sum);
        if (budget >= sum) {
            System.out.printf("Yes! You have %.2f leva left.", result);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", result);
        }
    }
}

