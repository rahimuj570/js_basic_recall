let input = [];
let move = 0;
let correct = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


Array.from(document.getElementById('board').children).forEach((e, index) => {
    input[index] = e.value
})

function action(e, index) {
    move++;

    input[index] = e.value
    e.disabled = true;
    document.getElementById('move').innerText = move;

    if (move >= 3) {
        let [player, ok] = checkResult()
        console.log(player)
        console.log(ok)
        if (ok == true) {
            alert(`${player} WIN`)
        } else {
            if (move == 9) {
                alert('draw')
            }
        }
    }
}

function checkResult() {
    let [player, ok] = [null, false];
    correct.forEach(e => {
        console.log(e) //
        console.log(`${input[e[0]]} ${input[e[1]]} ${input[e[2]]}`);
        if (input[e[0]] == input[e[1]] && input[e[0]] == input[e[2]]) {
            [player, ok] = [input[e[0]], true]
        }
    })
    return [player, ok]
}