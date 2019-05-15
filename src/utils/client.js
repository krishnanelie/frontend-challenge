import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(pesquisa) {
    console.log(pesquisa)
    const caminho = "https://api.spotify.com/v1/search?type=artist&q=" + pesquisa;
    const token = getToken()
    return fetch(caminho, {
      headers:{
        'Authorization': 'Bearer ' +   token
        //'Authorization': `Bearer {$token}`
      }
    })
     
  
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }
}

export default SomosClient
