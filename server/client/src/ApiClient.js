const baseUrl = 'https://afternoon-hamlet-45174.herokuapp.com/boroughs'

export async function getAllBoroughs() {
  return await fetch(baseUrl).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}