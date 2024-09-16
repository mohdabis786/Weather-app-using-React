ashab=input("choose your operator =+-*/")
print("enter your first number")
n1=int(input())
print("enter your second number")
n2=int(input())
if ashab==('+'):
    print(n1+n2)
elif ashab==('-'):
    print(n1-n2)
elif ashab==('*'):
    print(n1*n2)
elif ashab==('/'):
    print(n1/n2)
else:
    print("invalid operator")
