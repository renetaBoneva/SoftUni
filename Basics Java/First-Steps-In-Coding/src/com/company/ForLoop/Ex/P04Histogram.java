package com.company.ForLoop.Ex;

import java.util.Scanner;

public class P04Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;
        double p4 = 0;
        double p5 = 0;
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(scanner.nextLine());
            if (num < 200){
                p1 ++;
            } else if (num < 399){
                p2 ++;
            } else if (num < 599){
                p3++;
            } else if (num < 799){
                p4 ++;
            } else if (num >= 800){
                p5 ++;
            }
        }
        p1 = p1/n*100;
        p2 =p2/n*100;
        p3 =p3/n*100;
        p4 =p4/n*100;
        p5 =p5/n*100;
        System.out.printf("%.2f",p1);
        System.out.println("%");
        System.out.printf("%.2f",p2);
        System.out.println("%");
        System.out.printf("%.2f",p3);
        System.out.println("%");
        System.out.printf("%.2f",p4);
        System.out.println("%");
        System.out.printf("%.2f",p5);
        System.out.println("%");
    }
}
