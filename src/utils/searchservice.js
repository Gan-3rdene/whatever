export const games = [
    { id: 1, title: "Snake", tags: "2D, puzzle", image: "/whatever/resources/snake.jpg" },
    { id: 2, title: "Ape out", tags: "Action", image: "/whatever/resources/ape.jpg" },
    { id: 3, title: "Sonic", tags: "Platform", image: "/whatever/resources/hedgehog.jpg" },
    { id: 4, title: "Angrybird", tags: "Puzzle", image: "/whatever/resources/angrybird.jpg" }
  ];
  


export function searchGames(query) {
  if (!query || query.trim() === "") {
    return [];
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  return games.filter(game => 
    game.title.toLowerCase().includes(normalizedQuery) || 
    game.tags.toLowerCase().includes(normalizedQuery)
  );
}
  