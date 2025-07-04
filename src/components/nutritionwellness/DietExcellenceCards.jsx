import React from 'react';

// SVG Icons Component
const DietIcon = ({ id }) => {
  const icons = {
    1: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="none">
        <rect width="64" height="64" fill="#151310"/>
        <path d="M64,0H0V64H64V0Z" fill="#151310"/>
        <path 
          d="M19,20.14c0-.55,.45-1,1-1h24c.55,0,1,.45,1,1v9.19c0,3.35-1.52,6.51-4.14,8.6l-8.41,6.71c-.37,.29-.89,.29-1.26,0l-8.17-6.7c-2.55-2.09-4.02-5.21-4.02-8.5v-9.28Z" 
          fill="none" 
          stroke="#ab965d"
        />
        <path 
          d="M27.56,23.14c2.09,0,3.5,1.25,4.13,2.13,.12,.16,.37,.16,.49,0,.62-.88,1.94-2.13,4.07-2.13,3.08,0,4.75,2.51,4.75,4.96,0,3-4.44,6.51-8.89,10.86-.1,.1-.25,.1-.35,0-2.8-2.71-8.76-7.21-8.76-10.87,0-2.16,1.54-4.96,4.56-4.96Z" 
          fill="none" 
          stroke="#ab965d"
        />
        <path 
          d="M28,28.59l3.53,3.86c.1,.11,.26,.11,.36,0l7.11-7.31" 
          fill="none" 
          stroke="#ab965d" 
          strokeLinecap="round"
        />
      </svg>
    ),
    2: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
         <rect width="110" height="110" fill="#151310" />
        <path d="M68.75,42.89l14.48-14.48" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.9"/>
        <path d="M26.77,84.69l13.25-13.25" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.9"/>
        <path d="M68.61,41.97c.8,3.05-.11,7.59-3.16,10.63-3.05,3.05-7.59,3.94-10.63,3.14-.8-3.05,.11-7.59,3.16-10.63,3.05-3.05,7.59-3.94,10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M68.61,55.86c.8,3.05-.11,7.59-3.16,10.63-3.05,3.05-7.59,3.94-10.63,3.14-.8-3.05,.11-7.59,3.16-10.63,3.05-3.05,7.59-3.94,10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M40.45,41.97c-.8,3.05,.11,7.59,3.16,10.63s7.59,3.94,10.63,3.14c.8-3.05-.11-7.59-3.16-10.63-3.05-3.05-7.59-3.94-10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M54.54,46.67c2.73-1.58,5.27-5.45,5.27-9.76s-2.59-8.16-5.29-9.74c-2.73,1.58-5.27,5.45-5.27,9.76s2.59,8.16,5.29,9.74Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M40.45,55.86c-.8,3.05,.11,7.59,3.16,10.63,3.05,3.05,7.59,3.94,10.63,3.14,.8-3.05-.11-7.59-3.16-10.63-3.05-3.05-7.59-3.94-10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M68.61,68.99c.8,3.05-.11,7.59-3.16,10.63-3.05,3.05-7.59,3.94-10.63,3.14-.8-3.05,.11-7.59,3.16-10.63,3.05-3.05,7.59-3.94,10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
        <path d="M40.45,68.99c-.8,3.05,.11,7.59,3.16,10.63,3.05,3.05,7.59,3.94,10.63,3.14,.8-3.05-.11-7.59-3.16-10.63-3.05-3.05-7.59-3.94-10.63-3.14Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="2.64"/>
      </svg>
    ),
    3: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="none">
        <rect width="64" height="64" fill="#151310"/>
        <path d="M64,0H0V64H64V0Z" fill="#151310"/>
        <path d="M36.6,29.59s2.91,4.72,2.91,7.41v9.27c0,.75-.6,1.35-1.35,1.35h-12.33c-.75,0-1.35-.6-1.35-1.35v-9.27c0-2.71,2.91-7.41,2.91-7.41" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
        <path d="M34.53,47.61v-9.71c0-1.39-1.13-2.51-2.52-2.51h-.03c-1.39,0-2.51,1.12-2.51,2.51v9.71" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.86"/>
        <path d="M39.56,37.91c0-1.39-1.12-2.51-2.51-2.51s-2.51,1.12-2.51,2.51v9.71" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.86"/>
        <path d="M31.99,12.57h3.52l-3.51,4.75-3.51-4.75h3.49Z" fill="#ab965d"/>
        <path d="M32.07,29.51h-5.2c-.45,0-.83-.32-.83-.72v-2.13c0-1.84,1.71-3.33,3.81-3.33h4.29c2.11,0,3.81,1.49,3.81,3.33v2.13c0,.4-.37,.72-.83,.72h-5.07Z" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
        <path d="M24.44,37.91c0-1.39,1.12-2.51,2.51-2.51s2.51,1.12,2.51,2.51v9.71" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.86"/>
      </svg>
    ),
    4: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="none">
        <path d="M64,0H0V64H64V0Z" fill="#151310"/>
        <path d="M19.66,44.32l24.64-24.64" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.83"/>
        <path d="M31.71,20.78h5.09c.75,0,1.26,.57,1.26,1.05,0,.43-.23,.82-.74,1.03-.51,.21-1.79,.27-1.79,.94s2.93,5.02,2.93,7.22v10.07c0,1.18-.96,2.14-2.14,2.14h-9.22c-1.18,0-2.14-.96-2.14-2.14v-10.07c0-2.2,2.93-6.54,2.93-7.22s-1.27-.73-1.79-.94c-.52-.21-.74-.6-.74-1.03,0-.48,.52-1.05,1.26-1.05h5.09Z" fill="#151310" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
        <path d="M33.57,43.22c.61,0,1.38-.87,1.38-2v-10.18c0-2.08-2.74-6.14-2.74-7.5" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.86"/>
      </svg>
    ),
    5: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" fill="#151310"/>
        <path d="M64,0H0V64H64V0Z" fill="#151310"/>
        <path d="M15.63,48.47L48.61,15.57" fill="none" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="0.83"/>
        <path d="M36.56,25.73h-10.52v10.52h10.52v-10.52Z" fill="#151310"/>
        <path d="M30.07,31.46h-10.87v10.87h10.87v-10.87Z" fill="#151310" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
        <path d="M45.04,31.46h-10.87v10.87h10.87v-10.87Z" fill="#151310" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
        <path d="M37.56,20.6h-10.87v10.87h10.87v-10.87Z" fill="#151310" stroke="#ab965d" strokeMiterlimit="10" strokeWidth="1.15"/>
      </svg>
    ),
    6: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" fill="#151310"/>
        <path d="M48 0H0V48H48V0Z" fill="#151310"/>
        <path d="M23.9997 37.59C26.8297 35.08 32.0697 31.62 32.0697 24.15C32.0697 18.06 27.8297 13.28 23.9997 10.78C20.1697 13.28 15.9297 18.06 15.9297 24.15C15.9297 31.61 21.1697 35.07 23.9997 37.59Z" stroke="#AB965D" strokeWidth="1.15" strokeMiterlimit="10"/>
        <path d="M23.9805 10.78L24.0205 37.59" stroke="#AB965D" strokeWidth="0.86" strokeMiterlimit="10"/>
        <path d="M23.9805 31.81L32.0605 23.73" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
        <path d="M23.9805 25.65L30.9105 18.72" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
        <path d="M23.9805 19.49L28.5605 14.9" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
        <path d="M24.0097 31.81L15.9297 23.73" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
        <path d="M24.0101 25.65L17.0801 18.72" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
        <path d="M24.0097 19.49L19.4297 14.9" stroke="#AB965D" strokeWidth="0.83" strokeMiterlimit="10"/>
      </svg>
    )
  };

  return <div className="absolute bottom-0 left-0 w-16 h-16">{icons[id]}</div>;
};

// Main Component
const DietExcellenceCards = () => {
  const dietCards = [
    {
      id: 1,
      title: "American Heart Association",
      description: "Over 20 Boar’s Head deli meats display the American Heart Association’s distinctive Heart-Check mark.",
      image: "/images/nutrition-wellness/Thumbnail_AHA.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Gluten Free",
      description: "Good flavor that's always gluten-free. All Boar's Head meats, cheeses, condiments, and hummus provide you and your family the best of gluten-free goodness.",
      image: "/images/nutrition-wellness/Thumbnail_GlutenFree.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Lower Sodium",
      description: "We offer a wide range of flavorful lower sodium deli meats and cheeses, never compromising on quality or taste.",
      image: "/images/nutrition-wellness/lower_sodium.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Milk Free & Lactose Free",
      description: "Whether you're lactose intolerant or on a restricted diet, our products are available in milk free and lactose free options.",
      image: "/images/nutrition-wellness/Thumbnail_MilkFree.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Sugar Free",
      description: "Exceptional sugar free choices for those who wish to reduce or exclude sugar from their diet.",
      image: "/images/nutrition-wellness/Thumbnail_SugarFree.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "Suitable for a Vegetarian Diet",
      description: "Enjoy our selection of quality Boar's Head products that are suitable for a vegetarian diet",
      image: "/images/nutrition-wellness/VegetarianDiet.jpg",
      link: "#"
    }
  ];

  return (
    <div className="font-[minion-pro-display,serif] w-full py-16 sm:px-6">
      <div className="max-w-7xl px-6 mx-auto">
        <h2 className="text-[28px] lg:text-[42px] text-center mb-16 lg:mb-20 text-[#f7eedf]">Excellence for Every Diet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          {dietCards.map((card) => (
            <div key={card.id} className="group relative">
              {/* Image with icon */}
              <div className="overflow-hidden text-[#f7eedf] relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <DietIcon id={card.id} />
              </div>
              
              {/* Text content */}
              <div className="mt-8">
                <h3 className="text-xl lg:text-3xl text-[#f7eedf] mb-2">{card.title}</h3>
                <p className="lg:w-2/3 mb-6 text-[#f7eedf] text-base lg:text-lg antialiased font-normal lining-nums proportional-nums ">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietExcellenceCards;