import React from 'react'
import ReactDOM from 'react-dom'
import './style.css';
import About from './about'
import { BrowserRouter, RouterProvider,Link ,NavLink, Outlet, useParams, createBrowserRouter} from 'react-router-dom'

// const restData = [
//     {
//       "info": {
//         "id": "3241",
//         "name": "Meghana Foods",
//         "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
//         "locality": "Residency Road",
//         "areaName": "Residency Road",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Biryani",
//           "Andhra",
//           "South Indian",
//           "North Indian",
//           "Chinese",
//           "Seafood"
//         ],
//         "avgRating": 4.5,
//         "feeDetails": {
//           "restaurantId": "3241",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3800
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3800
//         },
//         "parentId": "635",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 18,
//           "lastMileTravel": 2.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "18 mins",
//           "lastMileTravelString": "2.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-28 01:30:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/meghana-foods-residency-road-bangalore-3241",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "614642",
//         "name": "Soul Rasa",
//         "cloudinaryImageId": "v9fczzlua1wnrx63fh1g",
//         "locality": "Akkithimanahalli",
//         "areaName": "Shanti Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Indian",
//           "Healthy Food",
//           "Home Food",
//           "South Indian",
//           "North Indian"
//         ],
//         "avgRating": 4.5,
//         "feeDetails": {
//           "restaurantId": "614642",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 4100
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 4100
//         },
//         "parentId": "239281",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "27 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-27 23:30:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//               "description": "OnlyOnSwiggy"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "OnlyOnSwiggy",
//                     "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/soul-rasa-akkithimanahalli-shanti-nagar-bangalore-614642",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "48230",
//         "name": "Kanti Sweets",
//         "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
//         "locality": "Brigade Road",
//         "areaName": "Brigade Road",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "Sweets"
//         ],
//         "avgRating": 4.5,
//         "veg": true,
//         "feeDetails": {
//           "restaurantId": "48230",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3700
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3700
//         },
//         "parentId": "4700",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 19,
//           "lastMileTravel": 1.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "19 mins",
//           "lastMileTravelString": "1.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-27 22:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-bangalore-48230",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "440123",
//         "name": "Great Indian Khichdi by EatFit",
//         "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
//         "locality": "Cunnigham road",
//         "areaName": "Vasanth Nagar",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Home Food",
//           "Indian",
//           "North Indian",
//           "Healthy Food",
//           "Snacks",
//           "Desserts",
//           "Rajasthani",
//           "South Indian",
//           "Maharashtrian",
//           "Sweets"
//         ],
//         "avgRating": 4.3,
//         "veg": true,
//         "feeDetails": {
//           "restaurantId": "440123",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 4100
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 4100
//         },
//         "parentId": "319582",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "24 mins",
//           "lastMileTravelString": "3.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-27 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "502957",
//         "name": "Andhra Gunpowder",
//         "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
//         "locality": "Shivananda Circle",
//         "areaName": "Seshadripuram",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Andhra",
//           "Biryani",
//           "South Indian"
//         ],
//         "avgRating": 4.3,
//         "feeDetails": {
//           "restaurantId": "502957",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 4100
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 4100
//         },
//         "parentId": "10496",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 4.2,
//           "serviceability": "SERVICEABLE",
//           "slaString": "26 mins",
//           "lastMileTravelString": "4.2 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-28 01:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹100 OFF",
//           "subHeader": "ABOVE ₹299",
//           "discountTag": "FLAT DEAL"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-shivananda-circle-seshadripuram-bangalore-502957",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "392828",
//         "name": "Big Bowl",
//         "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
//         "locality": "Chikka Lakshmaiah Layout",
//         "areaName": "Adugodi",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "North Indian",
//           "Chinese",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 3.8,
//         "feeDetails": {
//           "restaurantId": "392828",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 6400
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 6400
//         },
//         "parentId": "434792",
//         "avgRatingString": "3.8",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30 mins",
//           "lastMileTravelString": "6.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-28 02:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "25% OFF",
//           "subHeader": "ABOVE ₹600",
//           "discountTag": "FLAT DEAL"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "43836",
//         "name": "McDonald's",
//         "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
//         "locality": "MG Road",
//         "areaName": "Ashok Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4.2,
//         "feeDetails": {
//           "restaurantId": "43836",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 3100
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 3100
//         },
//         "parentId": "630",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 18,
//           "lastMileTravel": 1.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "18 mins",
//           "lastMileTravelString": "1.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-28 03:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "464509",
//         "name": "Leon's - Burgers & Wings (Leon Grill)",
//         "cloudinaryImageId": "qol6dzbjxyse0tylbznu",
//         "locality": "Pulkeshi Nagar",
//         "areaName": "Frazer Town",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "American",
//           "Snacks",
//           "Turkish",
//           "Portuguese",
//           "Continental"
//         ],
//         "avgRating": 4.3,
//         "feeDetails": {
//           "restaurantId": "464509",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 4500
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 4500
//         },
//         "parentId": "371281",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 4.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "27 mins",
//           "lastMileTravelString": "4.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-28 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-pulkeshi-nagar-frazer-town-bangalore-464509",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "30034",
//         "name": "Mani's Dum Biryani",
//         "cloudinaryImageId": "y0fjz8h4ad8nfzkmbznu",
//         "locality": "Haudin Road",
//         "areaName": "Ulsoor",
//         "costForTwo": "₹499 for two",
//         "cuisines": [
//           "Andhra",
//           "Biryani",
//           "North Indian"
//         ],
//         "avgRating": 4.4,
//         "feeDetails": {
//           "restaurantId": "30034",
//           "fees": [
//             {
//               "name": "BASE_DISTANCE",
//               "fee": 4100
//             },
//             {
//               "name": "BASE_TIME"
//             },
//             {
//               "name": "ANCILLARY_SURGE_FEE"
//             }
//           ],
//           "totalFee": 4100
//         },
//         "parentId": "623",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 4.1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "lastMileTravelString": "4.1 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2023-10-27 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
//         "context": "seo-data-6cae4d45-d970-41be-b704-327601cb0d35"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-haudin-road-ulsoor-bangalore-30034",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }
//   ]
// const Header = () => {
//     const headerStyle = {
//         background: 'red',
//         padding: '10px',
//     };
 
//     const navStyle = {
//         display: 'flex',
//         justifyContent: 'space-between',
//         listStyle: 'none',
//         padding: '0',
//     };
 
//     const linkStyle = {
//         textDecoration: 'none',
//         color: 'black',
//         margin: '0 10px',
//     };
 
//     return (
//         <header style={headerStyle}>
//             <nav class="my-4 ">
//                 <ul style={navStyle}>
//                     <li><a href="#index" style={linkStyle}>Home</a></li>
//                     <li><a href="#Events" style={linkStyle}>Search</a></li>
//                     <li><a href="#about" style={linkStyle}>Cart</a></li>
//                     <li><a href="#contact" style={linkStyle}>Logout</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// const Card=(props)=>{
//     const {cloudinaryImageId,name,rating,cuisines}=props
//     console.log("props:",props);
    
//     return(
//         <div className="card" >
//           <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId} class="w-64 h-64"/>
          
//             <h2>{name}</h2>
//             <p>Rating:{rating}</p>
//             <p>{cuisines}</p>
            

//         </div>
//     )

// }
// const Body=()=>{
//     return(
//     <div className="body" class="columns-3 gap-8">
//          {restData.map((item) => (
//                <Card
//                cloudinaryImageId={item.info.cloudinaryImageId}
//                name={item.info.name}
//                rating={item.info.avgRating}
//                cuisines={item.info.cuisines.join(",")}
//              />
//          ))}
//     </div>
    
//     )
// }
// const Header=(props)=>{
//   const {name,age}=props;
//   return(
//     <>
//     <h1>name:{name}</h1>
//     <h1>age:{age}</h1>
//     </>
//   )

// }


const Body=()=>{

    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }




const APP = () => {
    return (
        <>
           
           <Outlet/>
          
 
        </>
    );
}














const AppRouter=createBrowserRouter([{path:"/",element:<APP/>,children:[{path:"/",element:<Body/>},
{path:"/about",element:<About/>}
]},
])

ReactDOM.render(<RouterProvider router={AppRouter}/>,document.getElementById("root"))