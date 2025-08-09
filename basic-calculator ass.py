#Ask user to input first number
num1= float(input("Enter first number:"))

#Ask user to input second number
num2= float(input("Enter second number:"))

#Ask user to enter operation type
operation= (input("Enter an operation: +,-,/,*"))

if operation == "+":
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")

elif operation == "-":
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")

elif operation == "*":
    result = num1 * num2
    print(f"{num1} * {num2} = {result}")

elif operation == "/":
    if num2!= 0:
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")

    else:
        print("Error: cannot divide by zero!")

else:
    print("Invalid operation, please use -,/,*,+")