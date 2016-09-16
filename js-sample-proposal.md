## Physics with JavaScript simulations

### Background


Conway's Game of Life is a classic example of the concept of **cellular automata**.  The original GoL is a 0-player game that plays out on a rectangular grid.  Each cell on the grid is either dead or alive when the game begins.  On the next iteration of the game (called a "generation") the cells follow these rules:


Physics with JavaScript simulations will provide visualizations of simple models in **classical mechanics**. Each simulation will provide a selectors that will allow the user to change properties(mass, damping, friction, etc...) of the model.


This simulation will incorporate several classical mechanics models. They are outlined in the **Functionality & MVP** and **Bonus Features** sections.  

### Functionality & MVP  

With Physics simulations , users will be able to:

- [ ] change properties of the model through sliders


In addition, this project will include:

- [ ] An about page describing the physics of each problem
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with classical mechanics models, and nav links to the Github, my LinkedIn,
and the About modal. User interacts with models through drag and drop or sliders near each model. Each model will be set inside of an embedded canvas element.

![wireframes](images/masses_on_spring.jpeg)

### Architecture and Technologies



This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`Physics.js`: this script will handle the logic for creating and updating the necessary elements and rendering them to the DOM.



### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all scripts outlined above. Goals for the day:

- Get a green bundle with `webpack`
- render an object to the `Canvas` element
- figure out the physics problems to model
- get a small working version
- try to get a pendulum

**Day 2**: work off of day one's progress.

- set up the double pendulum.
- masses on spring
- and another physics model TBD

**Day 3**: figure out the logic of the models get a plane version to render


- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation
- make sure models make sense
- write explanations


**Day 4**: Install the controls for the user to interact. Style the frontend, making it polished and professional.  Goals for the day:

- Set up the selectors
- Have a styled `Canvas`, nice looking controls and title
- If time: build more models


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] More physics models
- [ ] 3D models
