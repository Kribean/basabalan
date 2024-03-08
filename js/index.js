let tableEvent = document.getElementById("idTable");
function fetchDataFromApi() {
  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1AbQp861sBhgmRLrN7EmkTvDM0WP7Ub_tJQSSTjT6q2E/values/Activite!A:E?key=AIzaSyCiv16RAu7ZHd8gMmdjtLqbqA9NvjY1YzI"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Traitement des données
      const eventTab = data.values;
      eventTab.forEach((element) => {
        let eventElement = `            <div class=" w-full h-fit bg-base-100 shadow-xl p-4 rounded-box my-[10px] text-[#11363f]">
        <div class="flex flex-col lg:flex-row justify-between">
        <div class="w-full lg:w-1/3">
          <p class="break-words font-bold">${element[0]}</p>
        </div>
        <div class="w-full lg:w-1/3">
        <p class="break-words">${element[1]}</p>
      </div>
        <div class="w-full lg:w-1/3">
          <p class="break-words">${element[2]}</p>
        </div>
        <div class="w-full lg:w-1/3">
        <p class="break-words">${element[3]}</p>
      </div>
      <div class="w-full lg:w-1/3">
      <p class="break-words">${element[4]}</p>
    </div>
        </div>
          </div>`;
        tableEvent.innerHTML += eventElement;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchDataFromApi();
