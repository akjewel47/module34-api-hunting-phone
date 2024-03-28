const loadPhone = async () =>{
 const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
 const data =await res.json();
 const phones = data.data;
 // console.log(phones);
 displayPhones(phones);
}


const displayPhones = phones =>{
 // console.log(phones)

//  step number 1
const phoneContainer = document.getElementById('phone-container')

 phones.forEach(phone => {
  console.log(phone)
  // step number 2
const phoneCard = document.getElementById('div');
phoneCard.classList = "card w-96 bg-gray-100 shadow-xl"
// step number 3
phoneCard.innerHTML = ` <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">Shoes!</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
`
// step number 4
phoneContainer.appendChild(phoneCard);
 })
}


loadPhone();
