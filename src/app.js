/*
File: app.js
Author: Faragó Csaba
Copyright: 2023, Faragó Csaba
Group: Szoft I-1-E
Date: 2023-03-22
Github: https://github.com/szalami/dolgozat_5.git
Licenc: GNU GPL
*/
const doc = {
    tbody: null
};
const state = {
    ships: []
}
window.addEventListener('load', () => {
    init();
    getShips();
    
});
function init() {
    doc.tbody = document.querySelector('#ships');
}

function getShips() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {      
        state.ships = result;
        render();
    });
}
function render() {
    let rows = '';
    state.ships.forEach(ship => {
        console.log(ship.name);
        rows += `
            <tr>
                <td>${ship.name}</td>
                <td>${ship.length}</td>
                <td>${ship.price}</td>
                <td>${ship.person}</td>
                <td>${ship.trailer}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}