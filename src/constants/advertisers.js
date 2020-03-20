const advertisers = [
  {
    id: 'baywooddentalgroup',
    title: 'Baywood Dental Group',
    logo: 'baywood-dental-group.png',
    address: ['24121 Baywood Lane', 'Valencia, CA 91355'],
    phone: '(661) 291-1200',
    website: 'https://baywooddentalgroup.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/dr-sepi-fatahi-valencia-dentist-lives-a-childhood-dream/'
    ],
    categories: [
      'cosmeticdentists',
      'dentists',
      'generaldentistry',
      'oralsurgeons',
      'orthopedists',
      'pediatric_dentists',
      'periodontists'
    ]
  },
  {
    id: 'millenniumdental',
    title: 'Millennium Dental',
    logo: 'millennium-dental.png',
    address: [
      '14629 Ventura Boulevard',
      'Sherman Oaks, CA 91403',
      '',
      '414 N. Camden Drive #1240',
      'Beverly Hils, CA 90210'
    ],
    phone: '(818) 574-5100 (310) 734-8525',
    website: 'http://millenniumdental.net',
    articles: ['https://wealthwisdomwellness.us/issue-2/dr-eddie-siman/'],
    categories: [
      'cosmeticdentists',
      'dentists',
      'generaldentistry',
      'oralsurgeons',
      'orthopedists',
      'pediatric_dentists',
      'periodontists'
    ]
  },
  {
    id: 'comfortkeepers',
    title: 'Comfort Keepers',
    logo: 'comfort-keepers.png',
    address: ['23900 Lyons Avenue', 'Santa Clarita, CA 91351'],
    phone: '(661) 287-4200',
    website: 'http://www.comfortkeepers.com/',
    email: 'myles@comfortkeepers.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/aging-with-power-myles-mcnamara-comfort-keepers-in-home-care-help-seniors-stay-home/'
    ],
    categories: ['homehealthcare', 'seniorcenters']
  },
  {
    id: 'myshoesjourney',
    title: 'My Shoes Journey, Marguerite Berg',
    logo: 'my-shoes-my-journey.png',
    phone: '(661) 714-3193',
    website: 'http://www.myshoesmyjourney.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/life-coach-marguerite-berg-for-each-person-in-life-its-my-shoes-my-journey/'
    ],
    categories: ['lifecoach']
  },
  {
    id: 'scvadvancedaudiology',
    title: 'SCV Advanced Audiology',
    logo: 'advanced-audiology.png',
    address: ['23822 Valencia Boulevard, Ste. 103', 'Valencia, CA 91355'],
    phone: '(661) 253-EARS (3277)',
    website: 'https://scvadvancedaudiology.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/all-in-the-family-nola-aronson-advanced-audiology-help-the-peeples-hear-better/'
    ],
    categories: ['audiologist', 'hearingaidproviders']
  },
  {
    id: 'audiologyassociates',
    title: 'Audiology Associates',
    logo: 'audiology-associates.png',
    address: ['23838 Valencia Blvd, Suite 100', 'Valencia, CA 91355'],
    phone: '(661) 284-1900',
    website: 'https://www.audiologyassociates.net/',
    articles: ['https://wealthwisdomwellness.us/issue-2/can-you-hear-me-now/'],
    categories: ['audiologist', 'hearingaidproviders']
  },
  {
    id: 'tyrabeaversintegratedhealth',
    title: 'Tyra Beavers Integrated Health',
    logo: 'tyra-beavers.png',
    address: ['250 N. Robertson, Suite 5', 'Beverly Hills, CA 90211'],
    phone: '(310) 859-7696',
    website: 'https://tyrabeaversdc.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-3/health-coach-brings-hipness-to-his-healing-practice/'
    ],
    categories: ['chiropractors']
  },
  {
    id: 'helmvisiongroup',
    title: 'Helm Vision Group',
    logo: 'helm-vision-group.png',
    address: ['27420 Tourney Road, Suite 100', 'Valencia, CA 91355'],
    phone: '(661) 259-3937',
    website: 'http://www.helmvisiongroup.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/dr-craig-j-helm-takes-a-closer-look-at-summer-eye-injuries/'
    ],
    categories: [
      'physicians',
      'opthamologists',
      'retinaspecialists',
      'optometrists',
      'laserlasikeyes'
    ]
  },
  {
    id: 'investorsbusinessdailyamysmith',
    title: "Investor's Business Daily, Amy Smith",
    logo: 'investors-business-daily.png',
    website: 'https://www.investors.com/stocksuccessbook',
    email: 'amy.smith@investors.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-4/beyond-fang-ibds-amy-smith-spotlights-four-high-performing-stocks/'
    ],
    categories: ['investing']
  },
  {
    id: 'totalfinancialsolutions',
    title: 'Total Financial Solutions',
    logo: 'total-financial-solutions.png',
    address: ['24322 Main Street', 'Newhall, CA 91321'],
    phone: '(800) 990-7344',
    website: 'http://tfswealth.com',
    email: 'info@tfswealth.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-2/you-can-retire-in-style-without-paying-fees-or-losing-your-principal/'
    ],
    categories: ['lifeinsurance']
  },
  {
    id: 'riglergroupatalexbrownraymondjamescollinrigler',
    title: 'Rigler Group at Alex Brown | Raymod James, Collin Rigler',
    logo: 'rbc-wealth-management.png',
    address: ['2361 Rosecrans Avenue, Suite 460', 'El Segundo, CA 90245'],
    phone: '(310) 647-8041',
    email: 'collin.rigler@rbc.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-2/collin-rigler-wealth-manager-with-a-competitive-advantage/'
    ],
    categories: ['financialservices', 'financialadvising']
  },
  {
    id: 'advisorygroupwestbobdonaldson',
    title: 'Advisory Group West, Bob Donaldson',
    logo: 'advisory-group-west.png',
    address: ['330 N. Brand Blvd., Ste. 910', 'Glendale, CA 91203'],
    phone: '(818) 241-9061',
    website: 'http://www.advisorygroupwest.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-2/want-to-create-financial-fitness-for-life/'
    ],
    categories: ['financialservices', 'financialadvising']
  },
  {
    id: 'wellsfargoadvisorfredwachtel',
    title: 'Wells Fargo Advisor, Fred Wachtel',
    logo: 'wells-fargo.png',
    address: ['24180 Lyons Avenue', 'Newhall, CA 91321'],
    phone: '(310) 502-2752',
    articles: [
      'https://wealthwisdomwellness.us/issue-3/fred-wachtel-helps-families/'
    ],
    categories: ['financialservices', 'financialadvising']
  },
  {
    id: 'theofficeofjorgeperazzo',
    title: 'The Office of Jorge Perazzo',
    logo: 'jorge-perazzo.png',
    address: ['25350 Magic Mountain Parkway Suite 300', 'Valencia, CA 91355'],
    phone: '(661) 481-2219',
    website: 'https://www.jorgeperazzo.com/',
    articles: [
      'https://wealthwisdomwellness.us/issue-3/family-flying-and-federer/'
    ],
    categories: ['taxservices']
  },
  {
    id: 'compassrealestatejeffbrandolino',
    title: 'Compass Real Estate, Jeff Brandolino',
    logo: 'compass.png',
    phone: '(661) 600-9410',
    website: 'https://brandolinogroup.com/',
    email: 'jeff@brandolinogroup.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-3/jeff-brandolino-on-building-a-brand/'
    ],
    categories: [
      'commercialrealestate',
      'mortgagebrokers',
      'propertymgmt',
      'realestateagents',
      'apartmentagents',
      'realestatesvcs'
    ]
  },
  {
    id: 'progressiveinsulationandwindows',
    title: 'Progressive Insulation and Windows',
    logo: 'progressive-insulation-windows.png',
    address: ['9750 Topanga Canyon Blvd.', 'Chatsworth, CA 91311'],
    phone: '(800) 500-6200',
    website: 'http://www.progressiveiw.com/',
    email: 'sales@proiw.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-1/progressive-insulation-windows/'
    ],
    categories: ['insulationinstallation', 'windowsinstallation']
  },
  {
    id: 'ecolatermiteandpestcontrolsuefries',
    title: 'Ecola Termite and Pest Control, Sue Fries',
    logo: 'ecola-termite-pest-control.png',
    address: ['15314 Devonshire Street', 'Mission Hills, CA 91345'],
    phone: '(818) 920-7301',
    articles: [
      'https://wealthwisdomwellness.us/issue-1/as-gentle-as-a-butterfly/'
    ],
    categories: ['pest_control']
  },
  {
    id: 'vanessaterzian',
    title: 'Vanessa Terzian',
    logo: 'terzian-law-partners.png',
    address: ['727 Foothill Blvd.', 'La Canada, Flintridge, CA 91011'],
    phone: '(818) 864-6174',
    website: 'http://vterzianlaw.com/',
    email: 'vanessa@vterzianlaw.com',
    articles: [
      'https://wealthwisdomwellness.us/issue-1/building-lasting-family-wealth/'
    ],
    categories: ['estateplanning', 'willstrustsprobates', 'taxlaw']
  }
];

export default advertisers;
