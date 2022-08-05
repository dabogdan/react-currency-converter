import Header from './components/Header';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";

const myHeaders = new Headers();
myHeaders.append("apikey", "a57GJz5zt1Z3vselQa50Ut8WxmpJIouE");
const CURRENCIES_URL = 'https://api.apilayer.com/exchangerates_data/latest';


function App() {
    const [currenciesNames, setCurrenciesNames] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState("");
    const [exchangeRate, setExchangeRate] = useState();
    const [exchangeInput, setExchangeInput] = useState(1);
    const [fromWhichCurrency, setFromWhichCurrency] = useState(true);
    const [allCurrencies, setAllCurrencies] = useState({})


    let exchangeToCurrency, exchangeFromCurrency;

    if (fromWhichCurrency) {
        exchangeFromCurrency = exchangeInput;
        exchangeToCurrency = exchangeInput * exchangeRate;
    } else {
        exchangeToCurrency = exchangeInput;
        exchangeFromCurrency = exchangeInput / exchangeRate;
    }


    useEffect(() => {
        fetch(CURRENCIES_URL, {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const currencies = result;

                const firstCurrency = Object.keys(currencies.rates)[0];
                setCurrenciesNames([...Object.keys(currencies.rates)])
                setFromCurrency(currencies.base);
                setToCurrency(firstCurrency);
                setExchangeRate(currencies.rates[firstCurrency]);
                setAllCurrencies({...currencies.rates})

            })
            .catch(error => console.log('error', error));
    }, []);

    useEffect(() => {
        if (allCurrencies && toCurrency && fromCurrency) {
            setExchangeRate(allCurrencies[toCurrency] / allCurrencies[fromCurrency])
        }
    }, [fromCurrency, toCurrency]);


    function moneyChangeFromHandler(e) {
        setExchangeInput(e.target.value);
        setFromWhichCurrency(true);
    }

    function moneyChangeToHandler(e) {
        setExchangeInput(e.target.value);
        setFromWhichCurrency(false);
    }

    return (
        <div className="App">
            <Header
                currencies={currenciesNames}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                setFromCurrency={setFromCurrency}
                exchangeToCurrency={exchangeToCurrency}
                exchangeFromCurrency={exchangeFromCurrency}
                onChangeOfMoney={[moneyChangeFromHandler, moneyChangeToHandler]}
            />
        </div>
    );
}

export default App;
