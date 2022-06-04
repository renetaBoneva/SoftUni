package com.company.NestedLoop.Lab;

import java.util.Scanner;

public class P04SumofTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int enterNum = Integer.parseInt(scanner.nextLine());
        int lastNum = Integer.parseInt(scanner.nextLine());
        int magicNum = Integer.parseInt(scanner.nextLine());
        int counter = 0;
        boolean flag = false;
        boolean flag1 = false;
        for (int i = enterNum; i <= lastNum ; i++) {
            for (int j = enterNum; j <= lastNum ; j++) {
                counter ++;
                if (i+j==magicNum){
                System.out.printf("Combination N:%d (%d + %d = %d)", counter, i, j, i+j);
                flag1 = true;
                break;
                } else if (enterNum==i ){
                    if (j == lastNum){
                    flag = true;
                    }
                }
            }
            if (flag1){
                break;
            }
        }
        if (flag && !flag1){
            System.out.printf("%d combinations - neither equals %d", counter, magicNum);
        }
    }
}
