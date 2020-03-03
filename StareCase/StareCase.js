function staircase(n) {
    let stare = [];

    for (let i = 1; i <= n; i++) {
        stare = [];
        for (let j = n - 1; j >= i; j--) {
            stare.push(' ');
        }
        for (let k = 0; k < i; k++) {
            stare.push('#');
        }
        console.log(stare.join(''))
    }
}
staircase(6);
