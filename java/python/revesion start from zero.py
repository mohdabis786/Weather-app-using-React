# x=int(input("enter the number"))
# rev=0
# while(x>0):
#     rem=x%10
#     rev=(rev*10)+rem
#     x=x//10
# print("the value of revese is",rev)
    
# for i in range(1,6):
#     for j in range(1,i+1):
#         print("*",end=" ")
#     print()


# for i in range(6,0,-1):
#     for j in range(1,i+1):
#         print("*",end=" ")
#     print()

# i=5
# while(i>0):
#     print(" " * (5-i)+"* " * i)
#     i=i-1

# i=1
# while(i<=5):
#     print(" " * (5-i)+"* " *i)
#     i=i+1

# x=[[1,2,[3,4,5,6],7,8,[9,10,11],12]]
# x.append(0,3000)
# print(x)

# x=["hello","hi","hey"]
# for i in x:
#     print(i)
# for i in range(len(x)):
#     print(i)
# for i in range(len(x)):
#     print(i,"----",x[i])

# x=[1,21,3,4,55,5,6]
# sum=0
# mult=1
# for i in x:
#     sum=sum+i
#     mult=mult*i

# print(sum)
# print(mult)

# x=["hello","hi"]
# y=["sonu","monu"]
# z=[]
# for i in x:
#     for j in y:
#         z.append(i+""+j)
# print(z)
 
list1=[1,2,3,4]
list2=[2,4,5,6]
list3=[2,6,7,8]
result=list()
result.extend(i for i in list1 if i not in (list2+list3) and i not in result)
result.extend(i for i in list2 if i not in (list1+list3) and i not in result)
result.extend(i for i in list3 if i not in (list1+list2) and i not in result)
print(result)

























































