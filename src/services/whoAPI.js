const mockIndicators = [
  {
    "IndicatorCode": "WHOSIS_000001",
    "IndicatorName": "Espérance de vie à la naissance (années)",
    "Description": "Nombre moyen d'années qu'un nouveau-né peut espérer vivre"
  },
  {
    "IndicatorCode": "WHOSIS_000015",
    "IndicatorName": "Taux de mortalité infantile (pour 1000 naissances vivantes)",
    "Description": "Probabilité de décès entre la naissance et le premier anniversaire"
  },
  {
    "IndicatorCode": "WHS4_544",
    "IndicatorName": "Couverture vaccinale DTC3 (%)",
    "Description": "Pourcentage d'enfants vaccinés contre la diphtérie, le tétanos et la coqueluche"
  },
  {
    "IndicatorCode": "WHOSIS_000002",
    "IndicatorName": "Taux de mortalité maternelle (pour 100 000 naissances vivantes)",
    "Description": "Décès maternels dus à des causes liées à la grossesse"
  },
  {
    "IndicatorCode": "WHOSIS_000003",
    "IndicatorName": "Taux de fertilité (naissances par femme)",
    "Description": "Nombre moyen d'enfants qu'une femme aurait dans sa vie"
  },
  {
    "IndicatorCode": "WHS5_88",
    "IndicatorName": "Accès à l'eau potable (%)",
    "Description": "Pourcentage de population utilisant une source d'eau potable améliorée"
  },
  {
    "IndicatorCode": "WHS6_102",
    "IndicatorName": "Accès à des installations sanitaires améliorées (%)",
    "Description": "Proportion de population utilisant des installations sanitaires améliorées"
  },
  {
    "IndicatorCode": "WHS9_134",
    "IndicatorName": "Prévalence du VIH (%)",
    "Description": "Pourcentage de personnes âgées de 15 à 49 ans vivant avec le VIH"
  },
  {
    "IndicatorCode": "WHS10_136",
    "IndicatorName": "Utilisation de contraceptifs modernes (%)",
    "Description": "Pourcentage de femmes utilisant des méthodes modernes de contraception"
  },
  {
    "IndicatorCode": "WHS8_98",
    "IndicatorName": "Dépenses de santé par habitant (USD)",
    "Description": "Montant total des dépenses de santé par habitant en dollars américains"
  }
];

const mockCountries = [
  {
    "CountryCode": "ABW",
    "CountryName": "Aruba"
  },
  {
    "CountryCode": "AFG",
    "CountryName": "Afghanistan"
  },
  {
    "CountryCode": "AGO",
    "CountryName": "Angola"
  },
  {
    "CountryCode": "AIA",
    "CountryName": "Anguilla"
  },
  {
    "CountryCode": "ALA",
    "CountryName": "Åland Islands"
  },
  {
    "CountryCode": "ALB",
    "CountryName": "Albania"
  },
  {
    "CountryCode": "AND",
    "CountryName": "Andorra"
  },
  {
    "CountryCode": "ARE",
    "CountryName": "United Arab Emirates"
  },
  {
    "CountryCode": "ARG",
    "CountryName": "Argentina"
  },
  {
    "CountryCode": "ARM",
    "CountryName": "Armenia"
  },
  {
    "CountryCode": "ASM",
    "CountryName": "American Samoa"
  },
  {
    "CountryCode": "ATA",
    "CountryName": "Antarctica"
  },
  {
    "CountryCode": "ATF",
    "CountryName": "French Southern Territories"
  },
  {
    "CountryCode": "ATG",
    "CountryName": "Antigua and Barbuda"
  },
  {
    "CountryCode": "AUS",
    "CountryName": "Australia"
  },
  {
    "CountryCode": "AUT",
    "CountryName": "Austria"
  },
  {
    "CountryCode": "AZE",
    "CountryName": "Azerbaijan"
  },
  {
    "CountryCode": "BDI",
    "CountryName": "Burundi"
  },
  {
    "CountryCode": "BEL",
    "CountryName": "Belgium"
  },
  {
    "CountryCode": "BEN",
    "CountryName": "Benin"
  },
  {
    "CountryCode": "BES",
    "CountryName": "Bonaire, Sint Eustatius and Saba"
  },
  {
    "CountryCode": "BFA",
    "CountryName": "Burkina Faso"
  },
  {
    "CountryCode": "BGD",
    "CountryName": "Bangladesh"
  },
  {
    "CountryCode": "BGR",
    "CountryName": "Bulgaria"
  },
  {
    "CountryCode": "BHR",
    "CountryName": "Bahrain"
  },
  {
    "CountryCode": "BHS",
    "CountryName": "Bahamas"
  },
  {
    "CountryCode": "BIH",
    "CountryName": "Bosnia and Herzegovina"
  },
  {
    "CountryCode": "BLM",
    "CountryName": "Saint Barthélemy"
  },
  {
    "CountryCode": "BLR",
    "CountryName": "Belarus"
  },
  {
    "CountryCode": "BLZ",
    "CountryName": "Belize"
  },
  {
    "CountryCode": "BMU",
    "CountryName": "Bermuda"
  },
  {
    "CountryCode": "BOL",
    "CountryName": "Bolivia, Plurinational State of"
  },
  {
    "CountryCode": "BRA",
    "CountryName": "Brazil"
  },
  {
    "CountryCode": "BRB",
    "CountryName": "Barbados"
  },
  {
    "CountryCode": "BRN",
    "CountryName": "Brunei Darussalam"
  },
  {
    "CountryCode": "BTN",
    "CountryName": "Bhutan"
  },
  {
    "CountryCode": "BVT",
    "CountryName": "Bouvet Island"
  },
  {
    "CountryCode": "BWA",
    "CountryName": "Botswana"
  },
  {
    "CountryCode": "CAF",
    "CountryName": "Central African Republic"
  },
  {
    "CountryCode": "CAN",
    "CountryName": "Canada"
  },
  {
    "CountryCode": "CCK",
    "CountryName": "Cocos (Keeling) Islands"
  },
  {
    "CountryCode": "CHE",
    "CountryName": "Switzerland"
  },
  {
    "CountryCode": "CHL",
    "CountryName": "Chile"
  },
  {
    "CountryCode": "CHN",
    "CountryName": "China"
  },
  {
    "CountryCode": "CIV",
    "CountryName": "Côte d'Ivoire"
  },
  {
    "CountryCode": "CMR",
    "CountryName": "Cameroon"
  },
  {
    "CountryCode": "COD",
    "CountryName": "Congo, The Democratic Republic of the"
  },
  {
    "CountryCode": "COG",
    "CountryName": "Congo"
  },
  {
    "CountryCode": "COK",
    "CountryName": "Cook Islands"
  },
  {
    "CountryCode": "COL",
    "CountryName": "Colombia"
  },
  {
    "CountryCode": "COM",
    "CountryName": "Comoros"
  },
  {
    "CountryCode": "CPV",
    "CountryName": "Cabo Verde"
  },
  {
    "CountryCode": "CRI",
    "CountryName": "Costa Rica"
  },
  {
    "CountryCode": "CUB",
    "CountryName": "Cuba"
  },
  {
    "CountryCode": "CUW",
    "CountryName": "Curaçao"
  },
  {
    "CountryCode": "CXR",
    "CountryName": "Christmas Island"
  },
  {
    "CountryCode": "CYM",
    "CountryName": "Cayman Islands"
  },
  {
    "CountryCode": "CYP",
    "CountryName": "Cyprus"
  },
  {
    "CountryCode": "CZE",
    "CountryName": "Czechia"
  },
  {
    "CountryCode": "DEU",
    "CountryName": "Germany"
  },
  {
    "CountryCode": "DJI",
    "CountryName": "Djibouti"
  },
  {
    "CountryCode": "DMA",
    "CountryName": "Dominica"
  },
  {
    "CountryCode": "DNK",
    "CountryName": "Denmark"
  },
  {
    "CountryCode": "DOM",
    "CountryName": "Dominican Republic"
  },
  {
    "CountryCode": "DZA",
    "CountryName": "Algeria"
  },
  {
    "CountryCode": "ECU",
    "CountryName": "Ecuador"
  },
  {
    "CountryCode": "EGY",
    "CountryName": "Egypt"
  },
  {
    "CountryCode": "ERI",
    "CountryName": "Eritrea"
  },
  {
    "CountryCode": "ESH",
    "CountryName": "Western Sahara"
  },
  {
    "CountryCode": "ESP",
    "CountryName": "Spain"
  },
  {
    "CountryCode": "EST",
    "CountryName": "Estonia"
  },
  {
    "CountryCode": "ETH",
    "CountryName": "Ethiopia"
  },
  {
    "CountryCode": "FIN",
    "CountryName": "Finland"
  },
  {
    "CountryCode": "FJI",
    "CountryName": "Fiji"
  },
  {
    "CountryCode": "FLK",
    "CountryName": "Falkland Islands (Malvinas)"
  },
  {
    "CountryCode": "FRA",
    "CountryName": "France"
  },
  {
    "CountryCode": "FRO",
    "CountryName": "Faroe Islands"
  },
  {
    "CountryCode": "FSM",
    "CountryName": "Micronesia, Federated States of"
  },
  {
    "CountryCode": "GAB",
    "CountryName": "Gabon"
  },
  {
    "CountryCode": "GBR",
    "CountryName": "United Kingdom"
  },
  {
    "CountryCode": "GEO",
    "CountryName": "Georgia"
  },
  {
    "CountryCode": "GGY",
    "CountryName": "Guernsey"
  },
  {
    "CountryCode": "GHA",
    "CountryName": "Ghana"
  },
  {
    "CountryCode": "GIB",
    "CountryName": "Gibraltar"
  },
  {
    "CountryCode": "GIN",
    "CountryName": "Guinea"
  },
  {
    "CountryCode": "GLP",
    "CountryName": "Guadeloupe"
  },
  {
    "CountryCode": "GMB",
    "CountryName": "Gambia"
  },
  {
    "CountryCode": "GNB",
    "CountryName": "Guinea-Bissau"
  },
  {
    "CountryCode": "GNQ",
    "CountryName": "Equatorial Guinea"
  },
  {
    "CountryCode": "GRC",
    "CountryName": "Greece"
  },
  {
    "CountryCode": "GRD",
    "CountryName": "Grenada"
  },
  {
    "CountryCode": "GRL",
    "CountryName": "Greenland"
  },
  {
    "CountryCode": "GTM",
    "CountryName": "Guatemala"
  },
  {
    "CountryCode": "GUF",
    "CountryName": "French Guiana"
  },
  {
    "CountryCode": "GUM",
    "CountryName": "Guam"
  },
  {
    "CountryCode": "GUY",
    "CountryName": "Guyana"
  },
  {
    "CountryCode": "HKG",
    "CountryName": "Hong Kong"
  },
  {
    "CountryCode": "HMD",
    "CountryName": "Heard Island and McDonald Islands"
  },
  {
    "CountryCode": "HND",
    "CountryName": "Honduras"
  },
  {
    "CountryCode": "HRV",
    "CountryName": "Croatia"
  },
  {
    "CountryCode": "HTI",
    "CountryName": "Haiti"
  },
  {
    "CountryCode": "HUN",
    "CountryName": "Hungary"
  },
  {
    "CountryCode": "IDN",
    "CountryName": "Indonesia"
  },
  {
    "CountryCode": "IMN",
    "CountryName": "Isle of Man"
  },
  {
    "CountryCode": "IND",
    "CountryName": "India"
  },
  {
    "CountryCode": "IOT",
    "CountryName": "British Indian Ocean Territory"
  },
  {
    "CountryCode": "IRL",
    "CountryName": "Ireland"
  },
  {
    "CountryCode": "IRN",
    "CountryName": "Iran, Islamic Republic of"
  },
  {
    "CountryCode": "IRQ",
    "CountryName": "Iraq"
  },
  {
    "CountryCode": "ISL",
    "CountryName": "Iceland"
  },
  {
    "CountryCode": "ISR",
    "CountryName": "Israel"
  },
  {
    "CountryCode": "ITA",
    "CountryName": "Italy"
  },
  {
    "CountryCode": "JAM",
    "CountryName": "Jamaica"
  },
  {
    "CountryCode": "JEY",
    "CountryName": "Jersey"
  },
  {
    "CountryCode": "JOR",
    "CountryName": "Jordan"
  },
  {
    "CountryCode": "JPN",
    "CountryName": "Japan"
  },
  {
    "CountryCode": "KAZ",
    "CountryName": "Kazakhstan"
  },
  {
    "CountryCode": "KEN",
    "CountryName": "Kenya"
  },
  {
    "CountryCode": "KGZ",
    "CountryName": "Kyrgyzstan"
  },
  {
    "CountryCode": "KHM",
    "CountryName": "Cambodia"
  },
  {
    "CountryCode": "KIR",
    "CountryName": "Kiribati"
  },
  {
    "CountryCode": "KNA",
    "CountryName": "Saint Kitts and Nevis"
  },
  {
    "CountryCode": "KOR",
    "CountryName": "Korea, Republic of"
  },
  {
    "CountryCode": "KWT",
    "CountryName": "Kuwait"
  },
  {
    "CountryCode": "LAO",
    "CountryName": "Lao People's Democratic Republic"
  },
  {
    "CountryCode": "LBN",
    "CountryName": "Lebanon"
  },
  {
    "CountryCode": "LBR",
    "CountryName": "Liberia"
  },
  {
    "CountryCode": "LBY",
    "CountryName": "Libya"
  },
  {
    "CountryCode": "LCA",
    "CountryName": "Saint Lucia"
  },
  {
    "CountryCode": "LIE",
    "CountryName": "Liechtenstein"
  },
  {
    "CountryCode": "LKA",
    "CountryName": "Sri Lanka"
  },
  {
    "CountryCode": "LSO",
    "CountryName": "Lesotho"
  },
  {
    "CountryCode": "LTU",
    "CountryName": "Lithuania"
  },
  {
    "CountryCode": "LUX",
    "CountryName": "Luxembourg"
  },
  {
    "CountryCode": "LVA",
    "CountryName": "Latvia"
  },
  {
    "CountryCode": "MAC",
    "CountryName": "Macao"
  },
  {
    "CountryCode": "MAF",
    "CountryName": "Saint Martin (French part)"
  },
  {
    "CountryCode": "MAR",
    "CountryName": "Morocco"
  },
  {
    "CountryCode": "MCO",
    "CountryName": "Monaco"
  },
  {
    "CountryCode": "MDA",
    "CountryName": "Moldova, Republic of"
  },
  {
    "CountryCode": "MDG",
    "CountryName": "Madagascar"
  },
  {
    "CountryCode": "MDV",
    "CountryName": "Maldives"
  },
  {
    "CountryCode": "MEX",
    "CountryName": "Mexico"
  },
  {
    "CountryCode": "MHL",
    "CountryName": "Marshall Islands"
  },
  {
    "CountryCode": "MKD",
    "CountryName": "North Macedonia"
  },
  {
    "CountryCode": "MLI",
    "CountryName": "Mali"
  },
  {
    "CountryCode": "MLT",
    "CountryName": "Malta"
  },
  {
    "CountryCode": "MMR",
    "CountryName": "Myanmar"
  },
  {
    "CountryCode": "MNE",
    "CountryName": "Montenegro"
  },
  {
    "CountryCode": "MNG",
    "CountryName": "Mongolia"
  },
  {
    "CountryCode": "MNP",
    "CountryName": "Northern Mariana Islands"
  },
  {
    "CountryCode": "MOZ",
    "CountryName": "Mozambique"
  },
  {
    "CountryCode": "MRT",
    "CountryName": "Mauritania"
  },
  {
    "CountryCode": "MSR",
    "CountryName": "Montserrat"
  },
  {
    "CountryCode": "MTQ",
    "CountryName": "Martinique"
  },
  {
    "CountryCode": "MUS",
    "CountryName": "Mauritius"
  },
  {
    "CountryCode": "MWI",
    "CountryName": "Malawi"
  },
  {
    "CountryCode": "MYS",
    "CountryName": "Malaysia"
  },
  {
    "CountryCode": "MYT",
    "CountryName": "Mayotte"
  },
  {
    "CountryCode": "NAM",
    "CountryName": "Namibia"
  },
  {
    "CountryCode": "NCL",
    "CountryName": "New Caledonia"
  },
  {
    "CountryCode": "NER",
    "CountryName": "Niger"
  },
  {
    "CountryCode": "NFK",
    "CountryName": "Norfolk Island"
  },
  {
    "CountryCode": "NGA",
    "CountryName": "Nigeria"
  },
  {
    "CountryCode": "NIC",
    "CountryName": "Nicaragua"
  },
  {
    "CountryCode": "NIU",
    "CountryName": "Niue"
  },
  {
    "CountryCode": "NLD",
    "CountryName": "Netherlands"
  },
  {
    "CountryCode": "NOR",
    "CountryName": "Norway"
  },
  {
    "CountryCode": "NPL",
    "CountryName": "Nepal"
  },
  {
    "CountryCode": "NRU",
    "CountryName": "Nauru"
  },
  {
    "CountryCode": "NZL",
    "CountryName": "New Zealand"
  },
  {
    "CountryCode": "OMN",
    "CountryName": "Oman"
  },
  {
    "CountryCode": "PAK",
    "CountryName": "Pakistan"
  },
  {
    "CountryCode": "PAN",
    "CountryName": "Panama"
  },
  {
    "CountryCode": "PCN",
    "CountryName": "Pitcairn"
  },
  {
    "CountryCode": "PER",
    "CountryName": "Peru"
  },
  {
    "CountryCode": "PHL",
    "CountryName": "Philippines"
  },
  {
    "CountryCode": "PLW",
    "CountryName": "Palau"
  },
  {
    "CountryCode": "PNG",
    "CountryName": "Papua New Guinea"
  },
  {
    "CountryCode": "POL",
    "CountryName": "Poland"
  },
  {
    "CountryCode": "PRI",
    "CountryName": "Puerto Rico"
  },
  {
    "CountryCode": "PRK",
    "CountryName": "Korea, Democratic People's Republic of"
  },
  {
    "CountryCode": "PRT",
    "CountryName": "Portugal"
  },
  {
    "CountryCode": "PRY",
    "CountryName": "Paraguay"
  },
  {
    "CountryCode": "PSE",
    "CountryName": "Palestine, State of"
  },
  {
    "CountryCode": "PYF",
    "CountryName": "French Polynesia"
  },
  {
    "CountryCode": "QAT",
    "CountryName": "Qatar"
  },
  {
    "CountryCode": "REU",
    "CountryName": "Réunion"
  },
  {
    "CountryCode": "ROU",
    "CountryName": "Romania"
  },
  {
    "CountryCode": "RUS",
    "CountryName": "Russian Federation"
  },
  {
    "CountryCode": "RWA",
    "CountryName": "Rwanda"
  },
  {
    "CountryCode": "SAU",
    "CountryName": "Saudi Arabia"
  },
  {
    "CountryCode": "SDN",
    "CountryName": "Sudan"
  },
  {
    "CountryCode": "SEN",
    "CountryName": "Senegal"
  },
  {
    "CountryCode": "SGP",
    "CountryName": "Singapore"
  },
  {
    "CountryCode": "SGS",
    "CountryName": "South Georgia and the South Sandwich Islands"
  },
  {
    "CountryCode": "SHN",
    "CountryName": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "CountryCode": "SJM",
    "CountryName": "Svalbard and Jan Mayen"
  },
  {
    "CountryCode": "SLB",
    "CountryName": "Solomon Islands"
  },
  {
    "CountryCode": "SLE",
    "CountryName": "Sierra Leone"
  },
  {
    "CountryCode": "SLV",
    "CountryName": "El Salvador"
  },
  {
    "CountryCode": "SMR",
    "CountryName": "San Marino"
  },
  {
    "CountryCode": "SOM",
    "CountryName": "Somalia"
  },
  {
    "CountryCode": "SPM",
    "CountryName": "Saint Pierre and Miquelon"
  },
  {
    "CountryCode": "SRB",
    "CountryName": "Serbia"
  },
  {
    "CountryCode": "SSD",
    "CountryName": "South Sudan"
  },
  {
    "CountryCode": "STP",
    "CountryName": "Sao Tome and Principe"
  },
  {
    "CountryCode": "SUR",
    "CountryName": "Suriname"
  },
  {
    "CountryCode": "SVK",
    "CountryName": "Slovakia"
  },
  {
    "CountryCode": "SVN",
    "CountryName": "Slovenia"
  },
  {
    "CountryCode": "SWE",
    "CountryName": "Sweden"
  },
  {
    "CountryCode": "SWZ",
    "CountryName": "Eswatini"
  },
  {
    "CountryCode": "SXM",
    "CountryName": "Sint Maarten (Dutch part)"
  },
  {
    "CountryCode": "SYC",
    "CountryName": "Seychelles"
  },
  {
    "CountryCode": "SYR",
    "CountryName": "Syrian Arab Republic"
  },
  {
    "CountryCode": "TCA",
    "CountryName": "Turks and Caicos Islands"
  },
  {
    "CountryCode": "TCD",
    "CountryName": "Chad"
  },
  {
    "CountryCode": "TGO",
    "CountryName": "Togo"
  },
  {
    "CountryCode": "THA",
    "CountryName": "Thailand"
  },
  {
    "CountryCode": "TJK",
    "CountryName": "Tajikistan"
  },
  {
    "CountryCode": "TKL",
    "CountryName": "Tokelau"
  },
  {
    "CountryCode": "TKM",
    "CountryName": "Turkmenistan"
  },
  {
    "CountryCode": "TLS",
    "CountryName": "Timor-Leste"
  },
  {
    "CountryCode": "TON",
    "CountryName": "Tonga"
  },
  {
    "CountryCode": "TTO",
    "CountryName": "Trinidad and Tobago"
  },
  {
    "CountryCode": "TUN",
    "CountryName": "Tunisia"
  },
  {
    "CountryCode": "TUR",
    "CountryName": "Turkey"
  },
  {
    "CountryCode": "TUV",
    "CountryName": "Tuvalu"
  },
  {
    "CountryCode": "TWN",
    "CountryName": "Taiwan, Province of China"
  },
  {
    "CountryCode": "TZA",
    "CountryName": "Tanzania, United Republic of"
  },
  {
    "CountryCode": "UGA",
    "CountryName": "Uganda"
  },
  {
    "CountryCode": "UKR",
    "CountryName": "Ukraine"
  },
  {
    "CountryCode": "UMI",
    "CountryName": "United States Minor Outlying Islands"
  },
  {
    "CountryCode": "URY",
    "CountryName": "Uruguay"
  },
  {
    "CountryCode": "USA",
    "CountryName": "United States"
  },
  {
    "CountryCode": "UZB",
    "CountryName": "Uzbekistan"
  },
  {
    "CountryCode": "VAT",
    "CountryName": "Holy See (Vatican City State)"
  },
  {
    "CountryCode": "VCT",
    "CountryName": "Saint Vincent and the Grenadines"
  },
  {
    "CountryCode": "VEN",
    "CountryName": "Venezuela, Bolivarian Republic of"
  },
  {
    "CountryCode": "VGB",
    "CountryName": "Virgin Islands, British"
  },
  {
    "CountryCode": "VIR",
    "CountryName": "Virgin Islands, U.S."
  },
  {
    "CountryCode": "VNM",
    "CountryName": "Viet Nam"
  },
  {
    "CountryCode": "VUT",
    "CountryName": "Vanuatu"
  },
  {
    "CountryCode": "WLF",
    "CountryName": "Wallis and Futuna"
  },
  {
    "CountryCode": "WSM",
    "CountryName": "Samoa"
  },
  {
    "CountryCode": "YEM",
    "CountryName": "Yemen"
  },
  {
    "CountryCode": "ZAF",
    "CountryName": "South Africa"
  },
  {
    "CountryCode": "ZMB",
    "CountryName": "Zambia"
  },
  {
    "CountryCode": "ZWE",
    "CountryName": "Zimbabwe"
  }
];

const indicatorTranslations = {
  // Indicateurs existants dans vos mockIndicators
  'WHOSIS_000001': 'Espérance de vie à la naissance (années)',
  'WHOSIS_000015': 'Taux de mortalité infantile (pour 1000 naissances vivantes)',
  'WHS4_544': 'Couverture vaccinale DTC3 (%)',
  'WHOSIS_000002': 'Taux de mortalité maternelle (pour 100 000 naissances vivantes)',
  'WHOSIS_000003': 'Taux de fertilité (naissances par femme)',
  'WHS5_88': 'Accès à l\'eau potable (%)',
  'WHS6_102': 'Accès à des installations sanitaires améliorées (%)',
  'WHS9_134': 'Prévalence du VIH (%)',
  'WHS10_136': 'Utilisation de contraceptifs modernes (%)',
  'WHS8_98': 'Dépenses de santé par habitant (USD)',

  // Indicateurs supplémentaires de l'API WHO
  'HIV_0000000001': 'Prévalence du VIH chez les adultes (15-49 ans)',
  'MDG_0000000001': 'Taux de mortalité infantile (pour 1000 naissances)',
  'LIFE_0000000030': 'Espérance de vie à la naissance (années)',
  'TB_1': 'Incidence de la tuberculose (pour 100000 habitants)',
  'WHS4_100': 'Couverture vaccinale - DTC3 chez les enfants (%)',
  'GHED_CHE_pc_US_SHA2011': 'Dépenses de santé par habitant (USD)',
  'NCD_CCS': 'Mortalité due aux maladies cardiovasculaires (%)',
  'CHILD_MALNUTRITION_STUNTING': 'Retard de croissance chez les enfants (%)'
};

const translateIndicatorName = (indicatorCode, originalName) => {
  return indicatorTranslations[indicatorCode] || originalName || indicatorCode;
};

class WHOAPIService {
  async fetchWithTimeout(url, options = {}, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      // Utilisez l'URL relative pour le proxy
      const response = await fetch(`/api${url}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          ...options.headers
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async getIndicators() {
    try {
      console.log('Récupération des indicateurs...');
      const data = await this.fetchWithTimeout(`/Indicator`);

      if (data && data.value && Array.isArray(data.value)) {
        return data.value.map(indicator => ({
          IndicatorCode: indicator.IndicatorCode,
          IndicatorName: translateIndicatorName(indicator.IndicatorCode, indicator.IndicatorName || indicator.DisplayString), // Traduction appliquée
          Description: indicator.Definition || ''
        }));
      }

      throw new Error('Format de données invalide');
    } catch (error) {
      console.warn('Erreur API WHO pour les indicateurs, utilisation des données de fallback:', error);
      // Les mockIndicators sont déjà en français, pas besoin de traduction
      return mockIndicators;
    }
  }

  async getCountries() {
    try {
      console.log('Récupération des pays...');
      const data = await this.fetchWithTimeout(`/DIMENSION/COUNTRY/DimensionValues`);

      if (data && data.value && Array.isArray(data.value)) {
        return data.value
          .filter(country => country.Code && country.Title)
          .map(country => ({
            CountryCode: country.Code,
            CountryName: country.Title
          }))
          .sort((a, b) => a.CountryName.localeCompare(b.CountryName));
      }

      throw new Error('Format de données invalide');
    } catch (error) {
      console.warn('Erreur API WHO pour les pays, utilisation des données de fallback:', error);
      return mockCountries;
    }
  }

  async getIndicatorData(indicatorCode, countryCodes, yearRange) {
    try {
      console.log(`Récupération des données pour ${indicatorCode}...`);

      // Construction de l'URL avec filtres
      const filters = [];
      if (countryCodes.length > 0) {
        filters.push(`SpatialDim eq '${countryCodes.join('\' or SpatialDim eq \'')}'`);
      }

      const filterString = filters.length > 0 ? `$filter=${filters.join(' and ')}` : '';
      const url = `/${indicatorCode}?${filterString}`;

      const data = await this.fetchWithTimeout(url);

      if (data && data.value && Array.isArray(data.value)) {
        return data.value
          .filter(item => {
            const year = parseInt(item.TimeDim);
            return year >= yearRange.start && year <= yearRange.end;
          })
          .map(item => ({
            CountryCode: item.SpatialDim,
            Year: parseInt(item.TimeDim),
            Value: parseFloat(item.NumericValue) || 0,
            DisplayValue: item.DisplayValue || item.NumericValue?.toString() || '0'
          }))
          .sort((a, b) => a.Year - b.Year);
      }

      throw new Error('Format de données invalide');
    } catch (error) {
      console.warn('Erreur API WHO pour les données, génération de données simulées:', error);
      return this.generateMockData(indicatorCode, countryCodes, yearRange);
    }
  }

  generateMockData(indicatorCode, countryCodes, yearRange) {
    const mockData = [];
    const baseValues = {
      'WHOSIS_000001': 75, // Espérance de vie
      'WHOSIS_000015': 15, // Mortalité infantile
      'WHS4_544': 85      // Vaccination DTC3
    };

    const baseValue = baseValues[indicatorCode] || 50;

    countryCodes.forEach(countryCode => {
      const countryVariation = (Math.random() - 0.5) * 20;

      for (let year = yearRange.start; year <= yearRange.end; year++) {
        const yearProgression = (year - yearRange.start) * 0.5;
        const randomVariation = (Math.random() - 0.5) * 5;
        const value = Math.max(0, baseValue + countryVariation + yearProgression + randomVariation);

        mockData.push({
          CountryCode: countryCode,
          Year: year,
          Value: Math.round(value * 100) / 100,
          DisplayValue: (Math.round(value * 100) / 100).toString()
        });
      }
    });

    return mockData;
  }
}

export const whoAPI = new WHOAPIService();