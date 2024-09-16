def factorial_iteration(n):
    fac=1
    for i in range(n):
        fac=fac*(i+1)
    return fac
    
number=int(input("enter the number"))
print(" factorial using iteration method",factorial_iteration(number))