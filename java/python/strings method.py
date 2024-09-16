# #strings are immutable
# a="!!! Harry !!!!!!!!!!"
# print(len(a))
# print(a)
# print(a.upper())
# print(a.lower())
# print(a.rstrip("!"))
# print(a.replace("harry","john"))
# print(a.split(" "))
# print(a.capitalize())
str1="Welcome to the console!!!"
print(len(str1))
print(len(str1.center(50)))
print(str1.count("to"))
print(str1.endswith("!!!"))
print(str1.isalnum())
print(str1.isalpha())
print(str1.isprintable())
#istitle returns true only if the first letter of each word of the string is capatalizwed else it returns false
#for example
print(str1.istitle())
print(str1.swapcase())
print(str1.title())