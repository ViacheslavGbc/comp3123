import React from "react";

const LikeButton = () => {
    let button=[]
    for (let i = 0; i < 10; i++) {
        button.push(<button>Like!</button>) 
    }
    return button;
}

export default LikeButton;


