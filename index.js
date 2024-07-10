function rollDice() {
    const numofdice = document.getElementById('numofdice').value;
    const values = [];
    const images = [];
    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice face ${value}">`);
    }
    document.getElementById('diceimages').innerHTML = images.join(" ");
    document.getElementById('diceresult').innerHTML = "Dice: " + values.join(", ");
}