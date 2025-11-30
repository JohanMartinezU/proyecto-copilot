# Despliegue en GitHub Pages

Pasos rápidos para publicar este proyecto en GitHub Pages:

1. Inicializa el repositorio (si aún no lo has hecho):

   ```cmd
   git init
   git add .
   git commit -m "Initial commit: Blog Técnico"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```

2. Habilitar GitHub Pages:
   - Ve a la página del repositorio en GitHub.
   - Settings → Pages.
   - En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
   - Guarda; GitHub generará la URL del sitio en unos minutos: `https://<tu-usuario>.github.io/<tu-repo>/`.

3. Buenas prácticas:
   - Cada cambio al blog puede ser un commit y push a `main` (o a una rama y luego PR a `main`).
   - Añade un `.gitignore` si vas a incluir archivos locales no deseados.
   - Para una URL con dominio personalizado, configura `CNAME` y las DNS según la documentación de GitHub Pages.

4. Alternativa: rama `gh-pages`
   - Si prefieres, puedes usar la rama `gh-pages` y publicar desde allí con herramientas como `gh-pages` (Node) o empujando la rama manualmente.

5. Verificación local (opcional):
   - Puedes previsualizar abriendo `index.html` en el navegador o usando un servidor estático simple.
   - En Windows (cmd) con Python instalado:

   ```cmd
   python -m http.server 8000
   ```

   - Luego abre `http://localhost:8000`.

Con esto el blog estará disponible públicamente usando GitHub Pages.
