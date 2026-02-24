## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<p>
getElementById is used to select a single element using its unique ID. Since an ID should be unique in a webpage, this method always returns only one element. It is simple, fast, and commonly used when targeting a specific section like a form, modal, or container.
</p>

<p>
getElementsByClassName is used to select all elements that share the same class name. It returns an HTMLCollection, which looks like an array but is not a real array. This collection is live, meaning it updates automatically if the DOM changes.
</p>

<p>
querySelector allows selecting elements using CSS selectors. It returns only the first matched element. This method is flexible because it supports ID selectors, class selectors, tag names, and complex CSS selectors.
</p>

<p>
querySelectorAll also uses CSS selectors but returns all matched elements as a NodeList. Unlike HTMLCollection, NodeList is not live by default.
</p>

<p>
In modern development, querySelector and querySelectorAll are often preferred because they provide more flexibility and work similarly to CSS.
</p>

## 2. How do you create and insert a new element into the DOM?

<p>
To create and insert a new element into the DOM, we use JavaScript DOM manipulation methods. First, we create a new element using document.createElement(). Then, we set its content using properties like innerText or textContent. Finally, we insert it into a parent element using methods such as appendChild() or append().
</p>

<p>
This process allows dynamic updates to a webpage without reloading it. It is commonly used in real-world applications like todo lists, comment systems, chat applications, and dynamic product listings.
</p>

## 3. What is Event Bubbling? And how does it work?

<p>
Event Bubbling is a behavior in the DOM where an event starts from the target element and then propagates upward through its parent elements.
</p>

<p>
For example, if a button is inside a div and the div is inside the body, clicking the button will first trigger the button’s event listener, then the div’s listener, and then the body’s listener. This upward movement is called bubbling.
</p>

<p>
By default, most DOM events follow the bubbling phase. Understanding this concept is important because it can sometimes cause unexpected behavior if multiple parent elements have event listeners.
</p>

## 4. What is Event Delegation in JavaScript? Why is it useful?

<p>
Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and use event.target to determine which child triggered the event.
</p>

<p>
This works because of event bubbling. When a child element is clicked, the event bubbles up to the parent, allowing the parent to handle it.
</p>

<p>
Event Delegation is useful because it improves performance by reducing the number of event listeners. It also works well for dynamically added elements, since newly created elements will automatically be handled by the parent listener.
</p>

## 5. What is the difference between preventDefault() and stopPropagation() methods?

<p>
preventDefault() is used to stop the default behavior of an element. For example, it can prevent a form from reloading the page on submission or stop a link from navigating to another page.
</p>

<p>
stopPropagation() is used to stop the event from bubbling up to parent elements. This means the event will not trigger event listeners attached to ancestor elements.
</p>

<p>
In summary, preventDefault() stops the browser’s default action, while stopPropagation() stops the event from moving upward in the DOM hierarchy.
</p>






