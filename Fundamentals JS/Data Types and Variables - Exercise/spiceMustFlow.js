function spiceMustFlow(yield) {

    let days = 0;
    let output = 0;

    while (yield >= 100) {

        days++;
        output += yield - 26;
        yield -= 10;

    }

    if (output <= 26) {
        output = 0;
    } else {
        output -= 26;
    }
    console.log(days);
    console.log(output);
}
spiceMustFlow(450)
