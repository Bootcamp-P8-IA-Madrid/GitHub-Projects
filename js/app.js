// Cada libro es un archivo en libros/ que llama a registrarLibro({...}).
// La página los agrupa por equipo. Este archivo no hace falta tocarlo.

function crear(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

function baldaDe(equipo) {
  const main = document.getElementById("estanterias");
  let seccion = [...main.children].find((s) => s.dataset.equipo === equipo);
  if (!seccion) {
    seccion = crear("section", "estanteria");
    seccion.dataset.equipo = equipo;
    seccion.append(crear("h2", "cinta", equipo), crear("div", "balda"));
    main.append(seccion);
  }
  return seccion.querySelector(".balda");
}

function registrarLibro(libro) {
  const equipo = libro.equipo || "Sin equipo";

  const centro = crear("div", "centro");
  centro.append(
    crear("h3", "", libro.titulo || "Sin título"),
    crear("p", "autor", libro.autor || "Autor desconocido")
  );
  const cubierta = crear("div", "cubierta");
  cubierta.append(
    crear("p", "coleccion", equipo),
    centro,
    crear("p", "numero", libro.issue ? "#" + libro.issue : "")
  );

  const nota = crear("div", "nota");
  nota.append(crear("p", "porque", libro.porQue || ""));
  if (libro.github) {
    const firma = crear("a", "firma", "@" + libro.github);
    firma.href = "https://github.com/" + libro.github;
    nota.append(firma);
  }

  const ficha = crear("article", "libro");
  ficha.append(cubierta, nota);
  baldaDe(equipo).append(ficha);

  const total = document.querySelectorAll(".libro").length;
  document.getElementById("contador").textContent =
    total === 1 ? "📚 1 libro recomendado" : `📚 ${total} libros recomendados`;
}

function cargarLibros(lista) {
  for (const nombre of lista) {
    const script = document.createElement("script");
    script.src = `libros/${nombre}.js`;
    document.body.append(script);
  }
}

// El botón del dado: elige un libro al azar, distinto del anterior, y lo señala.
document.getElementById("azar").addEventListener("click", () => {
  const libros = [...document.querySelectorAll(".libro")];
  if (!libros.length) return;
  const anterior = document.querySelector(".elegido");
  const otros = libros.filter((libro) => libro !== anterior);
  const elegido = (otros.length ? otros : libros)[Math.floor(Math.random() * (otros.length || libros.length))];
  if (anterior) anterior.classList.remove("elegido");
  void elegido.offsetWidth; // reinicia la animación si vuelve a salir el mismo
  elegido.classList.add("elegido");
  elegido.scrollIntoView({ behavior: "smooth", block: "center" });
});
