export async function getHotGames() {
  const response = await fetch(`https://bgg-json.azurewebsites.net/hot`)
  return response.json()
}


export async function getSingleGame(id) {
  const response = await fetch(`https://bgg-json.azurewebsites.net/thing/${id}`)
  return response.json()
}