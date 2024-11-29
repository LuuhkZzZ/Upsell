const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";
document.head.appendChild(script);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Oferta carregada com sucesso!");
});