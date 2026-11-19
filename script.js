// Search resource cards
const searchInput = document.getElementById('searchInput');
const resourceCards = document.querySelectorAll('.resource-card');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    resourceCards.forEach(card => {
      const text = (card.dataset.search + ' ' + card.innerText).toLowerCase();
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  });
}

// Live local time uses the visitor's device timezone.
function updateLocalClock() {
  const time = document.getElementById('localTime');
  const date = document.getElementById('localDate');
  if (!time || !date) return;
  const now = new Date();
  time.textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true}).toUpperCase();
  date.textContent = now.toLocaleDateString([], {weekday:'short', day:'2-digit', month:'short', year:'numeric'}).toUpperCase();
}
updateLocalClock();
setInterval(updateLocalClock, 1000);
// Dynamic greeting and live local clock.
// The visitor's device time is used, so the greeting follows their local timezone.
function updateLocalClock() {
  const timeElement = document.getElementById("localTime");
  const dateElement = document.getElementById("localDate");
  const greetingElement = document.getElementById("dynamicGreeting");

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).toUpperCase();
  }

  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString([], {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).toUpperCase();
  }

  if (greetingElement) {
    let greeting;

    // Special wish takes priority over the regular night greeting.
    if (hours === 23 && minutes === 11) {
      greeting = "HEY, IT'S 11:11 — MAKE A WISH ❤️";
    } else if (hours === 0 || hours < 3 || (hours === 3 && minutes <= 30)) {
      greeting = "IT'S SO LATE. GO TO BED.";
    } else if (hours >= 4 && hours < 12) {
      greeting = "HEY, GOOD MORNING";
    } else if (hours >= 12 && hours < 17) {
      greeting = "HEY, GOOD AFTERNOON";
    } else if (hours >= 17 && hours < 21) {
      greeting = "HEY, GOOD EVENING";
    } else {
      greeting = "HEY, GOOD NIGHT";
    }

    greetingElement.textContent = greeting;
  }
}

updateLocalClock();
setInterval(updateLocalClock, 1000);

