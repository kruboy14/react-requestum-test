**Github search app**

It is required to create a single page application,
which lists the repositories and organizations by search term.
Use [**api.github.com**](https://api.github.com/)to get data.
Use React or React Native. Hooks and functional components.

**Optional but bonus requirements:**

1. Use any external State management ([**Redux**](https://react-redux.js.org/api/hooks) is preferred).
2. Use any Types checking ([**Typescript**](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) is prefered).
3. UI - reproduce the most similar layout. Web developers should use **scss/sass** and responsive styles, for React Native use [**styled-components**](https://styled-components.com/docs/basics#react-native) for styling UI components.
4. For RN developers there **should be** a **splash screen** and **app icon** (UI on your wishes).
5. Search should have debounce input (means that request for the data should be after **300-500 ms** after the user finished printing text, **not with Enter press or other** ).
6. Previous requests are shown in the history module, the maximum number of  displayed requests is 5 (meaning that **we should keep 5 new results** , and if we add the new one, the **first result should be deleted** ). History should be available after reloading the page or mobile application.
7. If there are results, the user should be able to press on the result and redirected to the GIT repo.

**Expected Result:**

1. Git Repository link.
2. Completed ReadMe file for the project.
3. A link to a demo is desirable for web developers (https://pages.github.com/).

.
