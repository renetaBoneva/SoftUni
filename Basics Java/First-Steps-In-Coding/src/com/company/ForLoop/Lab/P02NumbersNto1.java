package com.company.ForLoop.Lab;

import java.util.Scanner;

public class P02NumbersNto1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = n; i >= 1; i = i - 1) {
            System.out.println(i);
        }
    }
}
