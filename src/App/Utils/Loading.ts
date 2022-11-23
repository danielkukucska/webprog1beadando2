import Component from "@App/Abstractions/Component";

//TODO: extends Component
class LoadingModal extends Component {
    private message: string;

    constructor(message: string, container?: HTMLElement) {
        super(container);
        this.message = message;
    }

    setMessage(message: string) {
        this.message = message;
        this.element = this.BuildComponent();
    }

    BuildComponent() {
        const div = document.createElement("div");

        // this.container.style.display = "flex";
        // this.container.style.alignItems = "center";
        // this.container.style.justifyContent = "center";
        // this.container.style.position = "fixed";
        // this.container.style.top = "0";
        // this.container.style.left = "0";
        // this.container.style.height = "100vh";
        // this.container.style.width = "100vw";

        div.innerHTML = `
            <div>${this.message}</div>
        `;

        // this.element = tr;

        return div;
    }
}

class LoadingModal2 {
    private container: HTMLElement;
    private messagePanel: HTMLElement;
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "loadingModal";
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "center";
        this.container.style.position = "fixed";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.height = "100vh";
        this.container.style.width = "100vw";

        const backDrop = document.createElement("div");
        backDrop.style.background = "rgba(255,255,255,0.3)";

        backDrop.style.zIndex = "1000";
        this.container.appendChild(backDrop);

        this.messagePanel = document.createElement("div");
        this.messagePanel.style.zIndex = "1001";
    }

    public Show(message: string) {
        this.messagePanel.innerText = message;
        this.container.appendChild(this.messagePanel);

        document.body.appendChild(this.container);
    }

    public Hide() {
        this.container.remove();
    }
}

export default LoadingModal;
