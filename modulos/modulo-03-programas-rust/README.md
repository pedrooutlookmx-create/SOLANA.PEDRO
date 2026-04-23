# Módulo 03 — Programas On-Chain en Rust

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Entender la estructura de un programa Solana nativo
- Escribir programas básicos en Rust
- Desplegar programas en devnet
- Llamar a tus programas desde un cliente JavaScript

---

## 3.1 Estructura de un Programa Solana

Un programa Solana en Rust tiene la siguiente estructura básica:

```
mi-programa/
├── Cargo.toml
└── src/
    └── lib.rs
```

### `Cargo.toml`
```toml
[package]
name = "mi-programa"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "lib"]

[dependencies]
solana-program = "1.18"
```

### `src/lib.rs`
```rust
use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("¡Hola desde Solana!");
    Ok(())
}
```

---

## 3.2 Compilar y Desplegar

```bash
# Compilar el programa
cargo build-bpf

# Desplegar en devnet
solana program deploy target/deploy/mi_programa.so

# Ver ID del programa desplegado
solana program show <PROGRAM_ID>
```

---

## 3.3 Invocar desde JavaScript

```typescript
import { Connection, Transaction, TransactionInstruction, PublicKey, sendAndConfirmTransaction, Keypair } from "@solana/web3.js";

const PROGRAM_ID = new PublicKey("TU_PROGRAM_ID_AQUI");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

async function llamarPrograma() {
  const payer = Keypair.generate(); // En producción usa tu wallet
  
  const instruccion = new TransactionInstruction({
    keys: [],
    programId: PROGRAM_ID,
    data: Buffer.alloc(0),
  });

  const tx = new Transaction().add(instruccion);
  const sig = await sendAndConfirmTransaction(connection, tx, [payer]);
  console.log(`Transacción: ${sig}`);
}
```

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-03/` para los ejercicios prácticos de este módulo.

---

## 📚 Lecturas Adicionales

- [Programming Model](https://docs.solana.com/developing/programming-model/overview)
- [Hello World Program](https://docs.solana.com/getstarted/hello-world)
- [Solana Cookbook](https://solanacookbook.com/)
