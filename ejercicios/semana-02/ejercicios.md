# Ejercicios — Semana 2: Wallets y SPL Tokens

## Ejercicio 1: Crear tu Primer Token 🪙

### Instrucciones
Crea un SPL Token propio usando la CLI:

```bash
# 1. Instalar spl-token CLI (si no lo tienes)
cargo install spl-token-cli

# 2. Crear el token
spl-token create-token --decimals 6

# Guarda la dirección del mint que aparece!

# 3. Crear token account para tu wallet
spl-token create-account <MINT_ADDRESS>

# 4. Acuñar 1,000,000 tokens
spl-token mint <MINT_ADDRESS> 1000000

# 5. Verificar balance
spl-token balance <MINT_ADDRESS>

# 6. Ver todos tus tokens
spl-token accounts
```

**Entregable**: Dirección del mint y captura del balance.

---

## Ejercicio 2: Transferir Tokens 💸

### Instrucciones

```bash
# 1. Crea una segunda wallet
solana-keygen new --outfile /tmp/destinatario.json
DEST=$(solana address --keypair /tmp/destinatario.json)

# 2. Dale SOL para que pueda crear su token account
solana transfer $DEST 0.1

# 3. Transferir 500 tokens al destinatario
spl-token transfer <MINT_ADDRESS> 500 $DEST --fund-recipient

# 4. Verificar que el destinatario recibió los tokens
spl-token balance <MINT_ADDRESS> --owner $DEST
```

**Entregable**: Firma de la transacción de transferencia.

---

## Ejercicio 3: Código TypeScript 💻

Completa el archivo `solucion-token.ts` para:
1. Conectarte a devnet
2. Crear un nuevo mint
3. Crear una token account
4. Acuñar 500 tokens
5. Imprimir el balance final

Usa como referencia el ejemplo en `/modulos/modulo-02-wallet-tokens/ejemplo-token.ts`.

---

## ✅ Criterios de Evaluación

- [ ] Token creado con la CLI
- [ ] Tokens acuñados exitosamente
- [ ] Transferencia realizada correctamente
- [ ] Script TypeScript funcionando
