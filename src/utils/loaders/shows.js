export async function getTvIndex() {
  const response = await fetch(`https://api.tvmaze.com/shows`)
  return response.json()
}

export async function getTvPick(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return response.json()
}

export async function getCast(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
  return response.json()
}

export async function getSeasons(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
  return response.json()
}

export async function getEpisodes(id) {
  const response = await fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
  return response.json()
}