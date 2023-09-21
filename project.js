var form=document.getElementById('addForm')

form.addEventListener('submit',addOrders)

function addOrders(e){
    e.preventDefault();
    myOrder={
        price:document.getElementById('price').value,
        dish:document.getElementById('dish').value,
        table:document.getElementById('category').value
    }
    axios.
        post("https://crudcrud.com/api/d478e1547c194e52bbaa3c6a4a179cc4/order",myOrder).
        then(res=>showUseronScreen(res.data)).
        catch(err=>console.log(err))
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.
    get("https://crudcrud.com/api/d478e1547c194e52bbaa3c6a4a179cc4/order").
    then(res=>{
        for(var i=0;i<res.data.length;i++){
            showUseronScreen(res.data[i])
        }
    }).
    catch(err=>console.log(err))
})

function showUseronScreen(obj){
    const parentElem=document.getElementById(obj.table)
    console.log(obj.dish)
    var li=document.createElement('li')
    li.textContent=obj.price+' - '+obj.dish;
    var deletebtn=document.createElement('input')
    deletebtn.type='button'
    deletebtn.value='delete'
    deletebtn.onclick=() =>{
        // localStorage.removeItem(obj.userEmail)
        axios.
            delete(`https://crudcrud.com/api/d478e1547c194e52bbaa3c6a4a179cc4/order/${obj._id}`).
            then(res=>console.log(res)).
            catch(err=>console.log(err))
        parentElem.removeChild(li)
    }
    li.appendChild(deletebtn)
    parentElem.appendChild(li)
}