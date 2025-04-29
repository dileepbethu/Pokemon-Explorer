export const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const data = await response.json();
  
      // Fetch details of each Pokémon in parallel
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
  
      return detailedData;
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
      throw error;
    }
  };
  