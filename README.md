# Typing Bomb Project

## Programming Language Chart

| Language | Statically or Dynamically Typed | Strongly or Weakly Typed | Exit Code | What Happens On Run? | String/Int Result |
| -------- | ------------------------------- | ------------------------ | --------- | -------------------- | ----------------- |
| Java | Statically | Strong | Prevented from compiling because of “a” / 4 | Nothing | N/A |
| PHP | Dynamically | Weak | Runs forever, no exit code | When seconds are divisible by 15, it prints INF, then continues | INF (infinitely large double) |
| JavaScript | Dynamically | Weak | Runs forever, no exit code | When seconds are divisible by 15, it prints NaN, then continues | NaN (Not a Number) |
| TypeScript | Statically | Strong | Prevented from compiling because of “a” / 4 | Nothing | N/A |
| Golang | Static | Strong | Prevented from compiling because of "a" / 4 | Nothing | N/A |


## Assignment Questions

### What is strong typing?

Strong typing is when a programming language needs specific data type for each data value.

### What is weak typing?

Weak typing is when the type of a data does not matter and can be changed with a programming language

### What do all of the strongly typed languages have in common?

All of the strongly typed languages would not run successfully.

### How did Java differ from the other strongly typed languages? Why?

Some strongly typed languages are also dynamically typed, so they run until they hit the string, int division. They then crash. With Java the program won't compile because it is statically typed.

### For the result of the division in PHP, what is its meaning? Why?

The division result is INF which PHP documentation states is a float that represents "The infinite." It's the way that PHP represents a few operations that don't make sense with certain data types put together.

#### Which language do you like the most? Why? How does the language’s typing paradigm impact your decision?

I like Golang the most. The fact that it is strongly, statically typed helps influence my decision because it prevents the user of a program from using an impractical data type that could lead to more issues if used throughout.

### Which language do you like the least? Why? How does the language’s typing paradigm impact your decision?

I dislike PHP the most because it allows me to use a value that has no meaning in my code which makes things easier to break while running.