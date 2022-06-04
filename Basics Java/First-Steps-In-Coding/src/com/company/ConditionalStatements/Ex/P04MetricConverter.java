package com.company.ConditionalStatements.Ex;

import java.util.Scanner;

public class P04MetricConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num = Double.parseDouble(scanner.nextLine());
        String entranceNum = scanner.nextLine();
        String exitNum = scanner.nextLine();
        double sum = 0;

        if (entranceNum.equals("m")) {
            if (exitNum.equals("mm")) {
                sum = num * 1000;
            } else if (exitNum.equals("cm")) {
                sum = num * 100;
            }
        }
        if (entranceNum.equals("mm")) {
            if (exitNum.equals("m")) {
                sum = num / 1000;
            } else if (exitNum.equals("cm")) {
                sum = num / 10;
            }
        }
        if (entranceNum.equals("cm")) {
            if (exitNum.equals("m")) {
                sum = num / 100;
            } else if (exitNum.equals("mm")) {
                sum = num * 10;
            }
        }
        System.out.printf("%.3f", sum);
    }
}
