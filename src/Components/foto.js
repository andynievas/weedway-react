
import React from 'react';


export default class Foto extends React.Component{

    inputFile = {
        border: '4px dashed grey',
        display: 'inline-block',
        width: 'calc(100% - 80px)',
        padding: '40px',
        cursor: 'pointer',
        fontSize: '30px',
        textAlign: 'center'
    }

    selected = ()=>{
        const file = document.getElementById('inputFile');
        console.log( file.value );
        console.log( file.files );


        alert( file.value );
        alert( file.files[0] );
        // return (
        //     <img src={ file } alt="fileUpload" />
        // );
    }
    
    render(){
        return (
            <form>
                <p>Hola elige una FOTO para subir</p>
                <input id="inputFile" type="file" style={{ display: 'none' }} />
                <label
                    for="inputFile"
                    style={this.inputFile}
                    // onChange={ ()=>{ this.selected(); console.log('anduuu'); }}
                    // onInput={ ()=>{ this.selected(); console.log('anduuu'); }}
                    onClick={ ()=>{ this.selected(); console.log('anduuu'); }}
                > Select an image to upload </label>
                <input type="button" value="Listo" />
            </form>
        );
    }
}
