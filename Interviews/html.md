# HTML

1. Stands for Hyper Text Markup Language
2. It is a standard text formatting language used for developing web pages

## Tags and Attributes

1. Tags are primary component of HTML that defines how the content will be structured or formatted. Below is a `<p>` tag example.
   `<p> My paragraph </p>`
2. Attributes are used along with HTML tags to define characteristics.
   `<p class="i am an attribute"> My paragraph </p>`

## Void elements

Which do not have any closing tags are known as void elements
`<img/> <br/> <hr/>`

## Collapsing whitespace

Whitespace collapsing is a feature in HTML that allows browsers to display multiple spaces as one, and ignore spaces before and after elements.

## HTML entities

In HTML some characters are reserved like `<`, `>`, `/`, etc. To use these characters in our webpage we need to use the character entities called HTML Entities.

```
< use &lt;
> use &gt;
& use &amp;
```

## Types of lists

1. Ordered lists
2. Unordered lists
3. Defination/Description list

```
Ordered list
<ol>
    <li> Item 1 </li>
    <li> Item 2 </li>
</ol>

Unordered list
<ul>
    <li> Item 1 </li>
    <li> Item 2 </li>
</ul>

Defination/Description list
<dl>
    <dt>Heading</dt>
    <dd>- body </dd>
    <dt>Heading</dt>
    <dd>- body </dd>
</dl>
```

## Class attribute

The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.

## HTML layout structure

1. <header>
2. <nav>
3. <main>
4. <section>
5. <article>
6. <aside>
7. <footer>

## What is DOCTYPE in html ?

We define DOCTYPE to tell the browser what version of HTML the page is written in. `<!DOCTYPE html>`

1. Strict Doctype
2. Transitional Doctype
3. Frameset Doctype

## Default, Defer, Async attributes

1. **Default**: parsing of HTML is blocked until the javascript file is fetched and execute, leading to slower page load times.
2. **Async**: parsing of HTML, javascript files happen asynchronously. Once javascript files are downloaded, will be executed asynchronously.
3. **Defer**: parsing of HTML, javascript files happen asynchronously. But the execution of javascript file happens only after HTML is fully parsed.