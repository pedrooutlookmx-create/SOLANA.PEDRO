import {
  Connection,
  Keypair,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  transfer,
  getAccount,
} from "@solana/spl-token";

async function main() {
  // Conectar a devnet
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Crear par de claves para el pagador (en producción usa tu wallet real)
  const payer = Keypair.generate();
  const mintAuthority = Keypair.generate();
  const freezeAuthority = Keypair.generate();

  // Airdrop de SOL para cubrir comisiones
  console.log("Solicitando airdrop...");
  const airdropSignature = await connection.requestAirdrop(
    payer.publicKey,
    2 * LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(airdropSignature);
  console.log(`Balance: ${await connection.getBalance(payer.publicKey)} lamports`);

  // Crear nuevo token (mint)
  console.log("\nCreando nuevo token...");
  const mint = await createMint(
    connection,
    payer,
    mintAuthority.publicKey,
    freezeAuthority.publicKey,
    9 // decimales (9 = similar a SOL)
  );
  console.log(`Mint address: ${mint.toBase58()}`);

  // Crear token account para el payer
  console.log("\nCreando token account...");
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint,
    payer.publicKey
  );
  console.log(`Token account: ${tokenAccount.address.toBase58()}`);

  // Acuñar tokens
  console.log("\nAcuñando 1,000 tokens...");
  await mintTo(
    connection,
    payer,
    mint,
    tokenAccount.address,
    mintAuthority,
    1000 * 10 ** 9 // 1000 tokens con 9 decimales
  );

  // Verificar balance
  const accountInfo = await getAccount(connection, tokenAccount.address);
  console.log(`Balance de tokens: ${Number(accountInfo.amount) / 10 ** 9}`);

  console.log("\n✅ ¡Token creado y acuñado exitosamente!");
  console.log(`🔗 Ver en Solana Explorer: https://explorer.solana.com/address/${mint.toBase58()}?cluster=devnet`);
}

main().catch(console.error);
