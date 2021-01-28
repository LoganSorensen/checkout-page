const addItemBtn = document.querySelectorAll(".add-item");
const removeItemBtn = document.querySelectorAll(".subtract-item");

const shippingPrice = document.querySelector(".shipping-number");
const totalPrice = document.querySelector(".total-number");

const itemData = [
  {
    name: "Vintage Backpack",
    cost: 54.99,
    shipping: 10.0,
  },
  {
    name: "Levi Shoes",
    cost: 74.99,
    shipping: 9.0,
  },
];

addItemBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // determines the span that corresponds to the button that was clicked
    const cartItem = btn.parentElement.parentElement.querySelector(".item-name")
      .innerHTML;
    const amount = btn.parentElement.getElementsByTagName("SPAN")[0];

    itemData.forEach((item) => {
      if (item.name === cartItem) {
        // adds the shipping price to the order's total shipping
        shippingPrice.innerHTML = `${
          Number(shippingPrice.innerHTML) + item.shipping
        }.00`;

        // adds the item's cost and the shipping to the order's total price
        totalPrice.innerHTML = `${(
          Number(totalPrice.innerHTML) +
          item.shipping +
          item.cost
        ).toFixed(2)}`;

        amount.innerHTML = Number(amount.innerHTML) + 1;
      }
    });
  });
});

removeItemBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cartItem = btn.parentElement.parentElement.querySelector(".item-name")
      .innerHTML;
    const amount = btn.parentElement.getElementsByTagName("SPAN")[0];

    if (amount.innerHTML > 0) {
      itemData.forEach((item) => {
        if (item.name === cartItem) {
          // subtracts the shipping price from the order's total shipping
          shippingPrice.innerHTML = `${
            Number(shippingPrice.innerHTML) - item.shipping
          }.00`;

          // subtracts the item's price and shipping from the order's total price
          totalPrice.innerHTML = `${(
            Number(totalPrice.innerHTML) -
            item.shipping -
            item.cost
          ).toFixed(2)}`;
        }
      });

      amount.innerHTML = Number(amount.innerHTML) - 1;
    }
  });
});

// handle form submission
const form = document.querySelector(".checkout");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.classList.remove("hidden");
});
