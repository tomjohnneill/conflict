const neighbourData = [
  {
    "one": "USA",
    "two": "CAN"
  },
  {
    "one": "USA",
    "two": "BHM"
  },
  {
    "one": "USA",
    "two": "CUB"
  },
  {
    "one": "USA",
    "two": "MEX"
  },
  {
    "one": "USA",
    "two": "RUS"
  },
  {
    "one": "BHM",
    "two": "CUB"
  },
  {
    "one": "BHM",
    "two": "HAI"
  },
  {
    "one": "BHM",
    "two": "DOM"
  },
  {
    "one": "CUB",
    "two": "HAI"
  },
  {
    "one": "CUB",
    "two": "JAM"
  },
  {
    "one": "CUB",
    "two": "MEX"
  },
  {
    "one": "HAI",
    "two": "DOM"
  },
  {
    "one": "HAI",
    "two": "JAM"
  },
  {
    "one": "TRI",
    "two": "BAR"
  },
  {
    "one": "TRI",
    "two": "GRN"
  },
  {
    "one": "TRI",
    "two": "SVG"
  },
  {
    "one": "TRI",
    "two": "VEN"
  },
  {
    "one": "TRI",
    "two": "GUY"
  },
  {
    "one": "BAR",
    "two": "GRN"
  },
  {
    "one": "BAR",
    "two": "SLU"
  },
  {
    "one": "BAR",
    "two": "SVG"
  },
  {
    "one": "DMA",
    "two": "SLU"
  },
  {
    "one": "DMA",
    "two": "VEN"
  },
  {
    "one": "GRN",
    "two": "SVG"
  },
  {
    "one": "GRN",
    "two": "VEN"
  },
  {
    "one": "SLU",
    "two": "SVG"
  },
  {
    "one": "SVG",
    "two": "VEN"
  },
  {
    "one": "AAB",
    "two": "SKN"
  },
  {
    "one": "AAB",
    "two": "VEN"
  },
  {
    "one": "SKN",
    "two": "VEN"
  },
  {
    "one": "MEX",
    "two": "BLZ"
  },
  {
    "one": "MEX",
    "two": "GUA"
  },
  {
    "one": "BLZ",
    "two": "GUA"
  },
  {
    "one": "BLZ",
    "two": "HON"
  },
  {
    "one": "GUA",
    "two": "HON"
  },
  {
    "one": "GUA",
    "two": "SAL"
  },
  {
    "one": "HON",
    "two": "SAL"
  },
  {
    "one": "HON",
    "two": "NIC"
  },
  {
    "one": "SAL",
    "two": "NIC"
  },
  {
    "one": "NIC",
    "two": "COS"
  },
  {
    "one": "NIC",
    "two": "COL"
  },
  {
    "one": "COS",
    "two": "PAN"
  },
  {
    "one": "COS",
    "two": "COL"
  },
  {
    "one": "PAN",
    "two": "COL"
  },
  {
    "one": "COL",
    "two": "VEN"
  },
  {
    "one": "COL",
    "two": "ECU"
  },
  {
    "one": "COL",
    "two": "PER"
  },
  {
    "one": "COL",
    "two": "BRA"
  },
  {
    "one": "VEN",
    "two": "GUY"
  },
  {
    "one": "VEN",
    "two": "BRA"
  },
  {
    "one": "GUY",
    "two": "SUR"
  },
  {
    "one": "GUY",
    "two": "BRA"
  },
  {
    "one": "SUR",
    "two": "BRA"
  },
  {
    "one": "ECU",
    "two": "PER"
  },
  {
    "one": "PER",
    "two": "BRA"
  },
  {
    "one": "PER",
    "two": "BOL"
  },
  {
    "one": "PER",
    "two": "CHL"
  },
  {
    "one": "BRA",
    "two": "BOL"
  },
  {
    "one": "BRA",
    "two": "PAR"
  },
  {
    "one": "BRA",
    "two": "ARG"
  },
  {
    "one": "BRA",
    "two": "URU"
  },
  {
    "one": "BOL",
    "two": "PAR"
  },
  {
    "one": "BOL",
    "two": "CHL"
  },
  {
    "one": "BOL",
    "two": "ARG"
  },
  {
    "one": "PAR",
    "two": "ARG"
  },
  {
    "one": "CHL",
    "two": "ARG"
  },
  {
    "one": "ARG",
    "two": "URU"
  },
  {
    "one": "UKG",
    "two": "IRE"
  },
  {
    "one": "UKG",
    "two": "NTH"
  },
  {
    "one": "UKG",
    "two": "BEL"
  },
  {
    "one": "UKG",
    "two": "FRN"
  },
  {
    "one": "NTH",
    "two": "BEL"
  },
  {
    "one": "NTH",
    "two": "GMY"
  },
  {
    "one": "NTH",
    "two": "DEN"
  },
  {
    "one": "BEL",
    "two": "LUX"
  },
  {
    "one": "BEL",
    "two": "FRN"
  },
  {
    "one": "BEL",
    "two": "GMY"
  },
  {
    "one": "LUX",
    "two": "FRN"
  },
  {
    "one": "LUX",
    "two": "GMY"
  },
  {
    "one": "FRN",
    "two": "MNC"
  },
  {
    "one": "FRN",
    "two": "SWZ"
  },
  {
    "one": "FRN",
    "two": "SPN"
  },
  {
    "one": "FRN",
    "two": "AND"
  },
  {
    "one": "FRN",
    "two": "GMY"
  },
  {
    "one": "FRN",
    "two": "ITA"
  },
  {
    "one": "MNC",
    "two": "ITA"
  },
  {
    "one": "LIE",
    "two": "SWZ"
  },
  {
    "one": "LIE",
    "two": "AUS"
  },
  {
    "one": "SWZ",
    "two": "GMY"
  },
  {
    "one": "SWZ",
    "two": "AUS"
  },
  {
    "one": "SWZ",
    "two": "ITA"
  },
  {
    "one": "SPN",
    "two": "AND"
  },
  {
    "one": "SPN",
    "two": "POR"
  },
  {
    "one": "SPN",
    "two": "MOR"
  },
  {
    "one": "SPN",
    "two": "ALG"
  },
  {
    "one": "POR",
    "two": "MOR"
  },
  {
    "one": "GMY",
    "two": "POL"
  },
  {
    "one": "GMY",
    "two": "AUS"
  },
  {
    "one": "GMY",
    "two": "CZR"
  },
  {
    "one": "GMY",
    "two": "SWD"
  },
  {
    "one": "GMY",
    "two": "DEN"
  },
  {
    "one": "POL",
    "two": "CZR"
  },
  {
    "one": "POL",
    "two": "SLO"
  },
  {
    "one": "POL",
    "two": "RUS"
  },
  {
    "one": "POL",
    "two": "LAT"
  },
  {
    "one": "POL",
    "two": "LIT"
  },
  {
    "one": "POL",
    "two": "UKR"
  },
  {
    "one": "POL",
    "two": "BLR"
  },
  {
    "one": "POL",
    "two": "SWD"
  },
  {
    "one": "POL",
    "two": "DEN"
  },
  {
    "one": "AUS",
    "two": "HUN"
  },
  {
    "one": "AUS",
    "two": "CZR"
  },
  {
    "one": "AUS",
    "two": "SLO"
  },
  {
    "one": "AUS",
    "two": "ITA"
  },
  {
    "one": "AUS",
    "two": "SLV"
  },
  {
    "one": "HUN",
    "two": "SLO"
  },
  {
    "one": "HUN",
    "two": "CRO"
  },
  {
    "one": "HUN",
    "two": "YUG"
  },
  {
    "one": "HUN",
    "two": "SLV"
  },
  {
    "one": "HUN",
    "two": "ROM"
  },
  {
    "one": "HUN",
    "two": "UKR"
  },
  {
    "one": "CZR",
    "two": "SLO"
  },
  {
    "one": "SLO",
    "two": "UKR"
  },
  {
    "one": "ITA",
    "two": "SNM"
  },
  {
    "one": "ITA",
    "two": "MLT"
  },
  {
    "one": "ITA",
    "two": "ALB"
  },
  {
    "one": "ITA",
    "two": "MNG"
  },
  {
    "one": "ITA",
    "two": "CRO"
  },
  {
    "one": "ITA",
    "two": "SLV"
  },
  {
    "one": "ITA",
    "two": "GRC"
  },
  {
    "one": "ITA",
    "two": "ALG"
  },
  {
    "one": "ITA",
    "two": "TUN"
  },
  {
    "one": "ALB",
    "two": "MNG"
  },
  {
    "one": "ALB",
    "two": "MAC"
  },
  {
    "one": "ALB",
    "two": "CRO"
  },
  {
    "one": "ALB",
    "two": "KOS"
  },
  {
    "one": "ALB",
    "two": "GRC"
  },
  {
    "one": "MNG",
    "two": "CRO"
  },
  {
    "one": "MNG",
    "two": "YUG"
  },
  {
    "one": "MNG",
    "two": "BOS"
  },
  {
    "one": "MNG",
    "two": "KOS"
  },
  {
    "one": "MAC",
    "two": "YUG"
  },
  {
    "one": "MAC",
    "two": "KOS"
  },
  {
    "one": "MAC",
    "two": "GRC"
  },
  {
    "one": "MAC",
    "two": "BUL"
  },
  {
    "one": "CRO",
    "two": "YUG"
  },
  {
    "one": "CRO",
    "two": "BOS"
  },
  {
    "one": "CRO",
    "two": "SLV"
  },
  {
    "one": "YUG",
    "two": "BOS"
  },
  {
    "one": "YUG",
    "two": "KOS"
  },
  {
    "one": "YUG",
    "two": "BUL"
  },
  {
    "one": "YUG",
    "two": "ROM"
  },
  {
    "one": "GRC",
    "two": "BUL"
  },
  {
    "one": "GRC",
    "two": "TUR"
  },
  {
    "one": "CYP",
    "two": "TUR"
  },
  {
    "one": "CYP",
    "two": "SYR"
  },
  {
    "one": "CYP",
    "two": "LEB"
  },
  {
    "one": "CYP",
    "two": "ISR"
  },
  {
    "one": "BUL",
    "two": "ROM"
  },
  {
    "one": "BUL",
    "two": "TUR"
  },
  {
    "one": "MLD",
    "two": "ROM"
  },
  {
    "one": "MLD",
    "two": "UKR"
  },
  {
    "one": "ROM",
    "two": "RUS"
  },
  {
    "one": "ROM",
    "two": "UKR"
  },
  {
    "one": "RUS",
    "two": "EST"
  },
  {
    "one": "RUS",
    "two": "LAT"
  },
  {
    "one": "RUS",
    "two": "LIT"
  },
  {
    "one": "RUS",
    "two": "UKR"
  },
  {
    "one": "RUS",
    "two": "BLR"
  },
  {
    "one": "RUS",
    "two": "GRG"
  },
  {
    "one": "RUS",
    "two": "AZE"
  },
  {
    "one": "RUS",
    "two": "FIN"
  },
  {
    "one": "RUS",
    "two": "SWD"
  },
  {
    "one": "RUS",
    "two": "NOR"
  },
  {
    "one": "RUS",
    "two": "KZK"
  },
  {
    "one": "RUS",
    "two": "CHN"
  },
  {
    "one": "RUS",
    "two": "MON"
  },
  {
    "one": "RUS",
    "two": "PRK"
  },
  {
    "one": "RUS",
    "two": "JPN"
  },
  {
    "one": "EST",
    "two": "LAT"
  },
  {
    "one": "EST",
    "two": "FIN"
  },
  {
    "one": "EST",
    "two": "SWD"
  },
  {
    "one": "LAT",
    "two": "LIT"
  },
  {
    "one": "LAT",
    "two": "BLR"
  },
  {
    "one": "LAT",
    "two": "SWD"
  },
  {
    "one": "LIT",
    "two": "BLR"
  },
  {
    "one": "LIT",
    "two": "SWD"
  },
  {
    "one": "UKR",
    "two": "BLR"
  },
  {
    "one": "ARM",
    "two": "GRG"
  },
  {
    "one": "ARM",
    "two": "AZE"
  },
  {
    "one": "ARM",
    "two": "IRN"
  },
  {
    "one": "ARM",
    "two": "TUR"
  },
  {
    "one": "GRG",
    "two": "AZE"
  },
  {
    "one": "GRG",
    "two": "TUR"
  },
  {
    "one": "AZE",
    "two": "IRN"
  },
  {
    "one": "AZE",
    "two": "TUR"
  },
  {
    "one": "AZE",
    "two": "TKM"
  },
  {
    "one": "AZE",
    "two": "KZK"
  },
  {
    "one": "FIN",
    "two": "SWD"
  },
  {
    "one": "FIN",
    "two": "NOR"
  },
  {
    "one": "SWD",
    "two": "NOR"
  },
  {
    "one": "SWD",
    "two": "DEN"
  },
  {
    "one": "NOR",
    "two": "DEN"
  },
  {
    "one": "STP",
    "two": "EQG"
  },
  {
    "one": "STP",
    "two": "GAB"
  },
  {
    "one": "GNB",
    "two": "SEN"
  },
  {
    "one": "GNB",
    "two": "GUI"
  },
  {
    "one": "EQG",
    "two": "CAO"
  },
  {
    "one": "EQG",
    "two": "NIG"
  },
  {
    "one": "EQG",
    "two": "GAB"
  },
  {
    "one": "GAM",
    "two": "SEN"
  },
  {
    "one": "MLI",
    "two": "SEN"
  },
  {
    "one": "MLI",
    "two": "MAA"
  },
  {
    "one": "MLI",
    "two": "NIR"
  },
  {
    "one": "MLI",
    "two": "CDI"
  },
  {
    "one": "MLI",
    "two": "GUI"
  },
  {
    "one": "MLI",
    "two": "BFO"
  },
  {
    "one": "MLI",
    "two": "ALG"
  },
  {
    "one": "SEN",
    "two": "MAA"
  },
  {
    "one": "SEN",
    "two": "GUI"
  },
  {
    "one": "BEN",
    "two": "NIR"
  },
  {
    "one": "BEN",
    "two": "BFO"
  },
  {
    "one": "BEN",
    "two": "GHA"
  },
  {
    "one": "BEN",
    "two": "TOG"
  },
  {
    "one": "BEN",
    "two": "NIG"
  },
  {
    "one": "MAA",
    "two": "MOR"
  },
  {
    "one": "MAA",
    "two": "ALG"
  },
  {
    "one": "NIR",
    "two": "BFO"
  },
  {
    "one": "NIR",
    "two": "CAO"
  },
  {
    "one": "NIR",
    "two": "NIG"
  },
  {
    "one": "NIR",
    "two": "CHA"
  },
  {
    "one": "NIR",
    "two": "ALG"
  },
  {
    "one": "NIR",
    "two": "LIB"
  },
  {
    "one": "CDI",
    "two": "GUI"
  },
  {
    "one": "CDI",
    "two": "BFO"
  },
  {
    "one": "CDI",
    "two": "LBR"
  },
  {
    "one": "CDI",
    "two": "GHA"
  },
  {
    "one": "GUI",
    "two": "LBR"
  },
  {
    "one": "GUI",
    "two": "SIE"
  },
  {
    "one": "BFO",
    "two": "GHA"
  },
  {
    "one": "BFO",
    "two": "TOG"
  },
  {
    "one": "LBR",
    "two": "SIE"
  },
  {
    "one": "GHA",
    "two": "TOG"
  },
  {
    "one": "CAO",
    "two": "NIG"
  },
  {
    "one": "CAO",
    "two": "GAB"
  },
  {
    "one": "CAO",
    "two": "CEN"
  },
  {
    "one": "CAO",
    "two": "CHA"
  },
  {
    "one": "CAO",
    "two": "CON"
  },
  {
    "one": "NIG",
    "two": "CHA"
  },
  {
    "one": "GAB",
    "two": "CON"
  },
  {
    "one": "CEN",
    "two": "CHA"
  },
  {
    "one": "CEN",
    "two": "CON"
  },
  {
    "one": "CEN",
    "two": "DRC"
  },
  {
    "one": "CEN",
    "two": "SUD"
  },
  {
    "one": "CEN",
    "two": "SSD"
  },
  {
    "one": "CHA",
    "two": "LIB"
  },
  {
    "one": "CHA",
    "two": "SUD"
  },
  {
    "one": "CON",
    "two": "DRC"
  },
  {
    "one": "CON",
    "two": "ANG"
  },
  {
    "one": "DRC",
    "two": "UGA"
  },
  {
    "one": "DRC",
    "two": "TAZ"
  },
  {
    "one": "DRC",
    "two": "BUI"
  },
  {
    "one": "DRC",
    "two": "RWA"
  },
  {
    "one": "DRC",
    "two": "ANG"
  },
  {
    "one": "DRC",
    "two": "ZAM"
  },
  {
    "one": "DRC",
    "two": "SSD"
  },
  {
    "one": "UGA",
    "two": "KEN"
  },
  {
    "one": "UGA",
    "two": "TAZ"
  },
  {
    "one": "UGA",
    "two": "RWA"
  },
  {
    "one": "UGA",
    "two": "SSD"
  },
  {
    "one": "KEN",
    "two": "TAZ"
  },
  {
    "one": "KEN",
    "two": "SOM"
  },
  {
    "one": "KEN",
    "two": "ETH"
  },
  {
    "one": "KEN",
    "two": "SSD"
  },
  {
    "one": "TAZ",
    "two": "BUI"
  },
  {
    "one": "TAZ",
    "two": "RWA"
  },
  {
    "one": "TAZ",
    "two": "MZM"
  },
  {
    "one": "TAZ",
    "two": "ZAM"
  },
  {
    "one": "TAZ",
    "two": "MAW"
  },
  {
    "one": "BUI",
    "two": "RWA"
  },
  {
    "one": "SOM",
    "two": "DJI"
  },
  {
    "one": "SOM",
    "two": "ETH"
  },
  {
    "one": "SOM",
    "two": "YEM"
  },
  {
    "one": "DJI",
    "two": "ETH"
  },
  {
    "one": "DJI",
    "two": "ERI"
  },
  {
    "one": "DJI",
    "two": "YEM"
  },
  {
    "one": "ETH",
    "two": "ERI"
  },
  {
    "one": "ETH",
    "two": "SUD"
  },
  {
    "one": "ETH",
    "two": "SSD"
  },
  {
    "one": "ERI",
    "two": "SUD"
  },
  {
    "one": "ERI",
    "two": "SAU"
  },
  {
    "one": "ERI",
    "two": "YEM"
  },
  {
    "one": "ANG",
    "two": "ZAM"
  },
  {
    "one": "ANG",
    "two": "NAM"
  },
  {
    "one": "MZM",
    "two": "ZAM"
  },
  {
    "one": "MZM",
    "two": "ZIM"
  },
  {
    "one": "MZM",
    "two": "MAW"
  },
  {
    "one": "MZM",
    "two": "SAF"
  },
  {
    "one": "MZM",
    "two": "SWA"
  },
  {
    "one": "ZAM",
    "two": "ZIM"
  },
  {
    "one": "ZAM",
    "two": "MAW"
  },
  {
    "one": "ZAM",
    "two": "NAM"
  },
  {
    "one": "ZAM",
    "two": "BOT"
  },
  {
    "one": "ZIM",
    "two": "SAF"
  },
  {
    "one": "ZIM",
    "two": "BOT"
  },
  {
    "one": "SAF",
    "two": "NAM"
  },
  {
    "one": "SAF",
    "two": "LES"
  },
  {
    "one": "SAF",
    "two": "BOT"
  },
  {
    "one": "SAF",
    "two": "SWA"
  },
  {
    "one": "NAM",
    "two": "BOT"
  },
  {
    "one": "MOR",
    "two": "ALG"
  },
  {
    "one": "ALG",
    "two": "TUN"
  },
  {
    "one": "ALG",
    "two": "LIB"
  },
  {
    "one": "TUN",
    "two": "LIB"
  },
  {
    "one": "LIB",
    "two": "SUD"
  },
  {
    "one": "LIB",
    "two": "EGY"
  },
  {
    "one": "SUD",
    "two": "SSD"
  },
  {
    "one": "SUD",
    "two": "EGY"
  },
  {
    "one": "SUD",
    "two": "SAU"
  },
  {
    "one": "IRN",
    "two": "TUR"
  },
  {
    "one": "IRN",
    "two": "IRQ"
  },
  {
    "one": "IRN",
    "two": "SAU"
  },
  {
    "one": "IRN",
    "two": "KUW"
  },
  {
    "one": "IRN",
    "two": "BAH"
  },
  {
    "one": "IRN",
    "two": "QAT"
  },
  {
    "one": "IRN",
    "two": "UAE"
  },
  {
    "one": "IRN",
    "two": "OMA"
  },
  {
    "one": "IRN",
    "two": "AFG"
  },
  {
    "one": "IRN",
    "two": "TKM"
  },
  {
    "one": "IRN",
    "two": "PAK"
  },
  {
    "one": "TUR",
    "two": "IRQ"
  },
  {
    "one": "TUR",
    "two": "SYR"
  },
  {
    "one": "TUR",
    "two": "LEB"
  },
  {
    "one": "IRQ",
    "two": "SYR"
  },
  {
    "one": "IRQ",
    "two": "JOR"
  },
  {
    "one": "IRQ",
    "two": "SAU"
  },
  {
    "one": "IRQ",
    "two": "KUW"
  },
  {
    "one": "EGY",
    "two": "JOR"
  },
  {
    "one": "EGY",
    "two": "ISR"
  },
  {
    "one": "EGY",
    "two": "SAU"
  },
  {
    "one": "SYR",
    "two": "LEB"
  },
  {
    "one": "SYR",
    "two": "JOR"
  },
  {
    "one": "SYR",
    "two": "ISR"
  },
  {
    "one": "LEB",
    "two": "ISR"
  },
  {
    "one": "JOR",
    "two": "ISR"
  },
  {
    "one": "JOR",
    "two": "SAU"
  },
  {
    "one": "ISR",
    "two": "SAU"
  },
  {
    "one": "SAU",
    "two": "YEM"
  },
  {
    "one": "SAU",
    "two": "KUW"
  },
  {
    "one": "SAU",
    "two": "BAH"
  },
  {
    "one": "SAU",
    "two": "QAT"
  },
  {
    "one": "SAU",
    "two": "UAE"
  },
  {
    "one": "SAU",
    "two": "OMA"
  },
  {
    "one": "YEM",
    "two": "OMA"
  },
  {
    "one": "BAH",
    "two": "QAT"
  },
  {
    "one": "QAT",
    "two": "UAE"
  },
  {
    "one": "UAE",
    "two": "OMA"
  },
  {
    "one": "AFG",
    "two": "TKM"
  },
  {
    "one": "AFG",
    "two": "TAJ"
  },
  {
    "one": "AFG",
    "two": "UZB"
  },
  {
    "one": "AFG",
    "two": "CHN"
  },
  {
    "one": "AFG",
    "two": "PAK"
  },
  {
    "one": "TKM",
    "two": "UZB"
  },
  {
    "one": "TKM",
    "two": "KZK"
  },
  {
    "one": "TAJ",
    "two": "KYR"
  },
  {
    "one": "TAJ",
    "two": "UZB"
  },
  {
    "one": "TAJ",
    "two": "CHN"
  },
  {
    "one": "KYR",
    "two": "UZB"
  },
  {
    "one": "KYR",
    "two": "KZK"
  },
  {
    "one": "KYR",
    "two": "CHN"
  },
  {
    "one": "UZB",
    "two": "KZK"
  },
  {
    "one": "KZK",
    "two": "CHN"
  },
  {
    "one": "CHN",
    "two": "MON"
  },
  {
    "one": "CHN",
    "two": "TAW"
  },
  {
    "one": "CHN",
    "two": "PRK"
  },
  {
    "one": "CHN",
    "two": "ROK"
  },
  {
    "one": "CHN",
    "two": "IND"
  },
  {
    "one": "CHN",
    "two": "BHU"
  },
  {
    "one": "CHN",
    "two": "PAK"
  },
  {
    "one": "CHN",
    "two": "MYA"
  },
  {
    "one": "CHN",
    "two": "NEP"
  },
  {
    "one": "CHN",
    "two": "LAO"
  },
  {
    "one": "CHN",
    "two": "DRV"
  },
  {
    "one": "TAW",
    "two": "JPN"
  },
  {
    "one": "TAW",
    "two": "PHI"
  },
  {
    "one": "PRK",
    "two": "ROK"
  },
  {
    "one": "ROK",
    "two": "JPN"
  },
  {
    "one": "IND",
    "two": "BHU"
  },
  {
    "one": "IND",
    "two": "PAK"
  },
  {
    "one": "IND",
    "two": "BNG"
  },
  {
    "one": "IND",
    "two": "MYA"
  },
  {
    "one": "IND",
    "two": "SRI"
  },
  {
    "one": "IND",
    "two": "MAD"
  },
  {
    "one": "IND",
    "two": "NEP"
  },
  {
    "one": "IND",
    "two": "INS"
  },
  {
    "one": "PAK",
    "two": "MYA"
  },
  {
    "one": "BNG",
    "two": "MYA"
  },
  {
    "one": "MYA",
    "two": "THI"
  },
  {
    "one": "MYA",
    "two": "LAO"
  },
  {
    "one": "THI",
    "two": "CAM"
  },
  {
    "one": "THI",
    "two": "LAO"
  },
  {
    "one": "THI",
    "two": "MAL"
  },
  {
    "one": "THI",
    "two": "INS"
  },
  {
    "one": "CAM",
    "two": "LAO"
  },
  {
    "one": "CAM",
    "two": "DRV"
  },
  {
    "one": "LAO",
    "two": "DRV"
  },
  {
    "one": "MAL",
    "two": "SIN"
  },
  {
    "one": "MAL",
    "two": "BRU"
  },
  {
    "one": "MAL",
    "two": "PHI"
  },
  {
    "one": "MAL",
    "two": "INS"
  },
  {
    "one": "SIN",
    "two": "INS"
  },
  {
    "one": "PHI",
    "two": "INS"
  },
  {
    "one": "INS",
    "two": "ETM"
  },
  {
    "one": "INS",
    "two": "AUL"
  },
  {
    "one": "INS",
    "two": "PNG"
  },
  {
    "one": "INS",
    "two": "PAL"
  },
  {
    "one": "AUL",
    "two": "PNG"
  },
  {
    "one": "PNG",
    "two": "SOL"
  },
  {
    "one": "VAN",
    "two": "SOL"
  },
  {
    "one": "PAL",
    "two": "FSM"
  },
  {
    "one": "USA",
    "two": "CUB"
  },
  {
    "one": "BHM",
    "two": "JAM"
  },
  {
    "one": "CUB",
    "two": "HAI"
  },
  {
    "one": "CUB",
    "two": "HAI"
  },
  {
    "one": "CUB",
    "two": "DOM"
  },
  {
    "one": "CUB",
    "two": "DOM"
  },
  {
    "one": "CUB",
    "two": "DOM"
  },
  {
    "one": "CUB",
    "two": "MEX"
  },
  {
    "one": "CUB",
    "two": "BLZ"
  },
  {
    "one": "CUB",
    "two": "HON"
  },
  {
    "one": "CUB",
    "two": "HON"
  },
  {
    "one": "HAI",
    "two": "DOM"
  },
  {
    "one": "HAI",
    "two": "COL"
  },
  {
    "one": "HAI",
    "two": "COL"
  },
  {
    "one": "DOM",
    "two": "JAM"
  },
  {
    "one": "DOM",
    "two": "SKN"
  },
  {
    "one": "DOM",
    "two": "COL"
  },
  {
    "one": "DOM",
    "two": "COL"
  },
  {
    "one": "DOM",
    "two": "VEN"
  },
  {
    "one": "DOM",
    "two": "VEN"
  },
  {
    "one": "JAM",
    "two": "HON"
  },
  {
    "one": "JAM",
    "two": "NIC"
  },
  {
    "one": "JAM",
    "two": "COL"
  },
  {
    "one": "TRI",
    "two": "SLU"
  },
  {
    "one": "TRI",
    "two": "SUR"
  },
  {
    "one": "BAR",
    "two": "DMA"
  },
  {
    "one": "BAR",
    "two": "AAB"
  },
  {
    "one": "BAR",
    "two": "VEN"
  },
  {
    "one": "BAR",
    "two": "GUY"
  },
  {
    "one": "DMA",
    "two": "GRN"
  },
  {
    "one": "DMA",
    "two": "SVG"
  },
  {
    "one": "DMA",
    "two": "SKN"
  },
  {
    "one": "GRN",
    "two": "AAB"
  },
  {
    "one": "GRN",
    "two": "SKN"
  },
  {
    "one": "GRN",
    "two": "GUY"
  },
  {
    "one": "SLU",
    "two": "AAB"
  },
  {
    "one": "SLU",
    "two": "SKN"
  },
  {
    "one": "SLU",
    "two": "VEN"
  },
  {
    "one": "SLU",
    "two": "GUY"
  },
  {
    "one": "SVG",
    "two": "AAB"
  },
  {
    "one": "SVG",
    "two": "SKN"
  },
  {
    "one": "SVG",
    "two": "GUY"
  },
  {
    "one": "MEX",
    "two": "HON"
  },
  {
    "one": "GUA",
    "two": "NIC"
  },
  {
    "one": "GUA",
    "two": "COS"
  },
  {
    "one": "SAL",
    "two": "COS"
  },
  {
    "one": "NIC",
    "two": "PAN"
  },
  {
    "one": "NIC",
    "two": "COL"
  },
  {
    "one": "ECU",
    "two": "BRA"
  },
  {
    "one": "BRA",
    "two": "PAR"
  },
  {
    "one": "BOL",
    "two": "PAR"
  },
  {
    "one": "PAR",
    "two": "ARG"
  },
  {
    "one": "UKG",
    "two": "NTH"
  },
  {
    "one": "UKG",
    "two": "BEL"
  },
  {
    "one": "UKG",
    "two": "FRN"
  },
  {
    "one": "UKG",
    "two": "HAN"
  },
  {
    "one": "UKG",
    "two": "GMY"
  },
  {
    "one": "UKG",
    "two": "GMY"
  },
  {
    "one": "UKG",
    "two": "GFR"
  },
  {
    "one": "UKG",
    "two": "SWD"
  },
  {
    "one": "UKG",
    "two": "NOR"
  },
  {
    "one": "UKG",
    "two": "NOR"
  },
  {
    "one": "UKG",
    "two": "DEN"
  },
  {
    "one": "UKG",
    "two": "DEN"
  },
  {
    "one": "IRE",
    "two": "FRN"
  },
  {
    "one": "IRE",
    "two": "FRN"
  },
  {
    "one": "NTH",
    "two": "BEL"
  },
  {
    "one": "NTH",
    "two": "FRN"
  },
  {
    "one": "NTH",
    "two": "FRN"
  },
  {
    "one": "NTH",
    "two": "FRN"
  },
  {
    "one": "NTH",
    "two": "HAN"
  },
  {
    "one": "NTH",
    "two": "GMY"
  },
  {
    "one": "NTH",
    "two": "GFR"
  },
  {
    "one": "NTH",
    "two": "SWD"
  },
  {
    "one": "NTH",
    "two": "NOR"
  },
  {
    "one": "NTH",
    "two": "NOR"
  },
  {
    "one": "NTH",
    "two": "DEN"
  },
  {
    "one": "BEL",
    "two": "LUX"
  },
  {
    "one": "BEL",
    "two": "FRN"
  },
  {
    "one": "BEL",
    "two": "GMY"
  },
  {
    "one": "BEL",
    "two": "GFR"
  },
  {
    "one": "BEL",
    "two": "DEN"
  },
  {
    "one": "BEL",
    "two": "DEN"
  },
  {
    "one": "LUX",
    "two": "FRN"
  },
  {
    "one": "LUX",
    "two": "GMY"
  },
  {
    "one": "LUX",
    "two": "GMY"
  },
  {
    "one": "LUX",
    "two": "GFR"
  },
  {
    "one": "FRN",
    "two": "SWZ"
  },
  {
    "one": "FRN",
    "two": "SPN"
  },
  {
    "one": "FRN",
    "two": "BAV"
  },
  {
    "one": "FRN",
    "two": "GMY"
  },
  {
    "one": "FRN",
    "two": "GMY"
  },
  {
    "one": "FRN",
    "two": "GFR"
  },
  {
    "one": "FRN",
    "two": "BAD"
  },
  {
    "one": "FRN",
    "two": "ITA"
  },
  {
    "one": "FRN",
    "two": "PAP"
  },
  {
    "one": "FRN",
    "two": "MOD"
  },
  {
    "one": "FRN",
    "two": "TUS"
  },
  {
    "one": "FRN",
    "two": "DEN"
  },
  {
    "one": "FRN",
    "two": "DEN"
  },
  {
    "one": "FRN",
    "two": "ALG"
  },
  {
    "one": "FRN",
    "two": "TUN"
  },
  {
    "one": "FRN",
    "two": "TUN"
  },
  {
    "one": "MNC",
    "two": "SPN"
  },
  {
    "one": "SWZ",
    "two": "BAV"
  },
  {
    "one": "SWZ",
    "two": "GMY"
  },
  {
    "one": "SWZ",
    "two": "GFR"
  },
  {
    "one": "SWZ",
    "two": "BAD"
  },
  {
    "one": "SWZ",
    "two": "WRT"
  },
  {
    "one": "SWZ",
    "two": "AUH"
  },
  {
    "one": "SWZ",
    "two": "AUS"
  },
  {
    "one": "SPN",
    "two": "ITA"
  },
  {
    "one": "SPN",
    "two": "TUS"
  },
  {
    "one": "SPN",
    "two": "MAA"
  },
  {
    "one": "SPN",
    "two": "MOR"
  },
  {
    "one": "SPN",
    "two": "TUN"
  },
  {
    "one": "SPN",
    "two": "TUN"
  },
  {
    "one": "POR",
    "two": "MOR"
  },
  {
    "one": "HAN",
    "two": "GMY"
  },
  {
    "one": "HAN",
    "two": "HSE"
  },
  {
    "one": "HAN",
    "two": "MEC"
  },
  {
    "one": "HAN",
    "two": "SWD"
  },
  {
    "one": "HAN",
    "two": "DEN"
  },
  {
    "one": "BAV",
    "two": "GMY"
  },
  {
    "one": "BAV",
    "two": "BAD"
  },
  {
    "one": "BAV",
    "two": "SAX"
  },
  {
    "one": "BAV",
    "two": "WRT"
  },
  {
    "one": "BAV",
    "two": "HSE"
  },
  {
    "one": "BAV",
    "two": "HSG"
  },
  {
    "one": "BAV",
    "two": "AUH"
  },
  {
    "one": "GMY",
    "two": "BAD"
  },
  {
    "one": "GMY",
    "two": "SAX"
  },
  {
    "one": "GMY",
    "two": "WRT"
  },
  {
    "one": "GMY",
    "two": "HSE"
  },
  {
    "one": "GMY",
    "two": "HSG"
  },
  {
    "one": "GMY",
    "two": "MEC"
  },
  {
    "one": "GMY",
    "two": "POL"
  },
  {
    "one": "GMY",
    "two": "AUH"
  },
  {
    "one": "GMY",
    "two": "AUS"
  },
  {
    "one": "GMY",
    "two": "HUN"
  },
  {
    "one": "GMY",
    "two": "CZE"
  },
  {
    "one": "GMY",
    "two": "CZE"
  },
  {
    "one": "GMY",
    "two": "ITA"
  },
  {
    "one": "GMY",
    "two": "YUG"
  },
  {
    "one": "GMY",
    "two": "YUG"
  },
  {
    "one": "GMY",
    "two": "RUS"
  },
  {
    "one": "GMY",
    "two": "RUS"
  },
  {
    "one": "GMY",
    "two": "RUS"
  },
  {
    "one": "GMY",
    "two": "EST"
  },
  {
    "one": "GMY",
    "two": "EST"
  },
  {
    "one": "GMY",
    "two": "LAT"
  },
  {
    "one": "GMY",
    "two": "LAT"
  },
  {
    "one": "GMY",
    "two": "LIT"
  },
  {
    "one": "GMY",
    "two": "LIT"
  },
  {
    "one": "GMY",
    "two": "FIN"
  },
  {
    "one": "GMY",
    "two": "SWD"
  },
  {
    "one": "GMY",
    "two": "NOR"
  },
  {
    "one": "GMY",
    "two": "NOR"
  },
  {
    "one": "GMY",
    "two": "DEN"
  },
  {
    "one": "GMY",
    "two": "DEN"
  },
  {
    "one": "GFR",
    "two": "GDR"
  },
  {
    "one": "GFR",
    "two": "AUS"
  },
  {
    "one": "GFR",
    "two": "CZE"
  },
  {
    "one": "GFR",
    "two": "RUS"
  },
  {
    "one": "GFR",
    "two": "SWD"
  },
  {
    "one": "GFR",
    "two": "NOR"
  },
  {
    "one": "GFR",
    "two": "DEN"
  },
  {
    "one": "GDR",
    "two": "POL"
  },
  {
    "one": "GDR",
    "two": "CZE"
  },
  {
    "one": "GDR",
    "two": "RUS"
  },
  {
    "one": "GDR",
    "two": "SWD"
  },
  {
    "one": "GDR",
    "two": "DEN"
  },
  {
    "one": "BAD",
    "two": "WRT"
  },
  {
    "one": "BAD",
    "two": "HSG"
  },
  {
    "one": "BAD",
    "two": "AUH"
  },
  {
    "one": "SAX",
    "two": "AUH"
  },
  {
    "one": "WRT",
    "two": "AUH"
  },
  {
    "one": "HSE",
    "two": "HSG"
  },
  {
    "one": "MEC",
    "two": "RUS"
  },
  {
    "one": "MEC",
    "two": "SWD"
  },
  {
    "one": "MEC",
    "two": "DEN"
  },
  {
    "one": "POL",
    "two": "CZE"
  },
  {
    "one": "POL",
    "two": "CZE"
  },
  {
    "one": "POL",
    "two": "ROM"
  },
  {
    "one": "POL",
    "two": "RUS"
  },
  {
    "one": "POL",
    "two": "EST"
  },
  {
    "one": "POL",
    "two": "EST"
  },
  {
    "one": "POL",
    "two": "LAT"
  },
  {
    "one": "POL",
    "two": "LIT"
  },
  {
    "one": "POL",
    "two": "FIN"
  },
  {
    "one": "POL",
    "two": "FIN"
  },
  {
    "one": "POL",
    "two": "SWD"
  },
  {
    "one": "POL",
    "two": "DEN"
  },
  {
    "one": "AUH",
    "two": "ITA"
  },
  {
    "one": "AUH",
    "two": "PAP"
  },
  {
    "one": "AUH",
    "two": "SIC"
  },
  {
    "one": "AUH",
    "two": "MOD"
  },
  {
    "one": "AUH",
    "two": "PMA"
  },
  {
    "one": "AUH",
    "two": "YUG"
  },
  {
    "one": "AUH",
    "two": "GRC"
  },
  {
    "one": "AUH",
    "two": "ROM"
  },
  {
    "one": "AUH",
    "two": "RUS"
  },
  {
    "one": "AUH",
    "two": "TUR"
  },
  {
    "one": "AUS",
    "two": "HUN"
  },
  {
    "one": "AUS",
    "two": "CZE"
  },
  {
    "one": "AUS",
    "two": "CZE"
  },
  {
    "one": "AUS",
    "two": "ITA"
  },
  {
    "one": "AUS",
    "two": "YUG"
  },
  {
    "one": "AUS",
    "two": "YUG"
  },
  {
    "one": "HUN",
    "two": "CZE"
  },
  {
    "one": "HUN",
    "two": "CZE"
  },
  {
    "one": "HUN",
    "two": "YUG"
  },
  {
    "one": "HUN",
    "two": "RUS"
  },
  {
    "one": "HUN",
    "two": "RUS"
  },
  {
    "one": "CZE",
    "two": "ROM"
  },
  {
    "one": "CZE",
    "two": "RUS"
  },
  {
    "one": "CZE",
    "two": "UKR"
  },
  {
    "one": "ITA",
    "two": "PAP"
  },
  {
    "one": "ITA",
    "two": "SIC"
  },
  {
    "one": "ITA",
    "two": "MOD"
  },
  {
    "one": "ITA",
    "two": "PMA"
  },
  {
    "one": "ITA",
    "two": "TUS"
  },
  {
    "one": "ITA",
    "two": "ALB"
  },
  {
    "one": "ITA",
    "two": "YUG"
  },
  {
    "one": "ITA",
    "two": "YUG"
  },
  {
    "one": "ITA",
    "two": "YUG"
  },
  {
    "one": "ITA",
    "two": "GRC"
  },
  {
    "one": "ITA",
    "two": "GRC"
  },
  {
    "one": "ITA",
    "two": "TUN"
  },
  {
    "one": "ITA",
    "two": "LIB"
  },
  {
    "one": "ITA",
    "two": "TUR"
  },
  {
    "one": "PAP",
    "two": "SIC"
  },
  {
    "one": "PAP",
    "two": "MOD"
  },
  {
    "one": "PAP",
    "two": "TUS"
  },
  {
    "one": "PAP",
    "two": "TUR"
  },
  {
    "one": "SIC",
    "two": "GRC"
  },
  {
    "one": "SIC",
    "two": "TUN"
  },
  {
    "one": "SIC",
    "two": "TUR"
  },
  {
    "one": "MOD",
    "two": "PMA"
  },
  {
    "one": "MOD",
    "two": "TUS"
  },
  {
    "one": "MLT",
    "two": "ALB"
  },
  {
    "one": "MLT",
    "two": "GRC"
  },
  {
    "one": "MLT",
    "two": "TUN"
  },
  {
    "one": "MLT",
    "two": "LIB"
  },
  {
    "one": "ALB",
    "two": "YUG"
  },
  {
    "one": "ALB",
    "two": "YUG"
  },
  {
    "one": "ALB",
    "two": "GRC"
  },
  {
    "one": "CRO",
    "two": "GRC"
  },
  {
    "one": "YUG",
    "two": "GRC"
  },
  {
    "one": "YUG",
    "two": "GRC"
  },
  {
    "one": "YUG",
    "two": "BUL"
  },
  {
    "one": "YUG",
    "two": "ROM"
  },
  {
    "one": "YUG",
    "two": "TUR"
  },
  {
    "one": "GRC",
    "two": "CYP"
  },
  {
    "one": "GRC",
    "two": "BUL"
  },
  {
    "one": "GRC",
    "two": "LIB"
  },
  {
    "one": "GRC",
    "two": "TUR"
  },
  {
    "one": "GRC",
    "two": "TUR"
  },
  {
    "one": "GRC",
    "two": "TUR"
  },
  {
    "one": "GRC",
    "two": "EGY"
  },
  {
    "one": "GRC",
    "two": "EGY"
  },
  {
    "one": "GRC",
    "two": "EGY"
  },
  {
    "one": "CYP",
    "two": "TUR"
  },
  {
    "one": "CYP",
    "two": "EGY"
  },
  {
    "one": "CYP",
    "two": "EGY"
  },
  {
    "one": "BUL",
    "two": "RUS"
  },
  {
    "one": "BUL",
    "two": "RUS"
  },
  {
    "one": "BUL",
    "two": "RUS"
  },
  {
    "one": "BUL",
    "two": "UKR"
  },
  {
    "one": "ROM",
    "two": "RUS"
  },
  {
    "one": "ROM",
    "two": "RUS"
  },
  {
    "one": "ROM",
    "two": "TUR"
  },
  {
    "one": "ROM",
    "two": "TUR"
  },
  {
    "one": "ROM",
    "two": "TUR"
  },
  {
    "one": "ROM",
    "two": "TUR"
  },
  {
    "one": "RUS",
    "two": "EST"
  },
  {
    "one": "RUS",
    "two": "LAT"
  },
  {
    "one": "RUS",
    "two": "LIT"
  },
  {
    "one": "RUS",
    "two": "LIT"
  },
  {
    "one": "RUS",
    "two": "SWD"
  },
  {
    "one": "RUS",
    "two": "SWD"
  },
  {
    "one": "RUS",
    "two": "SWD"
  },
  {
    "one": "RUS",
    "two": "NOR"
  },
  {
    "one": "RUS",
    "two": "NOR"
  },
  {
    "one": "RUS",
    "two": "NOR"
  },
  {
    "one": "RUS",
    "two": "DEN"
  },
  {
    "one": "RUS",
    "two": "DEN"
  },
  {
    "one": "RUS",
    "two": "IRN"
  },
  {
    "one": "RUS",
    "two": "TUR"
  },
  {
    "one": "RUS",
    "two": "TUR"
  },
  {
    "one": "RUS",
    "two": "AFG"
  },
  {
    "one": "RUS",
    "two": "TKM"
  },
  {
    "one": "RUS",
    "two": "KOR"
  },
  {
    "one": "RUS",
    "two": "ROK"
  },
  {
    "one": "RUS",
    "two": "JPN"
  },
  {
    "one": "EST",
    "two": "LAT"
  },
  {
    "one": "EST",
    "two": "FIN"
  },
  {
    "one": "EST",
    "two": "SWD"
  },
  {
    "one": "EST",
    "two": "DEN"
  },
  {
    "one": "EST",
    "two": "DEN"
  },
  {
    "one": "LAT",
    "two": "LIT"
  },
  {
    "one": "LAT",
    "two": "FIN"
  },
  {
    "one": "LAT",
    "two": "FIN"
  },
  {
    "one": "LAT",
    "two": "SWD"
  },
  {
    "one": "LAT",
    "two": "DEN"
  },
  {
    "one": "LAT",
    "two": "DEN"
  },
  {
    "one": "LIT",
    "two": "FIN"
  },
  {
    "one": "LIT",
    "two": "FIN"
  },
  {
    "one": "LIT",
    "two": "SWD"
  },
  {
    "one": "LIT",
    "two": "DEN"
  },
  {
    "one": "LIT",
    "two": "DEN"
  },
  {
    "one": "UKR",
    "two": "GRG"
  },
  {
    "one": "UKR",
    "two": "TUR"
  },
  {
    "one": "FIN",
    "two": "NOR"
  },
  {
    "one": "SWD",
    "two": "NOR"
  },
  {
    "one": "SWD",
    "two": "DEN"
  },
  {
    "one": "SWD",
    "two": "DEN"
  },
  {
    "one": "NOR",
    "two": "DEN"
  },
  {
    "one": "CAP",
    "two": "SEN"
  },
  {
    "one": "STP",
    "two": "CAO"
  },
  {
    "one": "STP",
    "two": "NIG"
  },
  {
    "one": "GHA",
    "two": "NIG"
  },
  {
    "one": "TOG",
    "two": "NIG"
  },
  {
    "one": "NIG",
    "two": "GAB"
  },
  {
    "one": "GAB",
    "two": "ANG"
  },
  {
    "one": "DRC",
    "two": "SUD"
  },
  {
    "one": "UGA",
    "two": "SUD"
  },
  {
    "one": "KEN",
    "two": "ZAN"
  },
  {
    "one": "KEN",
    "two": "SUD"
  },
  {
    "one": "TAZ",
    "two": "ZAN"
  },
  {
    "one": "TAZ",
    "two": "SOM"
  },
  {
    "one": "TAZ",
    "two": "COM"
  },
  {
    "one": "TAZ",
    "two": "SEY"
  },
  {
    "one": "ZAN",
    "two": "SOM"
  },
  {
    "one": "SOM",
    "two": "YAR"
  },
  {
    "one": "SOM",
    "two": "YPR"
  },
  {
    "one": "SOM",
    "two": "OMA"
  },
  {
    "one": "DJI",
    "two": "SAU"
  },
  {
    "one": "DJI",
    "two": "YAR"
  },
  {
    "one": "DJI",
    "two": "YPR"
  },
  {
    "one": "ETH",
    "two": "SAU"
  },
  {
    "one": "ETH",
    "two": "YAR"
  },
  {
    "one": "ETH",
    "two": "YEM"
  },
  {
    "one": "ETH",
    "two": "YPR"
  },
  {
    "one": "MZM",
    "two": "MAG"
  },
  {
    "one": "MZM",
    "two": "COM"
  },
  {
    "one": "MZM",
    "two": "SEY"
  },
  {
    "one": "MAG",
    "two": "COM"
  },
  {
    "one": "MAG",
    "two": "SEY"
  },
  {
    "one": "COM",
    "two": "SEY"
  },
  {
    "one": "MAS",
    "two": "SEY"
  },
  {
    "one": "TUN",
    "two": "TUR"
  },
  {
    "one": "LIB",
    "two": "TUR"
  },
  {
    "one": "SUD",
    "two": "YAR"
  },
  {
    "one": "SUD",
    "two": "YEM"
  },
  {
    "one": "SUD",
    "two": "YPR"
  },
  {
    "one": "IRN",
    "two": "KZK"
  },
  {
    "one": "TUR",
    "two": "EGY"
  },
  {
    "one": "TUR",
    "two": "EGY"
  },
  {
    "one": "TUR",
    "two": "EGY"
  },
  {
    "one": "TUR",
    "two": "EGY"
  },
  {
    "one": "TUR",
    "two": "SYR"
  },
  {
    "one": "TUR",
    "two": "ISR"
  },
  {
    "one": "IRQ",
    "two": "EGY"
  },
  {
    "one": "IRQ",
    "two": "SYR"
  },
  {
    "one": "IRQ",
    "two": "BAH"
  },
  {
    "one": "IRQ",
    "two": "QAT"
  },
  {
    "one": "EGY",
    "two": "SYR"
  },
  {
    "one": "EGY",
    "two": "SYR"
  },
  {
    "one": "EGY",
    "two": "LEB"
  },
  {
    "one": "EGY",
    "two": "LEB"
  },
  {
    "one": "EGY",
    "two": "LEB"
  },
  {
    "one": "EGY",
    "two": "JOR"
  },
  {
    "one": "EGY",
    "two": "JOR"
  },
  {
    "one": "EGY",
    "two": "JOR"
  },
  {
    "one": "EGY",
    "two": "SAU"
  },
  {
    "one": "EGY",
    "two": "SAU"
  },
  {
    "one": "SYR",
    "two": "LEB"
  },
  {
    "one": "SYR",
    "two": "JOR"
  },
  {
    "one": "SYR",
    "two": "ISR"
  },
  {
    "one": "SAU",
    "two": "YAR"
  },
  {
    "one": "SAU",
    "two": "YPR"
  },
  {
    "one": "SAU",
    "two": "BAH"
  },
  {
    "one": "YAR",
    "two": "YPR"
  },
  {
    "one": "YPR",
    "two": "OMA"
  },
  {
    "one": "KUW",
    "two": "BAH"
  },
  {
    "one": "KUW",
    "two": "QAT"
  },
  {
    "one": "BAH",
    "two": "UAE"
  },
  {
    "one": "BAH",
    "two": "OMA"
  },
  {
    "one": "QAT",
    "two": "OMA"
  },
  {
    "one": "OMA",
    "two": "PAK"
  },
  {
    "one": "CHN",
    "two": "KOR"
  },
  {
    "one": "CHN",
    "two": "JPN"
  },
  {
    "one": "CHN",
    "two": "JPN"
  },
  {
    "one": "CHN",
    "two": "JPN"
  },
  {
    "one": "CHN",
    "two": "RVN"
  },
  {
    "one": "CHN",
    "two": "PHI"
  },
  {
    "one": "CHN",
    "two": "PHI"
  },
  {
    "one": "KOR",
    "two": "JPN"
  },
  {
    "one": "PRK",
    "two": "JPN"
  },
  {
    "one": "JPN",
    "two": "PHI"
  },
  {
    "one": "IND",
    "two": "THI"
  },
  {
    "one": "IND",
    "two": "MAL"
  },
  {
    "one": "MYA",
    "two": "INS"
  },
  {
    "one": "THI",
    "two": "DRV"
  },
  {
    "one": "THI",
    "two": "RVN"
  },
  {
    "one": "CAM",
    "two": "RVN"
  },
  {
    "one": "CAM",
    "two": "MAL"
  },
  {
    "one": "LAO",
    "two": "RVN"
  },
  {
    "one": "DRV",
    "two": "RVN"
  },
  {
    "one": "DRV",
    "two": "MAL"
  },
  {
    "one": "DRV",
    "two": "INS"
  },
  {
    "one": "RVN",
    "two": "MAL"
  },
  {
    "one": "RVN",
    "two": "INS"
  },
  {
    "one": "MAL",
    "two": "INS"
  },
  {
    "one": "BRU",
    "two": "PHI"
  },
  {
    "one": "PHI",
    "two": "PAL"
  },
  {
    "one": "INS",
    "two": "AUL"
  },
  {
    "one": "INS",
    "two": "FSM"
  },
  {
    "one": "ETM",
    "two": "AUL"
  },
  {
    "one": "PNG",
    "two": "FSM"
  },
  {
    "one": "KIR",
    "two": "TUV"
  },
  {
    "one": "KIR",
    "two": "NAU"
  },
  {
    "one": "KIR",
    "two": "MSI"
  },
  {
    "one": "TUV",
    "two": "FIJ"
  },
  {
    "one": "FIJ",
    "two": "TON"
  },
  {
    "one": "TON",
    "two": "WSM"
  }
]


const createNeighbours = (countryDict) => {
  neighbourData.forEach((neighbour) => {
    const { one, two } = neighbour;
    const obj = countryDict[one] || {}
    const existing = obj.neighbours || new Set([])
    existing.add(two)
    obj.neighbours = existing
    countryDict[one] = obj
  
    const twoObj = countryDict[two] || {}
    const twoExisting = twoObj.neighbours || new Set([])
    twoExisting.add(one)
    twoObj.neighbours = twoExisting
    countryDict[two] = twoObj
  })
  const modified = {}
  Object.keys(countryDict).forEach((code) => {
    modified[code] = countryDict[code]
    modified[code].neighbours = [...countryDict[code].neighbours]
  })
  return modified
}

module.exports = {
  createNeighbours
}




