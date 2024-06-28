export default function fetchItems() {
  fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((json) => console.log(json));
}

useEffect(() => {
  fetch('https://fakestoreapi.com/products', { mode: 'cors' }).then(
    (response) => {
      if (response.status >= 400) {
        throw new Error(`Server error : ${response.status}`);
      }
      return response.json();
    }
  );
});
