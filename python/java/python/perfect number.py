x=int(input("enter the number"))
c=0
for i in range(1,x+1):
    if(x%i==0):
        c=c+i

        print("the factor of",x,"is",i)
print(c)
