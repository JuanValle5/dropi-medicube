# Conectar los pedidos del desodorante con Google Sheets

Usa una hoja **nueva**. No reutilices la hoja ni la URL `/exec` de la hidrolavadora.

## 1. Crear la hoja

Con tu cuenta de Aura, crea una hoja llamada **Pedidos Aura · Desodorante** en Google Sheets. Déjala privada: no la publiques ni compartas el enlace. No necesitas crear columnas.

## 2. Instalar el receptor

1. Dentro de la hoja, abre **Extensiones → Apps Script**.
2. Borra el contenido de `Código.gs` y pega todo el contenido del archivo `Code.gs` de esta carpeta.
3. `AJUSTES.origenes` ya incluye `https://auratienda-medicube.pages.dev` y las direcciones locales de prueba. Si el dominio final cambia, reemplázalo por el origen exacto (sin rutas ni barra final).
4. Guarda el proyecto con el nombre **Pedidos Aura Desodorante**.
5. En el selector de funciones, elige **prepararHoja** y pulsa **Ejecutar**. Autoriza el acceso con tu cuenta. Se crea la pestaña **Pedidos** con sus encabezados. No ejecutes `doPost` manualmente.

## 3. Publicar la aplicación web

1. Pulsa **Implementar → Nueva implementación**.
2. En el engranaje de tipo, selecciona **Aplicación web**.
3. **Ejecutar como:** **Yo**.
4. **Quién tiene acceso:** **Cualquier usuario** (incluidos visitantes sin cuenta de Google).
5. Pulsa **Implementar** y copia la URL que termina en **/exec**. No uses la URL `/dev`.

Esto permite recibir pedidos, pero no hace pública la hoja. El origen y el token correlacionan la respuesta; no son una autenticación contra bots.

## 4. Conectar la página

Pásame la URL `/exec` en el chat. Va en `CONFIG.endpoint` de `assets/js/main.js`; si lo haces tú, reemplaza solo la cadena vacía `endpoint:''`.

Mientras `endpoint` esté vacío, el formulario no crea pedidos: muestra un mensaje que invita a pedir por WhatsApp.

## 5. Probar antes de recibir clientes

- Abre la página por `http://127.0.0.1:8080` o por el dominio con HTTPS, no desde `file://`.
- Envía un pedido con el nombre **PRUEBA — NO DESPACHAR** y datos ficticios.
- Debe aparecer **una sola** fila en Pedidos y el mensaje de éxito en la página.
- Comprueba referencia, combo, total, nombre, teléfono y dirección. Borra la fila de prueba después.

## Catálogo y promoción

| Clave | Producto | Precio | Con SALIDA10 |
| --- | --- | --- | --- |
| `individual` | 1 desodorante roll-on 120 ml | 59.900 COP | 53.900 COP |
| `duo` | 2 desodorantes roll-on 120 ml | 109.900 COP | 98.900 COP |

SALIDA10 descuenta un 10 % y redondea hacia abajo a la centena. El servidor recalcula el total y rechaza el pedido si no coincide con el de la página.

Si cambias precios, actualiza `CATALOGO` aquí y `COMBOS` en `assets/js/main.js`. Luego ve a **Implementar → Gestionar implementaciones → Editar → Nueva versión → Implementar**, conservando la URL.

## Qué se sube al hosting

Solo `index.html` y `assets/`. La carpeta `integraciones/` se instala en Google; no hace falta publicarla.

Documentación oficial: https://developers.google.com/apps-script/guides/web
