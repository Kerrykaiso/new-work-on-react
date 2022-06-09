import React from "react";
import  ReactDOM  from "react";


function Form() {
    const [form, formData] =React.useState()
    
    return(
        <div>
            <form>
                <label for="hospital">Name of hospital</label>
              <input
               type="text"
               id="hospital"
              />
               <label for="identification">ID</label>
              <input
               type="text"
               id="identification"
              />
            </form>
        </div>
    )
}

ReactDOM.render(<Form />, document.getElementById("root2"))