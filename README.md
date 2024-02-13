# Areas I had to work thru
- Learning how to use the CSS polygon to draw the hexagon
- Creating my own text input
-- So I can style each letter
- Creating the cursor 
-- Needing to wrap it around the letters and use :after (pseudo element)
- Handle key down - originally had it in the useEffect - but the state wasn't updating
-- Found I had to move the handleNewKey state update outside the useEffect

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

