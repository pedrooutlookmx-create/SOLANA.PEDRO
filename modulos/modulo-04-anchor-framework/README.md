# Módulo 04 — Anchor Framework

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Entender por qué usar Anchor
- Crear proyectos con Anchor
- Escribir programas con macros de Anchor
- Escribir y ejecutar tests con Anchor

---

## 4.1 ¿Por qué Anchor?

Anchor es el framework más popular para desarrollar en Solana. Simplifica:
- La serialización/deserialización de datos (usa Borsh automáticamente)
- La validación de cuentas (con macros declarativas)
- El manejo de errores
- La generación de IDL (interfaz del programa)
- La generación de clientes TypeScript

---

## 4.2 Crear un Proyecto con Anchor

```bash
# Crear nuevo proyecto
anchor init mi-proyecto
cd mi-proyecto

# Estructura generada:
# mi-proyecto/
# ├── programs/mi-proyecto/src/lib.rs
# ├── tests/mi-proyecto.ts
# ├── app/
# ├── Anchor.toml
# └── package.json
```

---

## 4.3 Programa Básico con Anchor

```rust
use anchor_lang::prelude::*;

declare_id!("TU_PROGRAM_ID");

#[program]
pub mod mi_proyecto {
    use super::*;

    pub fn inicializar(ctx: Context<Inicializar>, mensaje: String) -> Result<()> {
        let cuenta = &mut ctx.accounts.cuenta_datos;
        cuenta.mensaje = mensaje;
        cuenta.autor = ctx.accounts.usuario.key();
        msg!("Cuenta inicializada: {}", cuenta.mensaje);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Inicializar<'info> {
    #[account(
        init,
        payer = usuario,
        space = 8 + 4 + 200 + 32
    )]
    pub cuenta_datos: Account<'info, DatosCuenta>,
    #[account(mut)]
    pub usuario: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct DatosCuenta {
    pub mensaje: String,
    pub autor: Pubkey,
}
```

---

## 4.4 Tests con Anchor

```typescript
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MiProyecto } from "../target/types/mi_proyecto";

describe("mi-proyecto", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.MiProyecto as Program<MiProyecto>;

  it("Inicializa correctamente", async () => {
    const cuentaDatos = anchor.web3.Keypair.generate();
    
    await program.methods
      .inicializar("¡Hola Solana!")
      .accounts({
        cuentaDatos: cuentaDatos.publicKey,
        usuario: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([cuentaDatos])
      .rpc();

    const cuenta = await program.account.datosCuenta.fetch(cuentaDatos.publicKey);
    console.log("Mensaje:", cuenta.mensaje);
  });
});
```

---

## 4.5 Comandos Anchor

```bash
# Compilar programa
anchor build

# Ejecutar tests locales
anchor test

# Desplegar en devnet
anchor deploy --provider.cluster devnet

# Ver logs del programa
solana logs <PROGRAM_ID>
```

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-03/` para los ejercicios prácticos con Anchor.

---

## 📚 Lecturas Adicionales

- [Anchor Documentation](https://www.anchor-lang.com/docs)
- [Anchor Book](https://book.anchor-lang.com/)
- [Anchor Examples](https://github.com/coral-xyz/anchor/tree/master/examples)
