# x=int(input("enterr the number"))
# for i in range(1,11):
#     print(x, "*",i,"=",x*i)

# x=int(input("enter the value"))
# fact=1
# for i in range(1,x+1):
#     fact=fact*i
#     print("the factor of", x, "is",fact)
# x=int(input("enter the number"))
# for i in range(1,11):
#     print(x,"*",i,"=",x*i)
x=int(input("enter a 1st value"))
y=int(input("enter a 2nd value"))
z=int(input("enter a 3rd value"))
if x>y:
    if x>z:
        print(x,"is greater")
    else:
        print(z,"is greater")
else:
    if y>x:
        if y>z:
            print(y,"is greater")
        else:
            print(z,"is greater")
    
