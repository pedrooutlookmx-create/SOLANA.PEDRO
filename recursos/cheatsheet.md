# 📋 Recursos del Curso de Solana

## Cheatsheet — Solana CLI

```bash
# ─── Configuración ───────────────────────────────────────
solana config get                          # Ver configuración actual
solana config set --url devnet             # Cambiar a devnet
solana config set --url mainnet-beta       # Cambiar a mainnet
solana config set --url localhost          # Cambiar a validador local

# ─── Wallet ──────────────────────────────────────────────
solana-keygen new                          # Crear nueva wallet
solana-keygen new --outfile wallet.json    # Guardar en archivo específico
solana address                             # Ver mi dirección pública
solana address --keypair wallet.json       # Ver dirección de otro keypair
solana balance                             # Ver balance SOL
solana balance <PUBKEY>                    # Ver balance de otra wallet

# ─── Transacciones ───────────────────────────────────────
solana airdrop 2                           # Pedir 2 SOL en devnet/testnet
solana transfer <DEST> 0.5                 # Transferir 0.5 SOL
solana transaction-history                 # Ver historial

# ─── Programas ───────────────────────────────────────────
solana program deploy <ARCHIVO.so>         # Desplegar programa
solana program show <PROGRAM_ID>           # Info del programa
solana program close <PROGRAM_ID>          # Cerrar y recuperar SOL
solana logs <PROGRAM_ID>                   # Ver logs en tiempo real

# ─── SPL Tokens ──────────────────────────────────────────
spl-token create-token                     # Crear nuevo mint
spl-token create-account <MINT>            # Crear token account
spl-token mint <MINT> <AMOUNT>             # Acuñar tokens
spl-token transfer <MINT> <AMT> <DEST>     # Transferir tokens
spl-token balance <MINT>                   # Ver balance
spl-token accounts                         # Ver todos tus tokens
spl-token supply <MINT>                    # Ver supply total
```

---

## Cheatsheet — Anchor

```bash
anchor init <NOMBRE>          # Crear nuevo proyecto
anchor build                  # Compilar programa
anchor test                   # Ejecutar tests (con validador local)
anchor deploy                 # Desplegar programa
anchor idl fetch <PROGRAM_ID> # Obtener IDL de un programa
```

---

## Redes de Solana

| Red | RPC URL | Uso |
|-----|---------|-----|
| **Mainnet-beta** | `https://api.mainnet-beta.solana.com` | Producción (SOL real) |
| **Devnet** | `https://api.devnet.solana.com` | Desarrollo (SOL gratis) |
| **Testnet** | `https://api.testnet.solana.com` | Pruebas de validadores |
| **Localhost** | `http://localhost:8899` | Desarrollo local |

---

## Programas del Sistema

| Programa | Program ID |
|----------|-----------|
| System Program | `11111111111111111111111111111111` |
| Token Program | `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA` |
| Token-2022 | `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb` |
| Associated Token | `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJe1bmd` |
| Metaplex Token Metadata | `metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s` |

---

## Links Útiles

- 🌐 [Solana Explorer (Mainnet)](https://explorer.solana.com/)
- 🧪 [Solana Explorer (Devnet)](https://explorer.solana.com/?cluster=devnet)
- 💧 [Faucet Devnet](https://faucet.solana.com/)
- 📖 [Documentación Solana](https://docs.solana.com/)
- ⚓ [Anchor Docs](https://www.anchor-lang.com/)
- 🍳 [Solana Cookbook](https://solanacookbook.com/)
- 🎨 [Metaplex Docs](https://docs.metaplex.com/)
- 🔄 [Jupiter (swaps)](https://jup.ag/)
- 📊 [Solana Status](https://status.solana.com/)
