package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P03NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String flower = scanner.nextLine();
        int num = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());
        double sum = 0;
        switch (flower){
            case "Roses":
                sum = 5.0 * num;
                if (num > 80){
                    sum = sum * 0.9;
                }
                break;
            case "Dahlias":
                sum = 3.8 * num;
                if (num > 90){
                    sum = sum * 0.85;
                }
                break;
            case "Tulips":
                sum = 2.8 * num;
                if (num>80){
                    sum = sum * 0.85;
                }
                break;
            case "Narcissus":
                sum = 3.0 * num;
                if (num<120){
                    sum = sum * 1.15;
                }
                break;
            case "Gladiolus":
                sum = 2.5 * num;
                if (num<80){
                    sum = sum * 1.2;
                }
                break;
        }
        double result = Math.abs(sum-budget);
        if (budget<sum){
            System.out.printf("Not enough money, you need %.2f leva more.", result);
        }else {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", num , flower ,result);
        }
    }
}
