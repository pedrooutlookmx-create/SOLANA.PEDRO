# Ejercicios — Semana 3: Programas On-Chain

## Ejercicio 1: Hola Mundo On-Chain 🦀

### Instrucciones
Crea y despliega tu primer programa Solana:

1. Crea la estructura del proyecto:
```bash
mkdir hola-solana && cd hola-solana
cargo init --lib
```

2. Actualiza `Cargo.toml`:
```toml
[package]
name = "hola-solana"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "lib"]

[dependencies]
solana-program = "1.18"
```

3. Escribe el programa en `src/lib.rs` que imprima "¡Hola, [TU NOMBRE]!" usando `msg!()`.

4. Compila y despliega:
```bash
cargo build-bpf
solana program deploy target/deploy/hola_solana.so
```

**Entregable**: Program ID del programa desplegado.

---

## Ejercicio 2: Contador con Anchor 🔢

Crea un programa con Anchor que implemente un contador:
- Instrucción `inicializar`: crea una cuenta con contador en 0
- Instrucción `incrementar`: aumenta el contador en 1
- Instrucción `decrementar`: disminuye el contador en 1

```bash
anchor init contador
cd contador
```

Completa el programa y los tests, luego ejecuta:
```bash
anchor test
```

**Entregable**: Output exitoso de `anchor test`.

---

## Ejercicio 3: Desafío — Almacén de Mensajes 📝

Crea un programa Anchor que permita:
1. Guardar un mensaje (string) en una cuenta
2. Actualizar el mensaje
3. Leer el mensaje desde los tests

**Pistas**:
- Usa `#[account]` para definir la estructura de datos
- Usa `String` para el mensaje con suficiente espacio
- Valida que el autor sea el mismo que actualiza

---

## ✅ Criterios de Evaluación

- [ ] Programa "Hola Mundo" desplegado en devnet
- [ ] Contador funcionando con todos los tests pasando
- [ ] Almacén de mensajes implementado (desafío extra)
