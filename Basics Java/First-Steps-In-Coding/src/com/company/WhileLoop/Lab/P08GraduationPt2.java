package com.company.WhileLoop.Lab;

import java.util.Scanner;

public class P08GraduationPt2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        double grade = Double.parseDouble(scanner.nextLine());
        int year = 0;
        int breaks = 0;
        double gradeSum = 0;
        while (breaks<3) {
            if (grade < 4) {
                breaks++;
                if(breaks == 1){
                    year ++;
                } else {
                    break;}
            } else {
                year++;
                gradeSum = gradeSum + grade;
                if (year == 12 && breaks == 0){
                    break;
                }
            }
            grade = Double.parseDouble(scanner.nextLine());
        }
        gradeSum = gradeSum / year;
        if (breaks >= 2) {
            System.out.printf("%s has been excluded at %d grade", name, year);
        } else {
            System.out.printf("%s graduated. Average grade: %.2f", name, gradeSum);
        }
    }
}
