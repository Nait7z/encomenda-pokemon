const WEBHOOK_URL = "https://discord.com/api/webhooks/1467692053784826082/nFbomw3Rwf5VLtn8Ncen_0YxJyGvqtHs0QEfqRd2rTMz_UoPN27JfdeIaM3kWbNZEOg9";

function gerarPedido() {
  const pokemon = document.getElementById("pokemon").value || "Não informado";
  const habilidade = document.getElementById("habilidade").value || "Não informada";
  const sexo = document.getElementById("sexo").value;
  const eggMoves = document.getElementById("eggMoves").value || "Nenhum";

  const ivs = [];
  document.querySelectorAll(".ivs input:checked").forEach(iv => {
    ivs.push(iv.value);
  });

  const mensagem = {
    username: "Encomendas Arceus",
    embeds: [{
      title: "⛧ Nova Encomenda de Pokémon ⛧",
      color: 15844367,
      fields: [
        { name: "Pokémon", value: pokemon, inline: true },
        { name: "Sexo", value: sexo, inline: true },
        { name: "Habilidade", value: habilidade },
        { name: "Egg Moves", value: eggMoves },
        { name: "IVs Perfeitos", value: ivs.length ? ivs.join(", ") : "Nenhum" }
      ],
      footer: {
        text: "Forjado sob o julgamento de Arceus"
      },
      timestamp: new Date()
    }]
  };

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mensagem)
  })
  .then(() => {
    document.getElementById("resultado").innerText =
      "✅ Perfeito, sua encomenda estará sendo preparada!";
  })
  .catch(() => {
    document.getElementById("resultado").innerText =
      "❌ Erro ao enviar a encomenda.";
  });
}