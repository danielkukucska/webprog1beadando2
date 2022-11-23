abstract class Component {
    private container: HTMLElement;
    protected element: HTMLElement;

    constructor(container?: HTMLElement) {
        this.container = container || document.body;
        this.element = this.BuildComponent();
    }

    abstract BuildComponent(): HTMLElement;

    public Render() {
        this.container.appendChild(this.element);
    }

    public Dispose(){
        this.element.remove();
    }
}

export default Component;
