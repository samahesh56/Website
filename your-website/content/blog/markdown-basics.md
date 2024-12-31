---
title: "Complete Markdown Guide"
date: "2024-12-31"
summary: "A comprehensive guide to Markdown formatting with examples"
author:
  name: "Your Name"
categories: ["Tutorial", "Documentation"]
---

# Markdown Formatting Guide

## Basic Text Formatting

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***. You can also use ~~strikethrough~~ formatting.

## Links and References

Here's [a link to Google](https://www.google.com). You can also create [reference-style links][ref] for cleaner markdown.

[ref]: https://www.example.com

## Lists

### Unordered List
* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
* Item 3

### Ordered List
1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

## Code Examples

Inline code: `const greeting = "Hello World";`

Code block with syntax highlighting:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i))