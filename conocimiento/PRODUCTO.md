# Conocimiento del producto

Fecha de actualización: 2026-10-10
Producto / SKU: Desodorante "Medicube" Fresh That Lasts — Vanilla & Pistachio, 120 ml (réplica / inspiración AAA). **Formato confirmado: Roll-on de 120 ml en frasco de vidrio con tapa dorada y caja amarilla.**
Marca / mercado / moneda: Aura Tienda en linea / Colombia / COP, pago contra entrega
Proyecto y responsable: medicube / Juanjo

## Estado y siguiente paso
Objetivo actual: landing construida, actualizada con activos 100 % reales del producto y verificada localmente.
Trabajo completado y validación realizada: 
- Landing HTML semántica completa con ángulos B (principal), A y C.
- Hoja de estilos `assets/css/styles.css` con diseño responsive mobile-first y paleta de belleza (crema, oliva, dorado).
- Lógica JS `assets/js/main.js` con selector de combos, checkout modal, validación telefónica, salida10 (10 % con floor a centena) y envío v4.
- Receptor `Code.gs` e instrucciones en `integraciones/google-sheets/INSTALACION.md`.
- **Integración de activos reales (`assests nuevos/assets/`):**
  - Eliminados todos los medios provisionales que mostraban el stick en barra de 80 g.
  - Procesadas y optimizadas 5 fotos de estudio de alta calidad (`producto-roll-on.jpg`, `beneficios.jpg`, `portada-revista.jpg`, `detalle-frasco.jpg`, `cuidado-diario.jpg`).
  - Activada y poblada la sección `#producto-real` ("Así llega a tu casa · Sin filtros") con fotos reales de bodega distribuidora.
  - Implementada la sección `#testimonios` con 6 fotos y reseñas de clientas reales en Colombia (`review-1.jpg` a `review-6.jpg`).
  - Procesados y optimizados videos H.264 faststart (`producto-cerca.mp4`, `tendencia.mp4`, `textura.mp4`) mostrando la modelo con el frasco roll-on, tapa dorada y aplicación.
- Verificación automatizada de coherencia de precios JS vs Apps Script y correspondencia de 35 IDs en DOM (tests pasan 100 %).
Pendientes (bloquean pauta publicitaria):
1. Crear hoja nueva en Google Sheets y pegar la URL `/exec` en `CONFIG.endpoint`.
Próxima acción: el usuario despliega Apps Script, pasa la URL `/exec` y se realiza la prueba de pedido ficticio PRUEBA NO DESPACHAR.

## Investigación y evidencia
| Hallazgo o afirmación | Fuente / archivo | Fecha | Estado | Implicación |
| --- | --- | --- | --- | --- |
| Costo proveedor $20.000 por unidad | Usuario | 2026-10-08 | Declarado | Base del margen |
| Flete $15.000–$20.000 según destino; devolución = ida + vuelta; 2 unidades pagan un solo flete | Usuario (Dropi) | 2026-10-09 | Declarado | Las devoluciones cuestan $30.000–$40.000; el combo es más rentable |
| Garantía de 10 días por cualquier causa, asumida por el proveedor | Usuario | 2026-10-08 | Declarado | Se puede comunicar |
| El cliente recibe 1 unidad de 120 ml, sin accesorios | Usuario | 2026-10-08 | Declarado | Contenido de la oferta |
| Es una réplica "inspiración AAA", no Medicube original | Usuario | 2026-10-08 | Declarado | Riesgo de marca y de anuncios |
| Sin manchas, fórmula delicada y aclara las axilas | Usuario (tiene la etiqueta; la enviará) | 2026-10-09 | Declarado; **pendiente de etiqueta** | Se usan en la landing con un espacio para la etiqueta; revisar al recibirla |
| El original de Medicube es en **barra (stick)** de 80 g | Búsqueda web; videos 2 y 3 muestran "80 g / 2.82 oz" | 2026-10-09 | Verificado (fuentes públicas) | No coincide con "roll-on de 120 ml" |
| Los 4 videos muestran el **stick amarillo original** de Medicube (con caja), no el frasco de vidrio con tapa dorada de las imágenes | videos/video1–4.mp4 | 2026-10-09 | Verificado (revisión de fotogramas) | Usar videos de otro producto aumenta las devoluciones y puede ser publicidad engañosa |
| El original declara ácido kójico, cúrcuma, niacinamida, vitamina C, sin aluminio ni parabenos | Búsqueda web | 2026-10-08 | Verificado para el ORIGINAL | Aplicar a la réplica solo si su etiqueta lo dice |
| Precio del original en Colombia ≈ $105.000 | ovaskin.co (búsqueda web) | 2026-10-08 | Declarado por tercero | Referencia de valor percibido; no usar como "precio antes" |
| Notas olfativas: salida vainilla, caramelo, sal, sándalo; corazón heliotropo, jazmín; fondo pistacho, almendra | img/imagen8.jpeg | 2026-10-08 | Declarado (material gráfico) | Copy de aroma |

Contradicciones y datos por confirmar:
- **Formato:** las imágenes (imagen4, 6, 9) muestran un roll-on de vidrio de 120 ml con tapa dorada; los videos muestran el stick amarillo de 80 g. Hay que confirmar cuál llega.
- img/imagen7.jpeg: el antes/después de "2 semanas" es material de otra fuente; aunque la etiqueta respalde "aclara", esas fotos no son de clientes de este producto.
- img/imagen4.png e imagen6.png parecen montajes/renders (portada "Vanity" con ISSN ficticio).

## Comprador y mensaje
Público y situación de uso: **mujeres de 18 a 35 años** (confirmado por el usuario 2026-10-09), interesadas en K-beauty y aromas gourmand, que conocen la tendencia Medicube pero no pagan $105.000.
Problema y alternativas actuales: hipótesis: desodorantes de farmacia con aroma básico, manchas en la ropa, axilas oscuras; el original importado es costoso.
Ángulos (decisión del usuario): **principal B: "Adiós manchas en la ropa y axilas oscuras"**; secundarios A: "la tendencia vainilla-pistacho a un precio accesible" y C: "huele rico todo el día" (notas olfativas).
Competencia: el usuario no tiene referencias. En la búsqueda web solo aparecen tiendas del original (soleen.com.co, selfcareskin.com.co, ovaskin.co ≈ $105.000, Mercado Libre). Pendiente opcional: revisar Meta Ads Library.
Beneficio principal y demostración: aroma vainilla y pistacho, sin manchas, aclara las axilas (pendiente de etiqueta). Falta una demostración del frasco real.
Objeciones y respuestas sustentadas: "¿Y si no me gusta?" → garantía de 10 días (proveedor). "¿Es confiable?" → pago contra entrega y validación por WhatsApp. "¿Mancha?" → sin manchas (pendiente de etiqueta).
Límites, compatibilidad y afirmaciones que no debemos publicar:
- No afirmar que es Medicube original ni prometer la fórmula del original.
- No mostrar el stick amarillo si el producto que llega es el roll-on (y viceversa).
- No presentar el antes/después de imagen7 como resultado de clientes.
- Hasta recibir la etiqueta: "sin manchas", "fórmula delicada" y "aclara las axilas" quedan marcados como **pendientes de verificar** en la ficha; tampoco usar "sin aluminio", "protección contra el sudor" ni tiempos de resultado ("en 2 semanas").

## Producto y oferta
| Oferta / SKU | Unidades y contenido exacto | Precio COP | Envío | Promoción de salida (10 %, redondeo a la centena inferior) |
| --- | --- | --- | --- | --- |
| Individual | 1 desodorante 120 ml | $59.900 | Gratis (incluido en el precio) | $53.900 |
| Combo 2 — "Recomendada · Ahorras $9.900" | 2 desodorantes 120 ml | $109.900 | Gratis (incluido; 1 solo flete) | $98.900 |

Costos proveedor, fletes, recaudo, devoluciones y otros: proveedor $20.000/und; flete $15.000–$20.000 (promedio usado: $17.500), uno solo por pedido; devolución = ida + vuelta.
Supuestos de entrega / devolución y su fuente: hipótesis: 85 % de los pedidos creados se despachan; devolución de 15 %, 25 % y 35 % de los despachados.
Margen y CPA máximo con denominador definido (punto de equilibrio por **pedido creado**, flete $17.500, devolución 25 %):
- 1 und $59.900 → $6.842 | con promoción ($53.900) → $3.018
- 2 und $109.900 → $25.968 | con promoción ($98.900) → $18.955
- Mezcla sin promoción, si el 50 % elige el combo → $16.405
- Escenario de riesgo: unidad a $59.900 con flete de $20.000 y 35 % de devolución → pierde dinero
Script: `margen.py` (artefacto de la conversación).

## Operación y confianza
Cobertura / plazos confirmados: envíos nacionales vía Dropi; plazos pendientes
Formas de pago reales: contra entrega, en efectivo o QR (declarado)
Transportadoras confirmadas: Servientrega, Coordinadora, Inter Rapidísimo (declarado)
Contacto de soporte: WhatsApp +57 316 095 8557 (mismo de la hidrolavadora)
Condiciones de cambios, devoluciones y garantía verificadas: 10 días por cualquier causa, la asume el proveedor (declarado)
Evidencia de reseñas, ventas e inventario: ninguna

## Recorrido y promoción
Tipo de checkout y disparadores de apertura: patrón Aura (modal), abierto desde los CTA y el CTA fijo en móvil
Ofertas visibles y opción destacada con su motivo: combo de 2 como "Recomendada", porque ahorra $9.900 reales y paga un solo envío
Promoción de salida habilitada, elegibilidad y persistencia: sí, para ambas ofertas (decisión del usuario); se muestra al cerrar (X, Escape o clic afuera) después de empezar a llenar los datos; una vez por sesión de página
Porcentaje, regla de redondeo y precios finales por combo: 10 %, `floor(precio * 0.9 / 100) * 100` → $53.900 y $98.900
Margen validado con promoción: unidad muy ajustada (CPA de equilibrio ≈ $3.000); combo ≈ $19.000
Ganchos visuales aprobados y evidencia para sus afirmaciones: envío gratis, pago contra entrega en efectivo/QR, Servientrega, Coordinadora, Inter Rapidísimo, garantía de 10 días y validación por WhatsApp
Texto de confirmación y proceso de contacto: "Nos contactaremos contigo por WhatsApp para confirmar los datos y coordinar la entrega"

## Recursos y aplicación
Imágenes disponibles:
- img/imagen9.jpeg: roll-on con fondo blanco, 1024×1024 (para el producto y el checkout)
- img/imagen4.png: portada tipo revista, 1024×1536 (creativo)
- img/imagen6.png: póster de beneficios, 1024×1536 (creativo)
- img/imagen8.jpeg: notas olfativas, 2432×1750
- img/imagen7.jpeg: antes/después e ingredientes → no usar como testimonio
Videos disponibles (todos verticales 1080×1920, HEVC/H.265; hay que convertirlos a H.264 o WebM para la web):
| Archivo | Duración / peso | Contenido | Uso posible |
| --- | --- | --- | --- |
| video1.mp4 | 28 s / 27 MB | Hombre sin camisa habla a cámara y se aplica el stick; muestra caja y estuche | Ángulo masculino; poco alineado con el público objetivo |
| video2.mp4 | 9 s / 2,3 MB | Primer plano del stick y su caja, texto "NEW MEDICUBE vanilla & pistachio deodorant"; muestra "80 g" | Clip corto de producto (si el producto es el stick) |
| video3.mp4 | 20 s / 28 MB | En español; texto "No mal gastes tu dinero comprándolo" 😡❌; aplicación en el brazo, varias unidades y estuche | Demostración de textura; el texto quemado es ambiguo/negativo |
| video4.mp4 | 81 s / 15 MB | Manos con el stick, texto "Estoy sorprendida y no exagero" | Tipo testimonio; demasiado largo, habría que recortarlo |
Derechos de uso: desconocidos; parecen contenido de creadores (UGC). Todos muestran el logo de Medicube.
Espacios reservados: foto del frasco real y foto de la etiqueta (el usuario las enviará).
Stack y archivos de configuración: pendiente
Repositorio / rama / URL pública: pendiente
Integración de pedidos y versión desplegada: pendiente
Ubicación de configuración del receptor (sin secretos): pendiente

## Medición
Periodo, fuente de datos y campaña: sin datos
Visitas / pedidos creados / validados / enviados / entregados / devueltos: sin datos
Gasto publicitario, ingresos retenidos y contribución: sin datos
Hipótesis o experimento actual y criterio de decisión: pendiente

## Decisiones
| Fecha | Decisión vigente | Motivo / fuente | Sustituye a |
| --- | --- | --- | --- |
| 2026-10-08 | Ficha creada | Bloque 1 del usuario | — |
| 2026-10-08 | Precio individual $59.900 | Usuario | Propuesta de $79.900 |
| 2026-10-08 | Soporte, transportadoras, pago efectivo/QR y garantía del proveedor | Bloque 2 del usuario | — |
| 2026-10-09 | Combo de 2 a $109.900; envío gratis mostrado al cliente | Usuario | Propuesta abierta |
| 2026-10-09 | Promoción de salida del 10 % para ambas ofertas ($53.900 / $98.900) | Usuario | Propuesta de solo combo a $99.900 |
| 2026-10-09 | Usar "sin manchas", "fórmula delicada" y "aclara las axilas" con espacio para la etiqueta real | Usuario (tiene la etiqueta) | Restricción por falta de etiqueta |
| 2026-10-09 | Usar fotos (roll-on) y videos (stick) de forma provisional; selección de videos: video2 (pliegue superior), video4 recortado, fragmento de video3; descartar video1. Al confirmar el formato real se reemplazan los que no coincidan | Usuario; formato pendiente | — |
| 2026-10-09 | Nombre visible: "Desodorante Vainilla & Pistacho · Inspiración Medicube" | Recomendación aceptada por el usuario | "Desodorante Medicube" |
| 2026-10-09 | Ángulo principal B (manchas/axilas); secundarios A (tendencia sin comparar precio con original) y C (aroma) | Usuario | — |
| 2026-10-09 | Plazo de entrega comunicado: "Te confirmamos por WhatsApp" antes del despacho | Usuario | — |
| 2026-10-09 | Dominio previsto: https://auratienda-medicube.pages.dev (pendiente de despliegue) | Usuario | — |
