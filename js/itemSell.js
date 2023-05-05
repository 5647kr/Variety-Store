class ItemSell {
  constructor() {
    this.itemSell = document.querySelector("#pocket-list ul")
  }

  async setup() {
    const response = await this.loadData();
    console.log(response);
    this.sellItem(response);
  }

  async loadData() {
    try {
    const response = await fetch("./json/sell-items.json");

    if(response.ok) { // 서버의 응답이 200~299일 경우
      return response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log(error);
  }
  }

  sellItem(data) {
    const docsFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const items = document.createElement("li");
      items.classList.add("pocket-item-list");
      const itemTemplates = `
        <strong class="pocket-item-count">${el.count}</strong>
        <img class="pocket-item-img" src="./img/${el.img}" alt="">
        <p class="pocket-item-name">${el.name}</p>
        <button class="pocket-item-btn" type="button">판매</button>
      `;
      items.innerHTML = itemTemplates;
      docsFrag.append(items);
    })
    this.itemSell.append(docsFrag);
  }
}

export default ItemSell;