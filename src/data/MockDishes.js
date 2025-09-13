// src/data/mockDishes.js

// src/data/mockDishes.js

export const AllDishesList = [
  // ---------- Starters ----------
  {
    categoryId: 1,
    mealType: "Starters",
    type: "VEG",
    description:
      "Paneer cubes marinated and grilled in a tandoor.Paneer cubes marinated and grilled in a tandoor",
    image:
      "https://media.istockphoto.com/id/1085158128/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=R1baJqIO7z7bMOzONLWO42EudMDOt_c4kxoczMvJJ34=",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://media.istockphoto.com/id/1085158128/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=R1baJqIO7z7bMOzONLWO42EudMDOt_c4kxoczMvJJ34=",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "TANDOOR",
    forChefit: true,
    forParty: true,
    id: 1,
    name: "Paneer Tikka",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "VEG",
    description:
      "Spinach, peas, and potato patties shallow fried.Spinach, peas, and potato patties shallow fried.",
    image:
      "https://media.istockphoto.com/id/1314957548/photo/tasty-spicy-hara-bhara-kabab-tikka-delicious-indian-food-concept-background.jpg?s=612x612&w=0&k=20&c=s0vnbgdVFOTv0mYVGxuw7J610AxNpti1azjWOKDnCZ8=",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "Kebab",
    forChefit: true,
    forParty: true,
    id: 2,
    name: "Hara Bhara Kebab",
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Green Peas", quantity: "1/2 cup" },
      { name: "Potatoes", quantity: "2 boiled" },
      { name: "Green Chili", quantity: "1 chopped" },
      { name: "Breadcrumbs", quantity: "1/4 cup" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "NON-VEG",
    description:
      "Boneless chicken marinated in yogurt & spices.Boneless chicken marinated in yogurt & spices.",
    image:
      "https://media.istockphoto.com/id/2043767125/photo/lemon-being-squeezed-over-shrimp-tandoori.jpg?s=612x612&w=0&k=20&c=fWMSTQ8hwZIpaGye192QRLDVXWd_cc8mXMaAxCp1mfg=",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "TANDOOR",
    forChefit: true,
    forParty: true,
    id: 3,
    name: "Chicken Tikka",
    ingredients: [
      { name: "Chicken (boneless)", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Tandoori Masala", quantity: "1 tbsp" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "NON-VEG",
    description:
      "Tandoor-roasted spiced chicken on bone.Tandoor-roasted spiced chicken on bone.",
    image:
      "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=1024x1024&w=is&k=20&c=4SN9A2WAm8wDLeh0p4-DOZW4EHyn0I57GPtAhYMzo9Q=",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "TANDOOR",
    forChefit: true,
    forParty: true,
    id: 4,
    name: "Tandoori Chicken",
    ingredients: [
      { name: "Chicken (with bone)", quantity: "500g" },
      { name: "Yogurt", quantity: "3/4 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "VEG",
    description:
      "Crispy fritters made from onions and gram flour.Crispy fritters made from onions and gram flour.",
    image:
      "https://media.istockphoto.com/id/1499919451/photo/fried-onion-pakode-or-pyaj-ke-pakore-also-known-as-crispy-kanda-bhaji-bhajji-bujji-favorite.jpg?s=612x612&w=0&k=20&c=0jZB9xTUrcI1cL0Mb-Q6AYBNUjcRYRHUpi-hw5QpR3I=",
    category: {
      id: 1,
      name: "Snacks",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/snacks.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 5,
    name: "Onion Pakora",
    ingredients: [
      { name: "Onion", quantity: "2 sliced" },
      { name: "Gram Flour", quantity: "1 cup" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Carom Seeds", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "NON-VEG",
    description:
      "Eggs boiled, spiced, and shallow fried.Eggs boiled, spiced, and shallow fried..",
    image:
      "https://media.istockphoto.com/id/1089229682/photo/fried-hot-boiled-egg-masala-is-a-popular-healthy-breakfast-or-starter-menu-from-india-with.jpg?s=612x612&w=0&k=20&c=_v24ZsgLLukcWWDY5Ntzu6TNB7OVvfTRis27z-W0Zns=",
    category: {
      id: 1,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 6,
    name: "Egg Masala",
    ingredients: [
      { name: "Eggs", quantity: "4 boiled" },
      { name: "Onion", quantity: "1 chopped" },
      { name: "Tomato", quantity: "1 chopped" },
      { name: "Curry Leaves", quantity: "6-8" },
      { name: "Garam Masala", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "VEG",
    description:
      "Crispy potato wedges tossed in masala.Crispy potato wedges tossed in masala.",
    image:
      "https://media.istockphoto.com/id/1292619402/photo/mix-herb-french-fries-served-in-a-plate-over-a-rustic-wooden-background-indian-cusine.jpg?s=612x612&w=0&k=20&c=cKXudEWagK4BZif-E0BhXArhNFbAU0iMk1oUME28N-A=",
    category: {
      id: 1,
      name: "Snacks",
      image:
        "https://media.istockphoto.com/id/1292619402/photo/mix-herb-french-fries-served-in-a-plate-over-a-rustic-wooden-background-indian-cusine.jpg?s=612x612&w=0&k=20&c=cKXudEWagK4BZif-E0BhXArhNFbAU0iMk1oUME28N-A=",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 7,
    name: "Masala Fries",
    ingredients: [
      { name: "Potatoes", quantity: "3 medium" },
      { name: "Corn Flour", quantity: "2 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    categoryId: 1,
    mealType: "Starters",
    type: "NON-VEG",
    description:
      "Spicy chicken wings marinated & deep fried.Spicy chicken wings marinated & deep fried..",
    image:
      "https://media.istockphoto.com/id/1451323978/photo/baked-chicken-wings-with-sweet-chili-sauce-in-a-plate-black-background-top-view.jpg?s=612x612&w=0&k=20&c=wl3TW3aD0yaQKoQu8S3su2ngZZgTME_dCZGzQ3-BF6o=",
    category: {
      id: 1,
      name: "Snacks",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/snacks.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 8,
    name: "Chicken Wings",
    ingredients: [
      { name: "Chicken Wings", quantity: "500g" },
      { name: "Corn Flour", quantity: "3 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Chili Sauce", quantity: "2 tbsp" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  // ---------- Main Course ----------
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Paneer cubes cooked in spicy onion-tomato gravy with capsicum.Paneer cubes cooked in spicy onion-tomato gravy with capsicum..",
    image:
      "https://media.istockphoto.com/id/1085159910/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=6FmgFZkqNMKM1VW_Iy7TWS_4-oeXNPLg79zl1yBoizU=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://media.istockphoto.com/id/1085159910/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=6FmgFZkqNMKM1VW_Iy7TWS_4-oeXNPLg79zl1yBoizU=",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 9,
    name: "Kadhai Paneer",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "1 sliced" },
      { name: "Onion", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Kadhai Masala", quantity: "2 tsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Black lentils slow cooked with cream and butter.Black lentils slow cooked with cream and butter.",
    image:
      "https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=0&k=20&c=49yLaUAE2apakVk2AAiRQimZd98WtSjIQ0hzCzWsmns=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 10,
    name: "Dal Makhani",
    ingredients: [
      { name: "Black Lentils", quantity: "1 cup" },
      { name: "Kidney Beans", quantity: "1/4 cup" },
      { name: "Cream", quantity: "1/4 cup" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Seasonal vegetables cooked in mild curry.Seasonal vegetables cooked in mild curry.",
    image:
      "https://media.istockphoto.com/id/1446079481/photo/beef-achari-karahi-served-in-dish-isolated-on-grey-background-top-view-of-pakistani-food.jpg?s=1024x1024&w=is&k=20&c=ShcO0yt4PSXUE8jlhGy8Koi2Z3FtsNXj9tSdGQY9Uts=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 11,
    name: "Vegetable Korma",
    ingredients: [
      { name: "Carrot", quantity: "1 chopped" },
      { name: "Beans", quantity: "1/2 cup" },
      { name: "Cauliflower", quantity: "1/2 cup" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Cashew Paste", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Chickpeas simmered in spicy onion-tomato gravy.Chickpeas simmered in spicy onion-tomato gravy.",
    image:
      "https://media.istockphoto.com/id/1295943731/photo/chana-masala-or-chole-in-black-bowl-on-dark-slate-table-top-indian-cuisine-veg-chickpeas.jpg?s=612x612&w=0&k=20&c=FI-Qt3ufxWPGNmyZxnezSORGtM4As1McZj4FDOaF1cw=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 12,
    name: "Chole Masala",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup boiled" },
      { name: "Onion", quantity: "1 chopped" },
      { name: "Tomato", quantity: "2 chopped" },
      { name: "Chole Masala", quantity: "2 tsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Potatoes and cauliflower cooked with Indian spices.Potatoes and cauliflower cooked with Indian spices.",
    image:
      "https://media.istockphoto.com/id/174961905/photo/gobi-aloo-indian-curry-dish.jpg?s=612x612&w=0&k=20&c=Ztm0QBsc4GFm_5yD5v0Dfy5j-Odm1VuMBVhFOEQoO8I=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "DRY",
    forChefit: true,
    forParty: true,
    id: 13,
    name: "Aloo Gobi",
    ingredients: [
      { name: "Potatoes", quantity: "2 diced" },
      { name: "Cauliflower", quantity: "1 small head" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Green Chili", quantity: "1 chopped" },
      { name: "Coriander Powder", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "NON-VEG",
    description:
      "Chicken cooked with aromatic Indian spices.Chicken cooked with aromatic Indian spices.",
    image:
      "https://media.istockphoto.com/id/2185257273/photo/indian-curry-tikka-masala-chicken-lamb-mutton-rogan-josh-with-rice-and-naan-bread-dark.jpg?s=612x612&w=0&k=20&c=-yHrDXUjpBv0RkD8hP2IQbiW-RNE8L1sQCpv-l09yAA=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 14,
    name: "Butter Chicken",
    ingredients: [
      { name: "Chicken", quantity: "400g" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Cream", quantity: "1/4 cup" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Kasuri Methi", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "NON-VEG",
    description:
      "Tender mutton cooked with rich spices.Tender mutton cooked with rich spices.",
    image:
      "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=612x612&w=0&k=20&c=KQTQTS9RK7f4wt1_ZgRuvFsUMvc2MP1GF3yQqgaVShQ=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 15,
    name: "Mutton Curry",
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Onions", quantity: "2 sliced" },
      { name: "Tomato", quantity: "2 chopped" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Spice Mix", quantity: "2 tsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "NON-VEG",
    description:
      "South Indian style chicken curry with coconut.South Indian style chicken curry with coconut.",
    image:
      "https://media.istockphoto.com/id/1156501972/photo/spicy-chicken-chettinad-in-a-clay-pot.jpg?s=612x612&w=0&k=20&c=dmxl9MnS66dIofMYDK64sZIVK1kwdkccirZtVjspicc=",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 16,
    name: "Chettinad Chicken",
    ingredients: [
      { name: "Chicken", quantity: "400g" },
      { name: "Coconut", quantity: "1/2 cup grated" },
      { name: "Peppercorns", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "8-10" },
      { name: "Dry Red Chilies", quantity: "3" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "NON-VEG",
    description:
      "Fish curry made with tangy tamarind base.Fish curry made with tangy tamarind base.",
    image:
      "https://media.istockphoto.com/id/667669040/photo/top-view-of-spicy-and-hot-king-fish-curry-kerala-indian-food.jpg?s=612x612&w=0&k=20&c=0L0pQ_rDNF11MYSkPVskTSgUqqDUbxyshxhoMd3jae4=",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 17,
    name: "Fish Curry",
    ingredients: [
      { name: "Fish Fillets", quantity: "400g" },
      { name: "Tamarind Pulp", quantity: "2 tbsp" },
      { name: "Onion", quantity: "1 chopped" },
      { name: "Tomato", quantity: "1 chopped" },
      { name: "Curry Leaves", quantity: "6-8" },
    ],
  },
  {
    categoryId: 2,
    mealType: "Main Course",
    type: "VEG",
    description:
      "Mixed vegetables cooked with South Indian spices.Mixed vegetables cooked with South Indian spices.",
    image:
      "https://media.istockphoto.com/id/2164565865/photo/a-south-indian-thali-or-meal-consists-of-steamed-rice-sambar-rasam-vegetable-curries-avial.jpg?s=612x612&w=0&k=20&c=-9d1rfWC_TdesiI18km_QFlZk-op0DB87dDqpI5oHhQ=",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 18,
    name: "Avial",
    ingredients: [
      { name: "Yam", quantity: "1/2 cup" },
      { name: "Drumstick", quantity: "1 cut" },
      { name: "Carrot", quantity: "1 chopped" },
      { name: "Coconut", quantity: "1/2 cup grated" },
      { name: "Curd", quantity: "1/2 cup" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Fragrant rice cooked with mixed vegetables and mild spices.Fragrant rice cooked with mixed vegetables and mild spices.",
    image:
      "https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 19,
    name: "Vegetable Pulao",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Beans", quantity: "1/2 cup" },
      { name: "Peas", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Kashmiri style lamb curry cooked with aromatic spices.Kashmiri style lamb curry cooked with aromatic spices.",
    image:
      "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=612x612&w=0&k=20&c=KQTQTS9RK7f4wt1_ZgRuvFsUMvc2MP1GF3yQqgaVShQ=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 20,
    name: "Mutton Rogan Josh",
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Onion", quantity: "2 medium" },
      { name: "Tomato", quantity: "2 medium" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Rogan Josh Masala", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Stir-fried noodles tossed with soy sauce and crunchy veggies.Stir-fried noodles tossed with soy sauce and crunchy veggies.",
    image:
      "https://media.istockphoto.com/id/1158159302/photo/schezwan-hakka-noodles-served-in-a-bowl-top-view.jpg?s=612x612&w=0&k=20&c=dMoxuwAbzWRCJt7KaSkRCuxM1HZn8v9PH9UAc6ppmak=",
    category: {
      id: 2,
      name: "Chinese",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "NOODLES",
    forChefit: true,
    forParty: true,
    id: 21,
    name: "Hakka Noodles",
    ingredients: [
      { name: "Noodles", quantity: "200g" },
      { name: "Capsicum", quantity: "1 medium" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Spring Onion", quantity: "2 stalks" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Fragrant basmati rice layered with marinated chicken and spices.Fragrant basmati rice layered with marinated chicken and spices.",
    image:
      "https://media.istockphoto.com/id/1305451864/photo/biryani.jpg?s=612x612&w=0&k=20&c=myS23vJLtxpHp3LSRm0NU3rU30s8aLb45UHs8mfY8KA=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 22,
    name: "Chicken Biryani",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Onion", quantity: "2 large" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Yellow lentils tempered with garlic, cumin, and red chilies.Yellow lentils tempered with garlic, cumin, and red chilies.",
    image:
      "https://media.istockphoto.com/id/2167042052/photo/dal-tadka.jpg?s=612x612&w=0&k=20&c=xm4hzQUGoQ9MxfTJUBGUHz1SLzhUq0L9oioFtehpra8=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 23,
    name: "Dal Tadka",
    ingredients: [
      { name: "Toor Dal", quantity: "1 cup" },
      { name: "Garlic", quantity: "5 cloves" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Dry Red Chili", quantity: "2 pcs" },
      { name: "Ghee", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Crispy fried chicken 65 tossed with curry leaves, chilies, and South Indian spices.",
    image:
      "https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=0&k=20&c=cq6fgpRnjpiD3ILifT3bPg2m8EnxtUvG7M8oB-9h1MY=",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SIDES",
    forChefit: true,
    forParty: true,
    id: 24,
    name: "Chicken 65",
    ingredients: [
      { name: "Boneless Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "10–12" },
      { name: "Cornflour", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Juicy mutton kebabs grilled with aromatic Indian spices.",
    image:
      "https://media.istockphoto.com/id/980114014/photo/indian-mutton-seekh-kabab-served-with-green-salad-selective-focus.jpg?s=612x612&w=0&k=20&c=cGvNxP__yQPIJ3Q7JP65AihfqsoGRcT8u4GU5MM7nXY=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SIDES",
    forChefit: true,
    forParty: true,
    id: 25,
    name: "Mutton Seekh Kebab",
    ingredients: [
      { name: "Minced Mutton", quantity: "300g" },
      { name: "Onion", quantity: "1 small" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Green Chili", quantity: "1" },
      { name: "Garam Masala", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Deep fried khoya dumplings soaked in sugar syrup.Deep fried khoya dumplings soaked in sugar syrup.",
    image:
      "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=612x612&w=0&k=20&c=JvJ4AAs-N5pRzzRmVg1lG0talC3QoUt0ZGiO1NKz-kQ=",
    category: {
      id: 3,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 26,
    name: "Gulab Jamun",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "1 cup" },
      { name: "Cardamom", quantity: "2 pods" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Soft and spongy cheese balls soaked in sugar syrup.Soft and spongy cheese balls soaked in sugar syrup.",
    image:
      "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=tdAE1jz-B43HcrqBL7dLSiV9tTchIVuPqFY0nMwrzrs=",
    category: {
      id: 3,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 27,
    name: "Rasgulla",
    ingredients: [
      { name: "Chenna", quantity: "200g" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Rose Water", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Rich chocolate brownie served with vanilla ice cream.Rich chocolate brownie served with vanilla ice cream.",
    image:
      "https://media.istockphoto.com/id/689260420/photo/delicious-homemade-brownie-with-chocolate-sauce-and-caramel-on-the-table-selective-focus.jpg?s=612x612&w=0&k=20&c=DckwrlL9Wr4oLBegrcjesdRL4ABzB8edODjPnT9EUxI=",
    category: {
      id: 3,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BAKED",
    forChefit: true,
    forParty: true,
    id: 28,
    name: "Chocolate Brownie",
    ingredients: [
      { name: "Chocolate", quantity: "100g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Vanilla ice cream topped with chocolate syrup and nuts.Vanilla ice cream topped with chocolate syrup and nuts.",
    image:
      "https://media.istockphoto.com/id/471859630/photo/fancy-ice-cream-sundae-with-hot-fudge-sprinkles-cherries.jpg?s=612x612&w=0&k=20&c=MEaH7-Andg3bnzDVUCiCU5V5CUz6qjfu0xvR1vEepTE=",
    category: {
      id: 3,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "ICECREAM",
    forChefit: true,
    forParty: true,
    id: 29,
    name: "Ice Cream Sundae",
    ingredients: [
      { name: "Vanilla Ice Cream", quantity: "2 scoops" },
      { name: "Chocolate Syrup", quantity: "2 tbsp" },
      { name: "Nuts", quantity: "1 tbsp" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Sweet Indian dessert made with grated carrots and milk.Sweet Indian dessert made with grated carrots and milk.",
    image:
      "https://media.istockphoto.com/id/1447442563/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=9O3ArX_Zp9nMA-7Ffpu6zxdoV9FRfcuajc1FlCyQuP8=",
    category: {
      id: 3,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 30,
    name: "Carrot Halwa",
    ingredients: [
      { name: "Carrot", quantity: "250g" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Soft Indian flatbread baked in tandoor.Soft Indian flatbread baked in tandoor.",
    image:
      "https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lTtokg-1e2OxzzPDHhtwWLR_43TCRBTcmpJU08OL6nQ=",
    category: {
      id: 4,
      name: "Sides",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sides.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 31,
    name: "Naan",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Yeast", quantity: "1 tsp" },
      { name: "Salt", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Steamed rice flavored with cumin seeds.Steamed rice flavored with cumin seeds.",
    image:
      "https://media.istockphoto.com/id/1406852447/photo/cumin-rice-jeera-rice-famous-indian-rice-dish-served-in-a-bowl-closeup-with-selective-focus.jpg?s=612x612&w=0&k=20&c=1pApJhyOy8sgsbZ35PU3UdpnzDIGzadSzYRgelTzZYA=",
    category: {
      id: 4,
      name: "Sides",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sides.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 32,
    name: "Jeera Rice",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "1 tbsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Whole wheat flatbread cooked on tawa.Whole wheat flatbread cooked on tawa.",
    image:
      "https://media.istockphoto.com/id/2196871183/photo/roti-is-a-traditional-round-unleavened-flatbread-made-from-whole-wheat-flour-commonly-served.jpg?s=612x612&w=0&k=20&c=QSBOy-pmqCmpRLCQ4VdKP4jeyAABBL-NybAWt32Xgkc=",
    category: {
      id: 4,
      name: "Sides",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sides.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 33,
    name: "Roti",
    ingredients: [
      { name: "Whole Wheat Flour", quantity: "2 cups" },
      { name: "Water", quantity: "1 cup" },
      { name: "Salt", quantity: "1/2 tsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Crispy thin Indian side made with lentil flour.Crispy thin Indian side made with lentil flour.",
    image:
      "https://media.istockphoto.com/id/1205798594/photo/papad.jpg?s=612x612&w=0&k=20&c=fpv8efQrD8PIKzjHr_pN496ghubuyd7iZBFixV0JCWA=",
    category: {
      id: 4,
      name: "Sides",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sides.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CRISPY",
    forChefit: true,
    forParty: true,
    id: 34,
    name: "Papad",
    ingredients: [
      { name: "Lentil Flour", quantity: "100g" },
      { name: "Salt", quantity: "1 tsp" },
      { name: "Spices", quantity: "1 tsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Fresh cucumber, tomato, onion slices with lemon dressing.Fresh cucumber, tomato, onion slices with lemon dressing.",
    image:
      "https://media.istockphoto.com/id/1270993747/photo/healthy-fresh-green-salad-overhead-view.jpg?s=612x612&w=0&k=20&c=TCW8TTr4s5EP7kvk72EUrGe8zxYezOA-yih_Roi8STU=",
    category: {
      id: 4,
      name: "Sides",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sides.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SALAD",
    forChefit: true,
    forParty: true,
    id: 35,
    name: "Green Salad",
    ingredients: [
      { name: "Cucumber", quantity: "1" },
      { name: "Tomato", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "NON-VEG",
    description:
      "Classic baked custard made with eggs, milk, and caramelized sugar.",
    image:
      "https://media.istockphoto.com/id/1225491381/photo/cheesecake-with-caramel-sauce.jpg?s=612x612&w=0&k=20&c=RhQ8vfvs_W2jJw7EBahIF-UImeBABrVNflM3whnUm_M=",
    category: {
      id: 3,
      name: "International",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CUSTARD",
    forChefit: true,
    forParty: true,
    id: 36,
    name: "Caramel Custard",
    ingredients: [
      { name: "Eggs", quantity: "3 large" },
      { name: "Milk", quantity: "2 cups" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Vanilla Extract", quantity: "1 tsp" },
      { name: "Caramelized Sugar", quantity: "3 tbsp" },
    ],
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "NON-VEG",
    description:
      "Silky Italian dessert made with cream, sugar, and gelatin, served chilled.",
    image:
      "https://media.istockphoto.com/id/1494396649/photo/panacotta-with-red-fruit-sauce.jpg?s=612x612&w=0&k=20&c=YHfOOAfcpo_ZwMpxT43XnuYNP9RS15pbbrJx5pNghcc=",
    category: {
      id: 3,
      name: "International",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "PUDDING",
    forChefit: true,
    forParty: true,
    id: 37,
    name: "Panna Cotta",
    ingredients: [
      { name: "Heavy Cream", quantity: "2 cups" },
      { name: "Sugar", quantity: "1/4 cup" },
      { name: "Gelatin", quantity: "2 tsp" },
      { name: "Vanilla Extract", quantity: "1 tsp" },
      { name: "Berries", quantity: "for garnish" },
    ],
  },

  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "NON-VEG",
    description:
      "Rich halwa made with slow-cooked chicken, ghee, sugar, and spices.",
    image:
      "https://media.istockphoto.com/id/2231618394/photo/delicious-indian-sweet-dessert-kashi-halwa-or-dumroot-halwa-or-ash-gourd-halwa.jpg?s=612x612&w=0&k=20&c=CAJeSQUSgov4zDDLX1lwOfZiRaw01HD8Qu8icmNz9xk=",
    category: {
      id: 3,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "HALWA",
    forChefit: true,
    forParty: true,
    id: 38,
    name: "Chicken Halwa",
    ingredients: [
      { name: "Chicken", quantity: "250g (shredded)" },
      { name: "Ghee", quantity: "3 tbsp" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Cardamom", quantity: "1/2 tsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description:
      "Crispy South Indian style fried fish marinated with spices and curry leaves.",
    image:
      "https://media.istockphoto.com/id/1264331055/photo/image-of-metal-tongs-turning-crispy-fried-fish-in-a-frying-pan-on-hotplate-goan-fish-curry.jpg?s=612x612&w=0&k=20&c=8srlAGd91vf8WPWX9feCsFLz64_TL0Np7OiIfoGpZAI=",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SIDES",
    forChefit: true,
    forParty: true,
    id: 39,
    name: "Fish Fry",
    ingredients: [
      { name: "Fish Fillets", quantity: "4 pieces" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "10–12" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description:
      "Juicy chicken drumsticks marinated in spices and deep fried till crispy.",
    image:
      "https://media.istockphoto.com/id/666710160/photo/grilled-chicken-legs-with-vegetable-skewers.jpg?s=612x612&w=0&k=20&c=7VJa0HRAITynqxO8e0dlEhur7BLKVM7_q3BCkzIOnjs=",
    category: {
      id: 2,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SIDES",
    forChefit: true,
    forParty: true,
    id: 40,
    name: "Fried Chicken Drumsticks",
    ingredients: [
      { name: "Chicken Drumsticks", quantity: "6 pieces" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Cornflour", quantity: "2 tbsp" },
    ],
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description:
      "Spicy and crispy South Indian style prawn fry tossed with curry leaves and chilies.",
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/09/1-25.jpg",
    category: {
      id: 2,
      name: "South Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SIDES",
    forChefit: true,
    forParty: true,
    id: 41,
    name: "Prawn 65",
    ingredients: [
      { name: "Prawns", quantity: "250g" },
      { name: "Cornflour", quantity: "2 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Curry Leaves", quantity: "10–12" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
];
