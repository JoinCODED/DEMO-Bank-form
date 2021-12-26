import React from "react";

function BankingForm() {
  const onSubmit = (data) => console.log(data);

  return (
    <div class="container">
      <form onSubmit={onSubmit}>
        <label>Name on Card</label>
        <input type="text" placeholder="John More Doe" />

        <label>Credit card number</label>
        <input type="text" placeholder="1111-2222-3333-4444" />

        <label for="expmonth">Exp Month</label>
        <input type="text" placeholder="09" />

        <label for="expyear">Exp Year</label>
        <input type="text" placeholder="2021" />

        <label for="cvv">CVV</label>
        <input type="text" placeholder="352" />

        <button type="submit" className="btn">
          Continue to checkout
        </button>
      </form>
    </div>
  );
}

export default BankingForm;
