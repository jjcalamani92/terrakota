import { Link, NavLink } from 'react-router-dom';

interface Props {
  title: String;
  image: String;
}


export const CategoryCard = ({
  title,
  image,
}: Props) => {

  return (
    
        <NavLink to={`/${title}`} className="box">
          <img src={`${image}`} alt={`${title}`} />
          <p>{title}</p>
        </NavLink>
    
  );
};
