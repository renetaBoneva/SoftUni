package com.company.AdvancedConditionalStatements.Lab;

import java.util.Scanner;

public class P03AnimalType {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String animal = scanner.nextLine();
        switch (animal){
            case "dog":
                System.out.println("mamal");
                break;
            case "snake":
                System.out.println("reptile");
                break;
            default:
                System.out.println("unknown");
                break;
        }
    }
}
