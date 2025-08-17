import React from 'react';
import { Accordion } from './reactive-ui';

const App = () => {
  const accordionItems = [
    {
      title: 'What is React?',
      content:
        'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.',
    },
    {
      title: 'Why use React?',
      content:
        'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    },
    {
      title: 'How do you create components in React?',
      content:
        'Components can be created as functions or as classes. Function components are simpler and just return JSX, while class components have more features like state and lifecycle methods (though with hooks, function components can now do almost everything class components can).',
    },
  ];

  return (
    <div className="app">
      <h1>React Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;