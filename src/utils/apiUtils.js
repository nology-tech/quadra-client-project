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

export const storeUserDetails = async (userID, name) => {
  const url= "https://money-app-api-oi3xuie5la-nw.a.run.app/quadra-money/v1/user";
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json', },
    body: JSON.stringify({ 
      userID: userID,
      firstName: name,
      lastName: '',
      middleNames: '',
  })
  });
  const json = await res.json();
  return json;
}