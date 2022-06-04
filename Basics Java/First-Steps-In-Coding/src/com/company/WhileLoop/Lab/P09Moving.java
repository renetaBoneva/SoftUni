package com.company.WhileLoop.Lab;

import java.util.Scanner;

public class P09Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int high = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();
        int allSpace = width * length * high;
        int boxSpace = 0;
        while (!input.equals("Done")) {
            int box = Integer.parseInt(input);
            boxSpace = box + boxSpace;
            int restSpace = allSpace - boxSpace;
            if (restSpace >= 0) {
                input = scanner.nextLine();
            } else {
                break;
            }
        }
        int restSpace = allSpace - boxSpace;
        if (restSpace >= 0 ){
            System.out.printf("%d Cubic meters left.", restSpace);
        }else {
            restSpace = Math.abs(allSpace - boxSpace);
            System.out.printf("No more free space! You need %d Cubic meters more.", restSpace);
        }
    }
}
