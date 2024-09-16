# for i in range(0,100,2):
#     print(i)
#for i in range(0,10):
# for i in range(-10,0):

#     print(i)
# x="hello"
# for i in range(len(x)):
#     print(i,"----",x[i])
# x=int(input(" enter the number ="))
# for i in range(1,x+1):
#     if(x%i==0):
#         print("the factor of ",x ,"=",i)
# x=int(input("enter the number"))
# c=0
# for i in range(1,x+1):
#     if(x%i==0):
#         c=c+1
#         print("the factor if ",x,"is",i)
# print(c)
# x=5
# y=6
# print("before swaping",x)
# print("after swaping ",y)
# x,y=y,x
# print(x)
# print(y)
x=int(input("enter thhe number"))
c=0
for i in range(1,x+1):
    if(x%i==0):
        c=c+1
        print("the factor is ",x,"is",i)
print(c)