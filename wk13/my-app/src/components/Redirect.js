
const handleRedirectClick = () => {
    const { history } = "/";//props;
    if(history) history.push("/");
    else console.log(`history not found in props`); 
 };
 
 export default handleRedirectClick;