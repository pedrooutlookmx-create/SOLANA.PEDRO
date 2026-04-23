# Módulo 02 — Wallets y SPL Tokens

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Entender el modelo de cuentas de Solana
- Crear y gestionar SPL Tokens fungibles
- Realizar transferencias de tokens
- Interactuar con el programa Token de Solana

---

## 2.1 SPL Tokens

El **Token Program** de Solana (`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`) es el estándar para tokens fungibles y no fungibles en Solana, similar al ERC-20/ERC-721 de Ethereum.

### Conceptos clave:
- **Mint Account**: define el token (supply, decimales, autoridad)
- **Token Account**: cuenta que almacena tokens de un usuario
- **Associated Token Account (ATA)**: token account estándar derivado del wallet

---

## 2.2 Crear un Token con CLI

```bash
# Crear un nuevo mint (token)
spl-token create-token

# Crear una token account para tu wallet
spl-token create-account <MINT_ADDRESS>

# Acuñar tokens
spl-token mint <MINT_ADDRESS> 1000

# Ver balance de tokens
spl-token balance <MINT_ADDRESS>

# Transferir tokens
spl-token transfer <MINT_ADDRESS> 100 <DESTINATARIO>
```

---

## 2.3 Código de Ejemplo

Ver el archivo `ejemplo-token.ts` en este directorio para un ejemplo completo de cómo crear y gestionar SPL Tokens con JavaScript/TypeScript.

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-02/` para los ejercicios prácticos de este módulo.

---

## 📚 Lecturas Adicionales

- [SPL Token Program](https://spl.solana.com/token)
- [Token 2022 (nueva versión)](https://spl.solana.com/token-2022)
