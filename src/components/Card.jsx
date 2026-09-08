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

export default function Card(firstName, lastName, nickName, age){
    
    return<>
    (    <div>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>Nick Name: {nickName}</p>
            <p>Age: {age}</p>
        </div>
    );
    </>
}