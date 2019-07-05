function solve(width, increment1) {
    let increment = 1;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let token = width % (2 * increment);
    let steps = 0;

    if (token == 0) {
        steps = parseInt(width / (2 * increment));
    } else {
        let incrementToken = 2 * increment;
        let integer = parseInt(width / incrementToken);
        steps = integer + 1;
    }

    for (let i = 1; i <= steps; i++) {
        let currentStone = ((width - 2 * increment) * (width - 2 * increment)) * increment;

        if (i == steps) {
            let decoration = width * width;
            gold += decoration;
        } else if (i % 5 == 0) {
            let decoration = (width * 4 - 4 * increment) * increment;
            lapis += decoration;
            stone += currentStone;
        } else {
            let decoration = (width * 4 - 4 * increment) * increment;
            marble += decoration;
            stone += currentStone;
        }
        width -= (2 * increment);
    }
    let height = steps * increment;
    console.log(`Stone required: ${Math.ceil(stone * increment1)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment1)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment1)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment1)}`)
    console.log(`Final pyramid height: ${Math.floor(height * increment1)}`)
}