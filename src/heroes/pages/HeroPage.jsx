import { Navigater, useParams } from 'react-router-dom';
import { getHeroById } from ¨./helpers;

export const HeroPage = () => {

  const { heroId } = useParams();

  const hero = getHeroById(id);

  if(!hero) {
    return <Navigate to="/marvel" />
  }

  return (
   <>
     <h1>
      {
         hero.superhero
      }  
    </h1>
   </>
  )
}
