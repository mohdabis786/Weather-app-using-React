#design a calculator which will correctly solve the problems execpt the following ones:
# 45*3=555,56+9=77,56/6=4
#your progaram should take operator and the two numbers as input from user 
#and then return the result
ashab=input("choose your operator =+-/")
print("enter your first number")
n1=int(input())
print("enter your second nmmber")
n2=int(input())
if ashab==('+'):
    if n1==56 and n2==9:
        print("77")
else:
    print(n1+n2)
if ashab==('-'):
    print(n1-n2)
elif ashab==('*'):
    if n1==45 and n2==3:
        print('555')
    else:
        print(n1*n2)
elif ashab==('/'):
    if n1==56 and n2==6:
        print('4')
    else:
        print(n1/n2)

