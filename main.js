// DOM elements
const onglets = document.querySelectorAll('.onglet');
const content = document.querySelectorAll('.content');

// Init variable
let index = 0;

// For each onglets
onglets.forEach(onglet => {
      onglet.addEventListener('click', () => {
            // Add class active
            if (onglet.classList.contains('active')) {
                  return;
            } else {
                  onglet.classList.add('active');
            }

            // Remove class active
            index = onglet.getAttribute('data-onglet');

            for (i = 0; i < onglets.length; i++) {
                  if (onglets[i].getAttribute('data-onglet') != index) {
                        onglets[i].classList.remove('active');
                  }
            }

            // Change content
            for (j = 0; j < content.length; j++) {
                  if (content[j].getAttribute('data-onglet') == index) {
                        content[j].classList.add('activeContent');
                  } else {
                        content[j].classList.remove('activeContent');
                  }
            }
      });
});