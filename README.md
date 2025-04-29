# Interactive Data Explorer (PokeAPI)

An interactive data explorer built using React, fetching Pokémon data from the PokeAPI. This application allows users to view, search, and filter a collection of 150 Pokémon. The app includes responsive design, error/loading states, and reusable components.

## Features

- Fetch and display data for 150 Pokémon from the PokeAPI.
- Search functionality to filter Pokémon by name.
- Filter Pokémon by type.
- Responsive design for various screen sizes.
- Error and loading states for a smooth user experience.
- Reusable React components for maintainability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A next-generation, fast build tool for React.
- **Axios**: A promise-based HTTP client for making API requests.
- **Styled-components**: A library for writing CSS in JavaScript for better styling encapsulation.
- **PokeAPI**: An open-source API providing Pokémon data for use in applications.
- **Git**: Version control for managing the project's code.

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dileepbethu/interactive-data-explorer.git
2. Navigate to the project directory:
   ```bash
     cd interactive-data-explorer
3. Install the necessary dependencies:
    ```bash
      npm install
4. Start the development server:
     ```bash
          npm run dev
The app should now be running at http://localhost:3000.
## Folder Structure
  ```bash
   /src
  /components
    PokemonCars.css
    PokemonCard.jsx
    SearchBar.css
    SearchBar.jsx
  /utils
    api.js
  App.jsx
  App.css
  main.jsx
```
# Usage
### Search Pokémon
You can search for a Pokémon by typing its name in the search bar at the top. The list will be filtered to only show Pokémon that match the search query.

### Filter by Type
Select a Pokémon type from the dropdown menu to filter the Pokémon list by type. You can choose between different types such as Fire, Water, Electric, etc.

### Responsive Design
The app is designed to be fully responsive, ensuring a great experience across different devices, including mobile phones, tablets, and desktops.

### API
This application makes use of the PokeAPI to fetch data. The following endpoint is used to retrieve the data:

- Endpoint: https://pokeapi.co/api/v2/pokemon?limit=150

- This returns a list of 150 Pokémon along with their name and URL, which is used to fetch additional data like images.

### Contributing
Feel free to fork this repository and submit pull requests for new features or bug fixes.

1. Fork the repository.

2. Create a new branch (git checkout -b feature-branch).

3. Make your changes and commit (git commit -am 'Add new feature').

3. Push to the branch (git push origin feature-branch).

4. Open a pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Deployment
This project can be deployed to any static site hosting service (e.g., GitHub Pages, Netlify, Vercel). For deployment with Vercel:

1. Push your code to GitHub.

2. Connect the repository to Vercel.

3. Follow the prompts to deploy your app.

### Screenshots
![image](https://github.com/user-attachments/assets/29460bba-992f-43e1-a109-8c5d9c6e760b)


### Example Screenshots:
1. App in Action:


2. Search Pokémon:


3. Filter by Type:


### Acknowledgements
- PokeAPI for providing the Pokémon data.

- React and Vite for being an awesome development toolchain.

- Axios for handling HTTP requests.

- Styled-components for making styling simpler and more scalable.

## link
https://pokemon-explorer-nu.vercel.app/
