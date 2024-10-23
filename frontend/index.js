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
      alert('Groovy! Your reservation is confirmed. Time to boogie!');
      form.reset();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Bummer! Failed to submit reservation. Please try again.');
    }
  });

  // Add some disco flair
  const discoColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00'];
  setInterval(() => {
    document.body.style.backgroundColor = discoColors[Math.floor(Math.random() * discoColors.length)];
  }, 1000);
});
