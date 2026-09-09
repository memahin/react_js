// export default function Card(props){
//     console.log(props);

//     return(
//         <div>
//             <p>First Name: {props.firstName} </p>
//             <p>Last Name: {props.lastName} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     ); 
// }

export default function Card(props){
    console.log(props);
    return(    
    <div>
            {props.children}
            <p>First Name: {props.firstName} </p>
            <p>Last Name: {props.lastName} </p>
            <p>Nick Name: {props.nickName}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}