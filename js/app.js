const Carts = document.querySelector("#Carts")
const endpoint = "https://dummyjson.com/products"


fetch(endpoint).then((item) =>{
    return item.json()
    
    
}).then((data) =>{
    data.products.forEach(({images,title,description,price}) => {
        
        
        Carts.innerHTML += `<div class="col-md-4">
      <div class="card h-100">
        <img src="${images}" class="card-img" alt="">
        <div class="card-body text-center">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <p class="text-success fw-bold">${price} AZN</p>
          <a href="#" class="btn btn-success">Səbətə əlavə et</a>
        </div>
      </div>
    </div>`
        
    });
    
})
