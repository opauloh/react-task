# React Task

Oftentimes, when creating forms for web applications, we'd like to offer a dynamic number of input fields for the user. Controls such as adding, removing and reordering these fields can help make the experience of filling out a form or organizing a set of text items intuitive for the user.

For this challenge, you'll create a simple component DynamicInput which renders the following elements:

- `<button class="add-row">`, an always-available button to append a text field and its corresponding buttons (we'll call this a row henceforth) onto the list of visible fields.
- A list of zero or more rows of input elements and action buttons:
  -- `<input class="row-input" />`, which offers the user a place to enter text for the n-th row.
  -- `<button class="row-up">`, which enables the n-th row to be moved up (if it's not already at the top of the list).
  -- `<button class="row-down">`, which enables the n-th row to be moved down (if it's not already at the bottom of the list).
  -- `<button class="row-delete">`, which enables the n-th row to be removed from the list.
  The test suite relies on these class names to manipulate your component.

## Functionality Specifications

Here are the requirements you'll be implementing for the DynamicInput component. Note that focus (which element is active and ready to accept user input) is an important piece of the specification.

## Adding an input field row

Initially, the component will only offer a single button, <button class="add-row">, which, when clicked, will append a new input field to the list of input fields. After clicking this box, focus should be on the newly created input field so the user can begin typing right away. Along with each input field, three corresponding buttons should be created, as described above:

- `<button class="row-up">`
- `<button class="row-down">`
- `<button class="row-delete">`

## Text input

The user may enter text into any of the visible `<input class="row-input" />` elements at any time.

## Removing an input field row

Clicking the `<button class="row-delete">` button associated with an input field should completely remove that input field, along with any other associated buttons for that field. Focus will move to the input field in the row which replaced the deleted row, nowhere if there are no fields left, or on the new last row if the last row was deleted.

## Moving a field row up

Clicking the `<button class="row-up">` button associated with an input field should move that input field one position up in the list (or forward; closer to the beginning of the list). Focus should be placed on the newly moved field after this operation, and all associated buttons should move alongside the element. If a field is already at the top of a list, no reordering should occur, but focus should be transferred to the topmost field nonetheless.

## Moving a field row down

Clicking the `<button class="row-down">` button associated with an input field should move that input field one position down in the list (or backward; closer to the end of the list). Focus should be placed on the newly moved field after this operation, and all associated buttons should move alongside the element. If a field is already at the bottom of a list, no reordering should occur, but focus should be transferred to the bottommost field nonetheless.

## Style

Your style and CSS need not be complex. While there is no predetermined correct solution from a stylistic standpoint and logical functionaliy is foremost, please take the time to build a simple interface that offers a reasonable user experience.

## Demo

This demo shows the finished app in action. Note the behavior of focus after each button operation.

## Dependencies

- react: The aim of this project, is a JavaScript library for creating user interfaces and handle stage management.
- react-dom: In this project is the entry point to the DOM for React
- normalize.css : Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Dev Dependencies

- @babel/core: This package is core of the Babel, Babel is a compiler used to execute transformations on javascript, like transform ECMA 6 javascript to ECMA 5, for better compatibility, and support plugins to load javascript, and assets as well.
- @babel/preset-env: This package is used to allow Babel transpile the Javascript necessary accordinly to the necessary target browsers, by used public data from open source projects, the plugin knows if the browser is dead, or used by less than 0.x% of people, so it can transpile only the needed, used to have always the most advanced javascript running, according to the public target (you can specify specific browsers and versions to support as well).
- @babel/preset-react: This is a Babel preset, and is used to convert JSX syntax to React's Syntax, like from `<div>Hello</div>` to React.
- webpack: This package is a static module bundler for Javascript Applications, it is responsible to map every module in the project and generate the desired number of bundles. (or we would have thousand of files being requested, or have to manually minimize them, neither option is a good deal)
- webpack-cli: This package provides a flexible set of commands for developers to increase speed when setting up a custom webpack project, also is needed to actually run the webpack in the command line.
- webpack-dev-server: It is intended to use webpack with a development server that provides live reloading. This should be used for development only. It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets, so it is faster, instead of rely on rewriting on the phisicaly on dist folder using the file system.
- html-webpack-plugin: This package is a plugins for our webpack package, and important to note that plugins runs after the modules of webpack resolves, we are using it to generate our index.html file (inside the dist folder when building for production) and applying a `
  <script src="[bundle_name].js"></script>` at our index.html file inside the app folder.
- babel-loader: This package allows transpiling JavaScript files using Babel and webpack, its totally required since we will want to transpile JSX from Javascript Files for development with React.js.
