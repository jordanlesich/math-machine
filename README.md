# Math Machine

**Math Machine** is a basic game that generates random Arithmetic questions that the user can answer. It does not use the eval() method or the Function keyword to generate the answer.

As of now, Math Machine offers a simple test interface to see the questions, respond to them, and see if the answer is correct. It also awards the player points, a level, and bonus points for questions guessed correctly in a row.

The player uses the arrow keys to make guesses based on a range of options. The library also randomly generates wrong guesses.

TODO:

- Play test and create a range difficulty vectors that scale properly.
- Create a function that increases the difficulty vectors based the player level
- Add in exponents and square roots
- Palaver over top-down UI architecture, modules, etc. Decide on a simple architecture.
- Figure out a better way to provide user feedback that doesn't involve shouting 'Dumbass!' at them.
- Timer
  - Allow amount of time to be dynamically generated as a difficulty vector
  - Create a way of generating the correct amount of score based on time left when answered.
- UI
  - No need to clean out the disaster known as UI.js, seeing as a new UI solution will be implemented. If not, then a complete component
  - Design rough UI layout
  - Brainstorm implementation of UI (probably in React)
  - Create UI components and implement funciionality based on changes in user input, player state, and generated QA's.
- Server
  - Create basic express server to handle player state and store in a NoSQL database.
  - Have Palaver over authentication, the decision to implement it, and if so, the best way to deliver it.
- Testing
