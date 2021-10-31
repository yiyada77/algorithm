def isPalindrome(x):
    if x < 0:
        return False
    to_str = str(x)
    str_len = len(to_str)
    for i in range(str_len // 2):
        if to_str[i] != to_str[str_len - 1 - i]:
            return False
    return True
