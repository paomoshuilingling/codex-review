function calculate(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
    }
}

console.log(calculate(5, 3, 'add')); // 输出：8
console.log(calculate(5, 3, 'subtract')); // 输出：2
