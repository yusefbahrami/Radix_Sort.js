def radixsort(array, func):
    length = len(array)
    max_price = 0
    for i in range(length):
        if int(func(array, i)) > max_price:
            max_price = int(func(array, i))

    divisor = 1
    while max_price // divisor > 0:
        B = [0] * 10
        C = [None] * length

        for i in range(length):
            indexNum = (func(array, i) // divisor) % 10
            B[indexNum] += 1

        for i in range(1, 10):
            B[i] = B[i] + B[i-1]

        for i in range(length-1, -1, -1):
            indexNum = (func(array, i) // divisor) % 10
            C[B[indexNum] - 1] = array[i]
            B[indexNum] -= 1
        array = C
        divisor *= 10

    return array


def radixsortfunc1(array, i):
    return int(array[i].value.capacity)


def radixsortfunc2(array, i):
    return int(array[i].capacity)


class T:
    def __init__(self, capacity) -> None:
        self.capacity = capacity


t1 = T(1)
t2 = T(20)
t3 = T(42)
t4 = T(12)
t5 = T(74)
t6 = T(39)
t7 = T(5)
array = [t1, t2, t3, t4, t5, t6, t7]

a = radixsort(array, radixsortfunc2)
for i in a:
    print(i.capacity)
