# Markdown Previewer

This repository contains a Markdown Previewer built with React, TypeScript, Vite, and Redux. The application allows users to enter GitHub-flavored Markdown into a text area and see the rendered HTML output in real-time. Additionally, the app includes a dark/light theme toggle to enhance user experience.

## Live Demo

You can view the live demo of the app [here](https://main--shimmering-flan-2f4088.netlify.app/), you might get a not safe error because I used netlify to host this one page app.

![image](https://github.com/user-attachments/assets/5761ba1c-843f-49c5-8fc9-59f280d1e6f3)


## Features

- **Real-time Markdown Preview:** The app automatically renders Markdown as HTML as you type.
- **GitHub-Flavored Markdown:** Supports standard Markdown features including headings, links, code blocks, lists, images, and more.
- **Dark/Light Theme Toggle:** Users can switch between dark and light themes for a more personalized experience.
- **Responsive Design:** The app is designed to work well on both desktop and mobile devices.

## User Stories

The app fulfills the following user stories:

1. **User Story #1:** I can see a `textarea` element with a corresponding `id="editor"`.
2. **User Story #2:** I can see an element with a corresponding `id="preview"`.
3. **User Story #3:** When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
4. **User Story #4:** When I enter GitHub-flavored Markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type. (The app uses the [Marked library](https://cdnjs.com/libraries/marked) to parse Markdown.)
5. **User Story #5:** When the app first loads, the default text in the `#editor` field contains valid Markdown that includes at least one of each of the following elements: a heading element (H1 size), a subheading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6. **User Story #6:** When the app first loads, the default Markdown in the `#editor` field is rendered as HTML in the `#preview` element.

## Optional Bonus

- **Line Break Interpretation:** The app interprets carriage returns and renders them as `<br>` (line break) elements, although this feature is optional and not required for passing the tests.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: To add static type checking to the code.
- **Vite**: A fast development environment and build tool.
- **Redux**: For managing the application state.

## How to Run the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mshaikhly/fCC-markdown-previewer.git
   cd fCC-markdown-previewer

2. **Install the dependencies:**
    ```bash
    npm install

3. **Run the development server:**
     ```bash
    npm run dev

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
