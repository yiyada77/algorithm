class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for (let i = 0; i < length; i++) {
            this[i] = result[i]; //this 是一个对象 ,类似于数组
        }
        this.length = length;
        this.selector = selector;
    }
    get(index) {
        return this[index];
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i];
            fn(elem);
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false);
        })
    }
}

const $p = new jQuery('p')
$p
$p.each((elem) => console.log(elem.nodeName))
$p.on('click', () => alert('clicked!'))