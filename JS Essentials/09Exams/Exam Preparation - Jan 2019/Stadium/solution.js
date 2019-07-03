function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let output = document.getElementById('output');
    let obj = {
        'Levski':
        {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex':
        {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP':
        {
            'A': 25,
            'B': 15,
            'C': 10
        },
        '__summary__': {
            'fans': 0,
            'totalProfit': 0
        }
    }
    for (let index = 0; index < buttons.length - 1; index++) {
        let button = buttons[index];
        button.addEventListener('click', clickEvent);
    };

    function clickEvent(e) {
        let seat = e.target;
        let seatNum = seat.textContent;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);
        if (seat.style.backgroundColor == '') {
            seat.style.backgroundColor = 'rgb(255,0,0)';
            let price = obj[zone][sector];
            obj.__summary__.fans += 1;
            obj.__summary__.totalProfit += price;
            output.textContent+=` Seat ${seatNum} in zone ${zone} sector ${sector} was taken.\n`;
        } else {
            output.textContent+=` Seat ${seatNum} in zone ${zone} sector ${sector} is unavailable.\n`;
        }
    }
    let summaryButton = buttons[buttons.length - 1];
    let summary = document.getElementById('summary');
    let spanElementResult = summary.getElementsByTagName('span')[0];
    summaryButton.addEventListener('click', () => {
        spanElementResult.textContent = `${obj.__summary__.totalProfit} leva, ${obj.__summary__.fans} fans.`;
    });
}
