# x=[[1,2,[3,4,5,6],7,8,[9,10,11],12]]
# x[0].insert(5,200)
# print(x)

# x=[11,22,33,44,1,2,3,1,2,3,2]
# print(min(x))
# print(max(x))
# print(sum(x))
# print(x.count(2))
# print(x.index(22))
# x.sort()
# print(x)
# x.remove(33)
# print(x)
# del x[44]
# print(x)
# z=x.pop(11)
# print(z)

# x=[11,22,33,44,55,33,33,44]
# while 33 in x:
#     x.remove(33)
# print(x)


# x=[11,22,33,44,55,33,33,44,33]
# z=[ i for i  in x if i!=33]
# print(z)

# x=["hello","hi"]
# y=["sonu","monu"]
# z=[]
# for i in x:
#     for j in y:
#         z.append(i+" "+j)
# print(z)


# i=0
# while(i<=5):
#     if(i==3):
#         break
#     print(i)
#     i=i+1
# else:
#     print("bye")


# word="Python Programming"
# n=len(word)
# word1=word.upper()
# word2=word.lower()
# converted_word=" "
# for i in range(n):
#     if i%2==0:
#         converted_word+=word2[i]
# else:
#     converted_word+=word1[i]
#     print(converted_word)


# a=[1,2,3,4]
# b=[3,4,5,6]
# c=[ x for x in a if x not in b]
# print(c)



# TUPLES
# x=(1,2,3,4)
# y=list(x)
# y[3]=18
# x=tuple(y)
# print(x)


# x=(1,2,3)
# y=(4,5,6)
# z=x+y
# print(x)
# print(y)
# print(z)


# x,y,z=(1,2,3)
# print(x)
# print(y)
# print(z)

# samplelist=[10,20,30,40,50]
# print(samplelist[-2])
# print(samplelist[-4:-1])


# list1=[10,20,30,40]
# list2=[10,45,60]
# list3=list1+list2

#print(list3)


# list=[10,20,30,40,50]
# list.pop()
# print(list)

# list.pop(2)
# print(list)
# list=[5,10,15,25]
# print(list[::-2])


# list=['a','b','c','d']
# list2=list.copy()
# print(list2)



# x={11,22,33,44}
# x.add(75)
# print(x)
# x.update({229,223,829})
# print(x)
# x.discard(2200)

# print(x)
# y={1200,3200,4200}
# x.update(y)
# print(x)


# x={1,2,3,4}
# y={1,5,2,6}
# z=x.difference(y)
# print(z)



# x=[1,2,3,4,9,29,48,1,2,44,39,47,44,3]
# y=set(x)
# x=list(y)
# print(x)

# for i in range(-10,0):
#     print(i,end=" ")
    
# x=int(input("enter the number"))
# c=0
# for i in range(1,x+1):
#     if x%i==0:
#         c=c+1
#         print("the factor of ",x,"is",i)
# print(c)

# x=int(input("enter the number"))
# rev=0
# while(x>0):
#     rem=x%10
#     rev=(rev*10)+rem
#     x=x//10
# print("reversed no is",rev)


# x=0
# while(x<100):
#     x=x+2
# print(x)

# for l in 'Jhon':
#    if l == 'o':
#       pass
#    print(l, end=", ")






# for num in range(10, 14):
#    for i in range(2, num):
#        if num%i == 1:
#           print(num)
#           break




# for num in range(-2,-5,-1):
#     print(num, end=", ")



# for num in range(2,-5,-1):
#     print(num, end=", ")





# x = 0
# a = 0
# b = -5
# if a > 0:
#     if b < 0: 
#         x = x + 5 
#     elif a > 5:
#         x = x + 4
#     else:
#         x = x + 3
# else:
#     x = x + 2
# print(x)






# x = 0
# for i in range(10):
#   for j in range(-1, -10, -1):
#     x += 1
#     print(x)




# var = 10
# for i in range(10):
#     for j in range(2, 10, 1):
#         if var % 2 == 0:
#             continue
#             var +=1
#     var+=1
# else:
#     var+=1
# print(var)



# x=0
# for i in range(10):
#     for j in range(-1,-10,-1):
#         x=x+1
#         print(x)

# var=10
# for i in range(10):

x=input("enter the number")
if(x==x[::-1]):
    print("tjis is palendrome")
else:
    print("not palendrome")
# for i in range(1,6):
#     if x%i==0:
#         print(i)
# temp=x
# rev=0
# while(x>0):
#     rem=x%10
#     rev=(rev*10)+rem
#     x=x//10
# if(temp==rev):
#     print("this is palindrome")
# else:
#     print("not palindrome")









































































































































