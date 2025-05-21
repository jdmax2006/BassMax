const contenedorCanciones = document.getElementById('playlist')

function  CrearHTMLCancion (data){
  const div = document.createElement('li')
  div.addEventListener('click', function () {
   document.getElementById('titulo').innerHTML= data.titulo
   //agregamos un id al author, y repetimos , buscamos el elemento por la id y le cambiamos el innerhtml
   
  })
  div.setAttribute('class', 'card')
  div.innerHTML = `<img src="${data.image.url}" alt="" id="song_1_cover">
  <h3 id="song_1_name">${data.title}</h3>
  <p id="song_1_artist">${data.author}</p>
  <button class="play"><a href="Casete.html">Reproducir</a></button>`

  return div
}

// Make a request for a user with a given ID
axios.get('https://api.institutoalfa.org/api/songs')
  .then(function (response) {
    // handle success
    console.log(response.data.songs);

    response.data.songs.map(function (data) {
        contenedorCanciones.appendChild(CrearHTMLCancion(data))
    })
  })
 