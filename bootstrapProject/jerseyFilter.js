document.getElementById("jerseysBtn").addEventListener("click", function() {
//clear contents first
prodContainer.innerHTML = "";
    
let id = document.getElementById('shopID');
id.textContent = "Shop Jerseys";
    
(function()
{

    //link to my json file
            let requestURL = 'https://akmenz.github.io/wddprojectjson/maindata.json';
            
            let request = new XMLHttpRequest();

            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
    
            request.onload = function() 
            {
                var products = request.response;
                showProducts(products);
            }
})();
    
    function showProducts(obj) 
        {
            var items = obj['products'];
            
            for (let i = 0; i < items.length; i++) 
            {   
                if(items[i].type == "jerseys"){
                    
                const col = document.createElement('div');
                col.setAttribute("class", "col pb-2");
                prodContainer.appendChild(col);
                
                const card = document.createElement('div');
                card.setAttribute("class", "card");
                card.style.width = "18rem";
                col.appendChild(card);
                
                const img = document.createElement('img');
                img.setAttribute("class", "card-img-top");
                img.src = items[i].image;
                card.appendChild(img);
                
                const cardBody = document.createElement('div');
                cardBody.setAttribute("class", "card-body");
                card.appendChild(cardBody);
                
                const h5 = document.createElement('h5');
                h5.setAttribute("class", "card-title");
                h5.textContent = items[i].name;
                cardBody.appendChild(h5);
                
                const p = document.createElement('p');
                p.setAttribute("class", "card-text");
                p.textContent = items[i].description;
                cardBody.appendChild(p);
                
                const price = document.createElement('p');
                price.textContent = '\u20AC' + items[i].price;
                price.style.fontWeight = "600";
                cardBody.appendChild(price);
        
                const a = document.createElement('a');
                a.setAttribute("class", "btn btn-dark");
                a.setAttribute("onclick", "addToCart()");
                a.href = "#";
                a.id = "addtocart";
                a.textContent = "Add To Cart";
                cardBody.appendChild(a);
                    
                }
                
            }
        }
    
});