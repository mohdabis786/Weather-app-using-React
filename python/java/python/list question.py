# x=[1,21,3,4,55,5,6]
# x.sort()
# print(x)
# print(x[-1]*x[-2])
# print(x[-1]+x[-2])
 
 # WRITE A PROGARAM TO SUM AND MULTIPLY ALL ELEMENTS FROM EACH OTHER FROM THE GIVEN
# x=[1,2,3,4,5]
# sum=0
# mult=1
# for i in x:
#     sum=sum+i
#     mult=mult*i
# print("sim =",sum)
# print("mult=",mult)

# x=[11,22,33,44,55,33,33,44]
# for i in x:
#     if(i==33):
#         x.remove(33)
# print(x)
# x.remove(33)
# print(x)


# x=[11,22,33,44,55,33,33,44]
# z=[]
# for i in x:
#     if(i==33):
#         continue
#     z.append(i)
       

# print(z)


#x=[11,22,33,44,55,33,33,44]
# while 33 in x :
#     x.remove(33)
# print(x)
# z=[i for i in x if i !=33 ]
# print(z)

x=["hello","hi"]
y=["sonu","monu"]
z=[]
for i in x:
    for j in y:
        z.append(i+" "+j)
print(z)