def strStr(self, haystack: str, needle: str) -> int:
    if needle is None: return 0

    len_hay = len(haystack)
    len_nee = len(needle)

    if len_hay < len_nee: return -1

    for i in range(len_hay - len_nee + 1):
        if haystack[i:i + len_nee] == needle: return i

    return -1
