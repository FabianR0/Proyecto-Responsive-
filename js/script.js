let btn = document.getElementById("color");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  setTimeout(() => {
    document.body.style.backgroundColor = ""; 
  }, 5000);
});

const noticiasElem = [
  {
    title:'Noticia # 1',
    image:'te',
    descripcion:'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum quae unde officia facere magnam rem sint! Eos voluptatibus officiis assumenda voluptates incidunt amet quas, reprehenderit dolor, velit, obcaecati quis. '
  },
  {
    title:'Noticia # 2',
    image:'te',
    descripcion:'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum quae unde officia facere magnam rem sint! Eos voluptatibus officiis assumenda voluptates incidunt amet quas, reprehenderit dolor, velit, obcaecati quis. '
  }
];
let news = document.querySelector('.noticias-principales');
noticiasElem.forEach(element => {
  news.innerHTML +=  `
    <article>
      <h3 class="titulo-noticias interna">${ element.title }</h3>
      <div>
      <img src="./img/${ element.image }.jpg" alt="error" class="img-news">
          <p class="posi">
          ${ element.descripcion }
          </p>
          <a href="#" target="_blank" class="custom-button">Mas Infor...</a>
      </div>
    </article>
  `;
});
let news2 = document.querySelector('.noticias-principales2'); // capturamos la clase noticias-principales
noticiasElem.forEach(element => { // hacemos un forEach
  news2.innerHTML +=  `
    <article>
      <h3 class="titulo-noticias interna">${ element.title }</h3> 
      <div>
      <img src="./img/${ element.image }.jpg" alt="error" class="img-news">
          <p class="posi">
          ${ element.descripcion }
          </p>
          <a href="#" target="_blank" class="custom-button">Mas Infor...</a>
      </div>
    </article>
  `;
});