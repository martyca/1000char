import string
import random

def makeStr():
    myString =  ''.join(random.choice(string.digits) for _ in range(1000))
    print "Generated string is: \n{0}".format(myString)
    print "Generated string length is: {0}".format(len(myString))
    return myString

def getHighQuad(bigString):
    i = 0
    myList = []
    while i < len(bigString):
        myList.append(int(bigString[i:i+4]))
        i += 4
    return max(myList)

kiloChars = makeStr()
print "Highest quad slice is: {0}".format(getHighQuad(kiloChars))
