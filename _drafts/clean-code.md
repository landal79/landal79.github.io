---
layout: post
title: "Clean code: a review"
tags: [clean-code]
#date: 2015-06-03T00:32:23+02:00
---

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Beautiful code, like beautiful prose, is the result of many small decisions. The right method length here, the right object name there.</p>&mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/447042824622850048">March 21, 2014</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Why we do really care about _clean code_

> Its estimated that on an average a developer spends around 80% percent of the time reading code that has already been written. Efficiency of team can greatly decrease if the time spent by developers in reading and understanding the code increases from 80% to 90-95%

So what can what is clean code:

Clean code is about recognizing that your audience isn’t just a computer, it’s real-live humans! With this principle in mind.

> Programming is the art of telling another human what one wants the computer to do.
>
> Donald Knuth

Donald Knuth formalized the concept of [_literate programming_][literateprogramming]:

> The practitioner of literate programming can be regarded as an essayist, whose main concern is with exposition and excellence of style. Such an author, with thesaurus in hand, chooses the names of variables carefully and explains what each variable means. He or she strives for a program that is comprehensible because its concepts have been introduced in an order that is best for human understanding, using a mixture of formal and informal methods that reinforce each other.

Maybe this is to much, but it highlights an analogy between programming and writing.
Great authors are known for writing books that tell a clear, compelling story. They use tools like chapters, headings, and paragraphs to clearly organize their thoughts and painlessly guide their reader.
So developers code a meaningful requirement or business rule, by using classes, methods (or functions), variables, expressions and comments.
So our stories are the requirements and our tools are the set are our programming language constructs.
To became good writer, we as developers need to practice with good programming practice, to learn how to organize painlessly our code.

Robert Martin in the book [Clean code][] gives some rules about how to write good code.
So What are clean code principles:

- Meaningfull names
- Functions
- Comments
- Object and data structure
- Error handling
- Unit testing
- Classes

### References
- [literateprogramming][]
- [pluralsight][]
- [Clean code][]

[pluralsight]: http://blog.pluralsight.com/7-reasons-clean-code-matters
[literateprogramming]: http://www.literateprogramming.com/
[Clean code]: http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
