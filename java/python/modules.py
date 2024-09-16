# import math
# c=math.sqrt(49)
# d=math.isqrt(49)
# f=factorial.math
# print(c)
# print(d)

# from math import *
# f=factorial(5)
# print(f)

# import recursion
# c=recursion.fibonacci
# print(c)








# from math import factorial

# c=factorial(6)
# print(c)
# import math
# c=math.pow(5,3)
# print(c)


# import random
# y=["red","green","yellow","blue"]
# z=random.choice(y)
# d=random.randrange(10,100000)
# e=random.randint(-100,100)
# f=random.uniform(1,10)
# g=random.random()
# random.shuffle(y)

# print(z)
# print(d)
# print(e)

# print(f)
# print(g)
# print(y)


# import demo
# c=demo.fun(4,9)
# print(c)

# import random
# random.seed("hello")
# x=random.randint(-100,100)
# y=random.uniform(1,10)
# z=random.random()
# print(x)
# print(y)
# print(z)


x=int(input("enter the number"))
def func(n):
    rev=0
    while(x>0):
        rem=x%10
        rev=(rev*10)+rem
        x=x//10
        if rev==x:
            print("it iis palindrome")
        else:
            print("not palindrome")
            return rev
        
c=func(x)
print(c)           











