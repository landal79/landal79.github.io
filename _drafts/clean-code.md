---
layout: post
title: "Clean code: a review"
tags: [clean-code]
#date: 2015-06-03T00:32:23+02:00
---

<blockquote class="twitter-tweet" lang="en">
    <p lang="en" dir="ltr">Beautiful code, like beautiful prose, is the result of many small decisions. The right method length here, the right object name there.</p>&mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/447042824622850048">March 21, 2014</a>
</blockquote>



Every developer has a kind of six sense, that we can call _sense of code_, this is a very personal feeling about what is a good code. _Clean code_ could be considered the formalization effort of best programmers' sense of code, which they've developed through their experience.

Before listing the practices to achieve clean code, let's try to understand what has led to those practices.

Why we should really care about _clean code_, according to Robert Martin [Clean code][]{:target="_blank"} book:

> Its estimated that on an average a developer spends around 80% percent of the time reading code that has already been written. Efficiency of team can greatly decrease if the time spent by developers in reading and understanding the code increases from 80% to 90-95%

So developers need to write *easily understandable code* for other developers.  
Clean code is about recognizing that your audience isn’t just a computer, but are your fellow developers.

> Programming is the art of telling another human what one wants the computer to do.
>
> Donald Knuth

Donald Knuth formalized the concept of [_literate programming_][literateprogramming]{:target="_blank"}:

> The practitioner of literate programming can be regarded as an essayist, whose main concern is with exposition and excellence of style. Such an author, with thesaurus in hand, chooses the names of variables carefully and explains what each variable means. He or she strives for a program that is comprehensible because its concepts have been introduced in an order that is best for human understanding, using a mixture of formal and informal methods that reinforce each other.

Maybe this is to much, but it highlights an analogy between programming and writing.
The code should tell a clear compelling story, whose topics are the requirements.
Developers write it by using classes, methods (or functions), variables, expressions and comments.
To become good writer, we as developers need to practice with good programming practice, to learn how to organize painlessly our code.

What are the principles that clean code has:

- Meaningful and descriptive naming
- Proper expressive abstractions
- It's readable and expressive


Robert Martin in the book [Clean code][]{:target="_blank"} gives some rules about how to write good code.
So What are clean code principles:

- Meaningful names
- Functions
- Comments
- Object and data structure
- Error handling
- Unit testing
- Classes

### References
- [literate programming][literateprogramming]
- [pluralsight][]
- [Clean code][]

[pluralsight]: http://blog.pluralsight.com/7-reasons-clean-code-matters
[literateprogramming]: http://www.literateprogramming.com/
[Clean code]: http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
