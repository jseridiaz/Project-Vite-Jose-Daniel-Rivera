import './style.css'
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
    stars: 2,
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
    stars: 3,
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

let arrayOption = []

let seller = ''
let valoracion = 0

let filterDiv = document.querySelector('#filter-contain')

let filter = () => {
  let arrayFiltered = []

  for (const element of PRODUCTOS) {
    if (seller.includes(element.seller)) {
      arrayFiltered.push(element)
    }
    printProducts(arrayFiltered)
  }
}

let optionsFill = (optionType) => {
  arrayOption.slice(0)
  for (const element of PRODUCTOS) {
    if (!arrayOption.includes(element[optionType])) {
      arrayOption.push(element[optionType])
    }
  }
}
let selectCreate = (nameSelect, nameId, whereAppend) => {
  let label = document.createElement('label')
  let select = document.createElement('select')
  let optGroup = document.createElement('optgroup')
  let firstOption = document.createElement('option')

  label.textContent = `${nameSelect}`
  label.htmlFor = `${nameId}`
  select.name = `${nameSelect}`
  select.id = `${nameId}`
  optGroup.textContent = `${nameSelect}`
  firstOption = `All ${nameSelect}`
  firstOption.value = `${nameSelect}`

  select.appendChild(optGroup)
  select.appendChild(firstOption)

  for (const element of PRODUCTOS) {
    let option = document.createElement('option')
    option.value = element.seller
    option.textContent = element.seller

    select.appendChild(option)
  }

  whereAppend.appendChild(label)
  whereAppend.appendChild(select)

  filter()
} //*Esta funcion se ejeturara dos veces para

let printProducts = (arrayOriginal) => {
  let gallery = document.querySelector('#gallery')
  gallery.innerHTML = ''

  let listProducts = document.createElement('ul')
  listProducts.classList.add('flex-container')

  let arrayCategories = []

  for (const element of arrayToGetInputs) {
    // *CREO TODO EL CONTENIDO QUE SE INSERTA POR CADA PRODUCTO DEL ARRAY
    let articleProduct = document.createElement('article')
    let anchor = document.createElement('a')
    let imgProduct = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')

    let pEnvio = document.createElement('p')
    let divsCreation = (texto, condicion, identificador) => {
      if (condicion) {
        let divRecom = document.createElement('div')
        let pRecom = document.createElement('p')
        divRecom.classList.add('absolute', 'flex-container')
        divRecom.id = identificador
        pRecom.textContent = texto
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

    if (!arrayCategories.includes(element.categoria)) {
      arrayCategories.push(element.categoria)
      let li = document.createElement('li')
      li.textContent = element.categoria
      li.style.cursor = 'pointer'
      listProducts.appendChild(li)
    }
  }
  listDiv.insertAdjacentElement('afterbegin', listProducts)
}
