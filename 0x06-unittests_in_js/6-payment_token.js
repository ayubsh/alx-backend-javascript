const getPaymentTokenFromApi = (success) => new Promise((resolve, _) => {
  if (success) return resolve({ data: 'Successful response from the API' });
});

module.exports = getPaymentTokenFromApi;
