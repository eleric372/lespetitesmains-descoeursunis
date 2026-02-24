const workshops = [
  {
    title: "Peinture intuitive",
    date: "Mardi 12 mars",
    time: "14h00 - 16h30",
    places: 12,
    description: "Explorer les couleurs et les émotions à travers la peinture libre.",
  },
  {
    title: "Création de bijoux upcyclés",
    date: "Jeudi 14 mars",
    time: "10h00 - 12h00",
    places: 10,
    description: "Transformer des matériaux récupérés en bijoux uniques.",
  },
  {
    title: "Atelier couture solidaire",
    date: "Samedi 16 mars",
    time: "09h30 - 12h30",
    places: 8,
    description: "Apprendre à coudre des accessoires utiles et solidaires.",
  },
];

const products = [
  {
    name: "Tote bag brodé",
    costPrice: 9,
    material: "Coton recyclé",
  },
  {
    name: "Boucles d'oreilles artisanales",
    costPrice: 6,
    material: "Perles et métal récupéré",
  },
  {
    name: "Carnet décoré à la main",
    costPrice: 4,
    material: "Papier recyclé",
  },
];

function renderWorkshops() {
  const newsList = document.querySelector("#news-list");
  const workshopSelect = document.querySelector("#workshop-select");

  workshops.forEach((workshop) => {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <h3>${workshop.title}</h3>
      <p><strong>Date :</strong> ${workshop.date}</p>
      <p><strong>Horaire :</strong> ${workshop.time}</p>
      <p><strong>Places :</strong> ${workshop.places}</p>
      <p>${workshop.description}</p>
    `;
    newsList.appendChild(article);

    const option = document.createElement("option");
    option.value = workshop.title;
    option.textContent = `${workshop.title} — ${workshop.date}`;
    workshopSelect.appendChild(option);
  });
}

function renderProducts() {
  const shopList = document.querySelector("#shop-list");

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Matériaux :</strong> ${product.material}</p>
      <p class="price">Prix de revient : ${product.costPrice.toFixed(2)} €</p>
    `;
    shopList.appendChild(card);
  });
}

function setupForms() {
  const siteForm = document.querySelector("#site-registration-form");
  const workshopForm = document.querySelector("#workshop-registration-form");

  const siteFeedback = document.querySelector("#site-feedback");
  const workshopFeedback = document.querySelector("#workshop-feedback");

  siteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(siteForm);
    const name = formData.get("name");

    siteFeedback.textContent = `Merci ${name}, votre inscription au site est enregistrée.`;
    siteForm.reset();
  });

  workshopForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(workshopForm);
    const participantName = formData.get("participantName");
    const workshop = formData.get("workshop");
    const seats = formData.get("seats");

    workshopFeedback.textContent = `${participantName}, votre réservation de ${seats} place(s) pour "${workshop}" est confirmée.`;
    workshopForm.reset();
  });
}

function setYear() {
  const yearEl = document.querySelector("#year");
  yearEl.textContent = new Date().getFullYear();
}

renderWorkshops();
renderProducts();
setupForms();
setYear();
