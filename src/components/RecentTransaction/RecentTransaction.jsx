import "./RecentTransaction.scss";

const RecentTransaction = ({ transactionId, senderAmount, payeeAmount, rate, date, firstName, lastName }) => {

    return (
        <div className="transactions">
            <h1>Past Transactions to {firstName}{lastName}</h1>
            <div className="transactions__grid">
                <div className="transactions__header">Transaction ID</div>
                <div className="transactions__header">Sender Amount</div>
                <div className="transactions__header">Payee Amount</div>
                <div className="transactions__header">Rate</div>
                <div className="transactions__header">Date</div>
                <div className="transactions__item">{transactionId}</div>
                <div className="transactions__item">{senderAmount}</div>
                <div className="transactions__item">{payeeAmount}</div>
                <div className="transactions__item">{rate}</div>
                <div className="transactions__item">{date}</div>
            </div>
        </div>
    )
}

export default RecentTransaction;