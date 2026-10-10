# Aura Tienda en linea — Desodorante Vainilla & Pistacho

Landing page para venta contra entrega en Colombia (inspiración Medicube, formato roll-on 120 ml). Desarrollada con HTML, CSS y JavaScript sin dependencias ni procesos de compilación, lista para Cloudflare Pages y Google Sheets.

## Estructura del proyecto

- `index.html`: Estructura semántica, copy por ángulos y checkout modal.
- `assets/css/styles.css`: Estilos visuales (paleta crema/vainilla, oliva y dorado), adaptación móvil y accesibilidad.
- `assets/js/main.js`: Lógica de ofertas, checkout flotante, validación de teléfono colombiano, descuento de salida (10 %) y envío por iframe a Google Sheets.
- `assets/images/`: Imágenes optimizadas para la web.
- `assets/videos/`: Videos convertidos en H.264 livianos para reproducción rápida.
- `integraciones/google-sheets/Code.gs`: Receptor de pedidos para Google Apps Script con validación de precios e idempotencia.
- `integraciones/google-sheets/INSTALACION.md`: Instrucciones paso a paso para desplegar la hoja de pedidos.
- `conocimiento/PRODUCTO.md`: Ficha técnica de conocimiento, fuentes, margen y decisiones vigentes del producto.

## Previsualización local

Para probar la página localmente con soporte de módulos y fetch/iframe:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Abre en tu navegador: `http://127.0.0.1:8080`

## Conexión con Google Sheets

1. Sigue los pasos de [integraciones/google-sheets/INSTALACION.md](integraciones/google-sheets/INSTALACION.md) para crear la hoja en Google Drive e implementar la aplicación web en Apps Script.
2. Pega la URL resultante terminada en `/exec` en `CONFIG.endpoint` dentro de `assets/js/main.js`.

## Publicación en Cloudflare Pages

1. Conecta este repositorio a Cloudflare Pages.
2. Directorio raíz: `/` (o raíz del repositorio).
3. Comando de compilación: vacío (es un sitio estático).
4. Directorio de salida: `.`
