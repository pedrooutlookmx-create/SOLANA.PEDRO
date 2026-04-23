# 🌊 Curso de Solana — Pedro

Bienvenido al repositorio oficial del **Curso de Desarrollo en Solana**. Aquí encontrarás todos los materiales, ejemplos de código, ejercicios y proyectos del curso.

---

## 📚 Contenido del Curso

| Módulo | Tema | Descripción |
|--------|------|-------------|
| 01 | Introducción a Solana | Arquitectura, conceptos clave, CLI y wallets |
| 02 | Wallets y Tokens | SPL Tokens, creación y gestión de tokens |
| 03 | Programas en Rust | Primeros programas on-chain con Solana Native |
| 04 | Anchor Framework | Desarrollo simplificado con Anchor |
| 05 | NFTs en Solana | Metaplex, acuñación y colecciones de NFTs |
| 06 | DeFi en Solana | Pools de liquidez, swaps y protocolos DeFi |

---

## 🛠️ Requisitos Previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Rust](https://www.rust-lang.org/tools/install) (edición estable)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) v1.18 o superior
- [Anchor CLI](https://www.anchor-lang.com/docs/installation) v0.30 o superior
- [Git](https://git-scm.com/)

---

## ⚡ Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/pedrooutlookmx-create/SOLANA.PEDRO.git
cd SOLANA.PEDRO

# 2. Instalar dependencias de Node.js
npm install

# 3. Verificar instalación de Solana CLI
solana --version

# 4. Configurar red de desarrollo (devnet)
solana config set --url devnet

# 5. Crear wallet local de desarrollo
solana-keygen new --outfile ~/.config/solana/id.json

# 6. Obtener SOL de prueba (devnet)
solana airdrop 2
```

---

## 📁 Estructura del Repositorio

```
SOLANA.PEDRO/
├── modulos/
│   ├── modulo-01-introduccion/      # Introducción y fundamentos
│   ├── modulo-02-wallet-tokens/     # Wallets y SPL Tokens
│   ├── modulo-03-programas-rust/    # Programas nativos en Rust
│   ├── modulo-04-anchor-framework/  # Desarrollo con Anchor
│   ├── modulo-05-nfts/              # NFTs con Metaplex
│   └── modulo-06-defi/              # Protocolos DeFi
├── ejercicios/
│   ├── semana-01/                   # Ejercicios semana 1
│   ├── semana-02/                   # Ejercicios semana 2
│   ├── semana-03/                   # Ejercicios semana 3
│   └── semana-04/                   # Ejercicios semana 4
├── recursos/                        # Guías, cheatsheets y recursos
├── package.json
└── README.md
```

---

## 🗺️ Hoja de Ruta del Curso

### Semana 1 — Fundamentos
- [ ] Qué es Solana y por qué es diferente
- [ ] Proof of History (PoH) y arquitectura
- [ ] Instalación del entorno de desarrollo
- [ ] Primeros pasos con Solana CLI
- [ ] Crear y financiar una wallet

### Semana 2 — Tokens y Transacciones
- [ ] Modelo de cuentas de Solana
- [ ] Crear SPL Tokens fungibles
- [ ] Transfers y mint de tokens
- [ ] Interacción con programas existentes

### Semana 3 — Programas On-Chain
- [ ] Introducción a Rust para Solana
- [ ] Estructura de un programa Solana
- [ ] Escribir y desplegar tu primer programa
- [ ] Anchor Framework: ventajas y uso

### Semana 4 — Proyectos Avanzados
- [ ] NFTs con Metaplex
- [ ] Colecciones y metadatos
- [ ] Introducción a DeFi en Solana
- [ ] Proyecto final integrador

---

## 🔗 Recursos Útiles

- 📖 [Documentación oficial de Solana](https://docs.solana.com/)
- ⚓ [Documentación de Anchor](https://www.anchor-lang.com/)
- 🎨 [Metaplex (NFTs)](https://docs.metaplex.com/)
- 🌐 [Solana Explorer](https://explorer.solana.com/)
- 💧 [Faucet Devnet](https://faucet.solana.com/)
- 🦀 [The Rust Book (en español)](https://rustbook.unjavademas.com/)

---

## 🤝 Contribuciones

¿Encontraste un error o quieres mejorar el material? ¡Las contribuciones son bienvenidas!

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b mejora/descripcion`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: descripción del cambio'`
4. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <strong>¡Bienvenido al mundo de Solana! 🚀</strong><br>
  Desarrollado con ❤️ por Pedro
</div>
