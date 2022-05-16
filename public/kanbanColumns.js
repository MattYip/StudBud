
import kanbanAPI from ".kanbanAPI.js";
import DropZone from "./DropZone.js";
import Item from "./Item.js";

export default class Column {
    constructor(id, title) {
        const topDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanbanColTitle");
        this.elements.items = this.elements.root.querySelector(".kanbanItems");
        this.elements.addItem = this.elements.root.querySelector(".addItem");

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
        this.elements.items.appendChild(topDropZone);

        this.elements.addItem.addEventListener("click", () => {
            const newItem = kanbanAPI.insertItem(id, "");

            this.renderItem(newItem);
        });

        kanbanAPI.getItems(id).forEach(item => {
            this.renderItem(item);
        });
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
			<div class="kanbanColumn">
				<div class="kanbanColTitle"></div>
				<div class="kanbanItems"></div>
				<button class="addItem" type="button">+</button>
			</div>
		`).children[0];
    }

    renderItem(data) {
        const item = new Item(data.id, data.content);

        this.elements.items.appendChild(item.elements.root);
    }
}