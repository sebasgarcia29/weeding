# Plantilla de Invitación de Boda React.js

Esta es una plantilla de invitación de boda en React.js.
Si te gusta este repositorio o planeas utilizarlo, ¡por favor, no olvides darle una estrella y hacer un fork! 😉

## Vista Previa de la Plantilla

### Invitación de Boda

![Vista Previa](./Preview.gif)

## Contenido y Funcionalidades Incluidas en la Plantilla

- Mostrar la fecha, ubicación y saludo de la boda.
- Álbum de fotos.
- Información sobre dónde enviar los regalos de dinero (con función de copiar al portapapeles el número de cuenta).
- Función de compartir en KakaoTalk y enlaces de compartir.

## Cómo Utilizar la Invitación de Boda v1

Por favor, modifica adecuadamente la sección `<Head>` en `./src/pages/index.tsx`.

```html
<meta content="○○○❤○○○ Invitación de Boda" name="Title" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Description" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ Invitación de Boda" />
<meta
  property="og:description"
  content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분"
/>
<meta property="og:url" content="https://kyuhyuk.kr/wedding-invitation" />
<meta name="theme-color" content="#BCAAA4" />
```

`./src/data.json`를 수정하여 사용합니다.

```json
{
  "date": "2024-08-21",
  "location": "nombre del salon de eventos",
  "gretting": "Saludo",
  "groom": {
    "name": "Nombre novia",
    "account_number": "+57 300 000 0000",
    "parents": {
      "mother": {
        "name": "",
        "account_number": "+57 300 000 0000"
      },
      "father": {
        "name": "",
        "account_number": "+57 300 000 0000"
      }
    }
  },
  "bride": {
    "name": "Nombre novio",
    "account_number": "○○은행 ***-***-******",
    "parents": {
      "mother": {
        "name": "",
        "account_number": "+57 300 000 0000"
      },
      "father": {
        "name": "",
        "account_number": "+57 300 000 0000"
      }
    }
  },
  "kakaotalk": {
    "api_token": "",
    "wedding_invitation_url": "",
    "share_image": ""
  }
}
```
