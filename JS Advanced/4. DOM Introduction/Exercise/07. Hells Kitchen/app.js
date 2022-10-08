function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let info = document.querySelector('.restaurant-race-class textarea').value;

      if(info !== ''){
         document.querySelector('#bestRestaurant p').textContent = '';
         document.querySelector('#workers p').textContent = '';
      }

      info = JSON.parse(info);
      let restaurantsBestSalary = {};
      let restaurantsAvrgSalary = {};
      let restaurantsWorkers = {};

      for (let row of info) {

         let [restaurantName, workers] = row.split(' - ');
         let workersArr = workers.split(', ');
         workers = [];

         for (let worker of workersArr) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            workers.push([name, salary]);
         }

         if (!restaurantsBestSalary.hasOwnProperty(restaurantName)) {
            restaurantsBestSalary[restaurantName] = 0;
         }
         if (!restaurantsAvrgSalary.hasOwnProperty(restaurantName)) {
            restaurantsAvrgSalary[restaurantName] = 0;
         }

         if (!restaurantsWorkers.hasOwnProperty(restaurantName)) {
            restaurantsWorkers[restaurantName] = workers;
         } else {
            let arr = restaurantsWorkers[restaurantName];
            for (let current of workers) {
               arr.push(current);
            }
            restaurantsWorkers[restaurantName] = arr;
         }
      }

      for (let name of Object.keys(restaurantsWorkers)) {
         let workers = restaurantsWorkers[name];
         let averageSalary = 0;
         workers.sort(([n1, s1], [n2, s2]) => { return s2 - s1 });
         let bestSalary = undefined;
         for (let [name, salary] of workers) {

            if (bestSalary === undefined) {
               bestSalary = salary;
            }
            averageSalary += salary;
         }
         averageSalary = averageSalary / (workers.length);
         restaurantsBestSalary[name] = bestSalary
         restaurantsAvrgSalary[name] = averageSalary
      }
      let sorted = Array.from(Object.entries(restaurantsAvrgSalary))
         .sort(([r1, s1], [r2, s2]) => { return s2 - s1 });


      let bestR = sorted[0][0];
      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestR} Average Salary: ${restaurantsAvrgSalary[bestR].toFixed(2)} Best Salary: ${restaurantsBestSalary[bestR].toFixed(2)}`;
      let resultWorkers = document.querySelector('#workers p').textContent;
      for (let [name, salary] of restaurantsWorkers[bestR]) {
         resultWorkers += `Name: ${name} With Salary: ${salary} `;
      }
      document.querySelector('#workers p').textContent = resultWorkers.trimEnd();


   }

}
