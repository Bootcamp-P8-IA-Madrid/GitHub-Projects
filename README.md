# 📚 Biblioteca de la Clase

Una práctica para entender **GitHub Projects** haciendo un Sprint de Scrum por equipos.

## 🗂️ Qué es GitHub Projects

Un tablero para organizar el trabajo de un repo.

- Cada **tarjeta** es una **issue**: una tarea.
- Cada **columna** es un estado: `Backlog` (pendiente), `Ready` (elegida para este sprint), `In progress` (en marcha), `In review` (esperando revisión), `Done` (terminada).
- Mirando el tablero, cualquiera sabe quién hace qué y cómo va el equipo.

Es el tablero de Scrum, pero conectado al código: cuando tu trabajo entra en `main`, la tarjeta pasa sola a `Done`.

| Scrum | GitHub |
|---|---|
| Product Backlog | La columna `Backlog` |
| Sprint Backlog | La columna `Ready` |
| Una tarea | Una issue |
| Terminado (Done) | Revisado por un compañero y mergeado en `main` |
| Incremento | Lo que hay en `main` |

## 🎯 El ejercicio

Por equipos de 3 o 4. Cada equipo recomienda libros en la web de la clase (`index.html`). Cada libro es una tarea, y cada tarea pasa por el tablero.

**Entrega:** el sprint termina 20 minutos antes del final de la clase. Cuenta lo que esté en `main`.

**Antes de empezar:** clona el repo una sola vez, sin fork (ya tienes permiso):

```bash
git clone https://github.com/Bootcamp-P8-IA-Madrid/GitHub-Projects.git
cd GitHub-Projects
```

### 1. Planifica con tu equipo

1. El equipo elige un nombre y un libro por persona.
2. Abre el tablero: pestaña **Projects** del repo. Se trabaja siempre en la primera vista; las demás pestañas no se usan hoy.
3. Cada persona crea la tarjeta de su libro: al final de la columna `Backlog`, **+ Add item** → escribe el título del libro → **Create new issue** → elige este repo y la plantilla **Historia de usuario**. Cambia el ejemplo por tu libro y pulsa **Create**.
4. Abre tu tarjeta, asígnatela (*Assignees* → *Assign yourself*) y arrástrala a `Ready`.

### 2. Haz tu tarea (cada persona)

1. Arrastra tu tarjeta a `In progress`.
2. Crea una rama con el número de tu issue (el `#7` que sale junto al título):
   ```bash
   git checkout main
   git pull
   git checkout -b feature/7-el-hobbi
   t
   ```
   Solo minúsculas sin tildes ni ñ, números y guiones.
3. Copia `libros/_plantilla.js` como `libros/el-hobbit.js` y rellénalo.
4. En `libros/lista.js`, añade `"el-hobbit",` como última línea dentro de los corchetes.
5. Abre `index.html` y comprueba que tu libro se ve.
6. Súbelo:
   ```bash
   git add libros/
   git commit -m "add: recommend El Hobbit"
   git push -u origin feature/7-el-hobbit
   ```

### 3. Entrega tu tarea

1. En GitHub, pulsa **Compare & pull request**.
2. En la descripción, cambia `Closes #N` por `Closes #7` (tu número). Eso une el Pull Request con tu tarjeta.
3. En **Reviewers**, elige a alguien de tu equipo y pulsa **Create pull request**. Arrastra tu tarjeta a `In review`.
4. Tu compañero lo aprueba. Escribir un comentario no es aprobar. Quien revisa hace esto:
   1. Abre el Pull Request y entra en la pestaña **Files changed**.
   2. Pulsa el botón verde **Review changes**, arriba a la derecha (en algunas cuentas se llama **Submit review**).
   3. Marca **Approve**. Viene marcado **Comment**: si se queda así, el Pull Request sigue sin aprobar.
   4. Pulsa **Submit review**.

   Está aprobado cuando junto al nombre de quien revisa sale un check verde y el texto *approved these changes*.
5. Pulsa **Merge pull request** → **Confirm merge**. Mira el tablero: tu tarjeta ha pasado sola a `Done`.
6. Pulsa **Delete branch**. En tu ordenador:
   ```bash
   git checkout main
   git pull
   git branch -d feature/7-el-hobbit
   ```

Si un compañero te pide revisión, eso va antes que seguir con lo tuyo.

## 🛠️ Si algo falla

- **El check *Guardián de PRs* sale en rojo:** pulsa *Details* y te dice qué falta: el nombre de la rama o el `Closes #7`. La descripción del PR se puede editar.
- ***This branch has conflicts*:** es normal, todo el mundo toca `lista.js`. Pulsa *Resolve conflicts*, deja todas las líneas de libros, borra las marcas `<<<<<<<` `=======` `>>>>>>>` y pulsa *Mark as resolved* → *Commit merge*. Puede pasarte más de una vez.
- **Te piden cambios:** corrige en la misma rama y repite `git add libros/`, `git commit` y `git push`. Si el push se rechaza, haz antes `git pull --no-rebase`.
- **Tu libro no se ve:** revisa que el nombre en `lista.js` es igual al del archivo, y que no falta ninguna coma.
- **No se ve ningún libro:** el error está en `lista.js`, una coma o una marca de conflicto olvidada. F12 → *Console* te dice la línea.
