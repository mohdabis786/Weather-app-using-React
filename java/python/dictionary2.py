# dict={"harry":"human being","spoon":"object"}
# # print(dict)
# # print(dict.keys())
# # print(dict.values())

# # for i in dict.keys():
# #     print(dict[i])
# print(dict.items())
x=int(input("enter the number"))
c=0
for i in range(1,x+1):
    if(x%i==0):
        c=c+i
        print("the factor of ",x,"is",i)
print(c)