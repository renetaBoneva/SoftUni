package com.company.AdvancedConditionalStatements.Lab;

import java.util.Scanner;

public class P06NumberInRange {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
        if (num == 0) {
            System.out.println("No");
        }else if (num >= -100 && num <= 100) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}

