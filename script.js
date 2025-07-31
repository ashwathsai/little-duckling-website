window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});
function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your enquiry! We will contact you soon.");
}
