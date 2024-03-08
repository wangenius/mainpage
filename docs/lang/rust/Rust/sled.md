本地嵌入式数据库

```Rust
let tree = sled::open("/tmp/welcome-to-sled")?;

// insert and get, similar to std's BTreeMap
let old_value = tree.insert("key", "value")?;

assert_eq!(
  tree.get(&"key")?,
  Some(sled::IVec::from("value")),
);

// range queries
for kv_result in tree.range("key_1".."key_9") {}

// deletion
let old_value = tree.remove(&"key")?;

// atomic compare and swap
tree.compare_and_swap(
  "key",
  Some("current_value"),
  Some("new_value"),
)?;

// block until all operations are stable on disk
// (flush_async also available to get a Future)
tree.flush()?;
```



