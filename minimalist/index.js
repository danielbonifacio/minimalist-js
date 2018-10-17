const $ = require('jquery');

const render = (component) => {
  let template = renderMustache(component.template, component.data);

  component.components && Object.keys(component.components).map(
    ic => {
      template = template.replace(
        `@${ic}`,
        render(component.components[ic])
      )
    }
  );

  return template;
}

/**
 * Return a rendered template
 * @param {string} template The template that'll be rendered
 * @param {object} data component data
 */
const renderMustache = (template, data) => {
  const regex = /{{ .+? }}/gi;
  const stack = [];

  if (typeof template === 'object') {
    const node =
      document.querySelector(`[m-element=${template.target}`);
    
    if (node === undefined) {
      throw new Error('Template target was not provided');
    }

    template = node.outerHTML;
    node.parentElement.removeChild(node);
  }

  // pushes all commands into execution stack
  let result;
  while (result = regex.exec(template)) {
    stack.push(
      result.shift()
        // TODO: refactor this shit below
        .replace('{{ ', '')
        .replace(' }}', '')
      );
  };
  
  stack.map(instruction => {
    if (instruction in data) {
      Object.keys(data).map(
        key => {
          template = template.replace(
            `{{ ${key} }}`,
            data[key]
          )
        }
      );
    } else {
      try {
        eval(instruction)
      } catch (e) {
        throw new Error(e.message)
      }
    }
  });
  return template;
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
