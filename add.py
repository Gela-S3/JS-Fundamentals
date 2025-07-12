# color_red = input("Enter the color of the light : ")


# red = color_red.lower()
# yellow = color_red.lower()
# green = color_red.lower()

# if red == "red" :
#     print("stop!".upper())
# elif yellow == 'yellow':
#     print("ready to go!".upper())
# elif green == 'green':
#     print("go!".upper())
# else :
#     print("Please! Enter the color of the traffic light!")

# for i in "Python".upper():
#     print(i, end=" // ")

# count = [10, 20, 30, 40, 50]

# for num in count :
#     print(num)

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# for num in numbers :
#     if num % 2 == 0:
#         print(num, end=" ")
#         # print("")

# for num in range(0, 101,10):
#     print(num)
# for num in range(5):
#     print(num * 10)

# while loop

# i = 1
# while i < 6:
#     print(i, end=" ")
#     i += 1
# print("done!".capitalize())

# Program 6-11
 # Find the factors of a number using while loop
# num = int(input("Enter a number to find its factor: "))
# print(1, end=' ')  # 1 is a factor of every number
# factor = 2
# while factor <= num/2:
#     if num % factor == 0:
#  # the optional parameter end of print function specifies the delimeter
# # blank space(' ') to print next value on same line
#           print(factor, end=' ')
#     factor += 1
# print (num, end=' ')

# num = int(input("Enter the number to be checked: "))
 
# flag = 0        
# if num > 1 :
#    #presume num is a prime number
#      for i in range(2, int(num / 2)):
#           if (num % i == 0):
#                flag = 1     #num is a not prime number
#                break       #no need to check any further
#      if flag == 1:
#           print(num , "is not a prime number")
#      else:
#           print(num , "is a prime number")
# else :
#     print("Entered number is <= 1, execute again!")

# num = int(input("Enter the pattern's row : "))

# for i in range(1, num + 1 ): # (1,5) -->  4 * timising(((1, 2, 3, 4))) ---> x, x, x, x
#     for j in range(1, num + 1): #for i = 1 first timising ---> j(1, 5)----> x, x, x, x
#         print("x", end="")
#     print()


# num = int(input("Enter a number to generate its pattern = "))
# for i in range(1,num + 1):
#      for j in range(1,i + 1):
#           print(j, end = " ")
#      print()
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)