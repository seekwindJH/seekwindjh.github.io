---
title: 前端面试题
date: 2024/04/07
tags:
  - interview
categories:
  - front-end
---

![前端题库](https://vue3js.cn/interview/)

## 1. Js 基础

### 1. 箭头函数和普通函数的重要区别

在普通函数中，this 总是指向调用它的对象，如果用作构造函数，this 指向创建的对象实例。

箭头函数本身没有 this，但是它在声明时可以捕获其所在上下文的 this 供自己使用。this 一旦被捕获，就不再发生变化。

### 2. || 和 && 的作用

1. 只要 || 前面为 false,不管 || 后面是 true 还是 false，都返回 || 后面的值。
2. 只要 || 前面为 true,不管 || 后面是 true 还是 false，都返回 || 前面的值。

3. 只要 && 前面是 false，无论 && 后面是 true 还是 false，结果都将返 && 前面的值;
4. 只要 && 前面是 true，无论 && 后面是 true 还是 false，结果都将返 && 后面的值;

::: tip
如果省略该参数或参数值为 0、-0、null、false、NaN、undefined，或空字符串（""），则该对象具有的初始值为 false。所有其他值，包括任何对象，空数组（[]）或字符串 "false"，都会创建一个初始值为 true 的对象。
--- ![MDN Boolean包装器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
:::

## 2. Vue

### 1. 父子组件的加载顺序，从生命周期的角度描述

参考[原博客](https://blog.csdn.net/leilei__66/article/details/118699960)。

1. 父组件 beforeCreate
2. 父组件 created
3. 父组件 beforeMount
4. 子组件 beforeCreate
5. 子组件 created
6. 子组件 beforeMount
7. 父组件 mounted
8. 子组件 mounted
