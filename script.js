const contenedorCanciones = document.getElementById('playlist')

function  CrearHTMLCancion (data){

}

// Make a request for a user with a given ID
axios.get('https://api.institutoalfa.org/api/songs')
  .then(function (response) {
    // handle success
    console.log(response.data.songs);

    response.data.songs.map(function () {
        contenedorCanciones.appendChild(CrearHTMLCancion(data))
    })
  })
 