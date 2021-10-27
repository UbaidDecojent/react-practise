import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";


const Signup = () => {

    const [signup, setSignup] = useState(false)
    const clickCross = () => {
        // setSignup(!signup)
    }
    return (
        <Fragment>
        <div className="signup">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ cursor: "pointer" }} onClick={()=>clickCross(true)}>
                <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-width="2">
                    <path d="M6 17.5L17.246 6M17.246 17.5L6 6" />
                </g>
            </svg>
        </div>
        {/* {   
            signup?
            <div className="signup">

            </div>
            :null
        } */}
        </Fragment>

    )
}

export default Signup;