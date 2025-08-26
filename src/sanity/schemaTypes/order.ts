
// export default {
//     name : 'order',
//     type : 'document',
//     title : 'Order',
//     fields : [
//         {
//             name : 'firstName',
//             title : 'First Name',
//             type :'string'
//         },
//         {
//             name : 'lastName',
//             title : 'Last Name',
//             type :'string'
//         },
//         {
//             name : 'address',
//             title : 'Address',
//             type :'string'
//         },
//         {
//             name : 'city',
//             title : 'City',
//             type :'string'
//         },
//         {
//             name : 'zipCode',
//             title : 'Zip Code',
//             type :'string'
//         },
//         {
//             name : 'phone',
//             title : 'Phone',
//             type :'string'
//         },
//         {
//             name : 'email',
//             title : 'Email',
//             type :'string'
//         },
//         {
//             name : 'discount',
//             type : 'number', 
//             title : 'Discount',
//            },
//         {
//             name : 'cartItems',
//             title : 'Cart Items',
//             type : 'array',
//             of : [{ type : 'reference', to : { type : 'product' } }]
//         },
//         {
//             name : 'total',
//             title : 'Total',
//             type : 'number'
//         },
//         {
//             name : 'status',
//             title : 'Order Status',
//             type :'string',
//             options : {
//                 list : [
//                     { title : 'Pending', value : 'pending' },
//                     { title : 'Success', value :'success' },
//                     { title : 'Dispatch', value : 'dispatch' },
//                 ],
//                 layout : 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
//             },
//             initialValue : 'pending' // Default value
//         }
//     ]
// }







// export default {
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: [
//       { name: "userId", title: "User ID", type: "string" },
//       { name: "items", title: "Cart Items", type: "array", of: [{ type: "object", fields: [
//           { name: "title", title: "Product Name", type: "string" },
//           { name: "price", title: "Price", type: "number" },
//           { name: "quantity", title: "Quantity", type: "number" },
//           { name: "image", title: "Image", type: "string" }
//         ]}
//       ]},
//       { name: "totalAmount", title: "Total Amount", type: "number" },
//       { name: "status", title: "Order Status", type: "string", options: { list: ["Pending", "Completed", "Cancelled"] } },
//       { name: "createdAt", title: "Order Date", type: "datetime" }
//     ]
//   }
  




export default {
    name: "order",
    title: "Orders",
    type: "document",
    fields: [
      {
        name: "userId",
        title: "User ID",
        type: "string",
      },
      {
        name: "items",
        title: "Ordered Items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", title: "Title", type: "string" },
              { name: "price", title: "Price", type: "number" },
              { name: "quantity", title: "Quantity", type: "number" },
              { name: "image", title: "Image", type: "url" },
            ],
          },
        ],
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Completed", value: "completed" },
            { title: "Cancelled", value: "cancelled" },
          ],
        },
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
      },
    ],
  }
  