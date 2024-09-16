# x={
#     'a':1,
#     'b':2,
#     'c':3
# }

# print(x)
# x={
#     'a':1,
#     'b':2,
#     'c':3
# }

# print(x['b'])
# x={
#     'a':1,
#     'b':2,
#     'c':3
# }

# print(x.get('d','key is not present'))
# x['d']=28
# print()x


# x={
#     'name' : ['sohan','mohan','rohan'],
#     'age'  : (34,56,67),
#     'marks': {23,5,56}
# }
# x['name'].append('ram')
# print(x)
# print(x.keys())
# print(x.values())
# print(x.items())

# x={
#     'a':1,
#     'b':2,
#     'c':2
# }
# if 'a' in x:
#     print("present")
# else:
#     print("not present")
# x={
#     'a':1,
#     'b':2,
#     'c':2
# }
# if 1 in x.values():
#     print("present")
# else:
#     print("not present")
# x={
#     'a':1,
#     'b':2,
#     'c':2
# }
# if ('a',1) in x.items():
#     print("present")
# else:
#     print("not present")
# z=x.pop('a')
# print(x)
# print(z)

# z=x.popitem()
# print(x)
# print(z)

x={
    'a':11,
    'b':22,
    'c':33
}

# for i in x:
#     print(i,"----",x[i])

for i,j in x.items():
    print(i,"----",j)





























