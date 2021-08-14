export const getProducts = async (props) => {
  const URL = `http://localhost:5000/web-scrape?url=${props.url}&main-class=${props.main_class}&sub-class=${props.sub_class}&product-name-class=${props.product_name_class}`;
  let response = await fetch(URL, {
    method: "GET",
  });
  return response.json();
};
