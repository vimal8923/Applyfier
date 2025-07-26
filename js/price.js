
const toggle = document.getElementById('billingToggle');
  const prices = document.querySelectorAll('.price');

  toggle.addEventListener('change', function () {
    prices.forEach(price => {
      const newPrice = this.checked ? price.dataset.monthly : price.dataset.yearly;
      price.innerText = `$${newPrice}`;
    });
  });



