package com.company.ConditionalStatements.Lab;

import java.util.Scanner;

public class P06AreaOfFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String figure = scanner.nextLine();
        if (figure.equals("square")) {
            double a = Double.parseDouble(scanner.nextLine());
            double squareArea = a * a;
            System.out.printf("%.3f", squareArea);
        } else if (figure.equals("rectangle")) {
            double a = Double.parseDouble(scanner.nextLine());
            double b = Double.parseDouble(scanner.nextLine());
            double squareArea = a * b;
            System.out.printf("%.3f", squareArea);
        } else if (figure.equals("circle")) {
            double r = Double.parseDouble(scanner.nextLine());
            double squareArea = Math.PI * r * r;
            System.out.printf("%.3f", squareArea);
        } else if (figure.equals("triangle")){
            double a = Double.parseDouble(scanner.nextLine());
            double ha = Double.parseDouble(scanner.nextLine());
            double squareArea = (a*ha)/2;
            System.out.printf("%.3f", squareArea);
        }
    }
}
