

let list = [];

function add() {
    let name = document.getElementById('name').value
    list.push(name)
    document.getElementById('name').value = ""


    const htmlProductsList = document.getElementById('list');
    let tempLi = document.createElement('li')
    tempLi.textContent = name;
    htmlProductsList.appendChild(tempLi)
}

function search() {
    let name = document.getElementById('sname').value
    document.getElementById('name').value = ""


    const htmlProductsList = document.getElementById('list');
    let flag = false;
    Array.from(htmlProductsList.children).forEach(e => {
        if (e.innerText == name) {
            e.classList.add('h')
            // e.setAttribute('class', 'h')
            flag = true;
            // e.remove()
        }
    })
    if (flag == false) alert('not foud')
    // let tempLi = document.createElement('li')
    // tempLi.textContent = name;
    // htmlProductsList.appendChild(tempLi)
}