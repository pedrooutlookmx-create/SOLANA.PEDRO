# Módulo 06 — DeFi en Solana

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Entender los protocolos DeFi en Solana
- Interactuar con pools de liquidez
- Realizar swaps programáticos
- Entender el ecosistema DeFi de Solana

---

## 6.1 Ecosistema DeFi en Solana

Solana cuenta con uno de los ecosistemas DeFi más activos del espacio cripto:

| Protocolo | Tipo | Descripción |
|-----------|------|-------------|
| **Raydium** | DEX/AMM | Exchange descentralizado con AMM |
| **Jupiter** | Agregador | Mejor precio en swaps |
| **Marinade** | Liquid Staking | SOL en staking líquido (mSOL) |
| **Kamino** | Lending | Préstamos y estrategias de liquidez |
| **Drift** | Perpetuos | Trading de derivados |

---

## 6.2 Interactuar con Jupiter (Agregador de Swaps)

Jupiter es el agregador de liquidez más popular en Solana. Ofrece una API pública:

```typescript
// Obtener cotización de swap
const response = await fetch(
  "https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=100000000&slippageBps=50"
);
const quoteResponse = await response.json();

// Ejecutar el swap
const swapResponse = await fetch("https://quote-api.jup.ag/v6/swap", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    quoteResponse,
    userPublicKey: wallet.publicKey.toString(),
    wrapAndUnwrapSol: true,
  }),
});
const { swapTransaction } = await swapResponse.json();
```

---

## 6.3 Conceptos Clave de DeFi

### AMM (Automated Market Maker)
Los AMMs usan pools de liquidez en lugar de libros de órdenes. La fórmula más común es **x * y = k**.

### Liquidez
Los proveedores de liquidez (LPs) depositan pares de tokens en los pools y reciben comisiones por los trades.

### Slippage
La diferencia entre el precio esperado y el precio de ejecución. En pools con poca liquidez el slippage puede ser alto.

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-04/` para los ejercicios prácticos de DeFi.

---

## 📚 Lecturas Adicionales

- [Jupiter Documentation](https://docs.jup.ag/)
- [Raydium Documentation](https://docs.raydium.io/)
- [Marinade Finance](https://docs.marinade.finance/)
- [DeFi en Solana (overview)](https://solana.com/ecosystem/defi)
