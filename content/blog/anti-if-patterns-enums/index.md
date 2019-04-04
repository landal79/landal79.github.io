---
title: "Anti-if patterns: Enums"
tags: [clean-code,oop,patterns]
date: 2015-06-03T00:32:23+02:00
description: In this post I'll try to illustrate a pattern to avoid if statements.
---

## Introduction

In this post I'll try to illustrate a pattern to avoid if statements.

## The problem

```java
public enum WidgetTypes {

    Type1,Type2,Type3,Type4
    }

    ...

    WidgetTypes _myType = WidgetTypes.Type1;

    ...

    switch(_myType){
    case WidgetTypes.Type1:
        //do something
        break;

    case WidgetTypes.Type2:
        //do something
        break;
    //etc...
}
```

## The pattern

The solution is to Enum in more object orient manner:

```java
public class AntiIf {
    public enum WidgetTypes {
        Type1 {
        public void doSomething() {
            //...
        }},
        Type2 {
        public void doSomething() {
            //...
        }},
        Type3 {
        public void doSomething() {
            //...
        }},
        Type4 {
        public void doSomething() {
            //...
        }};

        public abstract void doSomething();
    }

    WidgetTypes _myType; // set by someone to one of the types.

    public void someFunction() {
        //...
        _myType.doSomething();
        //...
    }
}
```

### References
- [Stackoverflow Anti-if Campaign](http://stackoverflow.com/questions/1167589/anti-if-campaign)
