var addBinary = function(a, b) {
    let arr1 = a.split('');
    let arr2 = b.split('');
    let output = [];
    let carry = 0;

    // Indices for both arrays
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        const sum = (arr1[i]  ? parseInt(arr1[i]) : 0) + (arr2[j] ? parseInt(arr2[j]) : 0) + carry;

        if (sum <= 1) {
            output.push(sum);
            carry = 0;
        } else if (sum === 2) {
            output.push(0);
                carry = 1;
        } else if (sum === 3){
            output.push(1);
            carry = 1;
        }

        i--;
        j--; 
    }

    if (carry > 0) {
        output.push(carry);
    }

    return output.reverse().join('');
}