import * as React from "react";
import { observer } from "mobx-react";
import store from "../store/Rootstore";
import styled from "styled-components";


// function itemListItems() {
//   const styleTest ={
//     background: `${store.bgColor}`,
//     width:`${store.widthValue}`,
//     height:`${store.heightValue}`,
    
//   }

  
//   return (
//     <>
//       {store.lists.map((list) => (
//          <div className="Productintro" style={styleTest} key={list.id}>
//            <div className="productnamewrapper" >
//              {list.category}
//            </div>
//             <img className="productImg" src={list.image}/>
//             <div className="" >{list.title}</div>
//             <div className="">{list.price}</div>
//             <div className="">{list.description}</div>
//           <button onClick={store.WebViewStyled}>
//             배경색변경
//           </button>
         
//           </div>
//       ))}
//     </>
//   );
// }

// const ObserveditemListItems = observer(itemListItems);
// // item List 에  mobx 의 oberved로  itemlistItem을 끌어와줌

function itemList() {
  return (
    <>
      <p>Todo List</p>
        <div className="ProductWrapper">
      
      {/* <ObserveditemListItems/>   */}
          </div>

    </>
  );
}

export default itemList;