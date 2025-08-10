import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];
function App() {
  return (
    <div className="App">
      <Accordion data={faqs}></Accordion>
    </div>
  );
}
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={i}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={22}
        key="test 1"
      >
        hello
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 2"
        num={23}
        key="test 2"
      >
        Ololade
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default App;
