const currencyFormatter = Intl.NumberFormat('it-IT', {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
});

export default currencyFormatter;