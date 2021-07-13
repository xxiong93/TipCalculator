import React, {useState} from 'react';

function Bill() {

    const [cost, setCost] = useState(0);

    

    //an input field for user required
    //function for taking user input and setting a state
    let handleChange = (event) => {
            setCost({ query: event.target.value })
    }
    const mealCost = () => {
        
    }
    
    return(
        <div>
            <div>
                <form>
                    <label for='bill-amount'>How much did your meal cost?</label>
                    <input type='text' id='bill-amount' name='bill-amount' value={setCost.query} placeholder='Enter amount here'></input>
                </form>
            </div>



        </div>
    )

    
}

export default Bill;