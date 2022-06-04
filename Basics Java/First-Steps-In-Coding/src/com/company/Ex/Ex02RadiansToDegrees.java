package com.company.Ex;

import java.util.Scanner;

public class Ex02RadiansToDegrees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double rad = Double.parseDouble(scanner.nextLine());
        double degrees = rad*180/Math.PI;
        System.out.printf("%.0f", degrees);
        }
    }
