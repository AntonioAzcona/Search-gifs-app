import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

// import React, { useState } from 'react'

// export const AddCategory = ({ onNewCategory }) => {

//   const [inputValue, setInputValue] = useState('')

//   const handleInputChange = ( event ) => {
//     setInputValue( event.target.value )
//   }

//   const handleSubmit = (event ) => {
//     event.preventDefault();

//     if(inputValue.trim().length < 1) return;

//     onNewCategory( inputValue );
//     setInputValue('')
//   }

//   return (
//     <>
//       <form onSubmit={ handleSubmit }>
//         <input
//           type="text"
//           placeholder='Buscar Gifs'
//           value={inputValue}
//           onChange={ handleInputChange }
//         />
//       </form>
//     </>
//   )
// }
