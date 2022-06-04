package com.company.WhileLoop.Lab;

import java.util.Scanner;

public class P07MinNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        int minNum = Integer.MAX_VALUE;
        while (!input.equals("Stop")){
            int n = Integer.parseInt(input);;
            if (n < minNum){
                minNum = n;
            }
            input = scanner.nextLine();
        }
        System.out.println(minNum);
    }
}

