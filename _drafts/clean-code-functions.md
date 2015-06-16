---
layout: post
title: "Clean code: Functions"
tags: [clean-code,oop,patterns]
#date: 2015-06-03T00:32:23+02:00
---

[Robert Martin][]{:target="_blank"} in his [Clean code book][Clean code]{:target="_blank"} summarizes the main feature of well written function:

- should be small
- does only one thing
- should be one level of abstraction below the concept represented by the function

### Small!!

### Do only one thing

> FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL.
THEY SHOULD DO IT ONLY.

### Single level of abstraction principle (SLAP)
Single Level of Abstraction, by Kent Beck, states that to make code easy to read and understand you shouldn't use code that are in different levels of abstraction and details in the same method! It’s better to have same level of abstraction for the statements inside a method! In other words, you shouldn’t have a method which mixes low-level details, such as database connectivity management or web services data marshaling with high-level business code.
Let's start with a simple example:

{% gist d26ea4e69bdf8efdd4e4 %}

Despite the example is very trivial, it serves the purpose.
The scope of the function is clear but, it compares two files, but it mixes low level java APIs to read the file content as string, and then it compares two lists of file lines.
Let's try to refactor to separate levels of abstraction.

{% gist da6063ba2eae67e8c2cd %}

First of all the example violates the [DRY principle][DRY], so we do a little refactoring by [extracting a method][extract method] `readFileLines`. Then we create another method `compareLines`, now the compare contains code at one line level of abstraction, and each function does exatly one thing.

[Robert Martin]: https://twitter.com/unclebobmartin
[Clean code]: http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
[DRY]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[extract method]: http://refactoring.com/catalog/extractMethod.html
