import { useState, useEffect } from "react";

interface IListGroup {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: IListGroup) {
  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() =>{
    console.log(`${items[selectedIndex] ? items[selectedIndex] : "Nothing"} is selected`);
  }, [selectedIndex]);


  if(items.length === 0){
    return <p>This list is empty</p>;
  }

  const itemObjects = items.map((item, index) => ({
    id: index,
    title: item,
  }));

  const renderItem = () => {
    return itemObjects.map((item) => (
      <li
        className={
          "list-group-item" + (selectedIndex === item.id ? " active" : "")
        }
        key={item.title}
        onClick={() => {
          setSelectedIndex(item.id);
          onSelectItem(item.title);
        }}
      >
        {item.title}
      </li>
    ))
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {renderItem()}
      </ul>
    </>
  );
}

export default ListGroup;
