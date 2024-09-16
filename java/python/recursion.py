# n=int(input("enter the value"))
# def factorial(n):
#     if(n==0 or n==1):
#         return 1

#     else:
#         return n * factorial(n-1)
# print(factorial(n))



# x=0
# y=1
# while(x<100):
#     print(x)
#     x,y=y,x+y

a = int(input("Enter any number : "))

def fibonacci(n):
    if (n == 1 or n == 0):
        return n
    else:
        return fibonacci(n-1)+fibonacci(n-2)

for i in range(a):
    print(fibonacci(i))

