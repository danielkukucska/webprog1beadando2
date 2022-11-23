abstract class Component {
    private container: HTMLElement;
    protected element: HTMLElement;

    constructor(elementType: keyof HTMLElementTagNameMap, container?: HTMLElement) {
        this.container = container || document.body;
        // this.element = this.BuildComponent();
        this.element = document.createElement(elementType);
    }

    abstract BuildComponent(): void;
    // abstract BuildComponent(): HTMLElement;
    
    public Render() {
        this.BuildComponent();
        this.element && this.container.appendChild(this.element);
    }

    public Dispose(){
        this.element && this.element.remove();
    }
}

export default Component;
