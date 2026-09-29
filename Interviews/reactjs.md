# React Coding Interview Quick Reference

These examples use React function components and hooks. Each example is independent and can be placed in its own file. In an interview, explain the state you own, the events that change it, and how the component behaves during loading, empty, and error states.

## 1. Counter with start, pause, and reset

### What it does

The counter increases once per second after `Start` is clicked. `Pause` stops the timer without losing the current value. `Reset` sets the value back to zero and stops the timer.

### Implementation

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const timerId = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  function reset() {
    setIsRunning(false);
    setCount(0);
  }

  return (
    <section>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button type="button" onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Pause
      </button>
      <button type="button" onClick={reset}>Reset</button>
    </section>
  );
}
```

### Explanation

- `count` stores the displayed number.
- `isRunning` describes whether the interval should exist.
- The effect creates an interval only while `isRunning` is true.
- The cleanup function clears the interval when the component unmounts or before the effect runs again. This prevents duplicate timers and memory leaks.
- The functional form of `setCount` reads the latest state, which is important for timer callbacks.

**Complexity:** Each tick performs $O(1)$ work. The component uses $O(1)$ state.

## 2. Search filter with debouncing

### What it does

The input updates immediately, but filtering waits until the user has stopped typing for 300 ms. This prevents unnecessary filtering or API requests on every keystroke.

### Implementation

```jsx
import { useEffect, useState } from "react";

const products = [
  "Keyboard",
  "Monitor",
  "Mouse",
  "Headphones",
  "Webcam"
];

function SearchFilter() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  const visibleProducts = products.filter((product) =>
    product.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <section>
      <label htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type to search"
      />

      <ul>
        {visibleProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </section>
  );
}
```

### Explanation

There are two values on purpose:

1. `query` changes on every keystroke so the input feels responsive.
2. `debouncedQuery` changes only after 300 ms without a new keystroke.

Every time `query` changes, the previous timeout is cleared. Only the latest timeout can update the filtered results.

For a real API search, perform the request inside the debounced effect and use `AbortController` or a request ID to ignore stale responses.

**Complexity:** Filtering is $O(n \cdot m)$, where $n$ is the number of products and $m$ is the query length. The debounce timer uses $O(1)$ additional space.

## 3. Controlled versus uncontrolled input

### Controlled input

React owns the value. The input value always comes from state, and changes go through React.

```jsx
import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <label>
      Name
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Hello, {name || "there"}</p>
    </label>
  );
}
```

Use a controlled input when the UI needs the current value for validation, conditional rendering, formatting, or enabling/disabling controls.

### Uncontrolled input

The DOM owns the value. React reads it through a ref when needed.

```jsx
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input ref={inputRef} defaultValue="Ada" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Use an uncontrolled input for simple forms, integrations with non-React code, or when you do not need to react to every keystroke. `defaultValue` sets the initial value; `value` would make it controlled.

**Interview summary:** Controlled inputs are more predictable and easier to validate. Uncontrolled inputs can involve less React state and less rendering for very large forms.

## 4. Todo app with add, edit, and delete

### Implementation

```jsx
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [draft, setDraft] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  function addTodo(event) {
    event.preventDefault();
    const text = draft.trim();

    if (!text) {
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
    setDraft("");
  }

  function toggleTodo(todoId) {
    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    )));
  }

  function startEditing(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function saveEdit(todoId) {
    const text = editingText.trim();

    if (!text) {
      return;
    }

    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === todoId ? { ...todo, text } : todo
    )));
    setEditingId(null);
    setEditingText("");
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <section>
      <h2>Todos</h2>
      <form onSubmit={addTodo}>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            {editingId === todo.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(event) => setEditingText(event.target.value)}
                />
                <button type="button" onClick={() => saveEdit(todo.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button type="button" onClick={() => startEditing(todo)}>
                  Edit
                </button>
              </>
            )}

            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

### Explanation

- State updates are immutable: create a new array with spread, `map`, or `filter` instead of changing the existing array.
- Each todo has a stable unique `id`. Use that ID as the React `key`; do not use the array index when items can be edited or deleted.
- `editingId` identifies which todo is being edited.
- Functional state updates avoid using an outdated `todos` value when updates happen close together.

**Complexity:** Adding is $O(1)$. Toggle, edit, and delete are $O(n)$ because they scan the list. Rendering is $O(n)$.

## 5. Create pagination from scratch

### Implementation

```jsx
import { useEffect, useState } from "react";

function Pagination({ items, pageSize = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const startIndex = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(startIndex, startIndex + pageSize);

  return (
    <section>
      <ul>
        {visibleItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setCurrentPage((page) => page - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span> Page {currentPage} of {totalPages} </span>
      <button
        type="button"
        onClick={() => setCurrentPage((page) => page + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </section>
  );
}
```

### Explanation

The page calculation is:

```js
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
```

`slice` returns only the items for that page. When the input list shrinks, the effect clamps the current page so the UI does not point at a page that no longer exists.

For server-side pagination, send `currentPage` and `pageSize` to the API and keep `totalItems` from the server. Do not assume that the currently loaded page contains the full dataset.

**Complexity:** Choosing the page boundaries is $O(1)$; `slice` and rendering the visible page are $O(p)$, where $p$ is `pageSize`.

## 6. Render a dynamic form from JSON

### Form schema

The schema describes what to render. It keeps field configuration separate from the component code.

```js
const formSchema = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: ["Frontend", "Backend", "Full stack"],
    required: true
  }
];
```

### Implementation

```jsx
import { useState } from "react";

function DynamicForm({ schema }) {
  const initialValues = Object.fromEntries(
    schema.map((field) => [field.name, field.type === "checkbox" ? false : ""])
  );
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function updateField(fieldName, value) {
    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value
    }));
  }

  function validate() {
    const nextErrors = {};

    for (const field of schema) {
      if (field.required && !values[field.name]) {
        nextErrors[field.name] = `${field.label} is required`;
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validate()) {
      console.log("Submitted values:", values);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {schema.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>

          {field.type === "select" ? (
            <select
              id={field.name}
              value={values[field.name]}
              onChange={(event) => updateField(field.name, event.target.value)}
            >
              <option value="">Choose one</option>
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              checked={field.type === "checkbox" ? values[field.name] : undefined}
              value={field.type === "checkbox" ? undefined : values[field.name]}
              onChange={(event) => updateField(
                field.name,
                field.type === "checkbox" ? event.target.checked : event.target.value
              )}
            />
          )}

          {errors[field.name] && <p role="alert">{errors[field.name]}</p>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Explanation

- The schema is data, so adding a field usually means adding JSON rather than changing JSX.
- `values` is an object keyed by field name.
- The input type determines whether React reads `event.target.value` or `event.target.checked`.
- Use stable field names and validate against the schema.

In production, validate the schema before rendering it and use a form library when requirements include nested fields, async validation, touched state, or complex error handling.

**Complexity:** Rendering and validation are $O(f)$, where $f$ is the number of fields.

## 7. Prevent unnecessary re-renders

### What it means

A component re-renders when its state changes, its parent renders, or its context value changes. A re-render is not automatically a problem, but expensive child work should not run when its relevant inputs have not changed.

### Implementation with `memo`, stable values, and stable callbacks

```jsx
import { memo, useCallback, useState } from "react";

const TodoRow = memo(function TodoRow({ todo, onToggle }) {
  console.log("TodoRow rendered:", todo.id);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
});

function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState("light");

  const toggleTodo = useCallback((todoId) => {
    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    )));
  }, []);

  return (
    <section className={theme}>
      <button
        type="button"
        onClick={() => setTheme((currentTheme) => (
          currentTheme === "light" ? "dark" : "light"
        ))}
      >
        Toggle theme
      </button>

      <ul>
        {todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </section>
  );
}
```

### Explanation

- `memo` lets `TodoRow` skip rendering when its props are unchanged.
- `useCallback` keeps the `toggleTodo` function reference stable. Without it, a new function would be created on every parent render and could invalidate `memo`.
- Stable `key` values help React match existing list items.
- Do not wrap everything in `memo`, `useMemo`, or `useCallback automatically`. Measure first; memoization has comparison and maintenance costs.

Other useful techniques include keeping state close to the component that needs it, splitting large components, avoiding unnecessary context updates, and virtualizing very long lists.

**Interview point:** `memo` uses shallow prop comparison. Passing a newly created object or array each time can still cause a child to render.

## 8. Implement lazy loading manually

### What it does

This example implements infinite scrolling with `IntersectionObserver`. When a sentinel element becomes visible near the bottom of the list, the next page is loaded.

### Implementation

```jsx
import { useEffect, useRef, useState } from "react";

function LazyLoadedList({ loadPage }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoading) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((currentPage) => currentPage + 1);
        }
      },
      { rootMargin: "200px" }
    );

    const sentinel = loadMoreRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  useEffect(() => {
    let cancelled = false;

    if (page === 0) {
      return () => {
        cancelled = true;
      };
    }

    async function fetchPage() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await loadPage(page);

        if (!cancelled) {
          setItems((currentItems) => [...currentItems, ...result.items]);
          setHasMore(result.hasMore);
        }
      } catch (requestError) {
        if (!cancelled) {
          setError(requestError);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchPage();

    return () => {
      cancelled = true;
    };
  }, [page, loadPage]);

  return (
    <section>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {error && <p role="alert">Could not load more items.</p>}
      {isLoading && <p>Loading...</p>}
      {!hasMore && <p>No more items.</p>}
      <div ref={loadMoreRef} aria-hidden="true" />
    </section>
  );
}
```

### Example `loadPage` function

```js
async function loadPage(page) {
  const response = await fetch(`/api/items?page=${page}`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
  // Expected shape: { items: [{ id, name }], hasMore: true }
}
```

### Explanation

- The sentinel is a small element observed by `IntersectionObserver`.
- `rootMargin` starts loading before the user reaches the exact bottom.
- `isLoading` prevents multiple requests for the same area.
- The cleanup disconnects the observer and marks an old request as cancelled, so an unmounted or outdated request cannot update state.
- The API must provide stable item IDs and a way to tell the client whether more data exists.

This pattern is different from code-splitting with `React.lazy`, which lazy-loads JavaScript modules. For large lists, combine infinite loading with list virtualization so the DOM does not grow without limit.

**Complexity:** Appending a page containing $p$ items is $O(p)$; memory grows with the number of loaded items.

## Interview checklist

For each React coding problem, discuss:

- Who owns the state and whether it should be controlled.
- Cleanup for timers, observers, subscriptions, and requests.
- Stable keys for lists.
- Immutable state updates.
- Loading, empty, error, and disabled states.
- Accessibility: labels, button types, keyboard behavior, and useful ARIA roles.
- Time and space complexity.
- Whether an optimization is measured and justified rather than added automatically.


# Interview

## React life cycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: **Mounting**, **Updating**, and **Unmounting**. Also, the components in react are of two types 1) Function Based 2) Class Based
| Class Based                                                          | Function Based                                                                                                                                              |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Also known as `stateFull` component as we can initialize state in it | Also known as `stateLess` component as we cannot initialize state in it.(But we have `useState` hook to make it a stateFull component like class component) |
| Here we use `lifecycle methods`                                      | Here we **can't use** `lifecycle methods` but we use **React hooks**                                                                                        |
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bsk4y_rRxmX_Qtol3H3caw.png)

### Class Based

**Mount**
React has four built-in methods that gets called, in this order, when mounting a component.

1. **constructor()**

- The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

2. **getDerivedStateFromProps()**

- This method is called right before rendering the element(s) This is the natural place to set the state object based on the initial props.

3. **render()**

- render() method is required, and is the method that actually outputs the HTML to the DOM

4. **componentDidMount()**

- The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM

**Update**
A component is updated whenever there is a change in the component's state or props.

1. **getDerivedStateFromProps()**

- This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props

2. **shouldComponentUpdate()**

- In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.

3. **render()**

- The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

4. **getSnapshotBeforeUpdate()**

- In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

5. **componentDidUpdate()**

- The componentDidUpdate method is called after the component is updated in the DOM.

**Unmounting**
when a component is removed from the DOM

1. **componentWillUnmount**

- The componentWillUnmount method is called when the component is about to be removed from the DOM

### Function Based

There are no lifecycle methods in function based, instead we have react hooks.
We can use below hooks instead of class based lifecycle methods in function based.

1. Instead of `componentDidMount` use `useEffect`
   ```
   useEffect(()=>{

   },[]);
   ```
2. Instead of `componentDidUpdate` use `useEffect`

   ```
   useEffect(()=>{
       // called everytime there is a dependency update
   },[dependencies]);

   useEffect(()=>{
       // called everytime there is any kind of changes or updates in component
   });
   ```

3. Instead of `componentWillUnMount` use `useEffect`
   ```
   useEffect(()=>{
       // below return function will be called before unmounting
       return (()=>{
         // code here will be called while unmounting
       });
   },[]);
   ```
4. Instead of `shouldComponentUpdate` use `useMemo`

## How does React work?

1. React works by creating a virtual DOM (Document Object Model) in memory, which is a lightweight representation of the actual DOM.
2. When a component's state (data) changes, React creates a new virtual DOM representation of that component.
3. React then compares this new virtual DOM with the previous one to identify the differences. This process is called "diffing." (Diffing algorithm)
4. Once React knows what has changed, it updates only the necessary parts of the actual DOM. This process is called "reconciliation" and is much more efficient than updating the entire DOM every time something changes.

## Features of reactjs

1. JSX syntax - By using JSX, we can write HTML structures in the same file that contains JavaScript code.
2. Components - Components in react are building blocks which can be reused through out the application instead of re-writing code for the same component.
3. Virtual DOM - It is a lightweight representation of the actual DOM.
4. High performance - React updates only those components that have changed

## What is an event in React?

An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.

React events are named using camelCase, rather than lowercase in HTML.
With JSX, you pass a function as the event handler, rather than a string in HTML.

`<Button onPress={lightItUp} />`

## What are the components in React?

Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.

There are two types of components in React:

**Functional Components**: These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).

**Class Components**: These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.

## What is a state in React?

The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.

## What is a higher-order component in React?

In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component. A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic.

## What are even emitters in react js ?

React event emitters simplify communication between components by providing a channel for them to send and receive messages. This pattern is especially beneficial when the components are not directly related, such as siblings or deeply nested child components.

## What are custom hooks in reactjs ?

Custom hooks in React are JavaScript functions that start with the word use and allow you to extract and reuse stateful logic from components. They enable you to share component logic that is used by multiple components.

## How many types of DOM and how many levels are in DOM?

The W3C DOM standard is divided into three types: Core DOM, XML DOM, and HTML DOM. Each type represents a standard model for a specific document type:

- Core DOM: The standard model for all types of documents
- XML DOM: The standard model for XML documents
- HTML DOM: The standard model for HTML documents
  There are 4 levels in DOM. DOM level 1...... DOM level 4

## What is Babel and Webpack?

1. Babel is a JavaScript compiler. It takes modern JavaScript code (ES6+, also known as ECMAScript 2015 and beyond) and transforms it into a version that can be understood by older browsers or environments that don't fully support all the latest features.
2. Webpack is a module bundler. It takes your JavaScript code (and other assets like CSS, images, etc.) and combines them into one or more bundles that can be loaded by a web browser.

## What is the lifecycle of React?

A React component goes through three main phases during its lifecycle:

1. Mounting - This phase occurs when a component is created and inserted into the DOM.
2. Updating - This phase occurs when a component's props or state change.
3. Unmounting - This phase occurs when a component is removed from the DOM.

## What is the difference between useLayoutEffect and useEffect?

- useLayoutEffect
  Runs synchronously after all DOM changes, but before the browser updates the screen. This makes it ideal for tasks that need immediate access to the DOM, like measuring element size or position, or preventing visual flickers. However, because it's synchronous, useLayoutEffect can block the browser from painting the DOM until it's finished executing, which can lead to performance issues and make debugging harder.
- useEffect
  Runs asynchronously after the browser has finished painting changes. This makes it ideal for non-blocking tasks, such as fetching data or subscribing to events. Because it's asynchronous, the user doesn't have to wait for useEffect to finish before they can see the results.

## Controlled and Uncontrolled Component

1. Controlled Components:
   When the values and inputs of a form component or any other component are handled by react state, they are called as controlled components. Ex: A form with value, onChange.
2. Un-controlled Components:
   When the values and inputs of a form component are not handled by the react state, they are called as un-controlled components. Ex: A form without value or onChange and to access such form data, we will use window.name.value when a form with a inputfield has id="name" and has submit function.

## The difference between useState and useRef?

In React, the main difference between useState and useRef is that:

1. **useState** manages component state and triggers re-renders when the state changes.
2. **useRef** accesses and manipulates the DOM without triggering re-renders:

## What is the use of Context API in ReactJS?

The Context API in ReactJS provides a way to share data between components without having to manually pass props down through the component tree. This is particularly useful for data that needs to be accessed by many components at different levels

## What is Idempotence in react ?

Idempotence in React refers to the idea that a component's rendering function should produce the same output given the same input (props and state), no matter how many times it is called.

## state vs props

- props are used to pass data between two different components
- While state is specific to each component and changes over time

## What is useImperativeHandle?

The useImperativeHandle hook is used to create a custom interface between a child and its parent component. It is commonly used in situations where a parent component needs to interact with a child component directly, such as for form validation or handling of user input.

## Types of routers

1. Browser Router
  - uses html5 history API (pushState, replaceState, popState) to manage URLs
  - Ideal for web applications
2. Hash Router
  - uses the hash portion of the URL (/#about) for routing
  - Suitable for static sites or environments without server-side routing
  - less SEO friendly
3. Memory Router
  - stores URL history in memory, not in browser
  - useful for testing or non-browser environments like react native

## What is redux ?

- Redux is a popular open-source state management library for javascript and typescript applications
- it provides a way to centralize the state of an application in a single store
- redux is a single source of truth

## What are pure functions in the context of redux ?

- A function is a pure function, if it follows below:
- it doesnt modify the input data (like parameters)
- always give same output for the same input
- should not talk to outside world (api requests, writing to local state)

## Key components of redux architecture
- Actions, Reducers, Store are the key components of redux architecture
- **Store:** Holds the entire application state
- **Actions:** are plain js objects with a `type` property and `payload` property. We dispatch actions.
- **Reducers:** are pure js functions that takes `current state` and the `action`. Then returns a new state object.

## How do you handle events in react ?

- using jsx by passing event handler functions as props to the react elements
```
function MyComponent() {
    const handleClick = () => {
        console.log('Button clicked');
    };
    return (
        <button onClick={handleClick}>Click Me</button>
    );
}
```

## Different ways to style react components

- **Inline CSS:** we pass js object directly to the `style` attribute of JSX element
- **CSS modules:** regular css files with `.module.css` extension. We import using `import styles from './Button.module.css'` and use `<button className={styles.errorButton}>Click me</button>`
- **Styled components:** is a library that we can use to create reusable components

## What are react hooks ?

- React hooks are functions that enable functional components to use state and other lifecycle features that were previously only in class based components
- examples: useState, useRef, useEffect, useContext etc

## Difference between context and redux API

## Shadow DOM

## Difference between <a> tag and <Link> in react router ?

## Main components of react router