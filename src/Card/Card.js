import React, { Component } from 'react';

class Card extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         premonInput: '',
    //         nomInput: '',
    //         emailInput: '',
    //         telephoneInput: '',
    //         coders: []
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     const newcoder = {
    //         prenom: this.state.premonInput,
    //         nom: this.state.nomInput,
    //         email: this.state.emailInput,
    //         telephone: this.state.telephoneInput
    //     };

    //     // console.log('je suis cliquer');
    //     this.setState({ coders: [newcoder, ...this.state.coders] });
    //     this.setState({
    //         premonInput: '',
    //         nomInput: '',
    //         emailInput: '',
    //         telephoneInput: ''
    //     });
    // }

    render() {
        return (
            <div className='py-4'>
                <p className='text-center font-medium text-base'>Jeemacoder gestion utilisateurs</p>
                <div className='p-4 md:p-9'> 
                    <div className='shadow-lg w-full max-w-md mx-auto h-auto p-4'>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-md text-gray-900">Prénom</label>
                                <input 
                                    type="text" 
                                    value={this.props.premonInput}
                                    onChange={(e) => { this.props.handleChange( 'premonInput', e.target.value ) }}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-md text-gray-900">Nom</label>
                                <input 
                                    type="text" 
                                    value={this.props.nomInput} 
                                    onChange={(e) => { this.props.handleChange( 'nomInput', e.target.value ) }}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-md text-gray-900">Email</label>
                                <input 
                                    type="email" pattern=".+@example\.com"
                                    value={this.props.emailInput}
                                    onChange={(e) => { this.props.handleChange('emailInput' , e.target.value ) }}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-md text-gray-900">Téléphone</label>
                                <input 
                                    type="number" 
                                    value={this.props.telephoneInput}
                                    onChange={(e) => { this.props.handleChange('telephoneInput', e.target.value ) }}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" 
                                    required 
                                />
                            </div>
                        </div>
                        <div className='w-full text-center'>
                            <button 
                                onClick={this.props.AddCoder} 
                                className="text-white bg-green-700 focus:outline-none font-medium rounded-lg text-sm w-full md:w-auto md:border border-gray-300 text-gray-900 block p-2.5 mt-4"
                            >
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
