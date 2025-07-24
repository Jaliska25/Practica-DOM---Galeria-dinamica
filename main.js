//---------- HEADERS GALLERY -------------
const header = document.getElementsByTagName('header')[0]
const img = document.createElement('img')
img.src =
  'https://www.ericjuneaubooks.com/wp-content/uploads/2021/04/lord-of-the-rings-logo-i63432-e1619795357664.jpg'
img.alt = 'Lord of the Rings'
header.appendChild(img)

//-------- SEARCH BAR ---------
const options = [
  { name: 'All', keyword: 'all' },
  { name: 'Elfs', keyword: 'elf' },
  { name: 'Hobbits', keyword: 'hobbit' },
  { name: 'Humans', keyword: 'human' },
  { name: 'Maiar', keyword: 'maia' },
  { name: 'Orcs', keyword: 'orc' }
]

const aside = document.getElementById('menu')
const ul = document.createElement('ul')

options.forEach((option) => {
  const li = document.createElement('li')
  li.textContent = option.name
  li.setAttribute('data-species', option.keyword)
  ul.appendChild(li)
})
aside.appendChild(ul)

//----------- CHARACTER INFORMATION ------------
const characters = [
  {
    name: 'Frodo Baggins',
    birthdate: '22-9-2968',
    height: '1.26 m',
    species: 'Hobbit',
    origin: 'Hobbiton',
    image: 'https://i.ebayimg.com/images/g/gosAAOSwPTxjWjup/s-l1600.webp'
  },
  {
    name: 'Samwise "Sam" Gamgee',
    birthdate: 'Year 2980',
    height: '1.22 m',
    species: 'Hobbit',
    origin: 'Hobbiton',
    image: 'https://i.ebayimg.com/images/g/Vo4AAOSwe6JjWju4/s-l1600.webp'
  },
  {
    name: 'Meriadoc Brandybuck',
    birthdate: 'Year 2982',
    height: '1.27 m',
    species: 'Hobbit',
    origin: 'Buckland',
    image: 'https://i.ebayimg.com/images/g/wYAAAOSwLBRjWjua/s-l1600.webp'
  },
  {
    name: 'Peregrin Took',
    birthdate: 'Year 2990',
    height: '1.28 m',
    species: 'Hobbit',
    origin: 'Tookborough',
    image: 'https://i.ebayimg.com/images/g/fw0AAOSwkOZjWjuB/s-l1600.webp'
  },
  {
    name: 'Gandalf the Grey',
    birthdate: 'Unknown',
    height: '1.80 m',
    species: 'Maia',
    origin: 'Valinor',
    image: 'https://i.ebayimg.com/images/g/JAsAAOSwbiVjWjwR/s-l1600.webp'
  },
  {
    name: 'Aragorn II Elessar',
    birthdate: '1-3-2931',
    height: '1.98 m',
    species: 'Human (Dúnedain)',
    origin: 'Rivendell / Arnor',
    image: 'https://i.ebayimg.com/images/g/F7QAAOSwelJjWjxG/s-l1600.webp'
  },
  {
    name: 'Legolas',
    birthdate: 'Unknown',
    height: '1.83 m',
    species: 'Sindar Elf',
    origin: 'Mirkwood',
    image: 'https://i.ebayimg.com/images/g/8Q8AAOSwXOBjWjvz/s-l1600.webp'
  },
  {
    name: 'Gimli',
    birthdate: 'Year 2879',
    height: '1.40 m',
    species: 'Dwarf',
    origin: 'Erebor',
    image: 'https://i.ebayimg.com/images/g/RGcAAOSwELxjWjwu/s-l1600.webp'
  },
  {
    name: 'Boromir',
    birthdate: 'Year 2978',
    height: '1.93 m',
    species: 'Human',
    origin: 'Minas Tirith',
    image: 'https://i.ebayimg.com/images/g/U1QAAOSwrvxjWjvq/s-l1600.webp'
  },
  {
    name: 'Faramir',
    birthdate: 'Year 2983',
    height: '1.90 m',
    species: 'Human',
    origin: 'Minas Tirith',
    image:
      'https://i.pinimg.com/474x/9c/8d/b6/9c8db64fd67909aa456a6002c05f31e0.jpg'
  },
  {
    name: 'Éowyn',
    birthdate: 'Year 2995',
    height: '1.75 m',
    species: 'Human',
    origin: 'Rohan',
    image:
      'https://i.pinimg.com/originals/85/3a/1f/853a1fd0673b196e7a6dbd28eb49481e.jpg'
  },
  {
    name: 'Éomer',
    birthdate: 'Year 2991',
    height: '1.88 m',
    species: 'Human',
    origin: 'Rohan',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgGhaibzfeyXK6ytOrZ4wVsnutsXadYOXdUajhsHsA-mORaIA9Pn-jW8zs8h7jW1IYKk&usqp=CAU'
  },
  {
    name: 'Theoden',
    birthdate: 'Year 2948',
    height: '1.83 m',
    species: 'Human',
    origin: 'Rohan',
    image:
      'https://i.ebayimg.com/00/s/NTY0WDgwNQ==/z/PX8AAOSwoNVjWx1E/$_57.JPG?set_id=8800005007'
  },
  {
    name: 'Denethor II',
    birthdate: 'Year 2930',
    height: '1.85 m',
    species: 'Human',
    origin: 'Gondor',
    image:
      'https://i.pinimg.com/736x/44/d3/48/44d3482390f09fc2682ead5ac7532cb0.jpg'
  },

  {
    name: 'Saruman the White',
    birthdate: 'Unknown',
    height: 'Approx. 1.90 m',
    species: 'Maia',
    origin: 'Valinor',
    image:
      'https://i.pinimg.com/474x/61/b2/df/61b2dfd4d888f94cec09df7d140bb015.jpg'
  },
  {
    name: 'Galadriel',
    birthdate: 'Age of the Trees',
    height: '1.80 m',
    species: 'Noldor Elf',
    origin: 'Valinor / Lothlórien',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7132eb16-a4a2-4fef-ae3a-2c12954f6c92/d5qk80r-785071e2-c3fa-417b-a949-14e51320ca53.jpg/v1/fill/w_854,h_935,q_70,strp/galadriel___the_hobbit_by_vikingsif_d5qk80r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc1MiIsInBhdGgiOiJcL2ZcLzcxMzJlYjE2LWE0YTItNGZlZi1hZTNhLTJjMTI5NTRmNmM5MlwvZDVxazgwci03ODUwNzFlMi1jM2ZhLTQxN2ItYTk0OS0xNGU1MTMyMGNhNTMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jRWSTdfXVQYvttLSHLzr6uIWgX0_TMKek73OBGRlB30'
  },
  {
    name: 'Arwen Undómiel',
    birthdate: '241 T.A.',
    height: '1.75 m',
    species: 'Elf (half-elf)',
    origin: 'Rivendell',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a47fb1d9-2fc6-4279-996c-c640db2df5f1/deztt0p-4adfbd3f-9220-4481-9df1-e1215517d936.png/v1/fill/w_900,h_1125,q_80,strp/arwen_by_alrun_art_deztt0p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyNSIsInBhdGgiOiJcL2ZcL2E0N2ZiMWQ5LTJmYzYtNDI3OS05OTZjLWM2NDBkYjJkZjVmMVwvZGV6dHQwcC00YWRmYmQzZi05MjIwLTQ0ODEtOWRmMS1lMTIxNTUxN2Q5MzYucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5TkYfHacmEFpSMfJWtcqIn65524eZdwmWu-VS0JE4_w'
  },
  {
    name: 'Elrond',
    birthdate: 'Before year 525',
    height: 'Approx. 1.90 m',
    species: 'Half-elf',
    origin: 'Doriath / Rivendell',
    image:
      'https://i.pinimg.com/736x/9a/8e/2e/9a8e2eccd6b203930ae7fe747bc93fc3.jpg'
  },

  {
    name: 'Gollum (Sméagol)',
    birthdate: 'Year 2430',
    height: 'Approx. 1.20 m',
    species: 'Hobbit (Stoor)',
    origin: 'Anduin',
    image: 'https://storage.googleapis.com/pod_public/1300/119511.jpg'
  },
  {
    name: 'Sauron',
    birthdate: 'Unknown',
    height: 'Variable',
    species: 'Maia',
    origin: 'Valinor',
    image:
      'https://i.etsystatic.com/13553030/r/il/50a331/3739346395/il_570xN.3739346395_5zgk.jpg'
  },
  {
    name: 'Balrog of Moria',
    birthdate: 'Unknown',
    height: '5 m',
    species: 'Corrupted Maia',
    origin: 'Misty Mountains',
    image:
      'https://pm1.aminoapps.com/6575/3a5b0218c93490aa538a04dd6ff213869c8efaa7_hq.jpg'
  },
  {
    name: 'Witch-king of Angmar',
    birthdate: 'Unknown',
    height: 'Unknown',
    species: 'Ringwraith',
    origin: 'Númenor (possibly)',
    image:
      'https://i.etsystatic.com/22576420/r/il/760807/6024782404/il_fullxfull.6024782404_and0.jpg'
  },
  {
    name: 'Nazgûl',
    birthdate: 'Unknown',
    height: 'Unknown',
    species: 'Ringwraiths',
    origin: 'Regions of Middle-earth',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a016311-546f-478b-9860-a881c4e19d0a/dnwmfe-3788867d-e62f-409a-93b6-570cbd7f0595.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhMDE2MzExLTU0NmYtNDc4Yi05ODYwLWE4ODFjNGUxOWQwYVwvZG53bWZlLTM3ODg4NjdkLWU2MmYtNDA5YS05M2I2LTU3MGNiZDdmMDU5NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qqybEnLkTd0s287YowVIHd8sgVScdj1O7mqknkrebl8'
  },
  {
    name: 'Orc of Mordor',
    birthdate: 'Unknown',
    height: '1.75 m',
    species: 'Orc',
    origin: 'Mordor',
    image:
      'https://cdnb.artstation.com/p/assets/images/images/051/140/301/large/eduardo-dominguez-edsfox-cdc-orc-low.jpg?1656543355'
  },
  {
    name: 'Uruk-hai of Isengard',
    birthdate: 'Unknown',
    height: '1.90 m',
    species: 'Uruk-hai (Orc)',
    origin: 'Isengard',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4be04656-9674-47db-a5a8-dec79e9d079e/dfjlouh-cbcf9620-88ec-48e3-a548-f6d443010d44.jpg/v1/fill/w_1280,h_1302,q_75,strp/uruk_hai_painting_exercise_by_damyanoman_dfjlouh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMiIsInBhdGgiOiJcL2ZcLzRiZTA0NjU2LTk2NzQtNDdkYi1hNWE4LWRlYzc5ZTlkMDc5ZVwvZGZqbG91aC1jYmNmOTYyMC04OGVjLTQ4ZTMtYTU0OC1mNmQ0NDMwMTBkNDQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wpt6FeVpMRZVy9ziGWuwEuIHm4LmBxJbLwC8F7bBnYM'
  }
]
// CARDS CREATION
const main = document.getElementById('main')
const cards = document.createElement('div')
cards.classList.add('cards')

characters.forEach((character) => {
  const container = document.createElement('div')
  container.classList.add('card')
  container.setAttribute('data-species', character.species.toLowerCase())

  // --- Inner part ---
  const cardInner = document.createElement('div')
  cardInner.classList.add('card-inner')

  //--- Front part ----
  const front = document.createElement('div')
  front.classList.add('card-front')

  const img = document.createElement('img')
  img.src = character.image
  img.alt = character.name

  const name = document.createElement('h2')
  name.textContent = character.name

  front.appendChild(img)
  front.appendChild(name)

  // ---- Back part ----
  const back = document.createElement('div')
  back.classList.add('card-back')
  back.innerHTML = `<h3>${character.name}</h3>
   <p><strong>Species:</strong> ${character.species}</p>
   <p><strong>Origin:</strong> ${character.origin}</p>
   <p><strong>Height:</strong> ${character.height}</p>
   <p><strong>Birthdate:</strong> ${character.birthdate}</p>`

  //  Adding both faces to the container
  cardInner.appendChild(front)
  cardInner.appendChild(back)
  container.appendChild(cardInner)
  cards.appendChild(container)
})

main.appendChild(cards)

//---------- ADDING EVENTS TO THE CARDS ----------
//First, the shadows of each card

const effect = document.getElementsByClassName('card')
Array.from(effect).forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hover')
  })
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hover')
  })
})

//Second, the back of the cards
const cardsElements = document.querySelectorAll('.card')

cardsElements.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked')
  })
})

//---------- SELECTION MENU -----------
const liElements = document.querySelectorAll('li')

liElements.forEach((li) => {
  li.addEventListener('click', () => {
    const keyword = li.getAttribute('data-species')

    document.querySelectorAll('.card').forEach((card) => {
      const cardSpecies = card.getAttribute('data-species')

      if (keyword === 'all' || cardSpecies.includes(keyword)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  })
})
