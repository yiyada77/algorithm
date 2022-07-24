function Heap(type='min'){
    this.type=type
    this.value=[]
}


Heap.prototype.create=function(){
    const length=this.value.length
    for(let i=Math.floor(length/2)-1;i>=0;i--){ //找到第一个非叶子结点
        this.adjust(i,length)
    }
}

/**
 * 从上往下调整
 */
Heap.prototype.adjust=function(index,length){
    for(let i=index*2+1;i<length;i=i*2+1){//i=i*2+1 是每次比较该结点的左子叶
        if(i+1<length){//找到左右叶子中的找到更小（type===min) || 更大（type===max）
            if((this.type==='min'&&this.value[i+1]<this.value[i])
            ||(this.type==='max'&&this.value[i+1]>this.value[i])){
                i++
            }
        }
        
        if((this.type==='min'&&this.value[i]<this.value[index])
        ||(this.type==='max'&&this.value[i]>this.value[index])){
            //在叶子的值小于根节点（type===min) || 大于根节点(type===max) 时交换叶子与根的值，
            //此时被比较的根节点的位置变为被交换的叶子的位置，但是由于交换，值还是最开始根节点的值
            [this.value[i],this.value[index]]=[this.value[index],this.value[i]]
            index=i
        }else{
            break
        }
    }
}

/**
 * 将新增元素加在数组末尾，再通过对比调整堆的形状
 * 从下往上对比
 */
Heap.prototype.add=function(element){
    this.value.push(element)
    if(this.value.length>1){
        let index=this.value.length-1
        let parent=Math.floor((index-1)/2)
        while(parent>=0){
            if((this.type==='min'&&this.value[index]<this.value[parent])
            ||(this.type==='max'&&this.value[index]>this.value[parent])){
                [this.value[index],this.value[parent]]=[this.value[parent],this.value[index]]
                index=parent
                parent=Math.floor((index-1)/2)
            }else{
                break
            }
        }
    }
}

/**
 * 由于堆属于优先队列，只能从头部移除
 * 移除头部后，使用末尾元素填充头部，开始头部下沉操作
 */
Heap.prototype.pop=function(){
    let res=null
    if(this.value.length>1){
        res=this.value[0]
        this.value[0]=this.value.pop()
        this.adjust(0,this.value.length)
    }else if(this.value.length===1){
        return this.value.pop()
    }
    return res
}