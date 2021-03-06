import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://scontent.faqa4-1.fna.fbcdn.net/v/t1.6435-9/115870987_715586885901381_8353932861772355834_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qdweo81M1CYAX_ZG-Ue&_nc_ht=scontent.faqa4-1.fna&oh=00_AT_PZwpbGm2kSdS6FxGz1sxl6Q-rBO7W9aCeIkUFOVe79A&oe=621837CA" 
          nome="Raul Rita" 
          descricao="Oi, eu sou o Raul. Sou Dev Front-end. Adoro estudar e me manter atualizado com as tecnologias."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem= "https://cdn.icon-icons.com/icons2/2131/PNG/512/email_mesasge_envelope_icon_131541.png"
          descricao= "raul.vinicius@live.com"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem= "https://cdn-icons-png.flaticon.com/512/1479/1479518.png"
          descricao= "Av. Antonio Honório Real, 420 - Vale do Sol - Araraquara, SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação profissional</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso de Desenvolvimento Web Full-Stack." 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="ETEC Centro Paula Souza" 
          descricao="Curso Técnico em Web Design." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
