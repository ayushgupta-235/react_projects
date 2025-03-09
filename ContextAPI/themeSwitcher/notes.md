What is Local Storage?
Local Storage is a browser-based storage that allows you to save data persistently on a user's device. Unlike cookies, local storage data does not expire and remains even after the user closes the browser.

Key Features of Local Storage
✅ Persists even after page reloads
✅ Stored data is accessible across different pages of the same origin
✅ Supports up to ~5MB of data
✅ Only works with strings (must stringify objects before storing)

Using Local Storage in JavaScript
Local storage provides two main methods:

localStorage.setItem(key, value) → Saves data
localStorage.getItem(key) → Retrieves data