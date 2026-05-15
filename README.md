# Pokédex App

**Desarrollador:** David Murillo

## Descripción

Aplicación móvil tipo Pokédex que consume la PokéAPI para mostrar información de los primeros 20 Pokémon, incluyendo su imagen, número, nombre, tipos y pantalla de detalle con estadísticas completas.

## Tecnologías utilizadas

- [Expo](https://expo.dev/) SDK 54
- React Native + TypeScript
- React Navigation (Stack)
- Axios
- AsyncStorage (instalado, se usará en el Día 3)

## Instalación

```bash
npm install
```

## Ejecutar el proyecto

```bash
npx expo start
```

Luego escanea el código QR con la app **Expo Go** desde tu dispositivo móvil.

## Funcionalidades implementadas

### Clase 1 — Lista de Pokémon
- Listado de los primeros 20 Pokémon consumidos desde la PokéAPI
- Visualización del sprite, número (#001), nombre y tipos de cada Pokémon
- Insignias de tipo con color representativo por categoría
- Indicador de carga mientras se obtienen los datos
- Manejo de errores de red con mensaje al usuario
- Arquitectura por capas: tipos, servicios, hooks, componentes y pantallas

### Clase 2 — Navegación y detalle
- Tarjetas presionables con navegación hacia la pantalla de detalle
- Pantalla de detalle con información completa del Pokémon
- Peso y altura del Pokémon (convertidos a kg y metros desde la API)
- Listado de habilidades con indicación de habilidades ocultas
- Estadísticas base (HP, Ataque, Defensa, etc.) con barras de progreso visuales
- Hook `usePokemonDetail` para cargar el detalle de forma independiente
