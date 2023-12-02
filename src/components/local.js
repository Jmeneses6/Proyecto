document.addEventListener('DOMContentLoaded', () => {
  const vehicleType = window.location.pathname.split('-')[1];

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

          // Redirige según el tipo de vehículo seleccionado
          switch (carType) {
            case 'carro':
              window.location.href = `cars-carro.html`;
              break;
            case 'moto':
              window.location.href = `cars-moto.html`;
              break;
            case 'camion':
              window.location.href = `cars-camion.html`;
              break;
            case 'otros':
              window.location.href = `cars-otros.html`;
              break;
            default:
              break;
          }
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

  function displayCars() {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const carList = document.getElementById('carList');
  
    if (!carList) {
      console.error('Elemento carList no encontrado en la página.');
      return;
    }
  
    carList.innerHTML = '';
  
    cars.forEach((carData, index) => {
      const card = document.createElement('div');
      card.classList.add('card', 'custom-card');
  
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
  
      const typeParagraph = document.createElement('p');
      typeParagraph.classList.add('card-text');
      typeParagraph.innerText = `Tipo: ${carData.type}`;
      cardBody.appendChild(typeParagraph);
  
      const image = document.createElement('img'); // Elemento img para la imagen
      image.src = carData.image.dataURL; // Establecer la fuente de datos de la imagen
      image.classList.add('card-img-top', 'custom-img'); // Clases de estilo si es necesario
      card.appendChild(image); // Agregar la imagen a la tarjeta
  
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
}
)  