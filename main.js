const shop = document.getElementById('shop');

const boxData = [
  {
    id: 1,
    img: './images/pexels-anastasia-shuraeva-9606746.jpg',
    name: 'Scrambler',
    price: 45,
  },
  {
    id: 2,
    img: './images/pexels-diego-rodríguez-4682505.jpg',
    name: 'Dirt 250 RR',
    price: 55,
  },
  {
    id: 3,
    img: './images/pexels-diego-rodríguez-4682505.jpg',
    name: 'Scrambler 4v',
    price: 55,
  },
  {
    id: 4,
    img: './images/pexels-dimitri-xenos-15963817.jpg',
    name: 'Antique 20T',
    price: 55,
  },
  {
    id: 5,
    img: './images/pexels-khamer-jun-manalo-5235316.jpg',
    name: 'Scooty Thai',
    price: 55,
  },
  {
    id: 6,
    img: './images/pexels-khangnht-_-ɴᴏᴄᴛᴇ-7695063.jpg',
    name: 'Honda S2300',
    price: 55,
  },
  {
    id: 7,
    img: './images/pexels-the-noctis-_-ᴄᴜꜱᴛᴏᴍ-ᴍᴏᴛᴏʀ-10419102.jpg',
    name: 'Ducati 2080',
    price: 55,
  },
  {
    id: 8,
    img: './images/pexels-nishant-aneja-2393818.jpg',
    name: 'Royal Enfield Rider',
    price: 55,
  },
];


boxData.forEach(box => {
  const div = document.createElement('div');
  div.innerHTML =
    `
  <div id='product-id-${box.id}' class="item">
  <img width='200' src="${box.img}" alt="">
  <div class="details">
  <h3>${box.name}</h3>
  <p>Lorem ipsum dolor sit amet consectetur.</p>
  <div class="price-amount">
  <p>$${box.price}</p>
  <div class="amount">
  <i class="bi bi-dash decrement-btn"></i>
  <span>0</span>
  <i class="bi bi-plus increment-btn"></i>
  </div>
  </div>
  </div>
  </div>
  `;
  shop.appendChild(div);

  const incrementBtn = div.querySelector('.increment-btn');
  const decrementBtn = div.querySelector('.decrement-btn');
  const amountSpan = div.querySelector('span');

  let amount = 0;

  incrementBtn.addEventListener('click', () => {
    amount++;
    amountSpan.textContent = amount;
  });

  decrementBtn.addEventListener('click', () => {
    if (amount > 0) {
      amount--;
      amountSpan.textContent = amount;
    }
  });
});
