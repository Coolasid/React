
import "./groceryList.css"

function GroceryList({ title, status, id, markComplete, deleteGrocery }) {
  return (
    <div id="GL" className={ status ? "green" : "red"}>
        <ul>
            <li>

                {title} - {status ? "Done" : "Not Done"}
                <button
                    onClick={() => {
                        markComplete(id);
                    }}
                    >
                    Mark Complete
                </button>
                <button onClick={()=>{
                    deleteGrocery(id);
                }}>Delete</button>

            </li>
        </ul>
    </div>
  );
}

export {GroceryList}

