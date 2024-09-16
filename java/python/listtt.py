# x=[ [] ] * 3
# print(id(x[0]))
# print(id(x[1]))
# print(id(x[2]))
# print(x)

# x[0][2].append(1000)
# print(x)

# x=[[1,2,[3,4,5,6],7,8,[9,10,11],12]]
# x[0].insert(5,2000)
# print(x)

# x=[1,2,[3,4,[5,6,7,8],9,10],11,12]
# x[2].insert(2,100)
# print(x)
# x=[11,22,33,44,55,1,23,32]
# print(min(x))
# print(max(x))
# print(sum(x))
# x.sort(reverse=True)
# x.sort
# print(x)

# x=[11,22,33,44,55,33,33,44]
# z=x.pop()
# print(x)
# print(z+100)
# x.clear()
# x.extend([12,2,3,4,556,])
# print(x)

# x=[1,2,3]
# y=[1,2,3]
# print(x==y)
# print(x is y)

x=["hello","hi","hey"]
for i in x:
    print(i)

for i in range(len(x)):
    print(i,"----",x[i])