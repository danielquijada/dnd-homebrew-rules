# Homebrew Rules

Un sistema de reglas personalizadas para Dungeons & Dragons, presentado como una página web interactiva con reglas colapsables.

## 📋 Descripción

Este proyecto proporciona una interfaz web limpia y fácil de usar para mostrar reglas personalizadas de D&D. Las reglas se almacenan en formato JSON para facilitar la edición y mantenimiento, y se presentan con funcionalidad de mostrar/ocultar para una mejor experiencia de usuario.

## 📝 Estructura del JSON

El archivo `rules.json` contiene toda la información de las reglas. Aquí está la documentación completa de los parámetros:

### Estructura Principal

```json
{
  "title": "Título principal de la página",
  "rules": [
    // Array de objetos de reglas
  ]
}
```

### Objeto Regla

Cada regla tiene la siguiente estructura:

```json
{
  "id": "identificador-unico",
  "title": "Título de la regla",
  "content": {
    // Contenido de la regla (ver tipos de contenido)
  }
}
```

#### Parámetros de Regla

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | string | ✅ | Identificador único para la regla (usado para CSS/JS) |
| `title` | string | ✅ | Título que aparece en la lista de reglas |
| `content` | object | ✅ | Contenido de la regla (ver tipos de contenido) |

### Tipos de Contenido

El objeto `content` puede contener diferentes tipos de contenido:

#### 1. Contenido con Párrafos Simples

```json
"content": {
  "paragraphs": [
    "Primer párrafo de texto.",
    "Segundo párrafo de texto."
  ]
}
```

#### 2. Contenido con Subtítulo y Secciones

```json
"content": {
  "subtitle": "Subtítulo opcional",
  "sections": [
    {
      "title": "Nombre de la sección",
      "note": "(opcional) Nota adicional",
      "description": "Descripción de la sección"
    }
  ]
}
```

**Parámetros de Sección:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `title` | string | ✅ | Título de la sección (aparece en negrita) |
| `note` | string | ❌ | Nota adicional (ej: "(nuevo)") |
| `description` | string | ✅ | Descripción completa de la sección |

#### 3. Contenido con Lista

```json
"content": {
  "paragraphs": ["Texto introductorio"],
  "list": [
    {
      "title": "Elemento de lista",
      "description": "Descripción del elemento"
    }
  ],
  "footer": "Texto final opcional"
}
```

**Parámetros de Lista:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `title` | string | ✅ | Título del elemento (aparece en negrita) |
| `description` | string | ✅ | Descripción del elemento |

#### 4. Contenido Mixto

Puedes combinar diferentes tipos de contenido:

```json
"content": {
  "subtitle": "Subtítulo",
  "paragraphs": ["Párrafo introductorio"],
  "sections": [
    {
      "title": "Sección 1",
      "description": "Descripción"
    }
  ],
  "list": [
    {
      "title": "Item 1",
      "description": "Descripción del item"
    }
  ],
  "footer": "Texto de cierre"
}
```

### Parámetros de Contenido Disponibles

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| `subtitle` | string | Subtítulo en h3 | `"Nuevas definiciones:"` |
| `paragraphs` | array[string] | Lista de párrafos | `["Párrafo 1", "Párrafo 2"]` |
| `sections` | array[object] | Secciones con título y descripción | Ver ejemplo arriba |
| `list` | array[object] | Lista con viñetas | Ver ejemplo arriba |
| `footer` | string | Texto final | `"Nota adicional al final"` |

## 📖 Ejemplos de Uso

### Ejemplo 1: Regla Simple

```json
{
  "id": "regla-simple",
  "title": "Regla: Ejemplo Simple",
  "content": {
    "paragraphs": [
      "Esta es una regla simple con un párrafo.",
      "Y aquí hay otro párrafo explicativo."
    ]
  }
}
```

### Ejemplo 2: Regla con Secciones

```json
{
  "id": "regla-secciones",
  "title": "Regla: Con Secciones",
  "content": {
    "subtitle": "Diferentes tipos de descanso:",
    "sections": [
      {
        "title": "Descanso corto",
        "description": "1 hora de descanso ligero."
      },
      {
        "title": "Descanso largo",
        "note": "(modificado)",
        "description": "8 horas de sueño completo."
      }
    ]
  }
}
```

### Ejemplo 3: Regla con Lista

```json
{
  "id": "regla-lista",
  "title": "Regla: Con Lista",
  "content": {
    "paragraphs": ["Las pociones se usan de la siguiente manera:"],
    "list": [
      {
        "title": "Acción de Bono",
        "description": "Curación normal"
      },
      {
        "title": "Acción Completa",
        "description": "Curación máxima"
      }
    ],
    "footer": "Recuerda que solo puedes usar una poción por turno."
  }
}
```

## 📄 Licencia

Este proyecto está diseñado para uso personal en campañas de D&D. Siéntete libre de modificar y adaptar según tus necesidades.
