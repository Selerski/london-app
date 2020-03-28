const baseUrl = 'http://localhost:3000/boroughs'

export async function getAllBoroughs() {
  return await fetch(baseUrl).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}