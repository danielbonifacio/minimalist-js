const Render = function(template, values = {}) {
  /**
   * Caso não informe um template,
   * finaliza a execução do script
   */
  if (!template) {
    throw new Error('Forneça um template para renderizar!');
  }

  Object.keys(values).map(key => {
    template = template.replace(`{{ ${key} }}`, values[key]);
  });

  return template;
};

const template = `
  <h1>{{ titulo }}</h1>
  <p>{{ paragrafo }}</p>
  <a href="{{ link }}">Link</a>
`;

document.write(
  Render(template, {
    titulo: 'Olá, Mundo!',
    paragrafo: 'Oi, sou um parágrafo.',
    link: '//danielbonifacio.com.br',
  })
);