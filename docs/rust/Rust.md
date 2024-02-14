一个 HTTP Server 内部包括很多部分：协议实现（h1、h2、压缩等）、连接状态管理（keepalive）、请求分发、中间件、业务逻辑等。用户可以全部自行实现，但其实除了业务逻辑之外的部分都是较为通用的能力。我们将这些通用能力与用户的业务逻辑解耦，即 HTTP 框架。

由于 Rust 生态中 hyper 已经提供了较为完备的 HTTP 协议实现，基于 hyper 实现 HTTP 框架就只需要提供包括路由、共享状态、中间件等能力。

本文从 HTTP 框架的设计角度，以新版本 Axum 作为例子，分析 Rust 下 HTTP 框架如何提供合理抽象与类型约束。基于 Rust 强大的类型系统，我们可以写出高效且正确的代码。

[模块系统](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E6%A8%A1%E5%9D%97%E7%B3%BB%E7%BB%9F%2022035592-48eb-4872-a489-3792bf6bab04.md)

[对象](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E5%AF%B9%E8%B1%A1%200649297a-9d43-4f6e-8120-4fb4043c294c.md)

[语句和表达式](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F%2084db870a-8016-4dcf-a456-c84607f23ca6.md)

[所有权](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E6%89%80%E6%9C%89%E6%9D%83%209ef06b26-0662-4377-b327-996f12e647fe.md)

[特征](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E7%89%B9%E5%BE%81%20e22a0c27-4058-4877-bff2-261db33c3e2e.md)

[错误处理](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%20ed40a466-cf05-450b-9633-43aaa5b3f60a.md)

[测试](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E6%B5%8B%E8%AF%95%20aca18818-d0d2-4c07-b2ab-e983aaedec2f.md)

[IO](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/IO%20c0e01ce5-6f0e-4ae5-9f9a-1e3601c9f4ce.md)

[并发](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E5%B9%B6%E5%8F%91%20a6e44b28-d08e-4dc6-9a5c-49a1a65ec502.md)

[智能指针](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88%209dfdab6e-ae95-4162-a4d1-130c27d99314.md)

[Rust Project](Rust+2687f1d2-34a9-4664-b1ca-fec910595b5f/Rust+Project%2056d6919a-34e7-4f7e-b029-0b7f8661202c.md)



[sled](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/sled%20fe57165b-3415-4a8f-983c-752a43038cf1.md)



[deno](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/deno%208dc16b27-9d36-43c9-8a81-8fd25f008483.md)

[swc](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/swc%2076ebed0b-8079-4a8e-8557-a114f1451348.md)

[Tokio](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/Tokio%20d52c851b-b95b-4c5e-9586-9c3bad73b96d.md)

[tauri](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/tauri%20af07601a-23ae-49d3-9830-18419599cd76.md)



[Axum](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/Axum%20c07a9547-1bac-485c-90cf-f6fbde79f6d2.md)

[Rust HTTP 框架设计](Rust+Project+56d6919a-34e7-4f7e-b029-0b7f8661202c/Rust+HTTP+%E6%A1%86%E6%9E%B6%E8%AE%BE%E8%AE%A1%20ddf7af6f-1c72-4392-9524-3280a03acfce.md)

# cross-rs











# Handler抽象

## 简单路由

## 用户接口

# 共享状态

# 路由

# 中间件

