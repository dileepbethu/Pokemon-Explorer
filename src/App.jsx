import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();

        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemonList(detailedData);
        setFilteredPokemon(detailedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) => {
      const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType
        ? pokemon.types.some((type) => type.type.name === selectedType)
        : true;
      return matchesSearch && matchesType;
    });

    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);

  return (
    <div className="app-container">
      <h1 className="app-title">Pokémon Explorer</h1>
      

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
      />

      {loading && <p>Loading Pokémon...</p>}
      {error && <p>{error}</p>}
      {!loading && filteredPokemon.length === 0 && <p>No Pokémon found.</p>}

      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
