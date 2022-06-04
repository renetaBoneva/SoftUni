package com.company.Ex;

import java.util.Scanner;

public class Ex06CharityCampaign {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int chefs = Integer.parseInt(scanner.nextLine());
        int cakeNumber = Integer.parseInt(scanner.nextLine());
        int waffleNumber = Integer.parseInt(scanner.nextLine());
        int pancakeNumber = Integer.parseInt(scanner.nextLine());
        double cakeChefs = 45 * cakeNumber;
        double waffleChefs = 5.80 * waffleNumber;
        double pancakeChefs = 3.20 * pancakeNumber;
        double sumOneDay = (waffleChefs + cakeChefs + pancakeChefs)*chefs;
        double sumCampaign = sumOneDay*days  ;
        double finalSum = sumCampaign-sumCampaign/8;
        System.out.printf("%.2f" , finalSum);
    }
}
