import React from 'react';
import '@\styles\home.css';
import ManipulationItem from '@\components\home\manipulation_item.jsx';
import dataFeatures from '../contants/menu';
import Header from '../components/header/header';
// import { useHistory, useLocation } from 'react-router-dom';

export default function HomePage() {
  // const router = useHistory();
  // const location = useLocation();
  return (
    <>
      <Header />
      <div className="home__content">
        {dataFeatures.map((element) => (
          <ManipulationItem
            key={`manipulation${element.route}`}
            data={element}
          />
        ))}
      </div>
    </>
  );

  // function navigate(route) {
  //   if (location.pathname !== route) router.push(route);
  // }
}
