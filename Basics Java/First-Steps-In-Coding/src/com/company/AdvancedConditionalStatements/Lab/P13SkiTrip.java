package com.company.AdvancedConditionalStatements.Lab;

import java.util.Scanner;

public class P13SkiTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        String room = scanner.nextLine();
        String rate = scanner.nextLine();
        int stays = days - 1;
        double sum = 0;
        switch (room) {
            case "room for one person":
                sum = stays * 18.00;
                break;
            case "apartment":
                sum = stays * 25.0;
                if (days < 10) {
                    sum = sum * 0.7;
                } else if (days >= 10 && days <= 15){
                    sum = sum - sum * 0.35;
                } else if (days > 15){
                    sum = sum * 0.5;
                }
                break;
            case "president apartment":
                sum = stays * 35.0;
                if (days < 10) {
                    sum = sum * 0.9;
                } else if (days >= 10 && days <= 15){
                    sum = sum * 0.85;
                } else if (days > 15){
                    sum = sum * 0.8;
                }
                break;
        }

        if (rate.equals("positive")){
            sum = sum*1.25;
        } else if (rate.equals("negative")){
            sum = sum * 0.9;
        }
        System.out.printf("%.2f", sum);

    }
}
