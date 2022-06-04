package com.company.Exam;

import java.util.Scanner;

public class P03SantasHoliday {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        String roomType = scanner.nextLine();
        String rate = scanner.nextLine();
        int nights = days - 1;
        double sum = 0;
        switch (roomType) {
            case "room for one person":
                sum = 18*nights;
                break;
            case "apartment":
                sum = 25*nights;
                if (days<10){
                    sum = sum * 0.7;
                } else if (days<15){
                    sum = sum*0.65;
                } else {
                    sum = sum*0.5;
                }
                break;
            case "president apartment":
                sum = 35*nights;
                if (days<10){
                    sum = sum*0.9;
                } else if (days<15){
                    sum = sum*0.85;
                } else {
                    sum = sum*0.8;
                }
                break;
        }
        if (rate.equals("negative")){
            sum = sum *0.9;
        } else {
            sum = sum*1.25;
        }
        System.out.printf("%.2f", sum);
    }
}
