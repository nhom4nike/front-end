import React from 'react';
import '@/styles/home.css';
import ManipulationItem from '@/components/home/manipulation_item.jsx';
import { Link } from 'react-router-dom';
import dataFeatures from '../contants/menu';
import Header from '../components/header/header';

export default function HomePage() {
  // const router = useHistory();
  // const location = useLocation();
  return (
    <>
      <Header />
      <div className="home__content">
        {dataFeatures.map((element) => (
          <Link to={element.route} style={{ marginRight: '1rem' }}>
            <ManipulationItem
              key={`manipulation${element.route}`}
              data={element}
            />
          </Link>
        ))}
      </div>
    </>
  );

  // function navigate(route) {
  //   if (location.pathname !== route) router.push(route);
  // }
}
