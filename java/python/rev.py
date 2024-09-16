#  80-100 'a'
#  60-80  'b'
#  40-60  'c'
#  20-40  'd
#  0-20   'fail'
x=int(input("enter the number")) 
if(x<=100 and x>=80):
    print("a")
elif(x<=80 and x>=60):
    print("b")
elif(x<=60 and x>=40):
    print("c")
elif(x<=40 and x>=20):
    print("d")
elif(x<=20 and x>=0):
    print("fail")
else:
    print("your no is not find")
