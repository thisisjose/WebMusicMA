const canciones = [
    //OBJE LIST
  {
    imagen: 'imgs/album1.jpg',
    artista: 'THE BEATLES',
    titulo: 'Lucy in the Sky with Diamonds',
    like: false
  },
  {
    imagen: 'imgs/album2.jpg',
    artista: 'NIRVANA',
    titulo: 'Come as You are',
    like: false
  },
  {
    imagen: 'imgs/album3.jpg',
    artista: 'MAC DEMARCO',
    titulo: 'My kind of Woman',
    like: false
  },
  {
    imagen: 'imgs/album4.jpg',
    artista: 'IRON MAIDEN',
    titulo: 'Chuchuwa',
    like: false
  },
  {
    imagen: 'imgs/album5.jpg',
    artista: 'RADIOHEAD',
    titulo: 'Paranoid Android',
    like: false
  },
  {
    imagen: 'imgs/album6.jpg',
    artista: 'QUEEN',
    titulo: 'Bohemian Rhapsody',
    like: false 
  },
  {
    imagen: 'imgs/album7.jpg',
    artista: 'GREEN DAY',
    titulo: 'American Idiot',
    like: false
  },
  {
    imagen: 'imgs/album8.jpg',
    artista: 'CUCO',
    titulo: 'Lover is a Day',
    like: false
  }
];

let indiceActual = 0;

const imgActual = document.getElementById('img-actual');
const tituloActual = document.getElementById('titulo-actual');
const artistaActual = document.getElementById('artista-actual');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnAnterior = document.querySelector('.controles button[title="Anterior"]');
const albumes = document.querySelectorAll('.album');

function mostrarCancion(index) {
  const cancion = canciones[index];
  imgActual.src = cancion.imagen;
  tituloActual.textContent = cancion.titulo;
  artistaActual.textContent = cancion.artista;
  indiceActual = index;

//   Actualizar el estado del botón de "Me gusta"
  if (cancion.like) {
    btnLike.classList.add('liked');
  } else {
    btnLike.classList.remove('liked');
  }
}
// CAMBIA CANCION CON CLICK EN IMAG
albumes.forEach(album => {
  album.addEventListener('click', () => {
    const index = parseInt(album.getAttribute('data-index'));
    mostrarCancion(index);
  });
});

// BOTON SIG
btnSiguiente.addEventListener('click', () => {
  let siguiente = (indiceActual + 1) % canciones.length;
  mostrarCancion(siguiente);
});

// BOTON ANT
btnAnterior.addEventListener('click', () => {
  let anterior = (indiceActual - 1 + canciones.length) % canciones.length;
  mostrarCancion(anterior);
});

//BOTON ME GUSTA
const btnLike = document.getElementById('btn-like');

btnLike.addEventListener('click', function () {
  canciones[indiceActual].like = !canciones[indiceActual].like;
  btnLike.classList.toggle('liked', canciones[indiceActual].like);
});