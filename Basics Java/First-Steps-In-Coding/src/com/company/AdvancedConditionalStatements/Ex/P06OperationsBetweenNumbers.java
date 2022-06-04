package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P06OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());
        String sim = scanner.nextLine();
        int result = 0;
        double result1 = 0;
        if (n2 == 0) {
            System.out.printf("Cannot divide %d by zero", n1);
        } else {
            if (sim.equals("/")) {
                result1 = n1 / (n2 * 1.0);
                System
                        .out.printf("%d %s %d = %.2f", n1, sim, n2, result1);
            } else if (sim.equals("%")) {
                result = n1 % n2;
                System.out.printf("%d %s %d = %d", n1, sim, n2, result);
            } else {
                if (sim.equals("+")) {
                    result = n1 + n2;
                } else if (sim.equals("-")) {
                    result = n1 - n2;
                } else if (sim.equals("*")) {
                    result = n1 * n2;
                }
                if (result % 2 == 0) {
                    System.out.printf("%d %s %d = %d - even", n1, sim, n2, result);
                } else {
                    System.out.printf("%d %s %d = %d - odd", n1, sim, n2, result);
                }
            }
        }

    }
}

