package com.company.Ex;

import java.util.Scanner;

public class Ex04VacationsBookList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pages = Integer.parseInt(scanner.nextLine());
        int pagesPerHour = Integer.parseInt(scanner.nextLine());
        int days = Integer.parseInt(scanner.nextLine());
        int timePerDay = pages/pagesPerHour;
        int pagesPerDays = timePerDay/days;
        System.out.println(pagesPerDays);
    }
}
