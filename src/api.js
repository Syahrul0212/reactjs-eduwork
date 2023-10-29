async function getData() {
  const res = await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-09-23&to=2023-09-23&sortBy=popularity");
  const data = await res.json();
  console.log(data);
}

getData();

export default getData;
