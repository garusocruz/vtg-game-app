# Playing with chatGPT + Python + REACT
A friend and I decided to create a game using the chatGPT, our idea, was to explore the capabilities of AI, from game conception to code development.

We started talking to chatGPT to ideate something simple that didn't demand so much technical complexity, because we wanted to validate if the outputs would make sense. Then we came up with the hanging game, suggesting Caesar's Cipher to encrypt and decrypt the session and a base algorithm using random to select the game word as a parameter. 

For the Python backend, after some refinement of the prompt, we copy/pasted the results that chatGPT offered into the game engine, with some minor adjustments. Serving the endpoins with FAST-API using the route suggested by the AI. Check it out the [code](https://github.com/garusocruz/hangman-game).

For the front end in REACT the use of the solutions made by chatGPT reached 90% requiring few code adjustments. Including the UI styles. 

After a weekend, the colaboration with chatGPT resulted  in a simple and functional hanging game as you play clicking [here](https://gamming-hanging-react.web.app/). The biggest positive point is the speed in code creation and design decisions, highlighting the creation of the unit tests which saved about 80% of the time. The biggest negative point is the instability and unavailability of the system, which interrupted the development process when the history prompt had too many parameters or the cloud was congested.

I have read a lot that one of the big challenges of using AIs in general is mastering the creation of good prompts, but this is also true for any other tool, try cleaning a mirror with sandpaper to see what happens.
___
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
