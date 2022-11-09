export const getCurrencyGBP = async () => {
  const url =
    "https://money-app-api-oi3xuie5la-nw.a.run.app/quadra-money/v1/currencies/gbp";
  const res = await fetch(url);
  const data = await res.json();
  return data.rates;
};

export const getUserContacts = async () => {
  const url = "https://money-app-api-oi3xuie5la-nw.a.run.app//quadra-money/v1/contacts";
    const res = await fetch(url);
    const data = await res.json();
    return data;
}