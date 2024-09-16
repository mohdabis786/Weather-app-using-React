while(True):
    print("enter a number\n")
    inp=int(input())
    if inp>100:
        print("congrats you have entered a number greater than 100\n")
        break 
    else:
        print("try again\n")
        continue