const API_URL = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-usuarios");
  const form = document.getElementById("formUsuario");

  if (lista) {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        data.forEach(u => {
          const li = document.createElement("li");
          li.textContent = u.nome;
          lista.appendChild(li);
        });
      });
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome })
      })
      .then(res => res.json())
      .then(u => {
        const li = document.createElement("li");
        li.textContent = u.nome;
        lista.appendChild(li);
        form.reset();
      });
    });
  }
});
