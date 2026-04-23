# Módulo 05 — NFTs en Solana

## Objetivos de Aprendizaje

Al finalizar este módulo podrás:
- Entender el estándar de NFTs en Solana
- Usar Metaplex para crear NFTs
- Crear colecciones de NFTs
- Gestionar metadatos on-chain y off-chain

---

## 5.1 ¿Cómo funcionan los NFTs en Solana?

Un NFT en Solana es un SPL Token con:
- **Supply = 1** (solo existe una unidad)
- **Decimales = 0** (no divisible)
- **Metadatos** asociados mediante el programa de Metaplex

---

## 5.2 Metaplex

[Metaplex](https://www.metaplex.com/) es el estándar oficial para NFTs en Solana. Provee:
- **Token Metadata Program**: almacena metadatos on-chain
- **Candy Machine**: herramienta para lanzar colecciones
- **Auction House**: protocolo de marketplace descentralizado

---

## 5.3 Crear un NFT con Metaplex JS SDK

```typescript
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";

const umi = createUmi("https://api.devnet.solana.com").use(mplTokenMetadata());

const mint = generateSigner(umi);

await createNft(umi, {
  mint,
  name: "Mi Primer NFT",
  symbol: "MPN",
  uri: "https://arweave.net/TU_METADATA_URI",
  sellerFeeBasisPoints: percentAmount(5), // 5% royalties
}).sendAndConfirm(umi);

console.log(`NFT creado: ${mint.publicKey}`);
```

---

## 5.4 Estructura de Metadatos (JSON)

```json
{
  "name": "Mi Primer NFT",
  "symbol": "MPN",
  "description": "Un NFT de ejemplo del Curso de Solana",
  "image": "https://arweave.net/TU_IMAGEN",
  "attributes": [
    { "trait_type": "Rareza", "value": "Común" },
    { "trait_type": "Curso", "value": "Solana" }
  ],
  "properties": {
    "files": [{ "uri": "https://arweave.net/TU_IMAGEN", "type": "image/png" }],
    "category": "image"
  }
}
```

---

## 📝 Ejercicio del Módulo

Ver `/ejercicios/semana-04/` para los ejercicios prácticos de NFTs.

---

## 📚 Lecturas Adicionales

- [Metaplex Docs](https://docs.metaplex.com/)
- [Token Metadata Standard](https://docs.metaplex.com/programs/token-metadata/overview)
- [Candy Machine](https://docs.metaplex.com/programs/candy-machine/)
