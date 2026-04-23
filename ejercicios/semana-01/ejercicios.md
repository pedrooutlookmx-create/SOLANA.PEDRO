# Ejercicios — Semana 1: Fundamentos de Solana

## Ejercicio 1: Configuración del Entorno ✅

### Instrucciones
1. Instala Solana CLI, Rust y Node.js
2. Configura tu entorno para devnet
3. Crea una nueva wallet
4. Solicita un airdrop de 2 SOL
5. Verifica tu balance

```bash
# Comandos a ejecutar:
solana config set --url devnet
solana-keygen new
solana airdrop 2
solana balance
```

**Entregable**: Captura de pantalla mostrando tu dirección pública y balance.

---

## Ejercicio 2: Explorar Transacciones 🔍

### Instrucciones
1. Realiza una transacción en devnet (transfiere SOL a otra wallet)
2. Busca la transacción en [Solana Explorer](https://explorer.solana.com/?cluster=devnet)
3. Identifica los siguientes campos:
   - Block / Slot
   - Fee (en lamports)
   - Signature
   - Instrucciones ejecutadas

```bash
# Crear segunda wallet para el ejercicio
solana-keygen new --outfile /tmp/wallet2.json

# Ver dirección de la segunda wallet
solana address --keypair /tmp/wallet2.json

# Transferir 0.1 SOL
solana transfer --keypair ~/.config/solana/id.json \
  $(solana address --keypair /tmp/wallet2.json) 0.1

# Ver historial de transacciones
solana transaction-history
```

**Entregable**: Enlace a la transacción en Solana Explorer.

---

## Ejercicio 3: Investigación 📚

Responde las siguientes preguntas en un archivo `respuestas.md`:

1. ¿Cuál es la diferencia entre **mainnet-beta**, **testnet** y **devnet**?
2. ¿Qué es un **slot** en Solana y cuánto tiempo dura aproximadamente?
3. ¿Por qué Solana puede procesar tantas transacciones por segundo?
4. ¿Qué es **rent** en el contexto de las cuentas de Solana?

---

## ✅ Criterios de Evaluación

- [ ] Entorno instalado y funcionando
- [ ] Wallet creada con balance en devnet
- [ ] Transacción ejecutada y encontrada en el Explorer
- [ ] Preguntas respondidas correctamente
