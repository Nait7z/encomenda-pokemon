const WEBHOOK_URL = "https://discord.com/api/webhooks/1467692053784826082/nFbomw3Rwf5VLtn8Ncen_0YxJyGvqtHs0QEfqRd2rTMz_UoPN27JfdeIaM3kWbNZEOg9";

document.getElementById("pedidoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nickMine = document.getElementById("nickMine").value;
  const nickDiscord = document.getElementById("nickDiscord").value;
  const pokemon = document.getElementById("pokemon").value;
  const habilidade = document.getElementById("habilidade").value;
  const sexo = document.getElementById("sexo").value;
  const eggmove = document.getElementById("eggmove").value;

  const ivs = Array.from(
    document.querySelectorAll(".iv-container input:checked")
  ).map(iv => iv.value);

  const embed = {
    title: "⚔️ Nova Encomenda - Asgard Store",
    color: 0x7b2cff,
    fields: [
      { name: "🧑 Nick Minecraft", value: nickMine || "Não informado", inline: false },
      { name: "💬 Nick Discord", value: nickDiscord || "Não informado", inline: false },
      { name: "🐉 Pokémon", value: pokemon || "Não informado", inline: true },
      { name: "✨ Habilidade", value: habilidade || "Não informado", inline: true },
      { name: "⚥ Sexo", value: sexo || "Não informado", inline: true },
      { name: "🥚 Egg Move", value: eggmove || "Nenhum", inline: false },
      { name: "💎 IVs Perfeitos", value: ivs.length > 0 ? ivs.join(", ") : "Nenhum selecionado", inline: false }
    ],
    footer: {
      text: "Asgard Store • Sistema de Encomendas"
    },
    timestamp: new Date()
  };

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "Asgard Bot",
      avatar_url: "",
      embeds: [embed]
    })
  })
  .then(response => {
    if (response.ok) {
      alert("Pedido enviado para Asgard ⚔️");
      document.getElementById("pedidoForm").reset();
    } else {
      alert("Erro ao enviar pedido.");
    }
  })
  .catch(error => {
    alert("Erro ao conectar com o webhook.");
    console.error(error);
  });

});