# from functools import reduce
#
# list_x = [(1, 3), (2, -2), (-2, 3)]
# r = reduce(lambda x, y: x + y, list_x)
#
list_x = [1, 0, 1, 1, 2]
r = filter(lambda x: True if x == 1 else False, list_x)
