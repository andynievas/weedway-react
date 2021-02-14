
import React from 'react';


export default class Foto extends React.Component{

    inputFile = {
        border: '4px dashed grey',
        display: 'block',
        padding: '40px',
        cursor: 'pointer',
        fontSize: '30px',
        textAlign: 'center'
    }

    selected = ()=>{
        const file = document.getElementById('inputFile');
        console.log( file.value );
        console.log( file.files );

        // return (
        //     <img src={ file } alt="fileUpload" />
        // );
    }
    
    render(){
        return (
            <form>
                <h4 style={{margin: '20px 0'}} >Elige una foto para subir</h4>
                <input id="inputFile" type="file" style={{ display: 'none' }} />
                <label
                    htmlFor="inputFile"
                    style={this.inputFile}
                    // onChange={ ()=>{ this.selected(); console.log('anduuu'); }}
                    // onInput={ ()=>{ this.selected(); console.log('anduuu'); }}
                    onClick={ ()=>{ this.selected(); console.log('anduuu'); }}
                > Select an image to upload </label>
                <button style={{marginTop: '20px', color: 'white'}} onClick={ (e)=>{ e.preventDefault() ; alert("No funciona todavía")} } >Publicar</button>
            </form>
        );
    }
}
