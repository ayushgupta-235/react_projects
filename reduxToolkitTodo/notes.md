Redux Toolkit (RTK) is a state management tool for React applications. It helps you store, update, and share data between different components in a structured way.

👉 Think of it as a global store for your app, where you can save data (like a shopping cart, user info, or to-do items) and update it easily.

Key Concepts of Redux Toolkit
1️⃣ Store 🏪
-> The store is like a big container that holds your app’s data (state).
-> Everything in Redux starts from here.
->  The store holds all the app's state and updates it using reducers.

2️⃣ Slice 🍰
A slice is like a small section of the store that manages a specific part of the data.
It contains:

The initial state
Functions to update the state (called reducers)

3️⃣ Actions 🎬
Actions are like commands that tell Redux how to update the store.
➡️ Actions trigger changes in the store.

4️⃣ Reducers 🛠️
Reducers decide how the state should change when an action is dispatched.
➡️ A reducer modifies the store based on actions.

5️⃣ Dispatch & Selector 🎯
dispatch() sends an action to Redux (to update data).
useSelector() reads data from Redux.

useSelector gets the current data, and dispatch sends updates.