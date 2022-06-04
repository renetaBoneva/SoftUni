package com.company.Exam;

import java.util.Scanner;

public class P05HairSalon {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int targetProfit = Integer.parseInt(scanner.nextLine());
        String service = scanner.nextLine();
        int earnedSum = 0;
        while (!service.equals("closed")){
            String more = scanner.nextLine();
            if (service.equals("haircut")){
                if (more.equals("mens")){
                    earnedSum = earnedSum + 15;
                } else  if (more.equals("ladies")){
                    earnedSum = earnedSum + 20;
                } else if (more.equals("kids")){
                    earnedSum = earnedSum + 10;
                }
            } else if (service.equals("color")){
                if (more.equals("touch up")){
                    earnedSum = earnedSum + 20;
                } else if (more.equals("full color")){
                    earnedSum = earnedSum + 30;
                }
            }
            if (earnedSum >= targetProfit){
                break;
            }
            if (service.equals("closed")){
                break;
            }
            service = scanner.nextLine();
        }
        int dif = Math.abs(targetProfit-earnedSum);
        if (earnedSum>=targetProfit){
            System.out.println("You have reached your target for the day!");
        } else {
            System.out.printf("Target not reached! You need %dlv. more.\n", dif);
        }
        System.out.printf("Earned money: %dlv.\n",earnedSum);
    }
}
