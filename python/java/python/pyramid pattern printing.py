# i=1
# while(i<=5):
#     print("* " * i)
#     i=i+1
# for i in range(1,6):
#     for j in range(1,i+1):
#         print("*",end=" ")
#     print()

 
# i=5
# while(i>0):
#     print("* " * i)
#     i=i-1


# for i in range(6,1,-1):
#     for j in range(0,i-1):
#         print("*" ,end=" ")
#     print()


n=int(input("enter the value"))
def factorial(n):
    if(n==0 or n==1):
        return 1

    else:
        return n * factorial(n-1)
print(factorial(n))



