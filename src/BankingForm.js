import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  cardname: yup.string().min(10).required("this field is required"),
  cardnumber: yup
    .string()
    .matches(/^\d+$/, "this field should be numbers only")
    .max(16)
    .required("this field is required"),
  expmonth: yup
    .number()
    .typeError("you must specify a number")
    .max(12, "expiry month cannot exceed 12")
    .required("this field is required"),
  expyear: yup
    .number()
    .typeError("you must specify a number")
    .min(2021, "expiry year must exceed 2021")
    .required("this field is required"),
  cvv: yup
    .number()
    .typeError("you must specify a number")
    .max(999)
    .required("this field is required"),
});

function BankingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name on Card</label>
        <input
          {...register("cardname")}
          type="text"
          placeholder="John More Doe"
        />
        <p className="error">{errors.cardname?.message}</p>

        <label>Credit card number</label>
        <input
          {...register("cardnumber")}
          type="text"
          placeholder="1111-2222-3333-4444"
        />
        <p className="error">{errors.cardnumber?.message}</p>

        <label for="expmonth">Exp Month</label>
        <input type="text" placeholder="09" {...register("expmonth")} />
        <p className="error">{errors.expmonth?.message}</p>

        <label for="expyear">Exp Year</label>
        <input type="text" {...register("expyear")} placeholder="2021" />
        <p className="error">{errors.expyear?.message}</p>

        <label for="cvv">CVV</label>
        <input type="text" {...register("cvv")} placeholder="352" />
        <p className="error">{errors.cvv?.message}</p>

        <button type="submit" className="btn">
          Continue to checkout
        </button>
      </form>
    </div>
  );
}

export default BankingForm;
