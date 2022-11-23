//TODO: extends Component
//add singleton

import Component from "@App/Abstractions/Component";

//handle multiple notifications
const toast = (message: string): void => {
    let container: HTMLElement | null = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.style.position = "fixed";
        container.style.right = "0";
        container.style.top = "0";
        container.style.border = "1px solid red";

        document.body.appendChild(container);
    }

    const messageBox = document.createElement("div");
    messageBox.innerHTML = message;

    container.appendChild(messageBox);
};

class Toast extends Component {
    //TODO: handle single disposal, timeout
    private toasts: HTMLElement[];

    constructor(container?: HTMLElement) {
        super(container);
        this.toasts = [];
    }

    Add(message: string): string {
        const div = document.createElement("div");
        div.innerHTML = message;
        const id = Date.now().toString();
        div.id = id;
        this.toasts.push(div);

        this.element.appendChild(div);

        setTimeout(() => {
            this.Remove(id);
        }, 5000);

        return id;
    }

    Remove(id: string) {
        const el = this.element.querySelector(`#${id}`);
        el && el.remove();
    }

    BuildComponent() {
        const div = document.createElement("div");
        return div;
    }
}

export default new Toast();
