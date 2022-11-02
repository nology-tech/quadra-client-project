import "./RecentTransaction.scss";

const RecentTransaction = ({ transactionId, senderAmount, payeeAmount, rate, date }) => {

    return (
        <div className="transactions">
            <h1>Past Transactions to Erik</h1>
            <div className="transactions-grid">
                <div className="transactions-grid__header">Transaction ID</div>
                <div className="transactions-grid__header">Sender Amount</div>
                <div className="transactions-grid__header">Payee Amount</div>
                <div className="transactions-grid__header">Rate</div>
                <div className="transactions-grid__header">Date</div>
                <div className="transactions-grid__item">{transactionId}</div>
                <div className="transactions-grid__item">{senderAmount}</div>
                <div className="transactions-grid__item">{payeeAmount}</div>
                <div className="transactions-grid__item">{rate}</div>
                <div className="transactions-grid__item">{date}</div>
            </div>
        </div>
    )
}

export default RecentTransaction;