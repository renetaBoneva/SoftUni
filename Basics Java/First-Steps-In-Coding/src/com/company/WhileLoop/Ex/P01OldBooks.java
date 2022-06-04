package com.company.WhileLoop.Ex;

import java.util.Scanner;

public class P01OldBooks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String bookName = scanner.nextLine();
        String input = scanner.nextLine();
        boolean isFound = false;
        int sum = 0;
        while (!input.equals("No More Books")) {
            if (input.equals(bookName)) {
                isFound = true;
                break;
            }
            sum++;
            input = scanner.nextLine();
        }
        if (isFound == true) {
            System.out.printf("You checked %d books and found it.", sum);
        } else {
            System.out.printf("The book you search is not here!%nYou checked %d books.", sum);
        }
    }
}
