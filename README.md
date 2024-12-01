# Compound Components Pattern

## Descrição

O **Compound Components Pattern** é um padrão de design em React que promove a composição de componentes, permitindo que diferentes partes da interface sejam modularizadas e gerenciadas de forma independente. Este padrão é ideal para criar APIs de componentes flexíveis, onde o consumidor pode decidir como estruturar e organizar os subcomponentes.

---

## Características

### 1. Composição Modular
- Os componentes são compostos por subcomponentes independentes que trabalham juntos.
- Permite maior personalização na estrutura e organização da interface.

### 2. Comunicação Contextual
- O estado e a lógica podem ser compartilhados entre os subcomponentes usando `React.Context`, reduzindo a necessidade de passar props manualmente.

### 3. Reutilização e Flexibilidade
- Cada subcomponente tem uma única responsabilidade, o que facilita o entendimento, manutenção e reutilização.
- O padrão incentiva um design limpo e desacoplado.

---

## Exemplo Prático

Este exemplo implementa um modal utilizando o padrão Compound Components, onde os subcomponentes são compostos de maneira flexível dentro do componente principal:
