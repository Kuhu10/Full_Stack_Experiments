document.addEventListener("DOMContentLoaded", () => {
  const filterDropdown = document.getElementById("categoryFilter");
  const productList = document.getElementById("productList");
  const products = productList.getElementsByTagName("li");

  filterDropdown.addEventListener("change", () => {
    const selectedCategory = filterDropdown.value;

    for (let product of products) {
      if (selectedCategory === "all" || product.getAttribute("data-category") === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
});