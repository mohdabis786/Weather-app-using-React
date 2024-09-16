x=input("choose your operators=+-/*%")
print("enter your first number")
n1=int(input())
print("enter your second number")
n2=int(input())
if x==('+'):
    print(n1+n2)
elif x==('-'):
    print(n1-n2)
elif x==('*'):
    print(n1*n2)
elif x==('/'):
    print(n1/n2)
elif x==('%'):
    print(n1%n2)
else:
    print(" no")