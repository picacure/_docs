#JS 中的空值判断

### 判断为NUll

	if (a === null)
    // or
    if (a == null)

### 判断为undefined

	if (typeof a === "undefined")
    // or
    if (a === undefined)
    // or
    if (a == undefined)

### false 结果值判断

	if (!a) {
        // `a` is falsey, which includes `undefined` and `null`
        // (and `""`, and `0`, and `NaN`, and [of course] `false`)
    }

+ typeof null  -> "object"
+ 检查是否为null：using ===. Example: x === null
+ 检查是否为undefined： typeof x === "undefined"
+ 检查为undefined或者null之一： x == null

## 参考

[stackoverflow](http://stackoverflow.com/questions/5101948/javascript-checking-for-null-vs-undefined-and-difference-between-and)
