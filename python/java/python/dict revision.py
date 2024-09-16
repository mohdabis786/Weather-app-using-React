# x={
#     'name':['sohan','mohan','rohan'],
#     'age':(33,45,67),
#     'marks':{23,5,56}

# }
# x['name'].append('ram')
# print(x)
# print(x.keys())
# print(x.values())
# print(x.items())


# x=['a','b','c']
# y=[1,2,3]
# z={}
# for i in range(len(x)):
#     z.update({x[i]:y[i]})
# print(z)
x={
  'a':1,
  'b':2,
  'c':3
  }
z={}
for i,j in x.items():
    z[j]=i
print(z)














