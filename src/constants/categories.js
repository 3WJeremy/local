const categories = [
  {
    id: 'wealth',
    title: 'Wealth',
    secondary: [
      {
        id: 'banking',
        title: 'Banking',
        image: 'banking.png',
        tertiary: [
          { id: 'banks', title: 'Banks & Credit Unions', yelp: ['banks'] },
          { id: 'taxservices', title: 'Tax Services', yelp: ['taxservices'] },
          { id: 'loans', title: 'Loans', yelp: ['titleloans'] },
          {
            id: 'realestateloans',
            title: 'Real Estate Loans',
            yelp: ['titleloans', 'mortgagelenders'],
          },
          {
            id: 'businessfinancing',
            title: 'Business / Personal Loans',
            yelp: ['businessfinancing'],
          },
        ],
      },
      {
        id: 'retirement',
        title: 'Retirement & Investing',
        image: 'retirement.png',
        tertiary: [
          {
            id: 'eldercareplanning',
            title: 'Retirement Services',
            yelp: ['eldercareplanning'],
          },
          {
            id: 'lifeinsurance',
            title: 'Life Insurance',
            yelp: ['lifeinsurance'],
          },
          {
            id: 'healthinsurance',
            title: 'Health Insurance',
            yelp: ['healthinsurance'],
          },
          {
            id: 'homeinsurance',
            title: 'Home Insurance',
            yelp: ['homeinsurance'],
          },
        ],
      },
      {
        id: 'investing',
        title: 'Investing',
        image: 'investing.png',
        tertiary: [
          {
            id: 'investing',
            title: 'Investing',
            yelp: ['investing'],
          },
          {
            id: 'financialadvising',
            title: 'Financial Advising',
            yelp: ['financialadvising'],
          },
          {
            id: 'estateplanning',
            title: 'Estate Planning Attorneys',
            yelp: ['estateplanning'],
          },
          // { id: 'stockbrokers', title: 'Stock Brokers', yelp: ['investing'] },
          {
            id: 'wealthmanagers',
            title: 'Wealth Managers',
            yelp: ['financialadvising'],
          },
        ],
      },
      {
        id: 'services',
        title: 'Professional Services',
        image: 'professional-services.png',
        tertiary: [
          { id: 'accountants', title: 'Accountants', yelp: ['accountants'] },
          { id: 'notaries', title: 'Notary', yelp: ['notaries'] },
          { id: 'payroll', title: 'Payroll Services', yelp: ['payroll'] },
        ],
      },
      {
        id: 'home',
        title: 'Home Improvement',
        image: 'home-improvement.png',
        tertiary: [
          { id: 'hvac', title: 'Heating & Air Conditioning', yelp: ['hvac'] },
          {
            id: 'homeappliancerepair',
            title: 'Appliances & Repair',
            yelp: ['homeappliancerepair'],
          },
          {
            id: 'carpet_cleaning',
            title: 'Carpet Cleaning',
            yelp: ['carpet_cleaning'],
          },
          {
            id: 'masonry_concrete',
            title: 'Concrete',
            yelp: ['masonry_concrete'],
          },
          {
            id: 'contractors',
            title: 'Home General Contractors',
            yelp: ['contractors'],
          },
          {
            id: 'electricians',
            title: 'Electricians',
            yelp: ['electricians'],
          },
          {
            id: 'electronicsrepair',
            title: 'Electronics Repair',
            yelp: ['electronicsrepair'],
          },
          { id: 'flooring', title: 'Flooring', yelp: ['flooring'] },
          {
            id: 'garage_door_services',
            title: 'Garage Door Services',
            yelp: ['garage_door_services'],
          },
          {
            id: 'kitchenandbath',
            title: 'Kitchen & Bath Remodel',
            yelp: ['kitchenandbath'],
          },
          // {
          //   id: 'kitchensupplies',
          //   title: 'Kitchen Accessories',
          //   yelp: ['kitchensupplies']
          // },
          {
            id: 'interiordesign',
            title: 'Home Decor / Interior Design',
            yelp: ['interiordesign'],
          },
          {
            id: 'home_inspectors',
            title: 'Home Inspectors',
            yelp: ['home_inspectors'],
          },
          {
            id: 'securitysystems',
            title: 'Security Systems',
            yelp: ['securitysystems'],
          },
          {
            id: 'airductcleaning',
            title: 'Duct Cleaning',
            yelp: ['airductcleaning'],
          },
          {
            id: 'solarinstallation',
            title: 'Solar Installation',
            yelp: ['solarinstallation'],
          },
          { id: 'roofing', title: 'Roofing', yelp: ['roofing'] },
          {
            id: 'windowsinstallation',
            title: 'Windows Installation',
            yelp: ['windowsinstallation'],
          },
          {
            id: 'landscaping',
            title: 'Lawn & Garden',
            yelp: ['landscaping', 'lawnservices', 'gardening'],
          },
          { id: 'lighting', title: 'Lighting Fixtures', yelp: ['lighting'] },
          {
            id: 'outdoorlighting',
            title: 'Outdoor Lighting',
            yelp: ['lighting'],
          },
          {
            id: 'pest_control',
            title: 'Pest Control',
            yelp: ['pest_control'],
          },
          { id: 'plumbing', title: 'Plumbing', yelp: ['plumbing'] },
          {
            id: 'poolservice',
            title: 'Swimming Pool Contractor',
            yelp: ['poolservice'],
          },
          {
            id: 'poolcleaners',
            title: 'Pool Cleaners',
            yelp: ['poolcleaners'],
          },
          {
            id: 'treeservices',
            title: 'Tree Services',
            yelp: ['treeservices'],
          },
        ],
      },
      {
        id: 'auto',
        title: 'Automotive',
        image: 'automotive.png',
        tertiary: [
          { id: 'car_dealers', title: 'Car Dealers', yelp: ['car_dealers'] },
          { id: 'rv_dealers', title: 'RV Dealers', yelp: ['rv_dealers'] },
          { id: 'rvrental', title: 'RV Rentals', yelp: ['rvrental'] },
          {
            id: 'truckdealers',
            title: 'Truck Dealers',
            yelp: ['truckdealers'],
          },
          {
            id: 'usedcardealers',
            title: 'Used Cars',
            yelp: ['usedcardealers'],
          },
          {
            id: 'usedtruckdealers',
            title: 'Used Trucks',
            yelp: ['usedcardealers'],
          },
          { id: 'autobody', title: 'Auto Body', yelp: ['bodyshops'] },
          { id: 'oillube', title: 'Auto Oil & Lube', yelp: ['oilchange'] },
          {
            id: 'autopartssupplies',
            title: 'Auto Parts',
            yelp: ['autopartssupplies'],
          },
          { id: 'autorepair', title: 'Auto Repair', yelp: ['autorepair'] },
          { id: 'bodyshops', title: 'Body Shop', yelp: ['bodyshops'] },
          { id: 'brakerepair', title: 'Brake Repair', yelp: ['autorepair'] },
          { id: 'oilchange', title: 'Oil Change', yelp: ['oilchange'] },
          { id: 'tires', title: 'Tires', yelp: ['tires'] },
        ],
      },
    ],
  },
  {
    id: 'wisdom',
    title: 'Wisdom',
    secondary: [
      {
        id: 'education',
        title: 'Education',
        image: 'education.png',
        tertiary: [
          {
            id: 'collegecounseling',
            title: 'College Counseling',
            yelp: ['collegecounseling'],
          },
          {
            id: 'collegeuniv',
            title: 'Colleges & Universities',
            yelp: ['collegeuniv'],
          },
          {
            id: 'educationservices',
            title: 'Educational Services',
            yelp: ['educationservices'],
          },
          {
            id: 'religiousschools',
            title: 'Religious Schools',
            yelp: ['religiousschools'],
          },
          {
            id: 'specialed',
            title: 'Special Education',
            yelp: ['specialed'],
          },
          {
            id: 'specialtyschools',
            title: 'Specialty Schools',
            yelp: ['specialtyschools'],
          },
        ],
      },
      {
        id: 'legal',
        title: 'Legal Services',
        image: 'legal-services.png',
        tertiary: [
          {
            id: 'bankruptcy',
            title: 'Bankruptcy Attorney',
            yelp: ['bankruptcy'],
          },
          {
            id: 'braininjury',
            title: 'Brain Injury Attorney',
            yelp: ['personal_injury'],
          },
          {
            id: 'businesslawyers',
            title: 'Business Attorney',
            yelp: ['businesslawyers'],
          },
          {
            id: 'caraccident',
            title: 'Car Accident Attorney',
            yelp: ['personal_injury'],
          },
          {
            id: 'childcustody',
            title: 'Child Custody Attorney',
            yelp: ['divorce'],
          },
          { id: 'duilawyers', title: 'DUI Attorney', yelp: ['duilawyers'] },
          {
            id: 'employmentlawyers',
            title: 'Employment Attorney',
            yelp: ['employmentlawyers'],
          },
          { id: 'divorce', title: 'Family Attorney', yelp: ['divorce'] },
          {
            id: 'forclosurelawyers',
            title: 'Foreclosure Attorney',
            yelp: ['realestatelawyers'],
          },
          {
            id: 'immigrationlawyers',
            title: 'Immigration Attorney',
            yelp: ['immigrationlawyers'],
          },
          {
            id: 'general_litigation',
            title: 'Litigation Attorney',
            yelp: ['general_litigation'],
          },
          {
            id: 'medicallaw',
            title: 'Medical Malpractice Attorney',
            yelp: ['medicallaw'],
          },
          {
            id: 'motorcycle_injury',
            title: 'Motorcycle Accident Attorney',
            yelp: ['personal_injury'],
          },
          {
            id: 'personal_injury',
            title: 'Personal Injury Attorney',
            yelp: ['personal_injury'],
          },
          {
            id: 'realestatelawyers',
            title: 'Real Estate Attorney',
            yelp: ['realestatelawyers'],
          },
          { id: 'taxlaw', title: 'Tax Attorney', yelp: ['taxlaw'] },
          {
            id: 'truckingaccidentlaw',
            title: 'Trucking Accident Attorney',
            yelp: ['workerscomplaw'],
          },
          {
            id: 'workerscomplaw',
            title: 'Workers Compensation Attorney',
            yelp: ['workerscomplaw'],
          },
        ],
      },
      {
        id: 'estateplanning',
        title: 'Estate Planning',
        image: 'estate-planning.png',
        tertiary: [
          {
            id: 'estateplanningattorney',
            title: 'Estate Planning Attorney',
            yelp: ['estateplanning'],
          },
          {
            id: 'willstrustsprobates',
            title: 'Probate Attorney',
            yelp: ['willstrustsprobates'],
          },
          {
            id: 'assetprotection',
            title: 'Asset Protection',
            yelp: ['estateplanning'],
          },
        ],
      },
    ],
  },
  {
    id: 'wellness',
    title: 'Wellness',
    secondary: [
      {
        id: 'medical',
        title: 'Medical',
        image: 'medical.png',
        tertiary: [
          {
            id: 'audiologist',
            title: 'Audiologist',
            yelp: ['audiologist', 'hearingaidproviders'],
          },
          {
            id: 'cosmeticdentists',
            title: 'Cosmetic Dentists',
            yelp: ['cosmeticdentists'],
          },
          {
            id: 'cosmeticsurgeons',
            title: 'Cosmetic Surgeons',
            yelp: ['cosmeticsurgeons'],
          },
          { id: 'dentists', title: 'Dentists', yelp: ['dentists'] },
          { id: 'oncologist', title: 'Oncologists', yelp: ['oncologist'] },
          { id: 'physicians', title: 'Doctors', yelp: ['physicians'] },
          {
            id: 'earnosethroat',
            title: 'Ear Nose & Throat',
            yelp: ['earnosethroat'],
          },
          // {
          //   id: 'endocrinologists',
          //   title: 'Endodontists',
          //   yelp: ['endocrinologists']
          // },
          { id: 'familydr', title: 'Family Practice', yelp: ['familydr'] },
          {
            id: 'generaldentistry',
            title: 'General Dentistry',
            yelp: ['generaldentistry'],
          },
          {
            id: 'hearingaidproviders',
            title: 'Hearing Aid Providers',
            yelp: ['hearingaidproviders', 'audiologists'],
          },
          { id: 'naturopathic', title: 'Holistic', yelp: ['naturopathic'] },
          {
            id: 'homehealthcare',
            title: 'Home Health Care',
            yelp: ['homehealthcare'],
          },
          { id: 'hospice', title: 'Hospice', yelp: ['hospice'] },
          {
            id: 'massage_therapy',
            title: 'Massage Therapy',
            yelp: ['massage_therapy'],
          },
          {
            id: 'medcenters',
            title: 'Medical Centers',
            yelp: ['medcenters'],
          },
          { id: 'neurologist', title: 'Neurologist', yelp: ['neurologist'] },
          {
            id: 'nutritionists',
            title: 'Nutritionists',
            yelp: ['nutritionists'],
          },
          {
            id: 'occupationaltherapy',
            title: 'Occupational Therapy',
            yelp: ['occupationaltherapy'],
          },
          {
            id: 'opthamalogists',
            title: 'Ophthalmologists',
            yelp: ['opthamalogists'],
          },
          {
            id: 'optometrists',
            title: 'Optometrists',
            yelp: ['optometrists'],
          },
          {
            id: 'oralsurgeons',
            title: 'Oral Surgeons',
            yelp: ['oralsurgeons'],
          },
          {
            id: 'orthopedists',
            title: 'Orthopedists',
            yelp: ['orthopedists'],
          },
          {
            id: 'pediatric_dentists',
            title: 'Pediatric Dentists',
            yelp: ['pediatric_dentists'],
          },
          {
            id: 'periodontists',
            title: 'Periodontists',
            yelp: ['periodontists'],
          },
          {
            id: 'physicaltherapy',
            title: 'Physical Therapy',
            yelp: ['physicaltherapy'],
          },
          {
            id: 'rehabilitation_center',
            title: 'Rehabilitation Center',
            yelp: ['rehabilitation_center'],
          },
          { id: 'sportsmed', title: 'Sports Medicine', yelp: ['sportsmed'] },
          { id: 'urologists', title: 'Urologists', yelp: ['urologists'] },
          {
            id: 'weightlosscenters',
            title: 'Weight Loss Centers',
            yelp: ['weightlosscenters'],
          },
          {
            id: 'plasticsurgeons',
            title: 'Plastic Surgery',
            yelp: ['plasticsurgeons'],
          },
          {
            id: 'sleepspecialists',
            title: 'Sleep Apnea',
            yelp: ['sleepspecialists'],
          },
        ],
      },
      {
        id: 'entertainment',
        title: 'Entertainment',
        image: 'entertainment.png',
        tertiary: [
          { id: 'eventservices', title: 'Events', yelp: ['eventservices'] },
          { id: 'galleries', title: 'Art Galleries', yelp: ['galleries'] },
          { id: 'festivals', title: 'Festivals', yelp: ['festivals'] },
          {
            id: 'jazzandblues',
            title: 'Jazz & Blues',
            yelp: ['jazzandblues'],
          },
          // { id: 'artmuseums', title: 'Museums', yelp: ['artmuseums'] },
          { id: 'opera', title: 'Opera & Ballet', yelp: ['opera'] },
          { id: 'theater', title: 'Performing Arts', yelp: ['theater'] },
          {
            id: 'stadiumsarenas',
            title: 'Stadiums & Arenas',
            yelp: ['stadiumsarenas'],
          },
          {
            id: 'musicvenues',
            title: 'Bands & Groups',
            yelp: ['musicvenues'],
          },
          { id: 'bartenders', title: 'Bartenders', yelp: ['bartenders'] },
          { id: 'catering', title: 'Caterers', yelp: ['catering'] },
          { id: 'comedyclubs', title: 'Comedians', yelp: ['comedyclubs'] },
          { id: 'magic', title: 'Magic', yelp: ['magicians'] },
        ],
      },
      {
        id: 'activities',
        title: 'Activities',
        image: 'activities.png',
        tertiary: [
          { id: 'gun_ranges', title: 'Gun Ranges', yelp: ['gun_ranges'] },
          { id: 'magicians', title: 'Magicians', yelp: ['magicians'] },
          {
            id: 'eventplanning',
            title: 'Party & Event Planning',
            yelp: ['eventplanning'],
          },
          {
            id: 'partyequipmentrentals',
            title: 'Party Equipment Rentals',
            yelp: ['partyequipmentrentals'],
          },
          {
            id: 'partysupplies',
            title: 'Party Supplies',
            yelp: ['partysupplies'],
          },
          {
            id: 'wedding_planning',
            title: 'Wedding Planning',
            yelp: ['wedding_planning'],
          },
        ],
      },
      {
        id: 'travel',
        title: 'Travel',
        image: 'travel.png',
        tertiary: [
          { id: 'carrental', title: 'Car Rental', yelp: ['carrental'] },
          { id: 'resorts', title: 'Resorts', yelp: ['resorts'] },
          { id: 'tours', title: 'Tours', yelp: ['tours'] },
          { id: 'transport', title: 'Transportation', yelp: ['transport'] },
          {
            id: 'travelservices',
            title: 'Travel Services',
            yelp: ['travelservices'],
          },
          {
            id: 'vacation_rentals',
            title: 'Vacation Rentals',
            yelp: ['vacation_rentals'],
          },
          { id: 'hotels', title: 'Hotel', yelp: ['hotels'] },
        ],
      },
      {
        id: 'pets',
        title: 'Pets',
        image: 'pets.png',
        tertiary: [
          { id: 'petboarding', title: 'Pet Boarding', yelp: ['petboarding'] },
          { id: 'groomer', title: 'Pet Groomers', yelp: ['groomer'] },
          { id: 'petservices', title: 'Pet Services', yelp: ['petservices'] },
          { id: 'petstore', title: 'Pet Stores', yelp: ['petstore'] },
          {
            id: 'pet_training',
            title: 'Pet Training',
            yelp: ['pet_training'],
          },
          { id: 'vet', title: 'Veterinarians', yelp: ['vet'] },
        ],
      },
      {
        id: 'beauty',
        title: 'Beauty',
        image: 'beauty.png',
        tertiary: [
          { id: 'medicalspa', title: 'Medical Spas', yelp: ['medicalspa'] },
          { id: 'skincare', title: 'Skin Care', yelp: ['skincare'] },
          { id: 'hairloss', title: 'Hair Restoration', yelp: ['hairloss'] },
          // {
          //   id: 'cosmeticskin',
          //   title: 'Cosmetic Skin Treatments',
          //   yelp: ['estheticians'],
          // },
          // {
          //   id: 'estheticians',
          //   title: 'Skin tightening and lifting',
          //   yelp: ['estheticians'],
          // },
        ],
      },
      // {
      //   id: 'general',
      //   title: 'General Products',
      //   image: '',
      //   tertiary: [
      //     { id: 'appliances', title: 'Appliances', yelp: ['appliances'] },
      //     { id: 'artsupplies', title: 'Art Supplies', yelp: ['artsupplies'] },
      //     { id: 'bookstores', title: 'Bookstores', yelp: ['bookstores'] },
      //     {
      //       id: 'goldbuyers',
      //       title: 'Coin & Stamp Dealers',
      //       yelp: ['goldbuyers']
      //     },
      //     { id: 'gyms', title: 'Gyms & Fitness Clubs', yelp: ['gyms'] },
      //     {
      //       id: 'discountstore',
      //       title: 'Discount Stores',
      //       yelp: ['discountstore']
      //     },
      //     { id: 'education', title: 'Education', yelp: ['education'] },
      //     { id: 'fashion', title: 'Fashion', yelp: ['fashion'] },
      //     { id: 'furniture', title: 'Furniture Stores', yelp: ['furniture'] },
      //     { id: 'gunsmith', title: 'Guns & Ammo', yelp: ['gunsmith'] },
      //     {
      //       id: 'homeandgarden',
      //       title: 'Home & Garden',
      //       yelp: ['homeandgarden']
      //     },
      //     { id: 'jewelry', title: 'Jewelry', yelp: ['jewelry'] },
      //     {
      //       id: 'kitchenandbath',
      //       title: 'Kitchen & Bath',
      //       yelp: ['kitchenandbath']
      //     },
      //     { id: 'mattresses', title: 'Mattresses', yelp: ['mattresses'] },
      //     {
      //       id: 'musicinstrumentservices',
      //       title: 'Music Shop',
      //       yelp: ['musicinstrumentservices']
      //     },
      //     { id: 'outdoorgear', title: 'Outdoor Gear', yelp: ['outdoorgear'] },
      //     {
      //       id: 'photographystores',
      //       title: 'Photography Store',
      //       yelp: ['photographystores']
      //     },
      //     {
      //       id: 'poolbilliards',
      //       title: 'Pool & Billiards',
      //       yelp: ['poolbilliards']
      //     },
      //     { id: 'sportgoods', title: 'Sporting Goods', yelp: ['sportgoods'] },
      //     {
      //       id: 'formalwear',
      //       title: 'Tuxedos & Formal Wear',
      //       yelp: ['formalwear']
      //     },
      //     {
      //       id: 'cellphoneaccessories',
      //       title: 'Cell Phone Accessories',
      //       yelp: ['cellphoneaccessories']
      //     },
      //     { id: 'copyshops', title: 'Custom Printing', yelp: ['copyshops'] },
      //     { id: 'shopping', title: 'Online Shopping', yelp: ['shopping'] }
      //   ]
      // }
    ],
  },
];

export default categories;
