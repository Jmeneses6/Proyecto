document.addEventListener('DOMContentLoaded', () => {
    const vehicleType = window.location.pathname.split('-')[1];
  
    // Si estamos en la página de formulario
    if (document.getElementById('carForm')) {
      const carForm = document.getElementById('carForm');
  
      carForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const carType = document.getElementById('carType').value;
        const carName = document.getElementById('carName').value;
        const carDescription = document.getElementById('carDescription').value;
        const carImage = document.getElementById('carImage').files[0];
  
        if (carType && carName && carDescription && carImage) {
          const reader = new FileReader();
  
          reader.onload = function (e) {
            const imageData = {
              filename: carImage.name,
              dataURL: e.target.result,
            };
  
            const carData = {
              type: carType,
              name: carName,
              description: carDescription,
              image: imageData,
            };
  
            saveCar(carData);
            // Después de guardar, redirige a la página específica de imágenes
            window.location.href = `cars-${carType}.html`;
          };
  
          reader.readAsDataURL(carImage);
        } else {
          alert('Por favor, completa todos los campos');
        }
      });
    }
  
    function saveCar(carData) {
      let cars = JSON.parse(localStorage.getItem('cars')) || [];
      cars.push(carData);
      localStorage.setItem('cars', JSON.stringify(cars));
    }
  
    function displayMotos() {
      const cars = JSON.parse(localStorage.getItem('cars')) || [];
      const carList = document.getElementById('carList');
  
      if (!carList) {
        console.error('Elemento carList no encontrado en la página.');
        return;
      }
  
      carList.innerHTML = '';
  
      const filteredMotos = cars.filter(carData => carData.type === 'carro');
  
      filteredMotos.forEach((carData, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'custom-card');
  
        const imgElement = document.createElement('img');
        imgElement.src = carData.image.dataURL;
        imgElement.classList.add('card-img-top', 'custom-img');
        card.appendChild(imgElement);
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.innerText = carData.name;
        cardBody.appendChild(title);
  
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.innerText = carData.description;
        cardBody.appendChild(description);
  
        // Agrega el tipo de vehículo a la descripción
        const typeParagraph = document.createElement('p');
        typeParagraph.classList.add('card-text');
        typeParagraph.innerText = `Tipo: ${carData.type}`;
        cardBody.appendChild(typeParagraph);
  
        // Agrega el botón de eliminar con el atributo data-index
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.innerText = 'Eliminar';
        deleteButton.setAttribute('data-index', index);
        deleteButton.addEventListener('click', deleteCar);
        cardBody.appendChild(deleteButton);
  
        card.appendChild(cardBody);
  
        carList.appendChild(card);
      });
    }
  
    function deleteCar(event) {
      const index = event.target.getAttribute('data-index'); // Cambiado de 'carro' a 'data-index'
      let cars = JSON.parse(localStorage.getItem('cars')) || [];
    
      // Elimina el auto del array
      const deletedCar = cars.splice(index, 1)[0];
    
      // Actualiza el almacenamiento local
      localStorage.setItem('cars', JSON.stringify(cars));
    
      // Vuelve a mostrar la lista de autos actualizada
      displayMotos();
    
      // Puedes mostrar un mensaje o realizar otras acciones después de eliminar el auto
      alert(`Auto "${deletedCar.name}" eliminado exitosamente.`);
    }
  
    // Si estamos en la página específica de imágenes de motos, muestra la lista de motos
    if (window.location.pathname.includes(`cars-carro.html`)) {
      displayMotos();
    }
  
    const buttonBack = document.getElementById('buttonBack');
    if (buttonBack) {
      buttonBack.addEventListener('click', function () {
        window.location.href = `../pages/form.html`;
      });
    }
  });
  