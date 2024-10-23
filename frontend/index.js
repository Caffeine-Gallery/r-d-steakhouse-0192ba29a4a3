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
      alert('Reservation submitted successfully!');
      form.reset();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Failed to submit reservation. Please try again.');
    }
  });
});
