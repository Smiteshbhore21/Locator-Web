//... Existing JavaScript code

// Add these listeners and fetch logic

const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');
const closeButton = document.getElementById('close-form');
const blurOverlay = document.getElementById('blur-overlay');
const searchForm = document.getElementById('search-form');
const resultsContainer = document.getElementById('results-container');

loginButton.addEventListener('click', () => {
  blurOverlay.style.display = 'block';
  loginForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  blurOverlay.style.display = 'none';
  loginForm.style.display = 'none';
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);
  fetch('/search', {
    method: 'POST',
    body: formData,
  })
   .then((response) => response.json())
   .then((data) => {
      resultsContainer.innerHTML = '';
      data.results.forEach((result) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <div class="card-info">
            <p class="title">${result.name}</p>
            <div class="image"></div>
            <div class="content">
              <p class called="desc">${result.description}</p>
              <a class="action" href="#">
                LOCATE
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        `;
        resultsContainer.appendChild(card);
      });
      resultsContainer.style.display = 'block';
      blurOverlay.style.display = 'none';
    })
   .catch((error) => {
      console.error('Error:', error);
    });
});