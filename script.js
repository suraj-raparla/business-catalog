function showProducts(category) {
  document.getElementById('categories').style.display = 'none';
  document.getElementById('products').style.display = 'flex';
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.style.display = 'none';
    if (product.classList.contains(category)) {
      product.style.display = 'block';
    }
  });
  document.getElementById('category-title').textContent = `${category.replace(/^\w/, c => c.toUpperCase())} Products`;
}

function showCategories() {
  document.getElementById('categories').style.display = 'flex';
  document.getElementById('products').style.display = 'none';
}
