/**
 * Template render
 * @param {string} template mustache tags based template
 * @param {object} variables variables that'll be rendered
 */
const Render = (template, variables= {}) => {
  if (template === undefined)
    throw new Error('Template tag was not provided.');
  
  Object.keys(variables).map(key => {
    template = template.replace(`{{ ${key} }}`, variables[key]);
  });

  return template;
}

export default Render;
