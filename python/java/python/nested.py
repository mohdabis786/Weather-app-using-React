num=int(input("enter your number"))
if (num<0):
    print("num is negative")
elif (num>0):
    if(num<=10):
        print("number is between 1-10")
    elif(num>10 and num<=20):
        print("number is between 11-20")
    else:
        print("number is greater then 20")
else:
    print("num  is zero")