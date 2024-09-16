
#l=10
#def function1(n):
    #m=5
    #global l
   # l=l+45
  #  print(l,m)
 #   print(n,"i have printed")
#function1("this is me")
x=89
def harry():
    x=20
    def rohan():
        global x
        x=88
    print("before calling rohan()",x)
    rohan()
    print("after calling rohan()",x)
harry()
print(x)