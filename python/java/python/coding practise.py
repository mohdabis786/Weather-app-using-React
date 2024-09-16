# num=int(input("enter the number"))
# if(num>=0):
#     print("pstivive")
# else:
#     print("negative")
# x=int(input("enter the number"))
# if(x %3==0 and x %5==0):
#     print("fizzbuzz")
# elif( x %5==0):
#     print("buzz")
# elif(x %3==0):
#     print("fizz")
# else:
#     print("no")

x=int(input("enter the value of x:"))
y=int(input("enter the value of y:"))
z=int(input("enter the value of z:"))
if(x==y and y==z and z==x):
    print("equalateral")
elif(x==y or y==z or z==x):
    print("iso")    
elif(x!=y and y!=z and z!=x):
    print("sco")
else:
    print("no")