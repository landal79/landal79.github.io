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

### Function level of abstraction
Single Level of Abstraction (not surprising really) by Kent Beck and it’s about not putting things that are in different levels of abstraction and details in the same method! It’s better to have same level of abstraction for the statements inside a method!

Let's start with a simple example:

{% gist d26ea4e69bdf8efdd4e4 %}


[Robert Martin]: https://twitter.com/unclebobmartin
[Clean code]: http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
