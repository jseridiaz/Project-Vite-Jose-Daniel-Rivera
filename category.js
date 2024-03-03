let categories = [
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1707001200000/500x500-portatiles.jpg',
    title: 'Grandes descuentos para que estrenes portátil',
    url: 'https://www.pccomponentes.com/portatiles'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1707433200000/500x500-monitores.jpg',
    title: 'Encuentra lo último en monitores',
    url: 'https://www.pccomponentes.com/monitores-pc'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1707433200000/500x500-smartphones-y-tablets.jpg',
    title: 'Renueva tu móvil con estos descuentazos',
    url: 'https://www.pccomponentes.com/smartphone-moviles'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1707433200000/500x500-componentes.jpg',
    title: 'Descubre las ofertas para mejorar tu PC',
    url: 'https://www.pccomponentes.com/componentes'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1708038000000/500x500-gaming-2.jpg',
    title: 'Los imprescindibles para auténticos gamers',
    url: 'https://www.pccomponentes.com/consolas-gaming'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1708642800000/500x500-hogar-23f.jpg',
    title: 'Lo más buscado para un hogar tech',
    url: 'https://www.pccomponentes.com/electro-hogar'
  }
]
let SERVICES = [
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1704927600000/ofertas-especiales-v2.png',
    title: 'Ofertas Especiales',
    url: 'https://www.pccomponentes.com/ofertas-especiales'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1705618800000/novedades-y-lanzamientos.png',
    title: 'Lanzamientos y novedades',
    url: 'https://www.pccomponentes.com/novedades'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1706396400000/ordenadores-pccom-03.png',
    title: 'Ordenadores PcCom',
    url: 'https://www.pccomponentes.com/pccom'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1704409200000/promociones.png',
    title: 'Promociones',
    url: 'https://www.pccomponentes.com/promociones'
  },
  {
    imagen:
      'https://img.pccomponentes.com/pcblog/1704927600000/reacondicionados.png',
    title: 'Reacondicionados',
    url: 'https://www.pccomponentes.com/reacondicionados'
  },
  {
    imagen: 'https://img.pccomponentes.com/pcblog/1704409200000/servicios.png',
    title: 'Servicios',
    url: 'https://www.pccomponentes.com/servicios'
  }
]
let categoriesSection = document.querySelector('#categories')
// *AQUI CREO Y IMPRIMO LAS CATEGORIAS DEL SECTION CATEGORIES DEL HTML .
let printCategories = (arrayToGetInputs, sectionToIncludes) => {
  for (const element of arrayToGetInputs) {
    let divCategory = document.createElement('article')
    let img = document.createElement('img')
    let title = document.createElement('h3')
    let anchor = document.createElement('a')

    img.src = element.imagen
    img.loading = 'lazy'
    anchor.href = element.url
    anchor.target = '_blank'
    anchor.classList.add('flex-container-column')
    anchor.rel = 'noopener'
    title.innerText = element.title
    divCategory.classList.add('flex-container')
    divCategory.appendChild(anchor)
    anchor.appendChild(img)
    anchor.appendChild(title)
    sectionToIncludes.appendChild(divCategory)
  }
}
printCategories(categories, categoriesSection)

// * CREO FUERA DE UNA FUNCION LA SECCION SERVICES Y EL BOTON PARA PASAR A MAS ARTICULOS, QUE NO TIENE FUNCION.
let serviceSection = document.createElement('section')
let button = document.createElement('button')
let imgButton = document.createElement('img')

imgButton.src = './assets/left-arrow.png'
button.style.backgroundColor = 'white'
imgButton.style.transform = 'rotate(180deg)'
imgButton.loading = 'lazy'

serviceSection.classList.add('flex-container', 'relative')
serviceSection.id = 'services'

let tienda = document.querySelector('#tienda')
printCategories(SERVICES, serviceSection)

button.appendChild(imgButton)

serviceSection.insertAdjacentElement('beforeend', button)
tienda.insertAdjacentElement('beforebegin', serviceSection)

// * CREACION DE LISTADO DE LA SECCION TIENDA DONDE VA UNA LISTA EN PRIMER LUGAR CON LOS PRODUCTOS Y ABAJO UNA SERIE DE CARTAS PARA CADA MODELO DE PRODUCTO

const PRODUCTOS = [
  {
    categoria: 'Ordenadores',
    name: 'ASUS VivoBook 15 F1502ZA-EJ1302 Intel Core i5-1235U/16GB/512GB SSD/15.6',
    price: 469,
    stars: 5,
    reviews: 205,
    seller: 'Asus',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1073/10736944/1266-asus-vivobook-15-f1502za-ej1302-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: false,
    url: 'https://www.pccomponentes.com/asus-vivobook-15-f1502za-ej1302-intel-core-i5-1235u-16gb-512gb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'ASUS ROG Strix G16 G614JI-N3163 Intel Core i7-13650HX/32GB/1TB SSD/RTX 4070/16',
    price: 1568,
    stars: 5,
    reviews: 105,
    seller: 'Asus',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: false,
    url: 'https://www.pccomponentes.com/asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16'
  },
  {
    categoria: 'Ordenadores',
    name: 'HP 15-fd0076ns Intel Core i5-1335U/16GB/512GB SSD/15.6',
    price: 599,
    stars: 5,
    reviews: 200,
    seller: 'HP',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: true,
    url: 'https://www.pccomponentes.com/hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156'
  },

  {
    categoria: 'Ordenadores',
    name: 'HP Victus 15-fa0012ns Intel Core i5-12500H/16GB/512GB SSD/RTX 3050/15.6',
    price: 749,
    stars: 4,
    reviews: 75,
    seller: 'HP',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1057/10579901/1975-hp-victus-15-fa0012ns-intel-core-i5-12500h-16gb-512gb-ssd-rtx-3050-156.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: false,
    url: 'https://www.pccomponentes.com/hp-victus-15-fa0012ns-intel-core-i5-12500h-16gb-512gb-ssd-rtx-3050-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'MSI Modern 15 B7M-243XES AMD Ryzen 7 7730U/16GB/512GB SSD/15.6',
    price: 579,
    stars: 3,
    reviews: 171,
    seller: 'MSI',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1074/10741661/1707-msi-modern-15-b7m-243xes-amd-ryzen-7-7730u-16gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: false,
    url: 'https://www.pccomponentes.com/msi-modern-15-b7m-243xes-amd-ryzen-7-7730u-16gb-512gb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/512GB SSD/15.6',
    price: 479,
    stars: 5,
    reviews: 335,
    seller: 'Lenovo',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: true,
    url: 'https://www.pccomponentes.com/lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'Acer Nitro V 15 ANV15-51-51PQ Intel Core i5-13420H/16GB/1TB SSD/RTX 3050/15.6',
    price: 729,
    stars: 5,
    reviews: 194,
    seller: 'Acer',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10792747/1824-acer-nitro-v-15-anv15-51-51pq-intel-core-i5-13420h-16gb-1tb-ssd-rtx-3050-156-review.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: true,
    url: 'https://www.pccomponentes.com/acer-nitro-v-15-anv15-51-51pq-intel-core-i5-13420h-16gb-1tb-ssd-rtx-3050-156'
  },

  {
    categoria: 'Ordenadores',
    name: 'MSI Modern 15 H B13M-015XES Intel Core i7-13620H/32GB/1TB SSD/15.6',
    price: 849,
    stars: 5,
    reviews: 83,
    seller: 'MSI',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1075/10753204/1576-msi-modern-15-h-b13m-015xes-intel-core-i7-13620h-32gb-1tb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: false,
    url: 'https://www.pccomponentes.com/msi-modern-15-h-b13m-015xes-intel-core-i7-13620h-32gb-1tb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'Dell Vostro 3520 Intel Core i5-1135G7/8 GB/512GB SSD/15.6',
    price: 529,
    stars: 4,
    reviews: 6,
    seller: 'Dell',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1076/10763610/1397-dell-vostro-3520-intel-core-i5-1135g7-8-gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: false,
    url: 'https://www.pccomponentes.com/dell-vostro-3520-intel-core-i5-1135g7-8-gb-512gb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'Acer Aspire 3 A315-510P-306F Intel Core i3-N305/8GB/512GB SSD/15.6',
    price: 399,
    stars: 2,
    reviews: 92,
    seller: 'Acer',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1071/10719810/1513-acer-aspire-3-a315-510p-306f-intel-core-i3-n305-8gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: false,
    url: 'https://www.pccomponentes.com/acer-aspire-3-a315-510p-306f-intel-core-i3-n305-8gb-512gb-ssd-156'
  },
  {
    categoria: 'Ordenadores',
    name: 'ASUS VivoBook 15 F1502ZA-EJ650W Intel Core i5-1235U/16GB/512GB SSD/15.6',
    price: 599,
    stars: 4,
    reviews: 91,
    seller: 'Asus',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1072/10726871/1155-asus-vivobook-15-f1502za-ej650w-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: false,
    descuento: 25,
    precioAnterior: 799,
    url: 'https://www.pccomponentes.com/asus-vivobook-15-f1502za-ej650w-intel-core-i5-1235u-16gb-512gb-ssd-156'
  }
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
]

const COMPONENTES = [
  {
    categoria: 'Componentes',
    name: 'WD BLACK SN770 1TB SSD PCIe Gen4 NVMe',
    price: 89.98,
    stars: 5,
    reviews: 1095,
    seller: 'WD',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1006/10060346/1242-wd-black-sn770-1tb-nvme-ssd.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: true,
    url: 'https://www.pccomponentes.com/wd-black-sn770-1tb-ssd-pcie-gen4-nvme'
  },
  {
    categoria: 'Componentes',
    name: 'Cougar Forza 135 Ventilador CPU 120mm',
    price: 74.99,
    stars: 4,
    reviews: 12,
    seller: 'Cougar',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1072/10726510/1371-cougar-forza-135-ventilador-cpu-120mm.jpg',
    envio: 'Envío gratis',
    regalo: false,
    recomendado: false,
    descuento: 10,
    url: 'https://www.pccomponentes.com/cougar-forza-135-ventilador-cpu-120mm'
  },
  {
    categoria: 'Componentes',
    name: 'Acer Predator Vesta II RGB DDR5 6000MHz 32GB 2x16GB CL30',
    price: 129.99,
    stars: 3,
    reviews: 38,
    seller: 'Acer',
    image:
      'https://img.pccomponentes.com/articles/1079/10791955/1162-acer-predator-vesta-ii-rgb-ddr5-6000mhz-32gb-2x16gb-cl30.jpg',
    envio: 'Envío gratis',
    regalo: true,
    recomendado: false,
    descuento: 'precio más bajo',
    url: 'https://www.pccomponentes.com/acer-predator-vesta-ii-rgb-ddr5-6000mhz-32gb-2x16gb-cl30'
  }
]

//*Creo la lista dentro del section
let listDiv = document.querySelector('.list-div')

let gallery = document.querySelector('#gallery')

let arraySeller = []
let arrayRating = []
let arrayPrice = []

let seller = undefined
let valoracion = 0
let price = ''
let array = 'PRODUCTOS'

let filter = (array) => {
  let arrayFiltered = []
  //*DESPUES DE HACER UN MAPA CON LAS POSIBILIDADES QUE HAY CON TODOS LOS FILTROS. EMPIEZO CON UN CASO POR EJEMPLO SI EL PRIMER CAMPO ES IGUAL A. CON TODOS LOS MIXES POSIBLES. CUANDO SE HA COMPLETADO UNA , SEGUIR CON LAS DEMAS ( QUE SERA IGUAL) PERO VAMBIANDO EL VALOR DE LA PRIMERA CONDICION (QUE ES LA GUIA).

  for (const element of array) {
    if (
      seller == element.seller &&
      valoracion <= element.stars &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == element.seller &&
      valoracion <= element.stars &&
      price == ''
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == element.seller &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == element.seller &&
      valoracion == 'All Ratings' &&
      price == ''
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == element.seller &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.stars
    ) {
      arrayFiltered.push(element)
    }

    if (
      seller == undefined &&
      valoracion <= element.stars &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == undefined &&
      valoracion <= element.stars &&
      (price == 0 || price == '')
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == undefined &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == undefined &&
      valoracion == 'All Ratings' &&
      price == ''
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == undefined &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.stars
    ) {
      arrayFiltered.push(element)
    }
    if (
      seller == 'All Sellers' &&
      valoracion <= element.stars &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == 'All Sellers' &&
      valoracion <= element.stars &&
      price == ''
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == 'All Sellers' &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.price
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == 'All Sellers' &&
      valoracion == 'All Ratings' &&
      price == ''
    ) {
      arrayFiltered.push(element)
    } else if (
      seller == 'All Sellers' &&
      valoracion == 'All Ratings' &&
      parseInt(price) <= element.stars
    ) {
      arrayFiltered.push(element)
    }
  }
  printProducts(arrayFiltered)
}

let optionsFill = (arrayToFill, category, arrayOrigin) => {
  arrayToFill.slice(0)
  for (const element of arrayOrigin) {
    if (!arrayToFill.includes(element[category])) {
      arrayToFill.push(element[category])
    }
  }
  arrayToFill.sort((a, b) => b - a)
}

let sellerDivReading = document.querySelector('#seller-div')
let ratingDivReading = document.querySelector('#rating-select')

//* Funcion que ajusta el tamaño de la imagen cuando se reduzca el numero en el filtrado. En css tienen un flex-grow1, por lo que si se queda solamente un producto impreso, ocupa todo el ancho del container y no queda bien. Así que quito esta propiedad cuando el numero de elementos son menor que 3 productos. y vuelvo a poner la propiedad para cuando el filtrado es mayor o igual que 3 productos.

let functionSetWidth = () => {
  let arrayFiltered = document.querySelectorAll('.single-product')
  let regaloDivReading = document.querySelectorAll('#id-gift')
  for (const element of arrayFiltered) {
    if (arrayFiltered.length >= 0 && arrayFiltered.length <= 3) {
      element.style.width = '250px'
      element.style.flexGrow = 0
      for (const div of regaloDivReading) {
        div.style.bottom = '42%'
      }
    } else {
      element.style.width = '200px'
      element.style.flexGrow = 1
    }
  }
}
//*función que crea selector y opciones en el para los Seller. Además introduzco la función filter para filtrar cuando se escoje un valor.

let selectCreateBrand = (nameSelect, nameId, whereAppend) => {
  let label = document.createElement('label')
  let select = document.createElement('select')
  let optGroup = document.createElement('optgroup')
  let firstOption = document.createElement('option')

  label.textContent = nameSelect
  label.htmlFor = nameId
  select.name = nameSelect
  select.id = nameId
  optGroup.label = nameSelect
  firstOption.textContent = `All  ${nameSelect}`
  firstOption.value = `All ${nameSelect}`

  optGroup.insertAdjacentElement('afterbegin', firstOption)

  for (const element of arraySeller) {
    let option = document.createElement('option')

    option.value = element
    option.textContent = element

    optGroup.appendChild(option)
  }
  select.appendChild(optGroup)

  select.addEventListener('change', (e) => {
    seller = e.target.value
    console.log(seller)

    if (array == 'PRODUCTOS') {
      filter(PRODUCTOS)
    } else {
      filter(COMPONENTES)
    }

    functionSetWidth()
  })

  whereAppend.appendChild(label)
  whereAppend.appendChild(select)
}

let priceDiv = document.querySelector('#price-div')

//*función que creo input y boton para filtrar por precio.

let selectCreateButton = (nameSelect, nameId, whereAppend) => {
  let label = document.createElement('label')
  let input = document.createElement('input')
  let button = document.createElement('button')

  label.textContent = nameSelect
  label.htmlFor = nameId
  input.placeholder = 'Precio'
  input.id = nameId
  input.type = 'number'
  button.textContent = 'Buscar'
  button.type = 'submit'
  button.style.fontWeight = 600
  button.id = 'search-price'

  button.addEventListener('click', () => {
    price = input.value
    console.log(input.value)

    if (array == 'PRODUCTOS') {
      filter(PRODUCTOS)
      functionSetWidth()
    } else {
      filter(COMPONENTES)
      functionSetWidth()
    }
  })

  whereAppend.appendChild(label)
  whereAppend.appendChild(input)
  whereAppend.appendChild(button)
}
//*función que crea selector y opciones en el para el Rating. Además introduzco la función filter para filtrar cuando se escoje un valor.
let selectCreateRating = (nameSelect, nameId, whereAppend) => {
  let label = document.createElement('label')
  let select = document.createElement('select')
  let optGroup = document.createElement('optgroup')
  let firstOption = document.createElement('option')

  label.textContent = nameSelect
  label.htmlFor = nameId
  select.name = nameSelect
  select.id = nameId
  optGroup.label = nameSelect
  firstOption.textContent = `All  ${nameSelect}`
  firstOption.value = 'All Ratings'

  optGroup.append('afterbegin', firstOption)
  for (const element of arrayRating) {
    let option = document.createElement('option')

    option.value = element
    option.textContent = element

    optGroup.appendChild(option)
  }
  select.appendChild(optGroup)

  select.addEventListener('change', (e) => {
    valoracion = e.target.value

    if (array == 'PRODUCTOS') {
      filter(PRODUCTOS)
    } else {
      filter(COMPONENTES)
    }

    functionSetWidth()
  })

  whereAppend.appendChild(label)
  whereAppend.appendChild(select)
}

let buttonCreateClear = () => {
  let filterDivReading = document.querySelector('.filter-contain')
  let button = document.createElement('button')
  let button2 = document.querySelector('#search-price')

  button.classList.add('btn-clear')
  button.textContent = 'Limpiar Filtros'

  let selectSeller = document.querySelector('#id-seller')
  let selectRating = document.querySelector('#id-rating')
  let selectPrice = document.querySelector('#price-filter')

  button.addEventListener('click', () => {
    selectSeller.value = 'All Sellers'
    selectRating.value = 'All Ratings'
    selectPrice.value = ''
    price = ''
    valoracion = 0
    seller = undefined

    if (array == 'PRODUCTOS') {
      printProducts(PRODUCTOS)
      filter(PRODUCTOS)
    } else if (array == 'COMPONENTES') {
      printProducts(COMPONENTES)
      filter(COMPONENTES)
    }
  })

  filterDivReading.appendChild(button)
}
// btn-clear
let arrayCategories = []

// *Creo Ul para introducir más tarde categorias según la propiedad categoria de los listados de productos
let listProducts = document.createElement('ul')
listProducts.classList.add('flex-container', 'ul-products')

//* funcion para imprimir los articulos. Doy atributos y todo lo necesario al contenido que va dentro de cada artículo.
let printProducts = (arrayOriginal) => {
  let gallery = document.querySelector('#gallery')

  gallery.innerHTML = ''

  for (const element of arrayOriginal) {
    // *CREO TODO EL CONTENIDO QUE SE INSERTA POR CADA PRODUCTO DEL ARRAY
    let articleProduct = document.createElement('article')
    let anchor = document.createElement('a')
    let imgProduct = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')

    let pEnvio = document.createElement('p')

    //*Divs de etiquetas informativas y ofertas en las tarjetas
    let divsCreation = (texto, condicion, identificador) => {
      if (condicion) {
        let divRecom = document.createElement('div')
        let pRecom = document.createElement('p')
        divRecom.classList.add('absolute', 'flex-container')
        divRecom.id = identificador
        pRecom.textContent = texto
        imgProduct.loading = 'lazy'
        divRecom.appendChild(pRecom)
        anchor.appendChild(divRecom)
        if (divRecom.id === 'id-recommend') {
          articleProduct.appendChild(divRecom)
        }
      }
    }
    divsCreation('Producto recomendado', element.recomendado, 'id-recommend')
    divsCreation('Regalo incluido', element.regalo, 'id-gift')
    divsCreation(
      `${element.descuento}%`,
      !isNaN(element.descuento),
      'id-discount'
    )
    // * LE DOY CLASES Y ATRIBUTOS QUE TENDRAN EN COMUN
    // Article atributs
    articleProduct.classList.add(
      'flex-container-column',
      'single-product',
      'relative'
    )
    // Anchor atributs
    anchor.href = element.url
    anchor.rel = 'noopener'
    anchor.classList.add('flex-container-column')
    // img atributs
    imgProduct.src = element.image
    imgProduct.loading = 'lazy'
    // h4 atributs
    h4.textContent = element.name
    // price atribut
    p.textContent = `${element.price}€`
    // span atributes for valorations
    //allstar atributs

    span.classList.add('flex-container')
    for (let i = 0; i < 5; i++) {
      let allStar = document.createElement('div')
      span.appendChild(allStar)
      allStar.classList.add('star-color')
      if (i < element.stars) {
        allStar.style.backgroundColor = 'red'
      }
    }

    for (const element of arrayOriginal) {
      if (!arrayCategories.includes(element.categoria)) {
        arrayCategories.push(element.categoria)
        let li = document.createElement('li')
        li.textContent = element.categoria
        li.style.cursor = 'pointer'
        li.classList.add('kind-categories')
        listProducts.insertAdjacentElement('afterbegin', li)
        listDiv.insertAdjacentElement('afterbegin', listProducts)
      }
    }

    span.innerHTML += ` &nbsp;  (${element.reviews}) `

    // pEnvio atributs
    pEnvio.textContent = element.envio
    anchor.appendChild(imgProduct)
    anchor.appendChild(h4)
    anchor.appendChild(p)
    anchor.appendChild(span)
    anchor.appendChild(pEnvio)
    articleProduct.appendChild(anchor)
    gallery.appendChild(articleProduct)
  }
}

// * Creo así aleatoriedad a los listados, para que se impriman de forma aleatoria.
PRODUCTOS.sort((a, b) => Math.random() - Math.random())
COMPONENTES.sort((a, b) => Math.random() - Math.random())

//*Funcion que lee el array de li del section #gallery. y función que al seleccionar con click una Categoria(ordenadores o componentes) se imprima solamente el listado que coincida con esta categoría.
let printForCategory = () => {
  let liReading = document.querySelectorAll('.kind-categories')

  for (const li of liReading) {
    li.addEventListener('click', (e) => {
      if (e.target.textContent === 'Ordenadores') {
        array = 'PRODUCTOS'

        printProducts(PRODUCTOS)
      } else if (e.target.textContent === 'Componentes') {
        array = 'Componentes'
        printProducts(COMPONENTES)
        functionSetWidth()
      }
      if (e.target.textContent == 'Componentes') {
        array = 'Componentes'
        e.target.style.textDecoration = 'underline'
        e.target.style.fontWeight = 600
        liReading[0].style.textDecoration = 'none'
        liReading[0].style.fontWeight = 400
        console.log(array)
      } else {
        liReading[1].style.textDecoration = 'none'
      }
      if (e.target.textContent === 'Ordenadores') {
        liReading[0].style.textDecoration = 'underline'
        liReading[0].style.fontWeight = 600
        liReading[1].style.fontWeight = 400
      }
    })
  }
}

// optionsFill(arraySeller, 'seller', PRODUCTOS)
// optionsFill(arrayRating, 'stars', PRODUCTOS)

printProducts(COMPONENTES)
printProducts(PRODUCTOS)
printForCategory()

//*Funcion que utilizo para actualizar las categorias que aparecen en los filtros según se cambie el listado de productos.
//* Utilizando las condiciones, y bucles para aplicar el stilo display block a las opciones que estan incluidas dentro de las categorias del tipo de producto.
let displayOptions = (category, idFiltro) => {
  let options = document.querySelectorAll(`${idFiltro}>optgroup>option`)
  let liReading = document.querySelectorAll('.kind-categories')

  for (const option of options) {
    option.style.display = 'none'
    options[0].style.display = 'block'
    for (const elementP of PRODUCTOS) {
      if (option.value == elementP[category]) {
        option.style.display = 'block '
      }
    }
  }
  console.log()
  for (const li of liReading) {
    li.addEventListener('click', (e) => {
      if (e.target.textContent == 'Ordenadores') {
        array = 'PRODUCTOS'
        console.log(array)
        for (const option of options) {
          option.style.display = 'none'

          for (const elementP of PRODUCTOS) {
            if (option.value == elementP[category]) {
              option.style.display = 'block'
            }
            if (option.value == 'All Sellers') {
              option.style.display = 'block'
            }
          }
        }
      } else if (e.target.textContent == 'Componentes') {
        array = 'COMPONENTES'

        for (const option of options) {
          option.style.display = 'none'

          for (const elementC of COMPONENTES) {
            if (option.value == elementC[category]) {
              option.style.display = 'block'
            }
            if (option.value == 'All Sellers') {
              option.style.display = 'block'
            }
          }
          options[0].style.display = 'block'
        }
      }
    })
  }
}

optionsFill(arraySeller, 'seller', PRODUCTOS)
optionsFill(arrayRating, 'stars', PRODUCTOS)
optionsFill(arraySeller, 'seller', COMPONENTES)
optionsFill(arrayRating, 'stars', COMPONENTES)

selectCreateBrand('Sellers', 'id-seller', sellerDivReading)
selectCreateRating('Ratings', 'id-rating', ratingDivReading)
selectCreateButton('Filtrar por precio', 'price-filter', priceDiv)

displayOptions('seller', '#id-seller')
displayOptions('stars', '#id-rating')
buttonCreateClear()
functionSetWidth()

let arraySectionExperiences = [
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1705532400000/500x500-gaming-aspiracional.jpg',
    h4: 'Pasión por el gaming',
    url: 'https://www.pccomponentes.com/gaming'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1705532400000/500x500-oficina-aspiracional.jpg',
    h4: 'Productividad y teletrabajo',
    url: 'https://www.pccomponentes.com/oficina-y-teletrabajo'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1705532400000/500x500-tecnologi-a-estudiantes-aspiracional.jpg',
    h4: 'Esenciales para estudiantes',
    url: 'https://www.pccomponentes.com/tecnologia-para-estudiantes'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1705532400000/500x500-streaming-aspiracional.jpg',
    h4: 'Creadores de contenido',
    url: 'https://www.pccomponentes.com/especial-streaming'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1705532400000/500x500-ocio-en-casa-aspiracional.jpg',
    h4: 'Disfruta del cine en casa',
    url: 'https://www.pccomponentes.com/especial-ocio-en-casa'
  }
]

let printSection = (sectionToRead, array, idDivExperience) => {
  let sectionReading = document.querySelector(`${sectionToRead}`)
  sectionReading.classList.add('flex-container-column')
  let experienceDiv = document.createElement('article')
  experienceDiv.classList.add('flex-container')
  experienceDiv.id = `${idDivExperience}`

  for (const element of array) {
    let article = document.createElement('article')

    let a = document.createElement('a')
    let img = document.createElement('img')
    let h4 = document.createElement('h4')

    article.classList.add('flex-container-column', 'single-experience')
    a.href = element.url
    img.src = element.imgUrl
    h4.textContent = element.h4

    article.appendChild(a)
    a.appendChild(img)
    article.appendChild(h4)
    experienceDiv.appendChild(article)
    sectionReading.appendChild(experienceDiv)
  }
}
printSection(
  '#experience-section',
  arraySectionExperiences,
  'experience-section'
)

let arraySectionTendences = [
  {
    imgUrl:
      'https://cdn.pccomponentes.com/img/repositorio/maincategoryid/id-fam-1115.jpg?2',
    h4: 'Portátiles',
    url: 'https://www.pccomponentes.com/portatiles'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1671404400000/familia-pccom-500x500.jpg',
    h4: 'Sobremesa',
    url: 'https://www.pccomponentes.com/sobremesa'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1679439600000/familia-smartphones-500x500.png',
    h4: 'Smartphones',
    url: 'https://www.pccomponentes.com/smartphone-moviles'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1678834800000/auriculares500x500.png',
    h4: 'Auriculares',
    url: 'https://www.pccomponentes.com/auriculares'
  },
  {
    imgUrl:
      'https://img.pccomponentes.com/pcblog/1673564400000/familia-televisores-500x500-producto.jpg',
    h4: 'Televisores',
    url: 'https://www.pccomponentes.com/televisores'
  },
  {
    imgUrl:
      'https://cdn.pccomponentes.com/img/repositorio/maincategoryid/id-fam-5.jpg?3',
    h4: 'Discos Duros',
    url: 'https://www.pccomponentes.com/discos-duros'
  }
]

printSection('#tendences-sections', arraySectionTendences, 'div-tendences')

let arrayCompanies = [
  {
    brand: 'Hp',
    img: 'https://cdn.pccomponentes.com/img/repositorio/home/1024px-hp-logo-2012-1.webp',
    url: 'https://www.pccomponentes.com/hp-store'
  },
  {
    brand: 'Samsung',
    img: 'https://cdn.pccomponentes.com/img/repositorio/home/image-8.webp',
    url: 'https://www.pccomponentes.com/samsung'
  },
  {
    brand: 'Iphone',
    img: 'https://cdn.pccomponentes.com/img/repositorio/home/path4.webp',
    url: 'https://www.pccomponentes.com/espacio-apple'
  },
  {
    brand: 'Intel',
    img: 'https://img.pccomponentes.com/pcblog/1666648800000/frame-10867-1.png',
    url: 'https://www.pccomponentes.com/espacio-intel'
  },
  {
    brand: 'Chromebook',
    img: 'https://img.pccomponentes.com/pcblog/1666648800000/chromebook-lockup-color-web-1-1.png',
    url: 'https://www.pccomponentes.com/chromebook-es-mas-que-un-portatil'
  },
  {
    brand: 'Logitech',
    img: 'https://img.pccomponentes.com/pcblog/1676329200000/logitech-logo.png',
    url: 'https://www.pccomponentes.com/brand-corner-logitech'
  }
]

let printCompanies = (array, grad) => {
  let mainSectionReading = document.querySelector('#companies-section')
  mainSectionReading.classList.add('flex-container', 'relative')
  let button = document.createElement('button')
  let imgButton = document.createElement('img')

  imgButton.src = './assets/left-arrow.png'
  button.classList.add('absolute')
  button.style.backgroundColor = 'white'
  imgButton.style.transform = `rotate(${grad})`
  imgButton.loading = 'lazy'

  for (const element of array) {
    let a = document.createElement('a')
    let img = document.createElement('img')

    a.href = element.url
    img.src = element.img
    img.loading = 'lazy'

    button.append(imgButton)
    mainSectionReading.appendChild(button)
    a.append(img)
    mainSectionReading.appendChild(a)
  }
}
printCompanies(arrayCompanies, '180deg')

let arrayBlog = [
  {
    img: 'https://img.pccomponentes.com/pcblog/98/que-es-placa-base.jpg',
    url: 'https://www.pccomponentes.com/ruido-ventilador-ordenador-causa-solucion',
    h4: '¿Qué es una placa base y cual es su función?',
    p: '¿Sabes que es una placa base , que tipos hay y cuales son sus características? Te ayudamos a elegir la mejor para que¿Sabes qué es una placa base, qué tipos hay y cuáles son sus características? Te ayudamos a elegir la mejor para que consigas el equipo que deseas.'
  },
  {
    img: 'https://img.pccomponentes.com/pcblog/177/ruido-ordenador.jpg',
    url: 'https://www.pccomponentes.com/ruido-ventilador-ordenador-causa-solucion',
    h4: '¿Por qué hace ruido mi PC? Cómo reducir el ruido de mi ordenador',
    p: 'Has notado que tu ordenador ha empezado a hacer más ruido de lo normal. Te explicamos cuál puede ser la causa, te ayudamos a solucionarlo y cómo evitar que ocurra.'
  },
  {
    img: 'https://img.pccomponentes.com/pcblog/937/home-office-569153-640.jpg',
    url: 'https://www.pccomponentes.com/ordenador-se-calienta-mucho-y-se-apaga',
    h4: 'Mi ordenador se calienta mucho y a veces se apaga, ¿qué hago?',
    p: 'La temperatura de un PC es un factor clave que influye en su rendimiento. Te explicamos las causas probables de su exceso de calor y algunos trucos y medidas perfectos para favorecer la ventilación y su enfriamiento.'
  }
]

let createBlog = (array) => {
  let blog = document.querySelector('#blog-part')
  let h3 = document.createElement('h3')
  let divContainer = document.createElement('div')

  h3.textContent = 'En nuestro blog'
  blog.classList.add('grid-container')

  divContainer.classList.add('grid-container')
  divContainer.id = 'container-articles'

  for (const element of array) {
    let article = document.createElement('article')
    let a = document.createElement('a')
    let divImg = document.createElement('div')
    let img = document.createElement('img')
    let infoDiv = document.createElement('div')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let button = document.createElement('button')
    let imgArrow = document.createElement('img')

    article.classList.add('single-article', 'flex-container-column')

    a.href = element.url
    a.target = '_blank'
    a.classList.add('relative')
    img.src = element.img
    img.classList.add('single-img')
    infoDiv.classList.add('flex-container-column', 'absolute')
    h4.textContent = element.h4
    p.textContent = element.p
    button.textContent = 'Ver más'
    imgArrow.src = './assets/right-arrow.png'

    button.appendChild(imgArrow)
    infoDiv.appendChild(h4)
    infoDiv.appendChild(p)
    infoDiv.appendChild(button)
    divImg.appendChild(img)
    a.appendChild(divImg)
    a.appendChild(infoDiv)
    article.appendChild(a)
    divContainer.appendChild(article)
  }
  let articleNew = document.createElement('article')
  let h2 = document.createElement('h2')
  let aImg = document.createElement('a')
  let imgAdversitting = document.createElement('img')
  let buttonDiv = document.createElement('div')
  let newp = document.createElement('p')
  let newButton = document.createElement('button')

  articleNew.id = 'article-adversiting'
  articleNew.classList.add('flex-container')
  imgAdversitting.src =
    'https://img.pccomponentes.com/pcblog/1708902000000/500x500-35.png'
  h2.textContent = 'Consigue tu premio para el PcAniversario'
  newp.textContent =
    'Cupones descuento de hasta 50€ y cada día un nuevo premio exclusivo.'
  newButton.textContent = 'Participar ahora'
  aImg.href = 'https://www.pccomponentes.com/aniversario'

  blog.appendChild(h3)
  blog.appendChild(divContainer)

  articleNew.appendChild(h2)

  aImg.appendChild(imgAdversitting)
  articleNew.appendChild(aImg)

  buttonDiv.appendChild(newp)
  buttonDiv.appendChild(newButton)
  articleNew.appendChild(buttonDiv)

  blog.appendChild(articleNew)
}
createBlog(arrayBlog)

let arrayLastInfo = [
  {
    img: 'https://cdn.pccomponentes.com/img/iconos/64px_truck_delivery.png',
    p: 'Envíos gratuitos en pedidos superiores a 50€.',
    url: 'https://www.pccomponentes.com/soporte/promocion-de-envio-gratuito',
    bold: 'Envíos gratuitos'
  },
  {
    img: 'https://cdn.pccomponentes.com/img/iconos/64px_hold.png',
    p: ' Recibe tu pedido en 24h.',
    url: 'https://www.pccomponentes.com/soporte/plazos-de-entrega',
    bold: ''
  },
  {
    img: 'https://cdn.pccomponentes.com/img/iconos/64px_refresh.png',
    p: ' Devoluciones gratuitas y garantía de sustitución 24h.',
    url: 'https://www.pccomponentes.com/soporte/devoluciones-y-garantias',
    bold: 'Devoluciones gratuitas'
  }
]

let lasInfo = (array) => {
  let sectionLastInfo = document.createElement('section')
  sectionLastInfo.classList.add('flex-container')

  for (const element of array) {
    let article = document.createElement('article')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let span = document.createElement('span')
    let p = document.createElement('p')

    article.classList.add('flex-container')
    a.href = element.url
    img.src = element.img
    span.classList.add('bold')
    span.textContent = element.bold
    p.textContent = element.p
  }
}
