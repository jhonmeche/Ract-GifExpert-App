import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {
  const [state, setstate] = useState( {
  data: [],
  loading: true
  })

  useEffect( () => {

    getGifs(category)
    .then(imgs => {

        setstate({
          data: imgs,
          loadinf: false
        });
    })

  }, [category] )

  return state; // {data [], loading:true };
}
