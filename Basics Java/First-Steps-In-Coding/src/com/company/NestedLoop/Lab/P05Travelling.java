package com.company.NestedLoop.Lab;

import java.util.Scanner;

public class P05Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String county = scanner.nextLine();
        int budget = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        boolean flag = false;
        while (!county.equals("End")){
           while (!flag){
            int savedMoney = Integer.parseInt(scanner.nextLine());
           sum = sum + savedMoney;
           if (sum>=budget){
               System.out.printf("Going to %s!%n", county);
               flag = true;
           }
           }
            county = scanner.nextLine();
            budget = Integer.parseInt(scanner.nextLine());
            flag = false;
            sum = 0;
        }
    }
}
