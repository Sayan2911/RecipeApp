import {useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import { fetchData } from '../Service';
import Loader from './Loader';
// import { Route, useNavigate } from 'react-router-dom';
import Error from './Error';


function RecipeLists() {

    const [searchterm , setSearchterm]=useState('')
    const [query, setQuery] = useState("kheer")
    const [data, setData] = useState(" ")
    const [tempData, settempData] = useState(null)
    // const navigate=useNavigate()
    // let tempData=0

     const recipe= (search)=>{
        fetchData(search)
        .then((response)=>{
            setData(response)
           
        })
    }
  
    useEffect(() => {
        fetchData(query)
        .then((response)=>{
            setData(response)
       
        })
    },[] )
    
  

  return (



        <div className='container3'>
            
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input type="text" onChange={(e)=>setSearchterm(e.target.value)} value={searchterm} placeholder='Search' />
                <button onClick={()=>{recipe(searchterm); console.log(searchterm);}} ><BsSearch /></button>
            </div> 
        </div>
       

 

{/* make it from here just make sure the recipe is showing correctly */}

{data!==false?
(<div>
    {tempData!==null?

    (<div className='border border-blue-900 border-t-1 h-full w-full bg-slate-500 p-16 rounded-3xl'>
        <h1> {data.hits[tempData].recipe.label}</h1>
        <h1> {Math.floor(data.hits[tempData].recipe.calories)} calories</h1>
        <h1> {data.hits[tempData].recipe.ingredientLines.map((index)=>{
            // eslint-disable-next-line react/jsx-key
            return <li className='list-none'>{index}</li>
        })} </h1>
    </div>)
    :
    (<div>
        click on a image to see a recipe ingredients
     </div>)}
</div>):

(console.log("fetching  data"))

}





     {data!=false?(<div className='flexbox grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-5 justify-self-center'>
    {data.count!==0?(<>{ data.hits.map((item,index)=>(
        
        <div key={index} className='flexItem '   onClick={()=>{
            settempData(index)
            // console.log(data.hits[tempData].recipe);
          
        }} >
            
            <div className='img-wrapper' >
            <img src={item.recipe.image} alt={item.recipe.label }/>
        </div>
        <p>{item.recipe.label}</p>
    </div>
    ))
   }    </>):(<Error/>)}
</div>
):(<Loader/>)}   
    </div>
   

 )
}

export default RecipeLists  