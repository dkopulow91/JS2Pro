// новый

class ItemsList{
    consructor() {
        this.items = [];
    }
    
    getItems() {
        this.items = [
            { name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
			{ name: 'T-Shirt', price: 52 },
        ];
        
        this.items = this.items.map(item => new Item(item.name, item.price));
    }
    
    
    total() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }
    
    render() {
        const itemsHtml = this.items.map(item => item.render());
        
        return itemsHtml.join(' ');
    }
}

class Item {
    consructor(name, price) {
        this.price = price;
        this.name = name;
    }
    
    render() {
        return `<div class="item"><h3>${this.name}</h3><p>${this.price}</p></div>`
    }
}

const items = new ItemsList();
items.getItems();
alert(items.total());

document.querySelector('.goods').innerHTML = itemsHtml.render();


