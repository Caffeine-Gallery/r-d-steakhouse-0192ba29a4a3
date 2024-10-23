import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = new Date(document.getElementById('date').value).getTime() * 1000000; // Convert to nanoseconds
    const guests = parseInt(document.getElementById('guests').value, 10);

    try {
      await backend.addReservation(name, BigInt(date), guests);
      alert('Cowabunga! Your birthday bash is confirmed. Time to party like it\'s 1999!');
      form.reset();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Bummer! Failed to book your party. Please try again.');
    }
  });

  // Add some 90's-style interactivity
  const buttons = document.querySelectorAll('.party-button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1) rotate(5deg)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Create confetti effect
  const confettiContainer = document.querySelector('.confetti');
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.innerText = '🎉';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confettiContainer.appendChild(confetti);
  }
});
