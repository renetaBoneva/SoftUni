package com.company.AdvancedConditionalStatements.Lab;

import java.util.Scanner;

public class P04PersonalTitles {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double years = Double.parseDouble(scanner.nextLine());
        String name = scanner.nextLine();
        if (name.equals("m")) {
            if (years >= 16) {
                System.out.println("Mr.");
            } else if (years < 16) {
                System.out.println("Master");
            }
        } else if (name.equals("f")) {
            if (years >= 16) {
                System.out.println("Ms.");
            } else if (years < 16) {
                System.out.println("Miss");
            }
        }
    }
}
