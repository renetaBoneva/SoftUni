function attachEventsListeners() {

    let btnList = document.querySelectorAll('div input[type="button"]');

    for (let btn of btnList) {
        btn.addEventListener('click', function result(event) {
            let input = document.querySelectorAll('div input[type="text"]');
            let inputArr = [];
            let num = -1;

            for (let i = 0; i < input.length; i++) {
                info = input[i].value;
                if (Number(info)) {
                    inputArr.push(Number(info));
                    num = i;
                } else if (info !== '' || !Number(info)) {
                    inputArr.push(info);
                }
            }


            if (typeof inputArr[num] == 'number') {
                let days = undefined;
                let hours = undefined;
                let min = undefined;
                let seconds = undefined;
                for (let b of btnList) {
                    b.disabled = true;
                }
                switch (num) {
                    case 0:
                        days = inputArr[0];
                        hours = days * 24;
                        min = hours * 60;
                        seconds = min * 60;
                        break;
                    case 1:
                        hours = inputArr[1];
                        days = hours / 24;
                        min = hours * 60;
                        seconds = min * 60;
                        break;
                    case 2:
                        min = inputArr[2];
                        seconds = min * 60;
                        hours = min / 60;
                        days = hours / 24;
                        break;
                    case 3:
                        seconds = input[3];
                        min = seconds / 60;
                        hours = min / 60;
                        days = hours / 24;
                        break;
                    default:
                        for (let b of btnList) {
                            b.disabled = false;
                        }
                        days = '';
                        min = '';
                        seconds = '';
                        hours = '';
                        break;
                }

                input[0].value = days;
                input[1].value = hours;
                input[2].value = min;
                input[3].value = seconds;
            }
        })
    }
}
