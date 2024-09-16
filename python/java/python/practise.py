import time
t=time.strftime('%H:%M,%S')
hour=int(input("enter the time"))
hour=int(time.strftime('%H'))
print(hour) 
if(hour>=0 and hour<12):
    print("good morning")
elif(hour>=12 and hour<18):
    print("good afternoon")
elif(hour>=18 and hour<0):
    print("good night")