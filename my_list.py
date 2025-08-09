#Empty list
my_list = [ ] #Empty list
print(my_list)

#Adding numbers 10-40 to the list

my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)
print(my_list)

#Insert 15 to 2nd position which it index 1

my_list.insert(1,15)
print(my_list)

#creating another list
my_list2 = [50, 60, 70]
print("New list:" ,my_list2)

#Extending the list
Extended_list = my_list.extend(my_list2)
print("Extended list:", my_list)

#Removing last element from my_list
Last_element_from_my_list = my_list.pop(-1)
print("Last element from my list:", my_list)

#Sorting list in ascending order
sorted_list = my_list.sort
print("Sorted list:",my_list)

#Finding and printing the index of the value 30 in my_list.
indexvalue= my_list.index(30)
print("index value:", indexvalue)