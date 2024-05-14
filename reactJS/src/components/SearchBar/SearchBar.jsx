import React, { useEffect } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Container, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import './SearchBar.css';

const DEPARTAMENTOSURUGUAY = [
  'Artigas',
  'Canelones',
  'Cerro Largo',
  'Colonia',
  'Durazno',
  'Flores',
  'Florida',
  'Lavalleja',
  'Maldonado',
  'Montevideo',
  'Paysandú',
  'Río Negro',
  'Rivera',
  'Rocha',
  'Salto',
  'San José',
  'Soriano',
  'Tacuarembó',
  'Treinta y Tres',
];

const RESTAURANTES = [
  { label: 'La Parrilla del Puerto' },
  { label: 'El Viejo y el Mar' },
  { label: 'El Milongón' },
  { label: 'El Faro' },
  { label: 'La Pulpería' },
  { label: 'Tandory' },
  { label: 'La Fonda del Puertito' },
  { label: 'El Roldós' },
  { label: 'El Fogón' },
  { label: 'El Palenque' },
];

const SearchBar = () => {
  const [ubicacion, setUbicacion] = React.useState('');
  const [disponibilidad, setDisponibilidad] = React.useState('');
  const [tipo, setTipo] = React.useState('');
  const [restaurantList, setRestaurantList] = React.useState(RESTAURANTES);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza la búsqueda con los filtros seleccionados
  };

  // Función para filtrar los restaurantes basándose en el inputValue
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  useEffect(() => {
    // Podemos quitar el setTimeout, ya que ahora los restaurantes se cargan desde el estado
    setRestaurantList(RESTAURANTES);
  }, []);

  return (
    <Container className="searchbar-container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="Busqueda por nombre"
              options={restaurantList}
              getOptionLabel={(option) => option.label}
              filterOptions={filterOptions}
              value={null}
              onInputChange={(event, newValue) => {}}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Busqueda por nombre" />}
            />
          </Grid>

          {/* Horizontal alignment of Ubicación, Tipo, and Disponibilidad */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="ubicacion">Ubicación</InputLabel>
              <Select
                value={ubicacion}
                onChange={(event) => setUbicacion(event.target.value)}
                label="Ubicación"
                fullWidth
              >
                {DEPARTAMENTOSURUGUAY.map((departamento) => (
                  <MenuItem key={departamento} value={departamento}>
                    {departamento}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="tipo">Tipo</InputLabel>
              <Select
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
                label="Tipo"
                fullWidth
              >
                <MenuItem value="Show">Show</MenuItem>
                <MenuItem value="Restaurante">Restaurante</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="disponibilidad">Disponibilidad</InputLabel>
              <Select
                value={disponibilidad}
                onChange={(event) => setDisponibilidad(event.target.value)}
                label="Disponibilidad"
                fullWidth
              >
                <MenuItem value="disponible">Abierto</MenuItem>
                <MenuItem value="noDisponible">Cerrado</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#92ccb6' }}>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SearchBar;
