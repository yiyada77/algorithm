def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict={}
        for i,n in enumerate(nums):
            res=target-n
            if res in dict:
                return [dict[res],i]
            else:
                dict[n]=i
