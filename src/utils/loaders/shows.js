export async function getTvIndex() {
  const response = await fetch(`https://api.tvmaze.com/shows`)
  return response.json()
}

export async function getTvPick(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return response.json()
}

// export async function getTvFamily() {
//   const shows = getTvIndex()
//   const genresList = [...new Set(shows.map(item => item.genres))]
//   console.log(genresList)
//   return genresList.json()
// }