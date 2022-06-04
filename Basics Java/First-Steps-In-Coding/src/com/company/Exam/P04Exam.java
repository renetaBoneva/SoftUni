package com.company.Exam;

import java.util.Scanner;

public class P04Exam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int studentNum = Integer.parseInt(scanner.nextLine());
        int group1 = 0;
        int group2 = 0;
        int group3 = 0;
        int group4 = 0;
        double sumGrade = 0;
        for (int i = 0; i < studentNum; i++) {
            double grade = Double.parseDouble(scanner.nextLine());
            sumGrade = sumGrade + grade;
            if (grade<3){
                group1 ++;
            } else if (grade<4){
                group3 ++;
            } else if (grade<5){
                group2++;
            } else {
                group4 ++;
            }
        }
        sumGrade = sumGrade/studentNum;
        double av1 = group1*1.0/studentNum*100.0;
        double av2 = group2*1.0/studentNum*100.0;
        double av3 = group3*1.0/studentNum*100.0;
        double av4 = group4*1.0/studentNum*100.0;
        System.out.printf("Top students: %.2f", av4);
        System.out.println("%");
        System.out.printf("Between 4.00 and 4.99: %.2f", av2);
        System.out.println("%");
        System.out.printf("Between 3.00 and 3.99: %.2f", av3);
        System.out.println("%");
        System.out.printf("Fail: %.2f", av1);
        System.out.println("%");
        System.out.printf("Average: %.2f", sumGrade);
    }
}
