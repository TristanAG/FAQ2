import React from 'react'
import { Link } from "react-router-dom"
import Product from '../Product/Product'
import NavOption from './NavOption'

function Nav() {
  const [preferences, setPreferences] = React.useState({})
  const [isActive, setIsActive] = React.useState('')
  const [activeMenuItem, setActiveMenuItem] = React.useState('')

  const omega3sNavOption = 'omega-3s-nav-option'
  const softGelsNavOption = 'soft-gels-nav-option'


  const products = {
    "meta": {
        "total_count": 103
    },
    "items": [
        {
            "id": 277,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/277/"
            },
            "name": "Nordic Flora Kids Probiotic Pixies",
            "product_type": null,
            "bulk": {
                "id": 225,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/225/"
                },
                "title": "Nordic Flora Kids Probiotic Pixies"
            }
        },
        {
            "id": 279,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/279/"
            },
            "name": "Children's DHA Orange Liquid",
            "product_type": null,
            "bulk": {
                "id": 241,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/241/"
                },
                "title": "Arctic Cod Liver Oil  / Children's DHA Orange Liquid"
            }
        },
        {
            "id": 281,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/281/"
            },
            "name": "Omega Focus",
            "product_type": null,
            "bulk": {
                "id": 264,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/264/"
                },
                "title": "Omega Focus Adult"
            }
        },
        {
            "id": 283,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/283/"
            },
            "name": "Omega Blood Sugar/ ProOmega Blood Sugar Soft Gels",
            "product_type": null,
            "bulk": {
                "id": 232,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/232/"
                },
                "title": "Omega Blood Sugar / ProOmega Blood Sugar Soft Gels"
            }
        },
        {
            "id": 286,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/286/"
            },
            "name": "Complete Omega Lemon Liquid",
            "product_type": null,
            "bulk": {
                "id": 230,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/230/"
                },
                "title": "Complete Omega / ProEFA 3.6.9 Lemon Liquid"
            }
        },
        {
            "id": 289,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/289/"
            },
            "name": "Nordic Flora Digestive Enzymes / Digestive Enzymes",
            "product_type": null,
            "bulk": {
                "id": 268,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/268/"
                },
                "title": "Digestive Enzymes"
            }
        },
        {
            "id": 292,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/292/"
            },
            "name": "ProEFA 3.6.9 Lemon Liquid",
            "product_type": null,
            "bulk": {
                "id": 230,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/230/"
                },
                "title": "Complete Omega / ProEFA 3.6.9 Lemon Liquid"
            }
        },
        {
            "id": 294,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/294/"
            },
            "name": "Baby DHA Vegetarian Unflavored Liquid",
            "product_type": null,
            "bulk": {
                "id": 227,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/227/"
                },
                "title": "Baby's DHA Vegetarian Unflavored Liquid"
            }
        },
        {
            "id": 296,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/296/"
            },
            "name": "Omega Curcumin/ProOmega CRP Soft Gels",
            "product_type": null,
            "bulk": {
                "id": 249,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/249/"
                },
                "title": "Omega Curcumin / ProOmega CRP Soft Gels"
            }
        },
        {
            "id": 299,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/299/"
            },
            "name": "Arctic Cod Liver Oil Orange Liquid",
            "product_type": null,
            "bulk": {
                "id": 241,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/241/"
                },
                "title": "Arctic Cod Liver Oil  / Children's DHA Orange Liquid"
            }
        },
        {
            "id": 303,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/303/"
            },
            "name": "Arctic Cod Liver Oil Lemon Liquid",
            "product_type": null,
            "bulk": {
                "id": 210,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/210/"
                },
                "title": "Arctic Cod Liver Oil Lemon Liquid"
            }
        },
        {
            "id": 305,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/305/"
            },
            "name": "Complete Omega Junior Lemon Soft Gels",
            "product_type": null,
            "bulk": {
                "id": 235,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/235/"
                },
                "title": "Complete Omega Junior Lemon Soft Gels"
            }
        },
        {
            "id": 308,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/308/"
            },
            "name": "Arctic-D Cod Liver Oil Lemon Liquid",
            "product_type": null,
            "bulk": {
                "id": 206,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/206/"
                },
                "title": "Arctic-D Cod Liver Oil Lemon Liquid"
            }
        },
        {
            "id": 310,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/310/"
            },
            "name": "Baby's Nordic Flora Probiotic Powder",
            "product_type": null,
            "bulk": {
                "id": 239,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/239/"
                },
                "title": "Baby's Nordic Flora Probiotic Powder"
            }
        },
        {
            "id": 312,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/312/"
            },
            "name": "Children's DHA Xtra/ DHA Jr. Xtra Berry Soft Gels",
            "product_type": null,
            "bulk": {
                "id": 203,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/203/"
                },
                "title": "Children's DHA Xtra / DHA Jr. Xtra Soft Gels"
            }
        },
        {
            "id": 315,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/315/"
            },
            "name": "Algae Omega Unflavored Soft Gel",
            "product_type": null,
            "bulk": {
                "id": 202,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/202/"
                },
                "title": "Algae Omega Soft Gels"
            }
        },
        {
            "id": 318,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/318/"
            },
            "name": "Vegan Prenatal DHA",
            "product_type": null,
            "bulk": {
                "id": 256,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/256/"
                },
                "title": "Algae DHA/Vegan Prenatal DHA"
            }
        },
        {
            "id": 320,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/320/"
            },
            "name": "Arctic Cod Liver Oil Strawberry Liquid",
            "product_type": null,
            "bulk": {
                "id": 266,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/266/"
                },
                "title": "Arctic Cod Liver Oil / Children's DHA / DHA Junior Strawberry liquid"
            }
        },
        {
            "id": 322,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/322/"
            },
            "name": "Omega Focus Jr.",
            "product_type": null,
            "bulk": {
                "id": 262,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/262/"
                },
                "title": "Omega Focus Junior"
            }
        },
        {
            "id": 324,
            "meta": {
                "type": "faqs.FinishedGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/324/"
            },
            "name": "Baby's Vitamin D3",
            "product_type": null,
            "bulk": {
                "id": 251,
                "meta": {
                    "type": "faqs.BulkGood",
                    "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/251/"
                },
                "title": "Baby's Vitamin D3 Unflavored Liquid"
            }
        }
    ]
}
  const productsCount = products.items.length

  const bulks = {
    "meta": {
        "total_count": 87
    },
    "items": [
        {
            "id": 190,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/190/",
                "first_published_at": null
            },
            "name": "Nordic Flora Probiotic Woman / Women's Probiotic",
            "bulk_type": null
        },
        {
            "id": 191,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/191/",
                "first_published_at": null
            },
            "name": "Nordic Omega-3 Gummy Fish Tangerine",
            "bulk_type": null
        },
        {
            "id": 192,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/192/",
                "first_published_at": null
            },
            "name": "Children's DHA Gummies",
            "bulk_type": null
        },
        {
            "id": 193,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/193/",
                "first_published_at": null
            },
            "name": "Omega-3 Phospholipids Unflavored Soft Gels",
            "bulk_type": null
        },
        {
            "id": 194,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/194/",
                "first_published_at": null
            },
            "name": "Ultimate Omega / ProOmega Lemon Soft Gels",
            "bulk_type": null
        },
        {
            "id": 195,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/195/",
                "first_published_at": null
            },
            "name": "Ultimate Omega 2X Mini/ Ultimate Omega 2X Teen / ProOmega 2000 Junior  Strawberry Soft Gels",
            "bulk_type": null
        },
        {
            "id": 196,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/196/",
                "first_published_at": null
            },
            "name": "Vitamin D3 Gummies Kids, Wild Watermelon",
            "bulk_type": null
        },
        {
            "id": 197,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/197/",
                "first_published_at": null
            },
            "name": "Omega Vision / ProDHA Eye Soft Gels",
            "bulk_type": null
        },
        {
            "id": 198,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/198/",
                "first_published_at": null
            },
            "name": "Ultimate Omega-D3 Sport Lemon Soft Gel",
            "bulk_type": null
        },
        {
            "id": 199,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/199/",
                "first_published_at": null
            },
            "name": "Nordic Berries, Cherry Berry",
            "bulk_type": null
        },
        {
            "id": 200,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/200/",
                "first_published_at": null
            },
            "name": "CoQ10 Gummies",
            "bulk_type": null
        },
        {
            "id": 201,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/201/",
                "first_published_at": null
            },
            "name": "Prenatal DHA Unflavored Soft Gels",
            "bulk_type": null
        },
        {
            "id": 202,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/202/",
                "first_published_at": null
            },
            "name": "Algae Omega Soft Gels",
            "bulk_type": null
        },
        {
            "id": 203,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/203/",
                "first_published_at": null
            },
            "name": "Children's DHA Xtra / DHA Jr. Xtra Soft Gels",
            "bulk_type": null
        },
        {
            "id": 204,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/204/",
                "first_published_at": null
            },
            "name": "Omega LDL/ ProOmega LDL Soft Gels",
            "bulk_type": null
        },
        {
            "id": 205,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/205/",
                "first_published_at": null
            },
            "name": "Vitamin D3 Vegan Liquid",
            "bulk_type": null
        },
        {
            "id": 206,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/206/",
                "first_published_at": null
            },
            "name": "Arctic-D Cod Liver Oil Lemon Liquid",
            "bulk_type": null
        },
        {
            "id": 207,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/207/",
                "first_published_at": null
            },
            "name": "Omega-3D Lemon Soft Gels",
            "bulk_type": null
        },
        {
            "id": 208,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/208/",
                "first_published_at": null
            },
            "name": "Omega Woman / Balanced Omega Lemon Soft Gels",
            "bulk_type": null
        },
        {
            "id": 209,
            "meta": {
                "type": "faqs.BulkGood",
                "detail_url": "http://faqs.devapps.nordicnaturals.com/api/pages/209/",
                "first_published_at": null
            },
            "name": "Prenatal DHA Strawberry Soft Gels",
            "bulk_type": null
        }
    ]
}
  const bulksCount = bulks.items.length

  function handleNavClick(navClick) {
    if (activeMenuItem === navClick) {
      setIsActive('')
      setActiveMenuItem('')
    } else {
      setIsActive(navClick)
      setActiveMenuItem(navClick)
    }
  }


  return (
    <aside className="menu">
      <p className="menu-label">
        <Link to={{pathname: '/'}}>
          <img src="https://www.nordicnaturals.com/static/version1581543764/frontend/NordicNaturals/default/en_US/images/logo.png" style={{width: '140px'}}/>
        </Link>

      </p>
      <ul className="menu-list">
        <li><a>Search</a></li>
      </ul>
      <p className="menu-label">
        Products
      </p>
      <ul className="menu-list">
        <li>
          <NavOption
            optionTitle='Omega-3s'
            option={omega3sNavOption}
            handleNavClick={handleNavClick}
            items={products}
            itemType="product"
            isActive={isActive}
            itemCount={productsCount}
          />
          <li><a>Probiotics & More</a></li>
          <li><a>Vitamins & More</a></li>
          <li><a>Gummies</a></li>
        </li>
      </ul>

      <p className="menu-label">
        Bulks
      </p>
      <ul className="menu-list">
        <li>
          <NavOption
            optionTitle='Soft Gels'
            option={softGelsNavOption}
            handleNavClick={handleNavClick}
            items={bulks}
            itemType="bulk"
            isActive={isActive}
            itemCount={bulksCount}
          />
          <li><a>Capsules</a></li>
          <li><a>Gummies</a></li>
          <li><a>Liquid</a></li>
        </li>
      </ul>

      <p className="menu-label">
        Raw Materials
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Actives</a></li>
          <li><a>Non-Actives</a></li>
        </li>
      </ul>
      <p className="menu-label">
        Nordic Standards
      </p>
      <ul className="menu-list">
        <li>
          <li><a>Nordic Standards</a></li>
        </li>
      </ul>
    </aside>
  )
}

export default Nav
