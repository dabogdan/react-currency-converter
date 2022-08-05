import s from "./CurrencyField.module.css";
import "../../flag-styles.css";

const CurrencyField = (props) => {
    const {currencies, selectedCurrency, onChangeOfCurrency, exchangeResult, onChangeOfMoney} = props;
    return (
        <div className={s.currency__field}>
            <input className={s.currency__amount} type="number" value={exchangeResult} onChange={onChangeOfMoney}/>
            <select className={s.currency__name} value={selectedCurrency} onChange={onChangeOfCurrency}>
                {currencies.map(currency => <option
                    value={currency}
                    key={currency}
                >
                    {currency}

                </option>)}
            </select>
            {selectedCurrency && <div className={`currency_flag currency_flag_${selectedCurrency.toLowerCase()}`}></div>}
        </div>
    )
}

export default CurrencyField;