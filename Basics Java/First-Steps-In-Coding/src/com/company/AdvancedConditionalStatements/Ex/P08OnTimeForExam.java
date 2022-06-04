package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P08OnTimeForExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int examStartHour = Integer.parseInt(scanner.nextLine());
        int examStartMin = Integer.parseInt(scanner.nextLine());
        int incomeHour = Integer.parseInt(scanner.nextLine());
        int incomeMin = Integer.parseInt(scanner.nextLine());

        int examTime = examStartHour * 60 + examStartMin;
        int incomeTime = incomeHour * 60 + incomeMin;

        if (incomeTime < (examTime - 30)){ // early
            System.out.println("Early");
            int dif = examTime - incomeTime;
            int m = dif % 60;
            int h = dif / 60;
            if (dif < 60){
                System.out.printf("%d minutes before the start", m);
            }else {
                System.out.printf("%d:%02d hours before the start" , h, m);
            }

        } else if (incomeTime > examTime){ //late
            System.out.println("Late");
            int dif = incomeTime - examTime;
            int m = dif % 60;
            int h = dif / 60;
            if (dif < 60){
                System.out.printf("%d minutes after the start", m);
            } else {
                System.out.printf("%d:%02d hours after the start" , h, m);
            }
        } else { // on time
            if (examTime == incomeTime){
                System.out.println("On time");
            } else if (examTime > incomeTime){
                System.out.println("On time");
                int dif = examTime - incomeTime;
                System.out.printf("%d minutes before the start", dif);
            }

        }
    }
}
