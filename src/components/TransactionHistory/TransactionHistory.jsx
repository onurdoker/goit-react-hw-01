import css from "./TransactionHistory.module.css";

const TransactionHistory = (transactions) => {
  return (
      <table className={css.table}>
        <thead>
        <tr className={css.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        </thead>

        <tbody className={css.body}>
        {transactions.transactions.map (transaction => (
            <tr key={transaction.id}>
              <td className={css.name}>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default TransactionHistory;