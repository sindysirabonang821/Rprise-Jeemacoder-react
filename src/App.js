import React, { Component } from 'react'
// import './App.css';
import Card from './Card/Card';
import Table from './Table/Table';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
        premonInput:'',
        nomInput:'',
        emailInput:'',
        telephoneInput:'',
        coders:[],
        modification:null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.supressionElement = this.supressionElement.bind(this);
    this.modifDonne=this.modifDonne.bind(this);

}
handleChange(input,value){
  this.setState({[input]:value})
}
handleClick(){
  const { premonInput, nomInput, emailInput, telephoneInput } = this.state;

  if (!premonInput||!nomInput||!emailInput||!emailInput) {
    return alert('veuiller remplir tout les champs');
  }
  const newcoder = {
    prenom:this.state.premonInput,
    nom:this.state.nomInput,
    email :this.state.emailInput,
    telephone: this.state.telephoneInput
  }
  // console.log('Nouveau codeur :', newcoder);

    // console.log('je suis cliquer');
    this.setState((prevState) => ({
      coders: [newcoder, ...prevState.coders],
      premonInput: '',
      nomInput: '',
      emailInput: '',
      telephoneInput: ''
    }));
    
}
// fonction supprimer
supressionElement(id){
  this.setState(prevState => { const coders = [...prevState.coders]; coders.splice(id, 1); return { coders }; });
}

// fonction pour la modification
modifDonne(id){
  const recup = this.state.coders[id]
  this.setState(
    {
      premonInput:recup.prenom,
      nomInput:recup.nom,
      emailInput:recup.email,
      telephoneInput:recup.telephone
    }
  )
}

  render(){
    return (
      <div className="App">
        <div className=''>
          <div>
            <Card 
            prenomInput={this.state.premonInput}
            nomInput = {this.state.nomInput}
            emailInput = {this.state.emailInput}
            telephoneInput ={this.state.telephoneInput}
            AddCoder={this.handleClick}
            handleChange={this.handleChange}
            />
          </div>
          <div className='mt-5'>
            <Table coders={this.state.coders} supressionElement={this.supressionElement} modifDonne={this.modifDonne} className='mt-5'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
