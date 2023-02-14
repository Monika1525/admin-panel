const user = [
  {
    id: 116,
    firstName: "Cherylynne",
    lastName: "Wolz",
    email: "PWahl@vitae.gov",
    phone: "(877)540-1376",
    address: {
      streetAddress: "2864 Sed Ave",
      city: "Whitehouse",
      state: "CO",
      zip: "75971",
    },
    description:
      "fringilla rutrum ipsum vitae elementum aliquam nullam tortor nunc id sollicitudin amet orci amet porta orci sagittis magna lacus nunc orci morbi egestas pulvinar sed amet et dui egestas magna massa egestas",
  },
  {
    id: 88,
    firstName: "Michele",
    lastName: "Mangat",
    email: "MNeese@lacus.net",
    phone: "(899)636-1515",
    address: {
      streetAddress: "3515 Consectetur Ct",
      city: "Granite Falls",
      state: "NM",
      zip: "56268",
    },
    description:
      "tellus sapien pharetra placerat nullam id dui pulvinar dolor mattis etiam egestas nunc aliquam lacus elit morbi morbi elit magna sollicitudin id id mattis elit aliquam sit amet convallis amet lacus eros",
  },
  {
    id: 77,
    firstName: "Nathaniel",
    lastName: "Anderson",
    email: "MKerkemeyer@consectetur.com",
    phone: "(787)508-9215",
    address: {
      streetAddress: "2335 Porttitor Ln",
      city: "Smithers",
      state: "ID",
      zip: "42256",
    },
    description:
      "at massa porttitor neque magna malesuada vitae velit massa malesuada magna magna velit vestibulum pharetra curabitur ac nec eros ipsum nec magna nunc amet eros amet at dui vitae sed dolor odio",
  },
  {
    id: 298,
    firstName: "Darci",
    lastName: "Garrod",
    email: "DRosenberg@nec.net",
    phone: "(134)444-3788",
    address: {
      streetAddress: "3193 Libero Ln",
      city: "Wahiawa",
      state: "TX",
      zip: "12313",
    },
    description:
      "vestibulum ac donec at et placerat neque ante ac sed lacus nec tortor mi lorem magna sollicitudin rutrum at in lacus mattis sollicitudin in sed elit augue dolor etiam tincidunt amet non",
  },
  {
    id: 323,
    firstName: "Kim",
    lastName: "Bastian",
    email: "RMarin@massa.ly",
    phone: "(512)494-8481",
    address: {
      streetAddress: "1462 Consectetur Ln",
      city: "Anchorage",
      state: "MD",
      zip: "52516",
    },
    description:
      "elementum hendrerit etiam et sed dolor lacus convallis amet sed tortor id pharetra elementum ipsum ac dolor dolor odio tincidunt elit vitae non sagittis dolor non mattis amet at malesuada eros placerat",
  },
  {
    id: 333,
    firstName: "Conrade",
    lastName: "Charleston",
    email: "TMartinez@fringilla.com",
    phone: "(426)013-5037",
    address: {
      streetAddress: "5877 Fringilla Rd",
      city: "Guelph",
      state: "FL",
      zip: "52396",
    },
    description:
      "dolor tellus dui etiam sagittis dolor sit aenean pharetra elit lacus libero mattis magna et porta ac lacus nunc sollicitudin hendrerit molestie et consectetur amet tincidunt neque elit aenean amet velit vitae",
  },
  {
    id: 798,
    firstName: "Guadelupe",
    lastName: "Murphy",
    email: "DPalterman@sapien.org",
    phone: "(504)227-8232",
    address: {
      streetAddress: "1498 Pretium Ln",
      city: "Montreal",
      state: "CO",
      zip: "13095",
    },
    description:
      "nec vitae sed eget nec suspendisse libero pharetra nunc convallis risus sed magna vel etiam ac hendrerit turpis magna vestibulum mattis pretium nullam lacus ac odio lacus sed magna scelerisque tincidunt vestibulum",
  },
  {
    id: 465,
    firstName: "Marek",
    lastName: "Broughton",
    email: "CSymes@placerat.gov",
    phone: "(946)339-3817",
    address: {
      streetAddress: "6885 Nunc Rd",
      city: "Wichita",
      state: "CO",
      zip: "80171",
    },
    description:
      "dolor aenean dui dolor amet sit libero scelerisque ac consectetur turpis sapien etiam suspendisse vel dolor aenean odio scelerisque aliquam fringilla porttitor sed tortor dolor ac lectus lacus sed facilisis nunc risus",
  },
  {
    id: 311,
    firstName: "Dainius",
    lastName: "Roethlisberger",
    email: "JKeltner@dui.net",
    phone: "(320)560-0663",
    address: {
      streetAddress: "7017 Sed Ct",
      city: "Hewitt",
      state: "MS",
      zip: "61114",
    },
    description:
      "aliquam nec tempor sed mi ipsum magna dolor tempor eget id massa eros vitae tortor id egestas tincidunt vitae porta pulvinar tempor aliquam quis orci sollicitudin mattis aliquam consectetur et odio vitae",
  },
  {
    id: 339,
    firstName: "Madonna",
    lastName: "Willman",
    email: "AStar@et.ly",
    phone: "(488)246-1469",
    address: {
      streetAddress: "9613 Turpis Ave",
      city: "Atlanta",
      state: "SC",
      zip: "97166",
    },
    description:
      "elit neque pulvinar augue sed ac lectus sollicitudin sapien sed odio vitae adipiscing lacus amet sollicitudin amet lectus ac dui elementum sed scelerisque orci vestibulum magna id libero vel turpis sollicitudin risus",
  },
  {
    id: 384,
    firstName: "Kerry",
    lastName: "Willman",
    email: "SReith@dolor.com",
    phone: "(127)641-3428",
    address: {
      streetAddress: "8623 Adipiscing Ave",
      city: "Middleburg",
      state: "GA",
      zip: "69128",
    },
    description:
      "amet eget nullam sed adipiscing non id curabitur id elementum nec id sed ac ante porttitor aliquam sapien ac donec pulvinar nec dolor et sit pulvinar etiam velit mattis aliquam sagittis convallis",
  },
  {
    id: 921,
    firstName: "Keisha",
    lastName: "Casariego",
    email: "SRoazen@curabitur.com",
    phone: "(681)197-1159",
    address: {
      streetAddress: "6534 Porta Ct",
      city: "Quincy",
      state: "AZ",
      zip: "64846",
    },
    description:
      "scelerisque convallis elementum vestibulum nec turpis facilisis lacus at consectetur aliquam morbi aenean egestas magna aliquam mi vitae adipiscing nec aliquam non dolor at turpis magna donec scelerisque at pharetra tincidunt curabitur",
  },
  {
    id: 641,
    firstName: "Roslyn",
    lastName: "Flamme",
    email: "JRoman@sagittis.gov",
    phone: "(442)176-8894",
    address: {
      streetAddress: "7534 Et Rd",
      city: "Augusta",
      state: "WV",
      zip: "41442",
    },
    description:
      "ipsum rutrum dolor vel nunc elementum ac mi adipiscing id elit sit tincidunt libero magna curabitur quis magna in convallis hendrerit adipiscing egestas tincidunt sollicitudin risus et augue quis pulvinar ac elementum",
  },
  {
    id: 159,
    firstName: "Gueorgui",
    lastName: "Slate",
    email: "PKohn@ac.ly",
    phone: "(759)725-6692",
    address: {
      streetAddress: "4099 Sapien St",
      city: "Albuquerque",
      state: "VT",
      zip: "43427",
    },
    description:
      "porta elementum vestibulum ante hendrerit in sed convallis aenean nullam magna convallis ac aliquam sapien consequat placerat odio porttitor sit suspendisse molestie et elit aliquam lorem sapien molestie orci turpis vitae porta",
  },
  {
    id: 751,
    firstName: "Jose",
    lastName: "Hobson",
    email: "ARagusa@ac.com",
    phone: "(830)613-7288",
    address: {
      streetAddress: "2681 Massa Rd",
      city: "Columbia",
      state: "UT",
      zip: "43988",
    },
    description:
      "consequat in amet vestibulum et sapien risus convallis sit at turpis molestie tempor lacus vitae sit etiam non ac nullam malesuada magna dolor pulvinar eget ante at augue at ante velit molestie",
  },
  {
    id: 457,
    firstName: "Leon",
    lastName: "Budgell",
    email: "LGolaner@curabitur.org",
    phone: "(744)268-7409",
    address: {
      streetAddress: "8253 Nunc Rd",
      city: "Rural",
      state: "CO",
      zip: "43111",
    },
    description:
      "molestie rutrum nec ipsum sed adipiscing turpis eget tincidunt magna tincidunt morbi egestas vel dolor pharetra nec ipsum massa aliquam velit lorem in magna elit odio magna mi rutrum adipiscing pharetra nullam",
  },
  {
    id: 859,
    firstName: "Mohammed",
    lastName: "Kessel",
    email: "RGeouque@tempor.gov",
    phone: "(894)504-7922",
    address: {
      streetAddress: "5216 Vestibulum St",
      city: "Hampstead",
      state: "WV",
      zip: "97094",
    },
    description:
      "sollicitudin consectetur ipsum vitae massa sit magna sit massa vestibulum at tempor sit tortor massa ac neque lectus vitae vestibulum sed in egestas scelerisque elementum sit non aliquam dolor ipsum lorem magna",
  },
  {
    id: 482,
    firstName: "Rachel",
    lastName: "Tuggle",
    email: "NHerrick@consectetur.ly",
    phone: "(663)649-4305",
    address: {
      streetAddress: "3144 Augue Ave",
      city: "San Antonio",
      state: "TN",
      zip: "20854",
    },
    description:
      "et placerat id sit pulvinar adipiscing magna aliquam vel nec sollicitudin rutrum velit dolor consequat neque ante eget amet lacus ac sit etiam eros adipiscing dolor quis tincidunt lorem dui massa elementum",
  },
  {
    id: 248,
    firstName: "Christine",
    lastName: "Schuessler",
    email: "ALilly@convallis.ly",
    phone: "(231)087-7999",
    address: {
      streetAddress: "6171 Vel Dr",
      city: "Villa Rica",
      state: "HI",
      zip: "35973",
    },
    description:
      "ipsum elementum nec risus sollicitudin vestibulum lectus sit dolor sollicitudin ac sit aliquam odio consequat massa nullam facilisis ipsum nec placerat placerat magna augue id massa placerat pharetra rutrum odio non sollicitudin",
  },
  {
    id: 629,
    firstName: "Ben",
    lastName: "Norris",
    email: "DAllison@lacus.org",
    phone: "(267)461-8452",
    address: {
      streetAddress: "2351 Sed Dr",
      city: "Louisville",
      state: "NY",
      zip: "94977",
    },
    description:
      "mattis vel mattis consequat vitae mattis tellus tincidunt sit magna rutrum etiam neque ac ipsum eget sollicitudin dolor id tortor placerat at quis sed porttitor dolor ac amet donec eros tincidunt tellus",
  },
  {
    id: 118,
    firstName: "Irmaa",
    lastName: "Holben",
    email: "YSteward@risus.com",
    phone: "(320)856-0271",
    address: {
      streetAddress: "8698 Lacus Ave",
      city: "Winfield",
      state: "KY",
      zip: "24884",
    },
    description:
      "nullam mi amet sit nec tincidunt ac eget nec dui sollicitudin fringilla at sed turpis tincidunt donec magna consequat risus porta ipsum dui vitae sed at ac lectus vestibulum lacus tortor sit",
  },
  {
    id: 490,
    firstName: "Maki",
    lastName: "Cullen",
    email: "MGeddes@magna.gov",
    phone: "(176)141-7819",
    address: {
      streetAddress: "2687 Sed Ave",
      city: "Chambersburg",
      state: "MN",
      zip: "73808",
    },
    description:
      "rutrum mattis consectetur suspendisse morbi tincidunt sagittis lacus porta et mattis porta lacus neque odio convallis vestibulum tortor sapien vestibulum nec lectus lacus nec non vitae tellus pretium amet vitae magna placerat",
  },
  {
    id: 81,
    firstName: "Kantanzia",
    lastName: "Gilkerson",
    email: "HGrubbs@magna.io",
    phone: "(576)397-1906",
    address: {
      streetAddress: "5208 Tortor St",
      city: "Hazel Park",
      state: "KS",
      zip: "61334",
    },
    description:
      "ipsum quis tortor dui sit massa velit nunc dolor tellus et nec suspendisse dolor sollicitudin odio ipsum dolor scelerisque aliquam sollicitudin tincidunt lectus sed ac magna amet placerat mattis quis convallis mi",
  },
  {
    id: 715,
    firstName: "Gene",
    lastName: "Barnhorn",
    email: "HDellabadia@odio.net",
    phone: "(644)155-9977",
    address: {
      streetAddress: "6358 Tortor Rd",
      city: "Piedmont",
      state: "MO",
      zip: "14738",
    },
    description:
      "aliquam sollicitudin elementum odio massa augue augue porta molestie morbi dolor massa sit pharetra turpis donec suspendisse turpis consequat id sit suspendisse sed libero amet neque vitae placerat mattis aenean elit dolor",
  },
  {
    id: 821,
    firstName: "Amanda",
    lastName: "Brennan",
    email: "JQuintana@ac.net",
    phone: "(707)256-5211",
    address: {
      streetAddress: "9650 Dolor Ave",
      city: "Richmond",
      state: "OH",
      zip: "74411",
    },
    description:
      "ac hendrerit amet pharetra adipiscing at quis quis sit vitae magna aenean malesuada pulvinar mi consectetur consectetur vel massa vitae suspendisse turpis egestas sed odio vestibulum tortor ac vestibulum massa tortor at",
  },
  {
    id: 964,
    firstName: "Steve",
    lastName: "Richards",
    email: "SPosen@scelerisque.net",
    phone: "(458)414-2233",
    address: {
      streetAddress: "5486 Sed St",
      city: "Seaside",
      state: "IL",
      zip: "45513",
    },
    description:
      "turpis egestas amet sit sit lectus consequat tempor augue libero sapien odio magna vitae mattis nec velit tortor nullam aliquam vel tortor eros malesuada scelerisque sagittis in pulvinar risus libero ac egestas",
  },
  {
    id: 907,
    firstName: "Miriam",
    lastName: "Galvez",
    email: "CPlunkett@amet.io",
    phone: "(698)388-2924",
    address: {
      streetAddress: "126 Porta Ln",
      city: "Bridgewater",
      state: "NH",
      zip: "48766",
    },
    description:
      "et augue nullam rutrum sit facilisis sit scelerisque et massa vel pharetra pulvinar tortor ac fringilla quis tortor dolor ante suspendisse tincidunt amet mi eros placerat tellus lacus augue suspendisse sit mi",
  },
  {
    id: 293,
    firstName: "Cleola",
    lastName: "Wallace",
    email: "KAngell@nec.net",
    phone: "(107)006-0804",
    address: {
      streetAddress: "7530 Consequat Ave",
      city: "Douglasville",
      state: "AL",
      zip: "65733",
    },
    description:
      "etiam molestie donec placerat sit sed libero morbi vestibulum nullam libero consequat rutrum ante ipsum scelerisque velit tincidunt sapien eget ipsum lacus massa sit neque magna sed ipsum ac lacus vel eros",
  },
  {
    id: 246,
    firstName: "janie",
    lastName: "Knost",
    email: "AWeakliem@mattis.net",
    phone: "(778)475-8599",
    address: {
      streetAddress: "9869 Fringilla Ln",
      city: "Newington",
      state: "NM",
      zip: "30152",
    },
    description:
      "tincidunt facilisis elit turpis curabitur mi facilisis pulvinar convallis massa pharetra scelerisque aliquam sit ipsum mi aenean risus sollicitudin sed egestas adipiscing pretium neque curabitur ante sit odio tincidunt sed orci dolor",
  },
  {
    id: 602,
    firstName: "Jephter",
    lastName: "Whetstone",
    email: "MLang@odio.ly",
    phone: "(792)911-9901",
    address: {
      streetAddress: "8479 Risus Rd",
      city: "Winter Park",
      state: "CA",
      zip: "20646",
    },
    description:
      "sed pulvinar elit amet rutrum sagittis sed placerat sollicitudin quis magna egestas vitae massa odio et hendrerit porta in et id pulvinar elit tellus sit sit morbi etiam tincidunt dolor facilisis lacus",
  },
  {
    id: 723,
    firstName: "Lora",
    lastName: "Sapp",
    email: "ERichard@lorem.io",
    phone: "(871)972-4016",
    address: {
      streetAddress: "6980 Nec Rd",
      city: "Ligonier",
      state: "PA",
      zip: "99491",
    },
    description:
      "rutrum ac et magna elit fringilla porta consectetur pharetra morbi ante orci mattis ante tincidunt sed placerat lorem adipiscing vitae mattis mattis lorem magna risus magna sit sed tincidunt sollicitudin lacus placerat",
  },
  {
    id: 449,
    firstName: "Shunita",
    lastName: "Szymanski",
    email: "KMckee@pretium.io",
    phone: "(296)889-6472",
    address: {
      streetAddress: "5389 Sit St",
      city: "Sin City",
      state: "NM",
      zip: "82682",
    },
    description:
      "amet ipsum lorem porttitor tellus elit consequat porttitor sed rutrum elit at magna ac vel sit neque facilisis porta id adipiscing et malesuada turpis tellus nullam sollicitudin fringilla massa orci tortor velit",
  },
];

export default user;