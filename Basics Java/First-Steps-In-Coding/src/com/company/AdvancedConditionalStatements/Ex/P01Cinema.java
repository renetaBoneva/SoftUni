package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P01Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();
        int r = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());
        double sum = 0;
        if (type.equals("Premiere")) {
            sum = 12.0 * r * c;
        } else if (type.equals("Normal")) {
            sum = 7.5 * c * r;
        } else if (type.equals("Discount")) {
            sum = 5.0 * c * r;
        }
        System.out.printf("%.2f", sum);
    }
}
