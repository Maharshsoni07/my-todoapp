import React, {useState} from 'react'
import {BiPlusMedical  } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { BiCommentEdit } from 'react-icons/bi';

const Todo = () =>{
    
    const[inputData,setInputData] = useState('');
    const[items, setItems] = useState([]);
    const[toggleSubmit,setTogglesubmit] =useState(true);
    const[isEditItems,setIsEditItem] = useState(null);
    
    const additems = () =>{
        if(!inputData){
            alert("PLEASE FILL YOUR BUCKET LIST !!!");

        } 
        else if(inputData && !toggleSubmit){
            setItems(
                items.reverse().map((elements)=>{
                    if (elements.id===isEditItems){
                        return {...elements,name:inputData}
                    }
                    return elements;
                    
                    
                })   
            )
           
            setTogglesubmit(true);
            setInputData('');
            setIsEditItem(null);
            
        }else{
            const allInputData ={ id: new Date().getTime().toString(),name:inputData}
            setItems([...items,allInputData]);
            setInputData('')
            console.log(inputData)
        }
        
    }

    const edititem = (id)=>{
        let newEdititems = items.find((elements)=>{
            return elements.id===id
        });
        console.log(newEdititems);
        setTogglesubmit(false);
        setInputData(newEdititems.name);
        setIsEditItem(id);
    }

     const deleteitem =(index)=>{
        //  console.log(id);
         const updateItems = items.filter((elements) =>{
             return index !==elements.id;

         })
         setItems(updateItems);
     }
     
     

    const removeAll =() =>{
        setItems([]);
        setInputData('');
    }
    return(
        <div className="mainn">
            <div className = "main ">
                <div className ="submain"></div>
                <figcaption className="captions">WIRTE YOUR BUCKET LIST</figcaption>
               

             </div>
            
                <div className ="Iput_items">
                <input type ="text" placeholder=" Icehotel, Skydiving, Rafting  ...." value={inputData} onChange={(e)=>setInputData (e.target.value)} />
                {
                    toggleSubmit ? <i><BiPlusMedical className="plus" size ="2em" title="Add items" onClick={additems}/> </i> :
                    <BiCommentEdit  className="update" size ="2em" title="Update Items" onClick={additems} /> 
                    

                }
              
             </div>

                <div className ="All-items">
                {
                    items.map((elements) =>{
                    return(
                        <div className="each-items" key={elements.id}>
                            <h1>{elements.name}</h1> 
                            <div>
                            
                            <BiCommentEdit size="2em" className="update"   title="Update Items" onClick={() =>edititem(elements.id)} /> 
                            <MdDeleteForever size="2em"  className="delete" title="Delete Items" onClick={() =>deleteitem(elements.id)} /> 
                         </div>
                        </div>
                    )
                    })
                }

               
            </div>
           <div className="all items "> 
               <button  onClick={removeAll}> CLEAR ALL</button>
           </div>
    </div>
    )
    
}

export default Todo;