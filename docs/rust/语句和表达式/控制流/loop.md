### [使用循环重复执行](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8%E5%BE%AA%E7%8E%AF%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C)

多次执行同一段代码是很常用的，Rust 为此提供了多种 **循环**（*loops*）。一个循环执行循环体中的代码直到结尾并紧接着回到开头继续执行。为了实验一下循环，让我们新建一个叫做 *loops* 的项目。

Rust 有三种循环：`loop`、`while` 和 `for`。我们每一个都试试。

#### [使用 ](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)`[loop](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)`[ 重复执行代码](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)

`loop` 关键字告诉 Rust 一遍又一遍地执行一段代码直到你明确要求停止。

作为一个例子，将 *loops* 目录中的 *src/main.rs* 文件修改为如下：

文件名: src/main.rs

```Rust
fn main() {
    loop {
        println!("again!");
    }
}
```

当运行这个程序时，我们会看到连续的反复打印 `again!`，直到我们手动停止程序。大部分终端都支持一个快捷键，ctrl-c，来终止一个陷入无限循环的程序。尝试一下：

```Plain Text
$ cargo run
   Compiling loops v0.1.0 (file:///projects/loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.29 secs
     Running `target/debug/loops`
again!
again!
again!
again!
^Cagain!
```

符号 `^C` 代表你在这按下了ctrl-c。在 `^C` 之后你可能看到也可能看不到 `again!` ，这取决于在接收到终止信号时代码执行到了循环的何处。

幸运的是，Rust 提供了另一种更可靠的退出循环的方式。可以使用 `break` 关键字来告诉程序何时停止循环。回忆一下在第二章猜猜看游戏的 [“猜测正确后退出”](https://rust.bootcss.com/ch02-00-guessing-game-tutorial.html#quitting-after-a-correct-guess) 部分使用过它来在用户猜对数字赢得游戏后退出程序。

#### [从循环返回](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BB%8E%E5%BE%AA%E7%8E%AF%E8%BF%94%E5%9B%9E)

`loop` 的一个用例是重试可能会失败的操作，比如检查线程是否完成了任务。然而你可能会需要将操作的结果传递给其它的代码。如果将返回值加入你用来停止循环的 `break` 表达式，它会被停止的循环返回：

```Rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```

在循环之前，我们声明了一个名为 `counter` 的变量并初始化为 `0`。接着声明了一个名为 `result` 来存放循环的返回值。在循环的每一次迭代中，我们将 `counter` 变量加 `1`，接着检查计数是否等于 `10`。当相等时，使用 `break` 关键字返回值 `counter * 2`。循环之后，我们通过分号结束赋值给 `result` 的语句。最后打印出 `result` 的值，也就是 20。

