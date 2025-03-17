import { useState } from 'react';
import './App.css';

function App() {
  const [currentBalance] = useState(4836.00);
  const [income] = useState(3814.25);
  const [expenses] = useState(1700.50);
  
  const [pots] = useState({
    totalSaved: 850,
    categories: [
      { name: 'Savings', amount: 159 },
      { name: 'Gift', amount: 40 },
      { name: 'Concert Ticket', amount: 110 },
      { name: 'New Laptop', amount: 10 }
    ]
  });

  const [transactions] = useState([
    { id: 1, name: 'Emma Richardson', amount: 75.50, type: 'credit', date: '19 Aug 2024' },
    { id: 2, name: 'Savory Bites Bistro', amount: -55.50, type: 'debit', date: '19 Aug 2024' },
    { id: 3, name: 'Daniel Carter', amount: -42.30, type: 'debit', date: '18 Aug 2024' },
    { id: 4, name: 'Sun Park', amount: 120.00, type: 'credit', date: '17 Aug 2024' },
    { id: 5, name: 'Urban Services Hub', amount: -65.00, type: 'debit', date: '17 Aug 2024' }
  ]);

  return (
    <div className="finance-dashboard">
      <nav className="sidebar">
        <h1 data-testid="1">finance</h1>
        <ul>
          <li className="active">finance</li>
          <li>Transactions</li>
          <li>Budgets</li>
          <li>Pots</li>
          <li>Recurring Bills</li>
        </ul>
      </nav>
      
      <main className="main-content">
        <h2>yvelaperi gamovaaa</h2>
        
        <div className="balance-cards">
          <div className="balance-card current-balance">
            <h3>Current Balance</h3>
            <h2>${currentBalance.toFixed(2)}</h2>
          </div>
          <div className="balance-card">
            <h3>Income</h3>
            <h2>${income.toFixed(2)}</h2>
          </div>
          <div className="balance-card">
            <h3>Expenses</h3>
            <h2>${expenses.toFixed(2)}</h2>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="pots-section">
            <div className="section-header">
              <h3>Pots</h3>
              <button>See Details</button>
            </div>
            <div className="pots-content">
              <div className="total-saved">
                <span className="pot-icon">$</span>
                <h3>${pots.totalSaved}</h3>
                <p>Total Saved</p>
              </div>
              <div className="pots-list">
                {pots.categories.map(pot => (
                  <div className="pot-item" key={pot.name}>
                    <span>{pot.name}</span>
                    <span>${pot.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="transactions-section">
            <div className="section-header">
              <h3>Transactions</h3>
              <button>View All</button>
            </div>
            <div className="transactions-list">
              {transactions.map(transaction => (
                <div className="transaction-item" key={transaction.id}>
                  <div className="transaction-info">
                    <span>{transaction.name}</span>
                    <span>{transaction.date}</span>
                  </div>
                  <span className={`amount ${transaction.type}`}>
                    {transaction.type === 'credit' ? '+' : ''}{transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
