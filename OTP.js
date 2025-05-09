function passwordLogin() {
   const  loginPage = document.querySelector('.js-loginPage');
   let password = document.querySelector('.js-password');
   let theCode = password.value;
   const wrong = document.querySelector('.js-wrong');


   if (theCode === 'right') {
    loginPage.innerHTML = '<a href="OTP-Order-track-page.html" class="js-tracknow"><button>Track Now</button></a>';
    wrong.innerHTML = '<p class="right">Confirmed successfully. Please proceed with Track Now</p>';
    
   } else {
    wrong.innerHTML = '<p>Wrong Password, please contact Admin.</p>'
   } 

   password.value = '';
}

/*
function toggleAdminUpdateArea() {
   const dispalyAdmin = document.querySelector('.js-loginAdmin')

   if (dispalyAdmin.classList.contains('adminUpdateDashboard')) {
      dispalyAdmin.classList.add('displayAdmin');
   }
}

function username() {
   const theUsername = document.querySelector('.js-user-customer-Name');
   const name = theUsername.value;

   const Confirm = document.querySelector('.js-confirmPassword');


   const userNameInput = localStorage.getItem('nameInput');
   console.log(userNameInput)
   //{
      //name: `${name}`
   //}
   localStorage.setItem('nameInput', JSON.stringify(userNameInput));
   console.log();
}

// Login Admin for Update

function loginAdmin() {
   const adminPassWord = document.querySelector('.js-LoginAdimUpdate');
   const CorrectPassword = adminPassWord.value;
   console.log(CorrectPassword);

   const UpdateArea = document.querySelector('.js-updatePage');

   if (CorrectPassword === 'AdminPassword' && UpdateArea.classList.contains('updateArea')) {
      UpdateArea.classList.add('displayAdminPage');
      UpdateArea.classList.remove('updateArea');
      console.log('veryTrue');
   }   
}

function UpdatingStatus() {
   // Goods Status
   const goodsStatus = document.querySelector('.js-GoodsStatus');
   const gStatus = goodsStatus.value;

   const divBought = document.querySelector('.js-bought');

   
   
   // Shipping Status
   const ShipStatus = document.querySelector('.js-shipStatus');
   const sStatus = ShipStatus.value;

   const divShipped = document.querySelector('.js-shipped');
   
   // Where Status
   const WhereStatus = document.querySelector('.js-WhereStatus');
   const wStatus = WhereStatus.value;

   const divWhere = document.querySelector('.js-where');
   
   // Arrival Status
   const ArrivalStatus = document.querySelector('.js-ArrivalStatus');
   const aStatus = ArrivalStatus.value;

   const divArrival = document.querySelector('.js-arrival');
   

   // Cost Status
   const CostStatus = document.querySelector('.js-CostStatus');
   const cStatus = CostStatus.value;

   const divCost = document.querySelector('.js-cost');
   const divcost = divCost.innerText 


   console.log(divCost, divBought, divArrival, divShipped, divWhere);

   // The Generals 

   let updateInput = {
      Good:    `${gStatus} - ${divBought.innerText}`,
      Shipped: `${sStatus}`,
      Where: `${wStatus}`,
      Arrival: `${aStatus}`,
      Cost: `-1`
   }
   console.log(updateInput);

   console.log(updateInput);
   // divStautus
   divBought.innerText = updateInput.Good;
   divShipped.innerText = updateInput.Shipped;
   divWhere.innerText = updateInput.Where;
   divArrival.innerText = updateInput.Arrival;
   divCost.innerText = updateInput.Cost;
   console.log(updateInput.Cost);

   
   console.log(localStorage.getItem('UpdateInput'));
   
   

   localStorage.setItem('UpdateInput', JSON.stringify(updateInput));
}
*/