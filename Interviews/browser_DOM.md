# Browser and DOM Interview Quick Reference

These examples use browser APIs and vanilla JavaScript. They can be tested by placing the HTML in a page and the JavaScript in a script loaded with `defer`, or immediately before the closing `</body>` tag.

## 1. Event delegation - done

### What it does

Event delegation attaches one event listener to a parent instead of adding separate listeners to every child. Events bubble from the target toward its ancestors, so the parent can inspect `event.target` and decide what to do.

This is especially useful for lists whose items are added or removed dynamically.

### Implementation

```html
<ul id="todo-list">
  <li data-todo-id="1">
    Learn JavaScript
    <button type="button" data-action="delete">Delete</button>
  </li>
  <li data-todo-id="2">
    Practice DOM APIs
    <button type="button" data-action="delete">Delete</button>
  </li>
</ul>
```

```js
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest('[data-action="delete"]');

  if (!deleteButton || !todoList.contains(deleteButton)) {
    return;
  }

  const todoItem = deleteButton.closest("[data-todo-id]");
  todoItem.remove();
});
```

### Explanation

1. The listener is attached once to `todoList`.
2. `closest` finds the button even if the user clicks an icon or span inside it.
3. The `contains` check ensures that a matching element outside this list is ignored.
4. The list item is found from its `data-todo-id` ancestor and removed.

New list items automatically work because the listener is on the stable parent, not on the items that existed when the page loaded.

### Common mistake

Do not use `event.target.matches("button")` when a button may contain nested markup. Also avoid stopping propagation unless there is a specific reason; it can interfere with other listeners.

**Complexity:** Finding ancestors with `closest` is proportional to the DOM depth, $O(d)$, and only one listener is maintained instead of $O(n)$ listeners for $n$ children.

### Extra reference

https://medium.com/@magenta2127/event-bubbling-and-event-delegation-4209bf40575c - event bubbling, event deligation, event.target vs event.currentTarget

## 2. Build a modal from scratch

### What it does

A modal displays content above the page and prevents normal interaction with the page behind it. The implementation below uses only HTML, CSS, and JavaScript.

### Markup and styles

```html
<button id="open-modal" type="button">Open settings</button>

<div
  id="settings-modal"
  class="modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  hidden
>
  <div class="modal-backdrop" data-close-modal></div>
  <section class="modal-panel">
    <h2 id="modal-title">Settings</h2>
    <p>Update your notification preferences.</p>
    <button id="close-modal" type="button">Close</button>
  </section>
</div>
```

```css
.modal[hidden] {
  display: none;
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1000;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 50%);
}

.modal-panel {
  position: relative;
  z-index: 1;
  width: min(90vw, 30rem);
  padding: 1.5rem;
  background: white;
}
```

```js
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#settings-modal");
let previouslyFocusedElement = null;

function getFocusableElements() {
  return [...modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.disabled && element.offsetParent !== null);
}

function openModal() {
  previouslyFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModalButton.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  previouslyFocusedElement?.focus();
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements();
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});
```

### Explanation

- `hidden` removes the modal from the page until it is opened.
- `role="dialog"`, `aria-modal`, and `aria-labelledby` describe the modal to assistive technology.
- The previous focused element is saved and restored when the modal closes.
- Escape and backdrop clicks close the modal.
- The Tab handler keeps keyboard focus inside the modal.
- Disabling body scrolling prevents the background page from moving while the modal is open.

**Important follow-up:** The native `<dialog>` element with `showModal()` is preferable when browser support and project requirements allow it, because it provides more built-in modal behavior.

## 3. Implement infinite scrolling

### What it does

Infinite scrolling loads the next page when the user approaches the bottom of a list. `IntersectionObserver` is more efficient than repeatedly calculating scroll positions.

### Markup

```html
<ul id="feed"></ul>
<p id="loading" hidden>Loading...</p>
<p id="feed-error" role="alert" hidden></p>
<div id="feed-sentinel" aria-hidden="true"></div>
```

### JavaScript

```js
const feed = document.querySelector("#feed");
const loadingMessage = document.querySelector("#loading");
const errorMessage = document.querySelector("#feed-error");
const sentinel = document.querySelector("#feed-sentinel");

let page = 0;
let isLoading = false;
let hasMore = true;

async function loadNextPage() {
  if (isLoading || !hasMore) {
    return;
  }

  isLoading = true;
  loadingMessage.hidden = false;
  errorMessage.hidden = true;

  try {
    const response = await fetch(`/api/posts?page=${page + 1}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    for (const post of result.items) {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      feed.append(listItem);
    }

    page += 1;
    hasMore = result.hasMore;
  } catch (error) {
    errorMessage.textContent = "Could not load more posts. Try again.";
    errorMessage.hidden = false;
  } finally {
    isLoading = false;
    loadingMessage.hidden = true;
  }
}

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      loadNextPage();
    }
  },
  { rootMargin: "300px" }
);

observer.observe(sentinel);
loadNextPage();
```

### Explanation

- The sentinel is observed instead of the whole document.
- `rootMargin` starts loading before the user reaches the bottom.
- `isLoading` prevents duplicate requests while one request is in progress.
- `hasMore` stops observing work after the server reports the last page.
- `textContent` safely inserts server data as text and avoids treating it as HTML.
- The API response is assumed to have this shape: `{ items: [{ title }], hasMore: true }`.

For a retry button, call `loadNextPage()` again after an error. For production code, consider aborting requests when navigating away and deduplicating items by ID.

**Complexity:** Appending a page with $p$ items is $O(p)$ time and $O(p)$ new DOM memory.

## 4. Drag and drop using vanilla JavaScript

### What it does

This example lets a draggable item move between two drop zones. The `dragstart`, `dragover`, and `drop` events form the core of the HTML drag-and-drop API.

### Markup and styles

```html
<div class="drop-zone" data-zone="backlog">
  <h2>Backlog</h2>
  <div class="card" draggable="true" data-card-id="1">Write documentation</div>
</div>

<div class="drop-zone" data-zone="done">
  <h2>Done</h2>
</div>
```

```css
.drop-zone {
  min-height: 150px;
  padding: 1rem;
  border: 2px dashed #999;
}

.drop-zone.is-over {
  border-color: #1769aa;
  background: #eef7ff;
}

.card {
  padding: 0.75rem;
  cursor: grab;
  background: white;
}
```

### JavaScript

```js
const draggedCardId = "dragged-card-id";

document.addEventListener("dragstart", (event) => {
  const card = event.target.closest('[draggable="true"]');

  if (!card) {
    return;
  }

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData(draggedCardId, card.dataset.cardId);
  card.classList.add("is-dragging");
});

document.addEventListener("dragend", (event) => {
  const card = event.target.closest('[draggable="true"]');
  card?.classList.remove("is-dragging");

  document.querySelectorAll(".drop-zone.is-over").forEach((zone) => {
    zone.classList.remove("is-over");
  });
});

document.addEventListener("dragover", (event) => {
  const zone = event.target.closest(".drop-zone");

  if (!zone) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  zone.classList.add("is-over");
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest(".drop-zone");

  if (!zone) {
    return;
  }

  event.preventDefault();
  const cardId = event.dataTransfer.getData(draggedCardId);
  const card = document.querySelector(`[data-card-id="${cardId}"]`);

  if (card) {
    zone.append(card);
  }

  zone.classList.remove("is-over");
});
```

### Explanation

- `draggable="true"` enables dragging for the card.
- Data is placed on `dataTransfer` during `dragstart` and read during `drop`.
- `dragover` must call `preventDefault()` or the browser will not allow dropping.
- `closest` allows the handlers to work even if the card or zone contains nested elements.
- Delegated listeners also support cards and zones added later.

Native drag-and-drop is mainly designed for mouse and trackpad input. For touch support and accessible keyboard movement, add pointer/keyboard interactions and an announced alternative such as “Move to backlog” and “Move to done” buttons.

**Complexity:** Finding the card and appending it are typically $O(1)$ DOM operations, excluding browser layout work.

## 5. Detect a click outside an element

### What it does

This pattern closes a dropdown or popover when the user clicks anywhere outside its container.

### Markup

```html
<div id="profile-menu-container">
  <button id="profile-menu-button" type="button" aria-expanded="false">
    Profile
  </button>
  <div id="profile-menu" hidden>
    <a href="/account">Account</a>
    <a href="/logout">Log out</a>
  </div>
</div>
```

### JavaScript

```js
const menuContainer = document.querySelector("#profile-menu-container");
const menuButton = document.querySelector("#profile-menu-button");
const menu = document.querySelector("#profile-menu");

function setMenuOpen(isOpen) {
  menu.hidden = !isOpen;
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setMenuOpen(menu.hidden);
});

document.addEventListener("click", (event) => {
  if (!menuContainer.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
```

### Explanation

- `contains` answers whether the click target is inside the menu container.
- If it is outside, hide the menu.
- `aria-expanded` tells assistive technology whether the button currently controls an open menu.
- Escape closes the menu and restores focus to the button.
- The button stops propagation so its click is not immediately treated as an outside click.

### Alternative: inspect the event path

For Shadow DOM scenarios, `contains` may not describe the composed event path as clearly. You can use:

```js
document.addEventListener("click", (event) => {
  const clickedInside = event.composedPath().includes(menuContainer);

  if (!clickedInside) {
    setMenuOpen(false);
  }
});
```

Remove the duplicate document click listener if using this alternative.

## Interview checklist

For browser and DOM problems, discuss:

- Event bubbling, capturing, and delegation.
- Cleanup for global listeners, observers, and timers.
- Keyboard and screen-reader behavior.
- Safe DOM insertion with `textContent`.
- Dynamic content and stable identifiers.
- Loading, error, empty, and retry states.
- Browser support and touch-device behavior.