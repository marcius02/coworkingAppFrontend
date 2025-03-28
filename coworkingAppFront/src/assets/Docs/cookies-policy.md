# 1. Normativas Legales Relevantes

## Lista de leyes que aplican según la ubicación de tus usuarios:

| Regulación         | Alcance                            | Requisitos Clave |
|--------------------|-----------------------------------|------------------|
| **GDPR (UE)**     | Usuarios en la Unión Europea     | - Consentimiento explícito antes de cookies no esenciales. <br> - Derecho a retirar el consentimiento. |
| **CCPA/CPRA (EE.UU.)** | Usuarios en California | - Derecho a opt-out de la venta de datos personales (si aplica). <br> - Enlace "Do Not Sell My Personal Information". |
| **LGPD (Brasil)** | Usuarios en Brasil               | - Consentimiento claro y específico. <br> - Transparencia en el uso de datos. |
| **UK GDPR**       | Usuarios en Reino Unido          | Similar al GDPR de la UE, pero con ajustes post-Brexit. |
| **Directiva ePrivacy** | Países de la UE             | Regula cookies, seguimiento y comunicaciones electrónicas. |

---

# 2. Requisitos para Cumplir la Ley

## Asegúrate de que tu política de cookies incluya:

### ✅ Consentimiento Previo:
- Las cookies no esenciales (analíticas, publicitarias) solo se activan tras aceptación explícita del usuario.
- Las cookies técnicas (sesión, seguridad) no requieren consentimiento.

### ✅ Información Clara:
- Lista detallada de cookies usadas: **nombre, finalidad, duración y proveedor** (ej: Google Analytics).
- Explicación accesible y sin tecnicismos.

### ✅ Control del Usuario:
- Botones para **Aceptar, Rechazar y Personalizar cookies**.
- Acceso fácil a la configuración de cookies en cualquier momento.

### ✅ Registro del Consentimiento:
- Guardar la preferencia del usuario (ej: en localStorage o una cookie técnica).
- Renovar la solicitud de consentimiento cada **12 meses** (recomendado por el GDPR).

### ✅ Seguridad de Datos:
- Encriptar datos sensibles y **limitar acceso a terceros no autorizados**.

---

# 3. Herramientas para Implementar el Cumplimiento

| Categoría               | Herramientas                         | Descripción |
|-------------------------|-------------------------------------|-------------|
| **Gestión de Cookies**  | Cookiebot, OneTrust                | Generan banners de consentimiento, políticas automáticas y registro de preferencias. |
| **Auditoría de Cookies** | CookieMetrix, Screaming Frog       | Escanean tu web para detectar cookies no declaradas. |
| **Analítica Sin Cookies** | Plausible, Fathom                 | Alternativas respetuosas con la privacidad (no requieren consentimiento). |
| **Documentación**        | Notion, Confluence                | Para redactar y mantener actualizada la política. |
| **Implementación Técnica** | React: `react-cookie-consent`, Vanilla JS: `vanilla-cookieconsent` | Librerías para integrar banners y gestión de cookies. |

---

# 4. Checklist de Cumplimiento

✅ Realizar una **auditoría de cookies** para identificar todas las cookies y trackers.  
✅ Implementar un **banner de cookies** con opciones de aceptar/rechazar.  
✅ Redactar la **política de cookies** en lenguaje claro y enlazarla desde el footer.  
✅ Registrar y almacenar las **preferencias de los usuarios**.  
✅ Configurar servicios de terceros (ej: Google Analytics) para respetar el consentimiento.  
✅ Documentar todo el proceso en la **wiki interna** (ej: Taiga, Confluence).  
✅ Revisar y actualizar la política **cada 6 meses** o ante cambios legales.  

---

# 5. Ejemplo de Contenido para la Política de Cookies

_(Incluir en `/legal/cookies` de tu app)_

## Política de Cookies de [Nombre de la App]  

### ¿Qué son las cookies?  
Las cookies son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia...  

### Tipos de cookies que utilizamos  
- **Esenciales**: Para el funcionamiento básico (ej: inicio de sesión).  
- **Analíticas**: Miden tráfico y uso (ej: Google Analytics).  
- **Publicitarias**: Personalizan anuncios (ej: Facebook Pixel).  

### Control de cookies  
Puedes gestionar tus preferencias en [Enlace a Configuración de Cookies].  

### Proveedores externos  
| Proveedor          | Finalidad                     | Enlace a su política       |  
|--------------------|-----------------------------|----------------------------|  
| Google Analytics  | Analizar tráfico web         | [Enlace]                   |  
| Stripe            | Procesar pagos               | [Enlace]                   |  

---

# 6. Implementación Técnica (Ejemplo en React)

```jsx
// Componente CookieBanner.jsx
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieBanner = () => {
  const { consent, saveConsent } = useCookieConsent();

  return (
    consent === null && (
      <div className="cookie-banner">
        <p>Usamos cookies para... <a href="/legal/cookies">Saber más</a></p>
        <button onClick={() => saveConsent(true)}>Aceptar</button>
        <button onClick={() => saveConsent(false)}>Rechazar</button>
      </div>
    )
  );
};
```
# 7. Errores Comunes que Evitar

❌ **Cargar cookies antes del consentimiento:**  
   - No cargues scripts de terceros (ej: Facebook Pixel, Google Analytics) hasta que el usuario haya dado su consentimiento explícito.  

❌ **Banners engañosos o "dark patterns":**  
   - Evita diseños que dificulten el rechazo, como hacer el botón "Aceptar" más visible que el de "Rechazar".  
   - No ocultes opciones avanzadas de configuración de cookies.  

❌ **Política de cookies desactualizada:**  
   - Revisa y actualiza la lista de cookies si añades o eliminas servicios de terceros.  
   - Indica claramente la fecha de la última actualización en tu política de cookies.  

❌ **Falta de registro del consentimiento:**  
   - Asegúrate de guardar la preferencia del usuario de forma segura (ej: localStorage, base de datos).  
   - Renueva el consentimiento cada 12 meses o cuando haya cambios significativos.  

---

# 8. Recursos Adicionales

📌 **Guías y Regulaciones Oficiales**  
- [Guía Oficial del GDPR sobre Cookies](https://gdpr.eu/cookies/)  
- [Directrices de la CNIL sobre Cookies y Seguimiento](https://www.cnil.fr/en/home)  
- [Normativa CCPA/CPRA de California](https://oag.ca.gov/privacy/ccpa)  
- [Ley LGPD de Brasil](https://www.lgpdbrasil.com.br/)  

📌 **Herramientas de Auditoría de Cookies**  
- [CookieMetrix](https://www.cookiemetrix.com/) – Escanea tu web y detecta cookies ocultas.  
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) – Auditoría avanzada para rastrear cookies y scripts.  

📌 **Ejemplos de Implementación Técnica**  
- [React Cookie Consent](https://www.npmjs.com/package/react-cookie-consent) – Librería de React para banners de cookies.  
- [Vanilla Cookie Consent](https://www.npmjs.com/package/vanilla-cookieconsent) – Alternativa en JavaScript puro.  
- [Plausible Analytics](https://plausible.io/) – Alternativa a Google Analytics sin uso de cookies.  

📌 **Plantillas y Recursos Legales**  
- [Plantilla de Política de Cookies por Iubenda](https://www.iubenda.com/es/privacy-policy-generator)  
- [Ejemplo de Política de Cookies en GitHub](https://github.com/)  

---
