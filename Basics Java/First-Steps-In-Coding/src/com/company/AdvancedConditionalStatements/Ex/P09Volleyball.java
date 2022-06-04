package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P09Volleyball {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String year = scanner.nextLine();
        double p = Double.parseDouble(scanner.nextLine());
        double h = Double.parseDouble(scanner.nextLine());
        double sofiaNum = (48.0 - h) * 3/4 ;
        double holidaySofiaNum = (p * 2.0)/3;
        double num = sofiaNum + h + holidaySofiaNum;

        switch (year){
            case "leap":
                num = num * 1.15;
                break;
            default:
                break;
        }

        System.out.printf("%.0f",Math.floor(num));
    }
}

