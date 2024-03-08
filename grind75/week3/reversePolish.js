var evalRPN = function(tokens) {
    const stack = [];
    const operatorMap = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => Math.trunc(x / y),
    }
    let sum;

    for (let i = 0; i < tokens.length; i++) {
        console.log(stack);
        if (operatorMap.hasOwnProperty(tokens[i])) {
            const a = stack.pop();
            const b = stack.pop();
            sum = operatorMap[tokens[i]](parseInt(b), parseInt(a));
            stack.push(sum);
        } else {
            stack.push(tokens[i]);
        }
        
    }

    return stack[0] 
};
