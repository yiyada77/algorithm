def isValid(self, s: str) -> bool:
    dict = {')': '(', ']': '[', '}': '{'}
    stack = []
    for i in s:
        if stack and i in dict:
            if dict[i] == stack[-1]:
                stack.pop()
            else:
                return False
        else:
            stack.append(i)
    return not stack
