# Módulo 01 — Introducción a Solana

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Explicar qué es Solana y su arquitectura
- Entender Proof of History (PoH)
- Instalar y configurar el entorno de desarrollo
- Usar la Solana CLI de forma básica
- Crear y gestionar wallets

---

## 1.1 ¿Qué es Solana?

Solana es una blockchain de alto rendimiento capaz de procesar más de **65,000 transacciones por segundo (TPS)** en condiciones teóricas, con tiempos de confirmación de menos de 400ms y comisiones de fracción de centavo. (El rendimiento real en mainnet varía según la carga de la red.)

### Características clave:
- **Proof of History (PoH)**: mecanismo de consenso único de Solana
- **Tower BFT**: variante de PBFT optimizada para PoH
- **Turbine**: protocolo de propagación de bloques
- **Gulf Stream**: reenvío de transacciones sin mempool
- **Sealevel**: procesamiento paralelo de transacciones
- **Pipeline**: unidad de procesamiento de transacciones

---

## 1.2 Instalación del Entorno

### Solana CLI

```bash
# macOS / Linux
sh -c "$(curl -sSfL https://release.solana.com/v1.18.0/install)"

# Verificar instalación
solana --version
```

### Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
rustc --version
```

### Anchor CLI

```bash
cargo install --git https://github.com/coral-xyz/anchor avm --locked
avm install latest
avm use latest
anchor --version
```

---

## 1.3 Configuración Básica

```bash
# Conectar a devnet (red de pruebas)
solana config set --url devnet

# Ver configuración actual
solana config get

# Crear nuevo par de claves (wallet)
solana-keygen new --outfile ~/.config/solana/id.json

# Ver dirección pública (pubkey)
solana address

# Solicitar SOL de prueba
solana airdrop 2

# Ver balance
solana balance
```

---

## 1.4 Conceptos Fundamentales

### Cuentas
Todo en Solana son **cuentas**. Las cuentas pueden:
- Almacenar datos
- Almacenar programas (smart contracts)
- Ser wallets de usuario

### Lamports
La unidad mínima de SOL. **1 SOL = 1,000,000,000 lamports**.

### Rent
Las cuentas deben mantener un balance mínimo de SOL para pagar por el almacenamiento de datos ("rent-exempt").

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-01/` para los ejercicios prácticos de este módulo.

---

## 📚 Lecturas Adicionales

- [Solana Architecture](https://docs.solana.com/cluster/overview)
- [Proof of History](https://solana.com/news/proof-of-history)
- [Account Model](https://docs.solana.com/developing/programming-model/accounts)
