package com.company.Exam;

import java.util.Scanner;

public class P01Excursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int peopleNum =Integer.parseInt(scanner.nextLine());
        int nights = Integer.parseInt(scanner.nextLine());
        int busCarts = Integer.parseInt(scanner.nextLine());
        int museumTickets = Integer.parseInt(scanner.nextLine());
        double sum = 1.25 *( (20*nights + 1.6*busCarts +  6*museumTickets) * peopleNum);
        System.out.printf("%.2f", sum);
    }
}
