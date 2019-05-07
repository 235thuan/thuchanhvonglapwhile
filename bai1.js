let number=parseInt(prompt("nhap 1 so"));

let total= 0;
while (number != -1) {
    if (!isNaN(number)) {
        total += number
    }
        number = parseInt(prompt("nhap 1 so"));


}
alert(total);


