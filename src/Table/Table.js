import React, { Component } from 'react';

class Table extends Component {
    render() {
        console.log('Table :', this.props.coders);
        
        return (
            <div className='mt-5 p-6'>
                <h2 className='text-center font-medium text-base'>Utilisateurs</h2>
                <div className='overflow-x-auto'>
                    <div className='w-full p-2'>
                        <table className='min-w-full text-md text-left text-black-500'>
                            <thead className='-100 border-b-2 border-gray-700'>
                                <tr>
                                    <th scope="col" className='px-4 py-2'>
                                        Prénom
                                    </th>
                                    <th scope="col" className='px-4 py-2'>
                                        Nom
                                    </th>
                                    <th scope="col" className='px-4 py-2'>
                                        E-mail
                                    </th>
                                    <th scope="col" className='px-4 py-2'>
                                        Téléphone
                                    </th>
                                    <th scope="col" className='px-4 py-2'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.coders.map((coder, index) => {
                                    return (
                                        <tr key={index} className='border-b'>
                                            <td className='px-4 py-2'>{coder.prenom}</td>
                                            <td className='px-4 py-2'>{coder.nom}</td>
                                            <td className='px-4 py-2'>{coder.email}</td>
                                            <td className='px-4 py-2'>{coder.telephone}</td>
                                            <td className='px-4 py-2'>
                                                <button onClick={()=>this.props.modifDonne(coder.index)}  className='text-blue-600 hover:underline'>Modifier</button>
                                                <button onClick={() => this.props.supressionElement(index)} className='text-red-600 hover:underline ml-2'>Supprimer</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
