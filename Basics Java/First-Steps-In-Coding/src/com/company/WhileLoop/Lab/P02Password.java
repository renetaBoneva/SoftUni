package com.company.WhileLoop.Lab;

import java.util.Scanner;

public class P02Password {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String text = scanner.nextLine();
        String password = scanner.nextLine();
        String input = scanner.nextLine();
        while (!input.equals(password)){
            input = scanner.nextLine();
        }
        System.out.printf("Welcome %s!", text);
    }
}
