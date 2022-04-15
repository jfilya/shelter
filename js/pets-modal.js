let petsModal = [
    {
        name: "Katrine",
        img: "img/pets-katrine.jpg",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
      name: "Jennifer",
      img: "img/pets-jennifer.jpg",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Woody",
      img: "img/pets-woody.jpg",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus, distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
        name: "Sophia",
        img: "img/pets-sofia.jpg",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
      name: "Timmy",
      img: "img/pets-timmy.jpg",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus, viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
        name: "Charly",
        img: "img/pets-charly.jpg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica, leptospirosis"],
        diseases: ["deafness, blindness"],
        parasites: ["lice, fleas"]
    },
    {
        name: "Scarlett",
        img: "img/pets-scarlet.jpg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
      name: "Freddie",
      img: "img/pets-Freddie.jpg",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
  ]





  let modalWindow = document.querySelector('#modal');
  let modaling = petsModal.slice();
  for (let mod of modaling) {
    let block = document.createElement('div');
    modalWindow.appendChild(block);
    block.id=`modal-${mod.name}`;
  
    let btnClose = document.createElement('button')
    block.appendChild(btnClose);
    btnClose.id=`close-${mod.name}`;
    btnClose.className="closeModalBtn"
    let imgClose = document.createElement('img')
    imgClose.src = "img/CloseModal.svg"
    imgClose.alt="close"
    btnClose.appendChild(imgClose);

    let imgModal = document.createElement('img')
    imgModal.src = mod.img;
    block.appendChild(imgModal);
    imgModal.alt=`pets-${mod.name}`
    imgModal.className="imgPets"

    let content = document.createElement('div');
    block.appendChild(content);
    content.className="content"

    let hName = document.createElement('h3');
    hName.innerHTML = mod.name  
    hName.className = "content__title"
    content.appendChild(hName)

    let hPet = document.createElement('h5');
    hPet.innerHTML =` ${mod.type} - ${mod.breed}`

    hPet.className = "content__titleMini"
    content.appendChild(hPet)

    let text = document.createElement('p');
    text.className = "content__info"
    text.innerHTML = mod.description
    content.appendChild(text)

    let contentList = document.createElement('ul');
    contentList.className = "content__list"
    content.appendChild(contentList)

    let contentListItem1 = document.createElement('li');  
    contentListItem1.innerHTML = `Age: ` 
    let itemList1 =  document.createElement('span') 
    itemList1.innerHTML = mod.age 
    contentListItem1.appendChild(itemList1)     
    contentList.appendChild(contentListItem1)


    let contentListItem2 = document.createElement('li');    
    contentListItem2.innerHTML = "Inoculations: "
    let itemList2 =  document.createElement('span') 
    itemList2.innerHTML = mod.inoculations 
    contentListItem2.appendChild(itemList2) 
    contentList.appendChild(contentListItem2)

    let contentListItem3 = document.createElement('li');    
    contentListItem3.innerHTML = "Diseases: "
    let itemList3 =  document.createElement('span') 
    itemList3.innerHTML = mod.diseases 
    contentListItem3.appendChild(itemList3)
    contentList.appendChild(contentListItem3)

    let contentListItem4 = document.createElement('li');    
    contentListItem4.innerHTML = "Parasites: "
    let itemList4 =  document.createElement('span') 
    itemList4.innerHTML = mod.parasites 
    contentListItem4.appendChild(itemList4)
    contentList.appendChild(contentListItem4)
   
  }
