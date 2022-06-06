

import React, { Component } from 'react';
import Biscoito from './assets/biscoito.png';
import './estilo.css'



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: '',
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

      this.frases = [

        'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
        'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
        'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
        'No meio da dificuldade encontra-se a oportunidade.',
        'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
        'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',

      ];

  }

  quebraBiscoito(){

    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = ' " ' +  this.frases [numeroAleatorio] + ' " ';
    this.setState(state);
    

  }

  render(){
    return(
      <div className="container">
      <img src={Biscoito} className="img" />

      <Botao nome="Abrir Biscoito" acaoBnt={this.quebraBiscoito}/>

      <h3 className="textofrase">{this.state.textoFrase}</h3>

      </div>
    )
  }

}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBnt} className="botao">{this.props.nome}</button>
      </div>
    )
  }
}



export default App;

