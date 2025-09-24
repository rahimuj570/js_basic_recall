let opt = [
    'rock', 'paper', 'scissosr'
]
document.getElementById('options').addEventListener('click', (e) => {
    let choose = (e.target.alt);
    let rand = Math.floor(Math.random() * 3);
    document.getElementById('me').innerText = `Me=${choose}`
    document.getElementById('computer').innerText = `Computer=${opt[rand]}`
    if (e.target.alt == opt[rand]) {
        alert('draw')
    } else if (choose == 'paper') {
        if (opt[rand] == 'rock') {
            alert('win')
        } else { alert('loss') }
    } else if (choose == 'rock') {
        if (opt[rand] == 'paper') {
            alert('loss')
        } else alert('win')
    } else {
        if (opt[rand] == 'rock') {
            alert('loss')
        } else alert('win')
    }

})