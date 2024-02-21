#### `[while](https://rust.bootcss.com/ch03-05-control-flow.html#while-%E6%9D%A1%E4%BB%B6%E5%BE%AA%E7%8E%AF)`[ 条件循环](https://rust.bootcss.com/ch03-05-control-flow.html#while-%E6%9D%A1%E4%BB%B6%E5%BE%AA%E7%8E%AF)

在程序中计算循环的条件也很常见。当条件为真，执行循环。当条件不再为真，调用 `break` 停止循环。这个循环类型可以通过组合 `loop`、`if`、`else` 和 `break` 来实现；如果你喜欢的话，现在就可以在程序中试试。

然而，这个模式太常用了，Rust 为此内置了一个语言结构，它被称为 `while` 循环。示例 3-3 使用了 `while`：程序循环三次，每次数字都减一。接着，在循环结束后，打印出另一个信息并退出。

文件名: src/main.rs

```Rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number = number - 1;
    }

    println!("LIFTOFF!!!");
}
```

示例 3-3: 当条件为真时，使用 `while` 循环运行代码

这种结构消除了很多使用 `loop`、`if`、`else` 和 `break` 时所必须的嵌套，这样更加清晰。当条件为真就执行，否则退出循环。

