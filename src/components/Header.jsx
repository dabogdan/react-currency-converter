import s from "./Header.module.css";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";

const Header = (props) => {
    return (
        <div className={s.header__wrapper}>
            <CurrencyConverter
                currencies={props.currencies}
                fromCurrency={props.fromCurrency}
                toCurrency={props.toCurrency}
                setToCurrency={props.setToCurrency}
                setFromCurrency={props.setFromCurrency}
                exchangeToCurrency={props.exchangeToCurrency}
                exchangeFromCurrency={props.exchangeFromCurrency}
                onChangeOfMoney={props.onChangeOfMoney}
            />
        </div>
    )
}

export default Header;