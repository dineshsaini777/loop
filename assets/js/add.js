let = loop.querySelector("#loop")
for (let x = 1, y = 0; x, y < 31; x = x *= 2, y++) {
    console.log(x)
    let text = document.createElement("p");
    text.innerHTML = x
    document.querySelector('#loop').appendChild(text)
}
for (let a = 0; a < 31; a = a + 3) {
    console.log(a);
}
