const render = (component) => {
  Object.keys(component.data).map(
    data => {
      component.template = component.template.replace(
        `{{ ${data} }}`,
        component.data[data]
      )
    }
  );

  Object.keys(component.components).map(
    ic => {
      component.template = component.template.replace(
        `@${ic}`,
        // aqui que tá o problema
        render(component.components[ic])
      )
    }
  );

  return component.template;
}
class Minimalist {
  constructor(options = {}) {
    this.$el = options.$el || '#app';
    this.$component = options.$component;
    this.$components = {};
  }

  initialize() {
    document.write(render(this.$component))
  }
}

export default Minimalist;
