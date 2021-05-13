const heroes = [
    {
      nombre: "wolverine",
      equipo: "x-men",
    },
    {
      nombre: "Capitan America",
      equipo: "vengadores",
    },
    {
      nombre: "spiderman",
      equipo: "vengadores",
    },
    {
      nombre: "deadpool",
      equipo: "x-men",
    },
    {
      nombre: "ironman",
      equipo: "vengadores",
    },
  ];
  
  let heroesXMen = heroes.filter((heroes) => heroes.equipo == "x-men");
  
  console.log(heroesXMen);
  