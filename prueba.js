function outer() {
    let counter = 0;

    function inner() {
        return counter++;
    }

    return [
        inner,
        () => counter,
        () => {
            counter = counter + 5;

        }
    ];
}

const [f1, f2, f3] = outer();

console.log(f1());
console.log(f1());
f3();
console.log(f1());
