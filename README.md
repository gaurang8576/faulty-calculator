𝐅𝐚𝐮𝐥𝐭𝐲 𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫

𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰
The Faulty Calculator is a simple JavaScript program that takes two numbers as input from the user and performs basic arithmetic operations. However, there is a 10% chance that the calculator will intentionally provide incorrect results by following a predefined set of faulty operation rules.

𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬
1. Takes user input for two numbers.
2. Allows the user to select an arithmetic operation: Addition, Subtraction, Multiplication, or Division.
3. 90% of the time, it gives the correct result.
4. 10% of the time, it provides an incorrect result based on specific faulty rules.
5. Logs the chosen operation and result in the console

𝐅𝐚𝐮𝐥𝐭𝐲 𝐑𝐮𝐥𝐞𝐬
When the calculator decides to be faulty, it modifies the operations as follows:

• + (Addition) → - (Subtraction)

• - (Subtraction) → / (Division)

• x (Multiplication) → + (Addition)

• / (Division) → ** (Exponentiation)

𝐇𝐨𝐰 𝐈𝐭 𝐖𝐨𝐫𝐤𝐬
1. The user is prompted to enter two numbers (a and b).
2. The inputs are converted from strings to numbers.
3. The user selects an operation by entering a number corresponding to:
   
   •1 → Addition
   
   •2 → Subtraction
   
   •3 → Multiplication
   
   •4 → Division
   
4. The program generates a random number (c).
   
   •If c > 0.1, the operation is performed correctly.
   
   •If c ≤ 0.1, the faulty rules are applied.
   
6. The result is displayed in the console, indicating whether it is faulty or correct.

𝐂𝐨𝐝𝐞 𝐄𝐱𝐩𝐥𝐚𝐧𝐚𝐭𝐢𝐨𝐧

1.The prompt() function is used to take user input.

2.The Number() function converts string input to numeric values.

3.The Math.random() function generates a random number between 0 and 1 to determine whether to apply faulty logic.

4.Conditional statements (if-else) handle the correct and faulty calculations


𝐔𝐬𝐚𝐠𝐞
1. Copy the JavaScript code into a file (faulty_calculator.js).
2. Run it in a browser console or using Node.js.
3. Enter values and select an operation.
4. Observe the result—sometimes correct, sometimes faulty!

𝐏𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭𝐬

•Implement a user interface with buttons instead of prompt inputs.

•Add more operations (e.g., modulus, square root).

•Allow users to retry the calculation without restarting the program.

•Keep a history of faulty and correct calculations.

𝐂𝐨𝐧𝐜𝐥𝐮𝐬𝐢𝐨𝐧
This project is a fun way to explore JavaScript concepts like user input, randomization, conditional statements, and mathematical operations while creating an interactive program with an element of unpredictability.
