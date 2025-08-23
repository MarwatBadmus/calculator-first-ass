#Opening a net file
file = open('input.txt', 'w')
text = 'This is my assignment \n for week four'
file.write(text)
#Modifying the file
modified = text.upper()
#Opening output.txt
file2 = open('output.txt', 'w')
file2.write(modified)


#Assignment 2
#Asking user to input file name
filename = input('Enter filename: ')

try:
    file = open( filename, 'r')
    reading = file.read()
    print('opened success')
except FileNotFoundError:
    print('file does not exist, try again')

