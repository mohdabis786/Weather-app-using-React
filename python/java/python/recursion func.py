# x=int(input("enter the value"))
# def fact(n):
#     if n==0 or n==1:
#         return 1
#     else:
#         return n*fact(n-1)
# c=fact(x)
# print(c)


# x=int(input("enter the number"))

# def fib(n):
#     if n<=1:
#         return n
#     else:
#         return fib(n-2)+fib(n-1)


# if x<0:
#     print("series doesn't exists")
# else:
#     for i in range(x):
#         print(fib(i))




# x=int(input("enter a nnumber"))
# def fac(n):
#     if n==0 or n==1:
#         return 1
#     else:
#         return 5*fac(n-1)





# c=fac(x)
# print(c)



# def fun(x,y):
#     z=x+y
#     w=x*y
#     return z,w
# fun(2,3)
# c=fun(2,3)
# print(c)


#def add(num):
#     if num:
#         return num+add(num-1)
#     else:
#         return 0
# c=add(10)
# print(c)



def display(**kwargs):
    for i in kwargs:
        print(i)

display(emp="Kelly", salary=9000)























