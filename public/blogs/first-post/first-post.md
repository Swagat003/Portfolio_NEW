# My First Blog Post  
*Published on: 9th Sept 2025*  

![Cover Image](image1.jpg)

Welcome to my first blog! 🎉

This post contains a wide range of Markdown features so you can test the UI thoroughly. You'll find headings, lists, code samples, tables, images, blockquotes, task lists, and more.

---

## Quick examples

- Inline code: `const x = 42`  
- Bold and italic: **bold**, *italic*, and ***both***  
- Strikethrough: ~~deprecated~~  

### Links

- External: [Vite](https://vitejs.dev)  
- Internal (relative): [Cover image file](image1.jpg)

---

## Code samples

Inline code is useful for short snippets like `npm run dev`.

```bash
# Start the dev server
npm run dev
```

```javascript
// Example JavaScript
function greet(name) {
	return `Hello, ${name}!`;
}

console.log(greet('Reader'));
```

```python
# Small Python example
def fib(n):
		a, b = 0, 1
		for _ in range(n):
				a, b = b, a + b
		return a

print(fib(10))
```

---

## Lists

1. First ordered item
2. Second ordered item
	 - Nested unordered A
		 - Nested deeper
3. Third ordered item

- Unordered bullet
- Another bullet
	1. Nested ordered inside bullet
	2. Another nested

---

## Task list

- [x] Write the post
- [ ] Add images
- [ ] Polish styles

---

## Table

| Feature | Supported | Notes |
|---|:---:|---|
| Headings | ✅ | h1..h6 |
| Code fences | ✅ | with language hints |
| Tables | ✅ | via GFM |
| Task lists | ✅ | via GFM |

---

## Blockquote

> This is a blockquote. Use it for quotes, callouts, or notes.
>
> - It can contain lists
> - And other markdown

---

## Images (inline and repeated)

Here is the cover again (relative path):

![Cover Image Reuse](image1.jpg)

---

## HTML snippet (should render as HTML inside MD)

<div style="padding:8px;border-radius:6px;background:rgba(0,0,0,0.06)">This is a raw HTML block inside markdown.</div>

---

## Conclusion

This markdown contains many elements to stress-test the blog post UI. If something doesn't look right (tables, code blocks, images, or horizontal rules), tell me which element misrenders and I'll tweak the styling or renderer.

Happy testing! 🚀
