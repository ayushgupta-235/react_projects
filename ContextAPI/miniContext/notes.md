The Context API in React is a way to manage global state without prop drilling (passing props down multiple levels).

-> We have a Login component where a user enters their username & password.
-> After logging in, the Profile component should display the username.
-> Without the Context API, we would need to pass user data from Login → App → Profile, which is prop drilling.
-> Instead, we use the Context API to store user data globally and access it anywhere.

Step 1: Create a Context (made UserContext in UserContext.js) 
This will store and share the logged-in user data.

Step 2: Create a Provider (Wrap App)
-> The Provider makes the context available to all components inside it
-> UserContext.Provider shares user and setUser across all components

Step 3: Use Context in Login Component
-> useContext(UserContext) gives access to setUser, allowing us to update the global user state.

Step 4: Use Context in Profile Component
The Profile component reads the user data from context and displays it.

Final Workflow
1️⃣ User opens the app → user = null
2️⃣ User logs in → setUser({ username }) updates the global state
3️⃣ Profile component updates automatically → Welcome, {user.username}! appears