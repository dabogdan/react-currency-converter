import s from "./CurrenctConverter.module.css";
import CurrencyField from "./CurrencyField/CurrencyField";

const CurrencyConverter = (props) => {
    return (
        <div className={s.header__currencyConverter}>
            <CurrencyField
                currencies={props.currencies}
                selectedCurrency={props.fromCurrency}
                onChangeOfCurrency={e => props.setFromCurrency(e.target.value)}
                exchangeResult={props.exchangeFromCurrency}
                onChangeOfMoney={props.onChangeOfMoney[0]}
            />
            <span className={s.equal}> = </span>
            <CurrencyField
                currencies={props.currencies}
                selectedCurrency={props.toCurrency}
                onChangeOfCurrency={e => props.setToCurrency(e.target.value)}
                exchangeResult={props.exchangeToCurrency}
                onChangeOfMoney={props.onChangeOfMoney[1]}
            />
        </div>
    )
}

export default CurrencyConverter;