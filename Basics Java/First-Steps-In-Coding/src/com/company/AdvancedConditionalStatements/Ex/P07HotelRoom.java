package com.company.AdvancedConditionalStatements.Ex;

import java.util.Scanner;

public class P07HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String month = scanner.nextLine();
        int nightsNum = Integer.parseInt(scanner.nextLine());
        double apartSum = 0;
        double studioSum = 0;
        switch (month) {
            case "May":
            case "October":
                apartSum = nightsNum * 65.0;
                studioSum = nightsNum * 50.0;
                if (nightsNum > 14){
                    studioSum = studioSum * 0.7;
                } else if (nightsNum > 7){
                    studioSum = studioSum * 0.95;
                }
                break;
            case "June":
            case "September":
                studioSum = nightsNum * 75.2 ;
                apartSum = nightsNum * 68.7;
                if (nightsNum > 14){
                    studioSum = studioSum * 0.8;
                }
                break;
            case "July":
            case "August":
                studioSum = nightsNum * 76.0;
                apartSum = nightsNum * 77.0;
                break;
        }
        if (nightsNum > 14){
            apartSum = apartSum * 0.9;
        }
        System.out.printf("Apartment: %.2f lv.", apartSum);
        System.out.println("");
        System.out.printf("Studio: %.2f lv.", studioSum);
    }
}
