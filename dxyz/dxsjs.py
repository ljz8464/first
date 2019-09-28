import random

def code():
    s = ''
    for i in range(4):
        m = random.randint(1,9)
        s += str(m)
    return s


