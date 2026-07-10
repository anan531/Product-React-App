import React, { useState } from 'react'
import Navigation from './Navigation'

const ViewProduct = () => {

  const [data,changeData] = useState( 

    [
      {"name":"Primer","avatar":"https://www.sotrue.in/cdn/shop/files/00000001.jpg?v=1756963184","price":"$35"},
      {"name":"Sunscreen","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4X7-kwyZHxR6DPzuC4HRVQny-Z6D92L5wxbbzmspiQ&s=10","price":"$30"},
      {"name":"Foundation","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9s-OSD_JbGT60KnOTUZ7ndrt7zbQeFWf7HqbXa_vEeW7xIfoGENsVTE&s=10","price":"$25"},
      {"name":"Contour","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDM4mPRzTuMRH1p3FjKBU3MG6Vu2NGWUe-48Vz1ATpg&s=10","price":"$40"},
      {"name":"Blush","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLMsOhYHbj7x-koVM5rCES2_Js1qa_Sf9sElAIum8-w&s=10","price":"$33"},
      {"name":"Lipstick","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qlI1_JNH5oBXkYExpdj_bXzrIAMjCRQR7TJob9j-cg&s=10","price":"$38"}
    ]

  )

  return (
    <div>
<Navigation />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
    {data.map(

      (value,index) => {

                    return(

<div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<div class="card">
  <img src={value.avatar} height="410" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
    <p class="card-text">{value.price}</p>
    <a href="#" class="btn btn-secondary">ADD TO CART</a>
  </div>
</div>

        </div>

                    )
            }

    )}

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewProduct