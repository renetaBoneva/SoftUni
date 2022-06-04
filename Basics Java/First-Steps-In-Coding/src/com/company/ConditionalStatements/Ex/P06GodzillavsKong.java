package com.company.ConditionalStatements.Ex;

import java.util.Scanner;

public class P06GodzillavsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int cast = Integer.parseInt(scanner.nextLine());
        double clothesPerPerson = Double.parseDouble(scanner.nextLine());
        double decor = budget * 0.1;
        double clothes = cast*clothesPerPerson;
        if (cast >= 150) {
            clothes = clothes * 0.9;
        }
        double neededBudget = clothes + decor ;
        double moreMoney = Math.abs(budget-neededBudget);
        if (neededBudget > budget){
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.",moreMoney);
        } else {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", moreMoney);
        }
    }
}
