def calculator(num1,num2,operator):
    if operator=='+':
        return num1+num2
    elif operator=='-':
        return num1-num2
    elif operator=='*':
        return num1*num2
    elif operator=='/':
        return num1//num2
    else:
        return "invalid operator"

num1=float(input("enter the first number:"))
num2=float(input("enter the second number:"))
operator=input("enter the operator(+,-,*,/):")

result=calculator(num1,num2,operator)

print("result:",result)