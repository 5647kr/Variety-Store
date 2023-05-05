class ItemGenerator {
  constructor() {
    this.itemList = document.querySelector("#shopping-container .item-shopping")
  }

  async setup() {
    const response = await this.loadData();
    console.log(response);
    this.itemFactory(response);
  }

  async loadData() {
    try {
    const response = await fetch("./json/buy-items.json");

    if(response.ok) { // 서버의 응답이 200~299일 경우
      return response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log(error);
  }
  }

  itemFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
      <button class="item-btn" type="button" data-img="${el.img}" data-item="${el.name}" data-price="${el.price}" data-count="${el.count}">
        <img class="item-img" src="./img/${el.img}" alt="">
        <span class="item-name">${el.name}</span>
        <span class="item-price">${el.price}G</span>
        <strong class="item-count">${el.count}</strong>
      </button>
      `;

      item.innerHTML = itemTemplate;
      docFrag.append(item);
    })
    this.itemList.append(docFrag);
  }
}

export default ItemGenerator;