import { Fragment } from "react/jsx-runtime";

function ListGroup() {
    let items = ['India ','New York','London','Tokyo','Paris'];
    

  // if(items.length == 0)
  //   return (
  //   <>
  //       <h1>List</h1>
  //       <p>No Item Found</p>;
  //       </>
  //       );


  return (
    <>
        <h1>List</h1>
        { items.length === 0 ? <p>No item found </p> : null }
        <ul className="list-group">
        {items.map((item , index) => (
            <li className = "list-group-item "key ={item} onClick={() => console.log(item, index)}>{item}</li>
            ))}
    </ul>
    </>
  );
}

export default ListGroup;
