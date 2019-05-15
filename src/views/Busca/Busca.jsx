import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Busca.module.css'

class Busca extends React.Component {
  state = {}
  renderRow(artista) {
    var image = artista.images[0];
    return (
      <div>
        <li> {artista.name}</li>
        {image &&
          <img src={image.url} width="240" height="240" />}
      </div>

    )
  }

  buscar = () => {
    let client = new SomosClient()
    client.getArtists(this.textInput.value)
      .then((resposta) => resposta.json())
      .then((resposta) => this.setState({ 'artistas': resposta.artists.items }))
      .then(() => console.log(this.state))
  }


  render() {
    var artistas = this.state.artistas;
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
         <form onSubmit={this.handleSearchTermSubmit}>
           <input type="text" ref={(input) => this.textInput = input} size="30" maxLength="100" required autoFocus placeholder="Digite o nome do artista"></input>
          <input type="button" onClick={this.buscar} value="Buscar"></input>
          </form>
        </div>
        <div>
          {artistas &&
            <div>
              <ul>
                {artistas.map(this.renderRow)}
              </ul>
            </div>
          }

        </div>
         
          
       



          
            
              
          
      </React.Fragment>
        
    )
  }

    
}
export default Busca
