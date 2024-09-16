import time
t=time.strftime('%H:%M:%S')
hour=int(time.strftime('%H'))
hour=int(input("enter the time"))
print(hour)
if(hour>=0 and hour<12):
    print("good morning sir")
elif(hour>=12 and hour<18):
    print("good evening sir")
if(hour>=18 and hour<0):
    print("good night sir")
