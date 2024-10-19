function calculate() { 
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Invalid input';
        return;
    }

    // Perform calculation based on selected operation
    var result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // Check for division by zero
            if (num2 === 0) {
                document.getElementById('result').innerHTML = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerHTML = 'Invalid operation';
            return;
    }

    // Display the result
    document.getElementById('result').innerHTML = result;
}
