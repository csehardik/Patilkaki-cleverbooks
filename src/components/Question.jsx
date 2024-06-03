import React from "react";
import Card from "./Card";

const Question = () => {
  return (
    <div className="lg:mx-48 mx-12 my-20 flex-col items-center justify-center space-y-20 ">
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold">
          Four Key questions answered by CleverBooks
        </span>
      </div>
      <div className="sm:flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          image={
            "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
          }
          text={"What are your store hours?"}
          para={
            "Our store is open daily from 9 AM to 9 PM, ensuring you have plenty of time to find your next great read."
          }
        />
        <Card
          image={
            "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
          }
          text={"Do you offer free shipping?"}
          para={
            "Yes, we offer free shipping on all orders over $50, making it easier and more affordable to get the books you love."
          }
        />
        <Card
          image={
            "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
          }
          text={"Can I track my order?"}
          para={
            "Absolutely! Once your order is shipped, you’ll receive a tracking number to monitor its delivery status in real-time."
          }
        />
        <Card
          image={
            "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
          }
          text={"How to return a book?"}
          para={
            "Returning a book is simple. Just contact our support team within 30 days for a return label and further instructions."
          }
        />
      </div>
    </div>
  );
};

export default Question;
