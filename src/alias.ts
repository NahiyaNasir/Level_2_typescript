//    1
type ProductId = string | number;

type Product = {
  id: ProductId;
  price: number;
  tags?: string[];
  names: string;
};

// Example usage:
const shirt: Product = {
  id: 123,
  names: "Blue T-Shirt",
  price: 29.99,
  tags: ["clothing", "summer"],
};

const book: Product = {
  id: "abc-123",
  names: "TypeScript Basics",
  price: 19.99,
};
// 2
type UserRole = "admin" | "editor" | "user";

type User = {
  id: number;
  userName: string;
  role: UserRole;
};
// Example usage:
const adminUser: User = {
  id: 1,
  userName: "jane_doe",
  role: "admin",
};
const normalUser: User = {
  id: 2,
  userName: "john_smith",
  role: "user",
};

//   3
type Order = {
  orderId: string;
  user: User;
  products: Product[];
  status: "processing" | "shipped" | "delivered";
};

//  Example usage:
const myOrder: Order = {
  orderId: "xyz-789",
  user: adminUser, // Reusing the 'adminUser' variable from above
  products: [shirt, book], // Reusing the product variables
  status: "processing",
};
