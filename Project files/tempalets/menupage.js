const grouped = products.reduce((acc, item) => {
  (acc[item.category] = acc[item.category] || []).push(item);
  return acc;
}, {});
