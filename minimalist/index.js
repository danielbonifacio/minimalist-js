class Minimalist {
  constructor(options = {}) {
    this.$el = options.$el || '#app';
    this.$component = options.$component;
    this.$components = {};
  }

  /**
   * Register a component into element scope
   * @param {object} component 
   */
  registerComponent(component) {
    this.$components[component.name] = component.component;
  }

  /**
   * Template render
   * @param {string} template mustache tags based template
   * @param {object} variables variables that'll be rendered
   */
  render(component) {
    if (component === undefined)
      throw new Error('Component was not provided.');
    
    if (component.template === undefined)
      throw new Error('Template tag was not provided.');
    
    Object.keys(component.data).map(key => {
      component.template = component.template.replace(`{{ ${key} }}`, component.data[key]);
    });

    this.renderComponents(component.components);

    Object.keys(this.$components).map(toRenderComponent => {
      component.template = component.template
        .replace(
          `@${toRenderComponent}`,
          this.renderComponent(this.$components[toRenderComponent])
        );
    });

    return component.template;
  }

  /**
   * Render components inside another component
   * @param {object} components components that'll be rendered into main component
   */
  renderComponents(components) {
    Object.keys(components).map(component => {
      this.registerComponent({
        name: component,
        component: components[component],
      });
    });
  }

  renderComponent(component) {
    if (component === undefined)
      throw new Error('Component was not provided.');
    
    if (component.template === undefined)
      throw new Error('Template tag was not provided.');

    console.log(component.template);
    
    Object.keys(component.data).map(key => {
      component.template = component.template.replace(`{{ ${key} }}`, component.data[key]);
    });

    return component.template;
  }

  initialize() {
    document.write(this.render(this.$component))
  }
}

export default Minimalist;
