# x="hello how are you"
# y=x.split(" ")
# print(" " .join(y[::-1]))
# i=0
# while(i<=5):
#     print(i)
#     i=i+1
# x=int(input("entter the value"))
# rev=0
# while(x>0):
#     rem=x%10
#     rev=(rev * 10)+rem
#     x=x//10
# print("reversed number =",rev)

x=int(input("entter the value"))
rev=0
tem=x
while(x>0):
     rem=x%10
     rev=(rev * 10)+rem
     x=x//10
if rev==tem:
     print("it is palindrome")
else:
     print("not palindrome")







