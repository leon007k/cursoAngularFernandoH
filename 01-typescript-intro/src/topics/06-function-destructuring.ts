interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "iPhone 12",
  price: 1200.0,
};

const tablet: Product = {
  description: "iPad Pro",
  price: 800.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

function getTaxCalculation(options: TaxCalculationOptions): number[] {
  const { products, tax } = options;
  let total: number = 0;

  products.forEach((product) => {
    let { price } = product;
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const result = getTaxCalculation({
  products: shoppingCart,
  tax,
});

const { 0: total, 1: totalTax } = result;
console.log(`Total a pagar: ${total}. Total a pagar de impuestos: ${totalTax}`);
