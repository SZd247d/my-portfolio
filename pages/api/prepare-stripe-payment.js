// // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// // const URL = process.env.BASE_URL;

// // const handler = async (req, res) => {
// //   const { amount } = req.body;
// //   console.log(amount);

// //   const items = [
// //     {
// //       price_data: {
// //         currency: "usd",
// //         product_data: {
// //           name: `Sponsor Paul`,
// //         },
// //         unit_amount: amount * 100,
// //       },
// //       quantity: 1,
// //     },
// //   ];

// //   const session = await stripe.checkout.sessions.create({
// //     line_items: items,
// //     mode: "payment",
// //     success_url: `${URL}/payment-successful`,
// //     cancel_url: URL,
// //   });

// //   res.status(200).json({ id: session.id });
// // };

// // export default handler;

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             unit_amount: amount,
//             currency: "usd",
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
