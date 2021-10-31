def reverse(self, x: int) -> int:
    if x > 0:
        res = int(str(x)[::-1])
        if res <= 2 ** 31 - 1:
            return res
        else:
            return 0
    else:
        res = int(str(-x)[::-1])
        if res <= 2 ** 31:
            return -res
        else:
            return 0
