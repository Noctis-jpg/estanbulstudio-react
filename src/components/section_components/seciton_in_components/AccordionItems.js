import {React, useState} from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionComponent = () => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleAccordionItem = (itemId) => {
      if (expandedItems.includes(itemId)) {
        setExpandedItems(expandedItems.filter((id) => id !== itemId));
      } else {
        setExpandedItems([...expandedItems, itemId]);
      }
    };
  return (
    <div className='DDs'>
   <Accordion>
      <AccordionItem>
        <AccordionItemButton onClick={() => toggleAccordionItem('item1')}>
          Accordion Item #1
        </AccordionItemButton>
        <AccordionItemPanel className={expandedItems.includes('item1') ? 'accordion-panel open' : 'accordion-panel'}>
          Content for Accordion Item #1
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemButton onClick={() => toggleAccordionItem('item2')}>
          Accordion Item #2
        </AccordionItemButton>
        <AccordionItemPanel className={expandedItems.includes('item2') ? 'accordion-panel open' : 'accordion-panel'}>
          Content for Accordion Item #2
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemButton onClick={() => toggleAccordionItem('item3')}>
          Accordion Item #3
        </AccordionItemButton>
        <AccordionItemPanel className={expandedItems.includes('item3') ? 'accordion-panel open' : 'accordion-panel'}>
          Content for Accordion Item #3
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default AccordionComponent;