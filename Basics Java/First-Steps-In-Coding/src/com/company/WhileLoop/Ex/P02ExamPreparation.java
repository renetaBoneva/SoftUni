package com.company.WhileLoop.Ex;

import java.util.Scanner;

public class P02ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int badGrades = Integer.parseInt(scanner.nextLine());
        String exercise = scanner.nextLine();
        int grade = Integer.parseInt(scanner.nextLine());
        double gradeSum = 0;
        int sum = 0;
        int failSum = 0;
        String last = "nothing";
        while (!exercise.equals("Enough")) {
            sum++;
            gradeSum = gradeSum + grade;
            last = exercise;
            if (grade<=4){
                failSum++;
            }
            if (failSum>=badGrades){
                break;
            }
            exercise = scanner.nextLine();
            if (exercise.equals("Enough")){
                break;
            }
            grade = Integer.parseInt(scanner.nextLine());
        }
        double averageScore = gradeSum / sum;
        if (failSum>=badGrades){
            System.out.printf("You need a break, %d poor grades.", failSum);
        } else {
            System.out.printf("Average score: %.2f\nNumber of problems: %d\nLast problem: %s\n",averageScore, sum,last);
        }
    }
}
