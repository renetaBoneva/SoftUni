function depositCalculator(input){
    let depositedAmount = Number(input[0]);
    let termInMonths = Number(input[1]);
    let interestPerYear = Number(input[2]);

    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let percentInterestPerYear = interestPerYear / 100;
    let totalSum = depositedAmount + termInMonths * ((depositedAmount *percentInterestPerYear) / 12) ;
    
    console.log(totalSum);
}
depositCalculator(["200","3","5.7"])