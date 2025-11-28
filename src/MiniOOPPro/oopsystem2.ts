//? Problem:
//? Account class

// ?Private: ownerName, balance

// ?Getter: balance

//? Methods: deposit(amount), withdraw(amount)

// ?Ensure encapsulation: user cannot directly modify balance

class Account {
  private ownerName: string;
  private balance: number;

  constructor(ownerName: string, balance: number) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

   getBalance() {
    return this.balance;
  }
  deposit(amount: number) {
      if(amount<= 0){
           throw new Error ('"Withdraw amount must be positive"')
      }
      this.balance = this.balance+amount

    return `${this.ownerName} ${amount} deposited successfully. New balance: ${this.balance}`;
  }
  withdraw(amount: number) {
   if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance = this.balance- amount;
    return `${this.ownerName}   ${amount} withdrawn successfully. New balance: ${this.balance}`;
  }
  }

const acc = new Account("Nahia", 500);

// 


// acc.balance = 9999;    // ERROR (private)



// ----------------------

//? LibraryBook class

//? Private: borrowedBy

// ?Getter: isAvailable() → true/false

// ?Methods: borrow(userName), returnBook()

// ?User cannot directly set borrowedBy


 class LibraryBook{
      private borrowedBy :string|null=null
       isAvailable() {
    return this.borrowedBy === null;
  }

   borrow(userName: string) {
    if (!this.isAvailable()) {
      throw new Error(`Book is already borrowed by ${this.borrowedBy}`);
    }
    this.borrowedBy = userName;
    return `${userName} borrowed the book`;
  }

  // Return the book
  returnBook() {
    if (this.isAvailable()) {
      throw new Error("Book is not borrowed by anyone");
    }
    const previousUser = this.borrowedBy;
    this.borrowedBy = null;
    return `${previousUser} returned the book`;
  }
 }
 const book = new LibraryBook();

console.log(book.isAvailable());  

console.log(book.borrow("Nahia"));  


console.log(book.isAvailable()); 

console.log(book.returnBook());


console.log(book.isAvailable());  

