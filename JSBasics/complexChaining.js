const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 1200, status: "completed" },
  { id: 3, amount: 800, status: "pending" }
];

console.log(orders.filter(order=>(order.status==="completed")).map(order=>order.amount-(order.amount*0.1)));

console.log(orders.filter(order=>(order.status==="completed")).map(order=>({
    ...order,
    amount:order.amount-(order.amount*0.1)
})));