export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('API request Successful');
    }, 3000);
  });
}
