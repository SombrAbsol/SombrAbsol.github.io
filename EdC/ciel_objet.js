var _____WB$wombat$assign$function_____ = function (name) {
  return self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____('window');
  let self = _____WB$wombat$assign$function_____('self');
  let document = _____WB$wombat$assign$function_____('document');
  let location = _____WB$wombat$assign$function_____('location');
  let top = _____WB$wombat$assign$function_____('top');
  let parent = _____WB$wombat$assign$function_____('parent');
  let frames = _____WB$wombat$assign$function_____('frames');
  let opener = _____WB$wombat$assign$function_____('opener');
  WMSkyItem = {
    0: 'Aucun',
    1: 'Bâton',
    2: 'Epine de Fer',
    3: 'Pic d\'Argent',
    4: 'Croc d\'Or',
    5: 'Cacnepic',
    6: 'Corapic',
    7: 'Gravalroche',
    8: 'Racaillasse',
    9: 'Epine d\'Or',
    10: 'Fossile Rare',
    13: 'Ampli-Adhésif',
    14: 'Rayons Y',
    15: 'Rélévateur',
    16: 'Passmuraille',
    17: 'Rubansoin',
    18: 'Turban',
    19: 'Lentilscope',
    20: 'Voile Cible',
    21: 'Anti-Adhésif',
    22: 'Passetout',
    23: 'Ruban Joie',
    24: 'Rayons X',
    25: 'Ruban Calme',
    26: 'Ruban Force+',
    27: 'Ruban Pêcha',
    28: 'Insomniscope',
    29: 'Télécharpe',
    30: 'Ceinture',
    31: 'Silencieux',
    32: 'Ruban Doré',
    33: 'Révélateur',
    34: 'Ruban Famine',
    35: 'Trappeur',
    36: 'Ruban Alarme',
    37: 'Ruban Déf+',
    38: 'Ruban Ardeur',
    39: 'Ruban Simple',
    40: 'Ruban Spé.',
    41: 'Bandana Zinc',
    42: 'Voil\'Esquive',
    43: 'Spatiosphère',
    44: 'Evit\'Objet',
    45: 'Dévi\'Objet',
    46: 'Ricoch\'Objet',
    47: 'Binocles',
    48: 'Besicles',
    49: 'Viseur',
    50: 'Obi Goinfrex',
    51: 'Dérivation',
    52: 'Climaprotect',
    53: 'Ruban Ami',
    54: 'Voile Vénus',
    55: 'Ruban Soleil',
    56: 'Ruban Lune',
    57: 'Masque d\'Or',
    58: 'Larme Ambrée',
    59: 'Flûte Glacée',
    60: 'Tamtam Ardent',
    61: 'Terracymbale',
    62: 'Aquarmonica',
    63: 'Cor de Roche',
    64: 'Phytocorne',
    65: 'Aéromélodica',
    66: 'Boîtemiracle',
    67: 'Boîteprodige',
    68: 'Boost Q.I.',
    69: 'Guérigraine',
    70: 'Baie Oran',
    71: 'Baie Sitrus',
    72: 'Collygraine',
    73: 'Résugraine',
    74: 'Eblouigraine',
    75: 'Pépingraine',
    76: 'Hallucigraine',
    77: 'Pévégraine',
    78: 'Baie Fraive',
    79: 'Famigraine',
    80: 'Hâtigraine',
    81: 'Baie Pêcha',
    82: 'Baie Ceriz',
    83: 'Foligraine',
    84: 'Roupigraine',
    85: 'Graine Vide',
    86: 'Télégraine',
    87: 'Explograine',
    88: 'Ginseng',
    89: 'Allégraine',
    90: 'Baie Maron',
    91: 'Pétrigraine',
    92: 'Carmachécaille',
    93: 'Aurigraine',
    94: 'Infâmigraine',
    95: 'Puregraine',
    96: 'Virugraine',
    97: 'Disparigraine',
    99: 'Max Elixir',
    100: 'Protéine',
    101: 'Calcium',
    102: 'Fer',
    103: 'Nectar',
    104: 'Colligraine',
    105: 'Rézutgraine',
    106: 'Rouligraine',
    107: 'Infâmigrant',
    108: 'Zinc',
    109: 'Pomme',
    110: 'Grosse Pomme',
    111: 'Morviture',
    112: 'Pomme Géante',
    115: 'Pomme d\'Or',
    116: 'Max Elinir',
    117: 'Baie Orance',
    118: 'Pépitgraine',
    119: 'Gelée Ivoire',
    120: 'Gelée Rouge',
    121: 'Gelée Bleue',
    122: 'Gelée Plante',
    123: 'Gelée Jaune',
    124: 'Gelée Claire',
    125: 'Gelée Orange',
    126: 'Gelée Pêche',
    127: 'Gelée Brune',
    128: 'Gelée Azur',
    129: 'Gelée Dorée',
    130: 'Gelée Verte',
    131: 'Gelée Grise',
    132: 'Gelée Mauve',
    133: 'Gelée Royale',
    134: 'Gelée Noire',
    135: 'Gelée Argent',
    136: 'Gelée Miracle',
    137: 'Gravaleroche',
    139: 'Améliorator',
    140: 'Roche Royale',
    141: 'Pierrefoudre',
    142: 'Ecailleocéan',
    143: 'Dent Océan',
    144: 'Pierresoleil',
    145: 'Pierre Lune',
    146: 'Pierre Feu',
    147: 'Pierre Eau',
    148: 'Peau Métal',
    149: 'Pierreplante',
    150: 'Ecailledraco',
    151: 'Câble Link',
    152: 'CD Douteux',
    153: 'Protecteur',
    154: 'Tissu Fauche',
    155: 'Croc Rasoir',
    156: 'Grif. Rasoir',
    157: 'Electiriseur',
    158: 'Magmariseur',
    159: 'Pierre Ovale',
    160: 'Pierre Aube',
    161: 'Pierre Eclat',
    162: 'Pierre Nuit',
    163: 'Roc Couronné',
    164: 'Pierre Mousse',
    165: 'Pierre Givre',
    167: 'Rocaillasse',
    168: 'Gelée Mirocle',
    169: 'Ticket Magot',
    170: 'Ticket Argent',
    171: 'Ticket Or',
    172: 'Ticket Irisé',
    173: 'Pièce Mystère',
    174: 'Bloc Secret',
    178: 'Œuf Miracle',
    179: 'Gracidée',
    180: 'Don du Ciel',
    182: 'Clé',
    183: '$$$',
    186: 'Butin Perdu',
    187: 'CT Utilisée',
    188: 'Mitra-Poing',
    189: 'Dracogriffe',
    190: 'Vibraqua',
    191: 'Plénitude',
    192: 'Hurlement',
    193: 'Toxik',
    195: 'Gonflette',
    196: 'Balle Graine',
    197: 'Puis. Cachée',
    199: 'Provoc',
    200: 'Laser Glace',
    201: 'Blizzard',
    202: 'Ultralaser',
    203: 'Mur Lumière',
    204: 'Abri',
    206: 'Giga-Sangsue',
    207: 'Rune Protect',
    208: 'Frustration',
    209: 'Lance-Soleil',
    210: 'Queue de Fer',
    211: 'Tonnerre',
    212: 'Fatal-Foudre',
    213: 'Séisme',
    214: 'Retour',
    215: 'Tunnel',
    216: 'Psyko',
    217: 'Ball\'Ombre',
    218: 'Casse-Brique',
    220: 'Protection',
    221: 'Onde de Choc',
    222: 'Lance-Flamme',
    223: 'Bomb-Beurk',
    225: 'Déflagration',
    227: 'Aéropique',
    228: 'Tourmente',
    229: 'Façade',
    230: 'Force Cachée',
    231: 'Repos',
    232: 'Attraction',
    233: 'Larcin',
    234: 'Aile d\'Acier',
    235: 'Echange',
    237: 'Surchauffe',
    238: 'Atterrissage',
    239: 'Exploforce',
    240: 'Eco-Sphère',
    241: 'Faux-Chage',
    242: 'Saumure',
    243: 'Dégommage',
    244: 'Rayon Chargé',
    245: 'Ténacité',
    246: 'Dracochoc',
    247: 'Vampipoing',
    248: 'Feu Follet',
    249: 'Vent Argenté',
    250: 'Embargo',
    251: 'Explosion',
    252: 'Griffe Ombre',
    253: 'Représailles',
    254: 'Recyclage',
    255: 'Giga Impact',
    256: 'Poliroche',
    257: 'Faucheuse',
    260: 'Aéro-Lames',
    261: 'Plongée',
    262: 'Flash',
    263: 'Lame de Roc',
    264: 'Avalanche',
    265: 'Cage-Eclair',
    266: 'Gyroballe',
    267: 'Danse-Lames',
    268: 'Piège de Roc',
    269: 'Boost',
    270: 'Séduction',
    271: 'Vibrobscur',
    272: 'Eboulement',
    273: 'Plaie-Croix',
    274: 'Blabla Dodo',
    275: 'Don Naturel',
    276: 'Direct Toxik',
    277: 'Dévorêve',
    278: 'Noeud Herbe',
    279: 'Vantardise',
    280: 'Picore',
    281: 'Demi-Tour',
    282: 'Clonage',
    283: 'Luminocanon',
    284: 'Distorsion',
    285: 'Coupe',
    286: 'Vol',
    287: 'Surf',
    288: 'Force',
    289: 'Anti-Brume',
    290: 'Eclate-Roc',
    291: 'Cascade',
    292: 'Escalade',
    301: 'Tempêtorbe',
    302: 'Héliorbe',
    303: 'Aversorbe',
    304: 'Esquivorbe',
    305: 'Sablorbe',
    306: 'Rochorbe',
    307: 'Saisiorbe',
    308: 'Détectorbe',
    309: 'Dépouillorbe',
    310: 'Rebondorbe',
    311: 'Loborbe',
    312: 'Permutorbe',
    313: 'Soufflorbe',
    314: 'Téléporbe',
    315: 'Transforbe',
    316: 'Lentorbe',
    317: 'Hâtorbe',
    318: 'Lumiorbe',
    319: 'Pétrifiorbe',
    320: 'Envoûtorbe',
    321: 'Ecrasorbe',
    322: 'Aspirorbe',
    323: 'Nettoyorbe',
    325: 'Apporbe',
    326: 'Roupillorbe',
    327: 'Foliorbe',
    328: 'Doublorbe',
    329: 'Silensorbe',
    330: 'Echaporbe',
    331: 'Révélorbe',
    332: 'Radarorbe',
    333: 'Vaporisorbe',
    334: 'Désamorbe',
    335: 'Convocorbe',
    336: 'Invisiblorbe',
    337: 'Fulgurorbe',
    338: 'Identificorbe',
    340: 'Froussorbe',
    341: 'Maxiorbe',
    342: 'Bulldozorbe',
    343: 'Solidifiorbe',
    344: 'Piègeorbe',
    346: 'Objetorbe',
    347: 'Projectorbe',
    348: 'Passmurorbe',
    350: 'Escalorbe',
    351: 'Catapultorbe',
    352: 'Perçorbe',
    354: 'Repoussorbe',
    355: 'Stupéfiorbe',
    356: 'Boostorbe',
    357: 'Epouvantorbe',
    358: 'Concentrorbe',
    359: 'Immobilisorbe',
    362: 'Boîte Chaîne',
    364: 'Coffre Faste',
    365: 'Coffre Faste',
    366: 'Coffre Faste',
    367: 'Coffre Lourd',
    368: 'Coffre Lourd',
    369: 'Coffre Lourd',
    370: 'Coffre Luisant',
    371: 'Coffre Luisant',
    372: 'Coffre Luisant',
    373: 'Coffre Chic',
    374: 'Coffre Chic',
    375: 'Coffre Chic',
    376: 'Coffre Délicat',
    377: 'Coffre Délicat',
    378: 'Coffre Délicat',
    379: 'Coffre Rutilant',
    380: 'Coffre Rutilant',
    381: 'Coffre Rutilant',
    382: 'Coffre Elégant',
    383: 'Coffre Elégant',
    384: 'Coffre Elégant',
    385: 'Coffre Luxe',
    386: 'Coffre Luxe',
    387: 'Coffre Luxe',
    388: 'Coffre Léger',
    389: 'Coffre Léger',
    390: 'Coffre Léger',
    391: 'Coffre Mignon',
    392: 'Coffre Mignon',
    393: 'Coffre Mignon',
    394: 'Coffre-Fort',
    395: 'Coffre-Fort',
    396: 'Coffre-Fort',
    397: 'Coffre Sinistre',
    398: 'Coffre Sinistre',
    399: 'Coffre Sinistre',
    400: 'Pierre A',
    401: 'Pierre B',
    402: 'Pierre C',
    403: 'Pierre D',
    404: 'Pierre E',
    405: 'Pierre F',
    406: 'Pierre G',
    407: 'Pierre H',
    408: 'Pierre I',
    409: 'Pierre J',
    410: 'Pierre K',
    411: 'Pierre L',
    412: 'Pierre M',
    413: 'Pierre N',
    414: 'Pierre O',
    415: 'Pierre P',
    416: 'Pierre Q',
    417: 'Pierre R',
    418: 'Pierre S',
    419: 'Pierre T',
    420: 'Pierre U',
    421: 'Pierre V',
    422: 'Pierre W',
    423: 'Pierre X',
    424: 'Pierre Y',
    425: 'Pierre Z',
    426: 'Pierre !',
    427: 'Pierre ?',
    428: 'Ruban Argent',
    429: 'Ruban Brun',
    430: 'Ruban Rouge',
    431: 'Ruban Rose',
    432: 'Ruban Orange',
    433: 'Ruban Jaune',
    434: 'Ruban Citron',
    435: 'Ruban Vert',
    436: 'Ruban Jade',
    437: 'Ruban Menthe',
    438: 'Ruban Azur',
    439: 'Ruban Bleu',
    440: 'Ruban Cobalt',
    441: 'Ruban Mauve',
    442: 'Ruban Violet',
    443: 'Ruban Fuchsia',
    444: 'Col Prisme',
    445: 'Aquacollier',
    446: 'Voltacollier',
    447: 'Pyrocollier',
    448: 'Lumicollier',
    449: 'Nocticollier',
    450: 'Phytocollier',
    451: 'Cryocollier',
    452: 'Etole Punch',
    453: 'Col Riposte',
    454: 'Obi Victoire',
    455: 'Jonc Pouvoir',
    456: 'Eclat Foudre',
    457: 'Etoiledéchue',
    458: 'Poudre Duvet',
    459: 'Fragment Œuf',
    460: 'Médaille Héros',
    461: 'Fragment Chic',
    462: 'Joyau Jaune',
    463: 'Joyau Rouge',
    464: 'Joyau Bleu',
    465: 'Rigolopoudre',
    466: 'Sable Garde',
    467: 'Joyau Mauve',
    468: 'Joyau Blanc',
    469: 'Poudre Brave',
    470: 'Rosée Soin',
    471: 'Trésor Marin',
    472: 'Voile Givre',
    473: 'Voile Foudre',
    474: 'Pyrovoile',
    475: 'Robe Ravages',
    476: 'Bague Vie',
    477: 'Croc Eclair',
    478: 'Croc Brasier',
    479: 'Aquamanteau',
    480: 'Voile Argent',
    481: 'Voile-en-ciel',
    482: 'Chronovoile',
    483: 'Etole Roche',
    484: 'Etole Glace',
    485: 'Etole Acier',
    486: 'Broche Cœur',
    487: 'Voile Eon',
    488: 'Voile Abysse',
    489: 'Terrabague',
    490: 'Stratovoile',
    491: 'Manteau Vœu',
    492: 'Robe Rappel',
    493: 'Voile Ombre',
    494: 'Voile Plasma',
    495: 'Robe Edifiante',
    496: 'Robe Charité',
    497: 'Robe Espoir',
    498: 'Chronoécu',
    499: 'Aérolame',
    500: 'Bague Ignée',
    501: 'Baguancienne',
    502: 'Infravoile',
    503: 'Voile Lune',
    504: 'Cape Marées',
    505: 'Robe Eclipse',
    506: 'Soie Blanche',
    507: 'Normalpoudre',
    508: 'Gemmeblanche',
    509: 'Sphère Joie',
    510: 'Soie Rouge',
    511: 'Poudre Feu',
    512: 'Gemme Feu',
    513: 'Sphère Feu',
    514: 'Soie Bleue',
    515: 'Poudre Eau',
    516: 'Aquagemme',
    517: 'Aquasphère',
    518: 'Soie Plante',
    519: 'Poudreplante',
    520: 'Gemme Plante',
    521: 'Calmisphère',
    522: 'Soie Jaune',
    523: 'Poudre Volt',
    524: 'Gemme Foudre',
    525: 'Sphère Volt',
    526: 'Soie Claire',
    527: 'Poudreglacée',
    528: 'Gemme Glacée',
    529: 'Sphèreglacée',
    530: 'Soie Orange',
    531: 'Poudrehardie',
    532: 'Gemme Combat',
    533: 'Sphèrpouvoir',
    534: 'Soie Rose',
    535: 'Poudrepoison',
    536: 'Gemme Poison',
    537: 'Sphèrepoison',
    538: 'Soie Brune',
    539: 'Poudre Sol',
    540: 'Tellurigemme',
    541: 'Terrasphère',
    542: 'Soiecéleste',
    543: 'Poudrecéleste',
    544: 'Gemmecéleste',
    545: 'Sphèrecéleste',
    546: 'Soie Dorée',
    547: 'Poudre Psy',
    548: 'Gemme Psy',
    549: 'Sphère Psy',
    550: 'Soie Verte',
    551: 'Poudre Miracle',
    552: 'Gemme Garde',
    553: 'Défensphère',
    554: 'Soie Grise',
    555: 'Poudre Roche',
    556: 'Gemme Pierre',
    557: 'Sphère Roche',
    558: 'Soie Mauve',
    559: 'Poudredouteuse',
    560: 'Gemme Ombre',
    561: 'Infrasphère',
    562: 'Soie Royale',
    563: 'Dracopoudre',
    564: 'Dracogemme',
    565: 'Dracosphère',
    566: 'Soie Noire',
    567: 'Poudrobscure',
    568: 'Gemmobscure',
    569: 'Sphère Nuit',
    570: 'Soie Fer',
    571: 'Poudre Acier',
    572: 'Gemme Métal',
    573: 'Sphère Acier',
    574: 'Bulbigriffe',
    575: 'Bulbicroc',
    576: 'Garde Plante',
    577: 'Lien Feuillu',
    578: 'Herbigriffe',
    579: 'Herbicroc',
    580: 'Herbicrête',
    581: 'Torqueplante',
    582: 'Florigriffe',
    583: 'Floricroc',
    584: 'Florisceau',
    585: 'Etolesolaire',
    586: 'Salagriffe',
    587: 'Salacroc',
    588: 'Cœur Brasier',
    589: 'Bracelet Ardent',
    590: 'Reptingriffe',
    591: 'Reptincroc',
    592: 'Reptincrête',
    593: 'Echarpe Ignée',
    594: 'Dracaugriffe',
    595: 'Dracaucroc',
    596: 'Dracausceau',
    597: 'Jonc Flamme',
    598: 'Carapécume',
    599: 'Carapcarte',
    600: 'Hydrogarde',
    601: 'Aqualien',
    602: 'Carabagriffe',
    603: 'Carabacroc',
    604: 'Carabacrête',
    605: 'Jonc Bulle',
    606: 'Tortangriffe',
    607: 'Tortancarte',
    608: 'Tortansceau',
    609: 'Hydrobande',
    610: 'Poil Pichu',
    611: 'Carte Pichu',
    612: 'Marquexpress',
    613: 'Cape Eclair',
    614: 'Poil Pikachu',
    615: 'Pikacarte',
    616: 'Charme Volt',
    617: 'Torque Volt',
    618: 'Poil Raichu',
    619: 'Carte Raichu',
    620: 'Crête Raichu',
    621: 'Echarpéclair',
    622: 'Miaougriffe',
    623: 'Croc Miaouss',
    624: 'Monécharme',
    625: 'Col Clinquant',
    626: 'Persigriffe',
    627: 'Croc Persian',
    628: 'Roc Sagace',
    629: 'Echarpenoble',
    630: 'Germigriffe',
    631: 'Germicarte',
    632: 'Joyau Aurore',
    633: 'Ruban Frais',
    634: 'Macrogriffe',
    635: 'Macrocarte',
    636: 'Macronisceau',
    637: 'Ruban Epice',
    638: 'Méganigriffe',
    639: 'Méganicarte',
    640: 'Charme Lueur',
    641: 'Voilumineux',
    642: 'Héripoil',
    643: 'Hérigriffe',
    644: 'Roc Ardent',
    645: 'Etoletempête',
    646: 'Feuripoil',
    647: 'Feuricarte',
    648: 'Feuricrête',
    649: 'Torquevolcan',
    650: 'Typhlosouffle',
    651: 'Typhlocroc',
    652: 'Typhlosceau',
    653: 'Explojonc',
    654: 'Kaimirosée',
    655: 'Kaimicroc',
    656: 'Hydrocœur',
    657: 'Ruban Lavage',
    658: 'Croc-Crodil',
    659: 'Carte-Crodil',
    660: 'Tourbiroc',
    661: 'Echarpecolère',
    662: 'Aligagriffe',
    663: 'Aligacroc',
    664: 'Aligacrête',
    665: 'Hydromâchoire',
    666: 'Arckoépine',
    667: 'Arckocarte',
    668: 'Mineraisylvain',
    669: 'Gardebague',
    670: 'Masskopousse',
    671: 'Masskocarte',
    672: 'Marquejungle',
    673: 'Lame Plante',
    674: 'Jungkogriffe',
    675: 'Jungkocarte',
    676: 'Jungkosceau',
    677: 'Jonc Sangsue',
    678: 'Poussipoil',
    679: 'Poussicarte',
    680: 'Galet Chaud',
    681: 'Cape Feu',
    682: 'Galisueur',
    683: 'Galigriffe',
    684: 'Marquecharge',
    685: 'Bande Hardie',
    686: 'Braségriffe',
    687: 'Brasécarte',
    688: 'Brasésceau',
    689: 'Torqueardent',
    690: 'Gobouboue',
    691: 'Goboucarte',
    692: 'Joyau Boueux',
    693: 'Prestécharpe',
    694: 'Flobioboue',
    695: 'Flobiocarte',
    696: 'Flobiocrête',
    697: 'Torquemarais',
    698: 'Laggronboue',
    699: 'Laggroncarte',
    700: 'Laggronsceau',
    701: 'Jonc Marais',
    702: 'Skittycroc',
    703: 'Skittycarte',
    704: 'Galetsourire',
    705: 'Pendant Soin',
    706: 'Delcattypoil',
    707: 'Delcattycroc',
    708: 'Galet Coquet',
    709: 'Colliergarde',
    710: 'Feuilleveine',
    711: 'Torticarte',
    712: 'Roc Bourgeon',
    713: 'Chapofeuillu',
    714: 'Boskabrin',
    715: 'Boskagriffe',
    716: 'Boskacrête',
    717: 'Echarpe Bois',
    718: 'Tortergriffe',
    719: 'Tortercorne',
    720: 'Tortersceau',
    721: 'Torquesylve',
    722: 'Ouistipoil',
    723: 'Ouisticroc',
    724: 'Charmeagile ',
    725: 'Chapobraise',
    726: 'Chimpenpoil',
    727: 'Chimpencroc',
    728: 'Chimpencrête',
    729: 'Etolardente',
    730: 'Poil Simia',
    731: 'Simiacroc',
    732: 'Simiasceau',
    733: 'Col Ardent',
    734: 'Tiploufécume',
    735: 'Tiploufcarte',
    736: 'Mineraimarin',
    737: 'Hydrocape',
    738: 'Prinplécume',
    739: 'Princarte',
    740: 'Princrête',
    741: 'Aqualame',
    742: 'Pingogriffe',
    743: 'Pingocorne',
    744: 'Pingosceau',
    745: 'Hydrocouronne',
    746: 'Goinbave',
    747: 'Goingriffe',
    748: 'Bidocharme',
    749: 'Cape Glouton',
    750: 'Ronflesouffle',
    751: 'Ronflecroc',
    752: 'Charmevaleur',
    753: 'Jubilécharpe',
    754: 'Insécroc',
    755: 'Insécarte',
    756: 'Roc Affût',
    757: 'Col Frappe',
    758: 'Aile Cizayox',
    759: 'Cizacarte',
    760: 'Charme Acier',
    761: 'Bracelet Rouge',
    762: 'Lokhchant',
    763: 'Lokhcarte',
    764: 'Charme Onde',
    765: 'Echarpmystik',
    766: 'Evoliqueue',
    767: 'Evolicarte',
    768: 'Evolicharme',
    770: 'Rosée Mélo',
    771: 'Carte Mélo',
    772: 'Minerai Etoilé',
    773: 'Bague Comète',
    774: 'Mélofégriffe',
    775: 'Croc Mélofée',
    776: 'Joyau Lune',
    777: 'Echarpe Lune',
    778: 'Mélodelgriffe',
    779: 'Mélodelcarte',
    780: 'Roc Lune',
    781: 'Ruban Féerik',
    782: 'Toudourosée',
    783: 'Toudoucarte',
    784: 'Charmerebond',
    785: 'Joli Ruban',
    786: 'Rondouchant',
    787: 'Rondoucarte',
    788: 'Roc Sommeil',
    789: 'Roupibague',
    790: 'Grodoupoil',
    791: 'Grodoucarte',
    792: 'Roc Copain',
    793: 'Torque Ami',
    794: 'Rosée Togepi',
    795: 'Carte Togepi',
    796: 'Cœur Pur',
    797: 'Echarpe Ange',
    798: 'Aile Togetic',
    799: 'Togeticarte',
    800: 'Roc Jovial',
    801: 'Brocheveine',
    802: 'Togekissaile',
    803: 'Togekicarte',
    804: 'Roc Ovation',
    805: 'Robeluisante',
    806: 'Farfugriffe',
    807: 'Farfucarte',
    808: 'Joyau Nuit',
    809: 'Baguecruelle',
    810: 'Dimogriffe',
    811: 'Dimocroc',
    812: 'Marque Vile',
    813: 'Bracelet Ruine',
    814: 'Teddigriffe',
    815: 'Teddicarte',
    816: 'Roc Miel',
    817: 'Echarpe Soin',
    818: 'Ursagriffe',
    819: 'Ursacroc',
    820: 'Calmiroc',
    821: 'Hiberécharpe',
    822: 'Debusueur',
    823: 'Debucarte',
    824: 'Charmemuscle',
    826: 'Chant-Pouti',
    827: 'Carte-Pouti',
    828: 'Charme Bisou',
    829: 'Tiare Cœur',
    830: 'Chant-Poutou',
    831: 'Carte-Poutou',
    832: 'Mineraigivre',
    833: 'Echarperuine',
    834: 'Elekigriffe',
    835: 'Elekigriffe',
    836: 'Charme Choc',
    837: 'Bague Volt',
    838: 'Elektegriffe',
    839: 'Elektecroc',
    840: 'Sceau Charge',
    841: 'Jonc Volt',
    842: 'Elekagriffe',
    843: 'Elekarte',
    844: 'Voltaroc',
    845: 'Bande Volta',
    846: 'Griffe Magby',
    847: 'Carte Magby',
    848: 'Joyau Braise',
    849: 'Bagueardente',
    850: 'Magmargriffe',
    851: 'Carte Magmar',
    852: 'Minerai Lave',
    853: 'Echarpemagma',
    854: 'Magagriffe',
    855: 'Magacarte',
    856: 'Roc Volcan',
    857: 'Torquebrûlan',
    858: 'Azurirosée',
    859: 'Azuricarte',
    860: 'Charmesource',
    861: 'Hydroflotteur',
    862: 'Rosée Marill',
    863: 'Carte Marill',
    864: 'Roc Surfeur',
    865: 'Echarpesaline',
    866: 'Azumarosée',
    867: 'Azumacarte',
    868: 'Charme Flots',
    869: 'Echarpe Apoi',
    870: 'Queue Posipi',
    871: 'Carte Posipi',
    872: 'Roc Hourra',
    873: 'Ruban Pouls',
    874: 'Queue Négapi',
    875: 'Carte Négapi',
    876: 'Cœur Volt',
    877: 'Lien Etincel',
    878: 'Morphérosée',
    879: 'Morphécarte',
    880: 'Roc Nuage',
    881: 'Cape Météo',
    882: 'Queue Okéoké',
    883: 'Carte Okéoké',
    884: 'Charmejoyeux',
    885: 'Echarpyoupi',
    886: 'Qulbusueur',
    887: 'Qulbucarte',
    888: 'Roc Robuste',
    889: 'Echarpetenace',
    890: 'Keunodent',
    891: 'Keunocarte',
    892: 'Charme Chute',
    893: 'Echarpestoïk',
    894: 'Castordent',
    895: 'Castorcarte',
    896: 'Charmefleuve',
    897: 'Echarpedigue',
    898: 'Griffe Lixy',
    899: 'Croc Lixy',
    900: 'Marque Flash',
    901: 'Echarpénergie',
    902: 'Griffe Luxio',
    903: 'Croc Luxio',
    904: 'Marque Lueur',
    905: 'Echarpelueur',
    906: 'Luxraygriffe',
    907: 'Luxraycroc',
    908: 'Marque Furie',
    909: 'Etole Furie',
    910: 'Dent Pachi',
    911: 'Carte Pachi',
    912: 'Charme Eveil',
    913: 'Rubanmiracle',
    914: 'Croc-Bouée',
    915: 'Carte-Bouée',
    916: 'Roc Nageur',
    917: 'Torquehélice',
    918: 'Croc-Flott',
    919: 'Carte-Flott',
    920: 'Rocrescousse',
    921: 'Flottaide',
    922: 'Baudrisouffle',
    923: 'Baudricarte',
    924: 'Cœur Vent',
    925: 'Bague Brise',
    926: 'Grodrisouffle',
    927: 'Grodricarte',
    928: 'Charme Relax',
    929: 'Echarpebrise',
    930: 'Graine-Ribou',
    931: 'Carte-Ribou',
    932: 'Joli Minerai',
    933: 'Ruban Charme',
    934: 'Rosée-Riflor',
    935: 'Carte-Riflor',
    936: 'Doux Arôme',
    937: 'Robe Pétale',
    938: 'Rosée Manzaï',
    939: 'Carte Manzaï',
    940: 'Marque Aride',
    941: 'Cape Sanglot',
    942: 'Simusueur',
    943: 'Simucarte',
    944: 'Roc Sangsue',
    945: 'Similitorque',
    946: 'Rayon Junior',
    947: 'Carte Junior',
    948: 'Galet Copie',
    949: 'Masque Clone',
    950: 'Clé Mime',
    951: 'Carte Mime',
    952: 'Roc Rempart',
    953: 'Rubanbarrière',
    954: 'Ptirarosée',
    955: 'Ptiracarte',
    956: 'Marquenjouée',
    957: 'Capecouveuse',
    958: 'Chant Levein.',
    959: 'Carte Levein.',
    960: 'Charmeveine',
    961: 'Echarpeveine',
    962: 'Leuphochant',
    963: 'Leuphocarte',
    964: 'Roc Cordial',
    965: 'Bague Foi',
    966: 'Griknocroc',
    967: 'Griknocarte',
    968: 'Dracojoyau',
    969: 'Dracolien',
    970: 'Carmagriffe',
    971: 'Carmacroc',
    972: 'Roc Etoilé',
    973: 'Torquemétéore',
    974: 'Carchagriffe',
    975: 'Carchacroc',
    976: 'Marquevitesse',
    977: 'Echarpe Mach',
    978: 'Queue Riolu',
    979: 'Carte Riolu',
    980: 'Roc Vaillant',
    981: 'Bague Aura',
    982: 'Lucariocroc',
    983: 'Lucariocarte',
    984: 'Roc Serment',
    985: 'Baguedésastre',
    986: 'Babirayon',
    987: 'Babicarte',
    988: 'Roc Glisse',
    989: 'Ruban Océan',
    990: 'Démantécume',
    991: 'Démancarte',
    992: 'Roc Crépuscule',
    993: 'Ruban Horizon',
    994: 'Chant Phione',
    995: 'Carte Phione',
    996: 'Joyau Marin',
    997: 'Cape Onde',
    998: 'Goupiqueue',
    999: 'Goupicarte',
    1000: 'Goupimarque',
    1001: 'Ruban Lueur',
    1002: 'Poil Feunard',
    1003: 'Cartefeunard',
    1004: 'Sceaufeunard',
    1005: 'Collier Feu',
    1006: 'Phanpygriffe',
    1007: 'Phanpycarte',
    1008: 'Phanpymarque',
    1009: 'Col Valeur',
    1010: 'Donphancroc',
    1011: 'Donphancarte',
    1012: 'Donphancrête',
    1013: 'Armurécharpe',
    1014: 'Obi Chenipan',
    1015: 'Rubandéfense',
    1016: 'Ruban Strass',
    1017: 'Aspicoruban',
    1018: 'Echarpecocon',
    1019: 'Chargécharpe',
    1020: 'Rubanroucool',
    1021: 'Roucouécharp',
    1022: 'Roucatorque',
    1023: 'Rattaécharpe',
    1024: 'Ruban Preux',
    1025: 'Extravaruban',
    1026: 'Echarpe Aile',
    1027: 'Ruban Etau',
    1028: 'Col Horreur',
    1029: 'Sabelécharpe',
    1030: 'Torque Sable',
    1031: 'Echarpe Pic',
    1032: 'Echarpretour',
    1033: 'Torquimpact',
    1034: 'Demi-Echarpe',
    1035: 'Epinécharpe',
    1036: 'Etole Royale',
    1037: 'Esquivruban',
    1038: 'Absorbécharp',
    1039: 'Mystèruban',
    1040: 'Chapeaugarde',
    1041: 'Arômécharpe',
    1042: 'Mobilécharpe',
    1043: 'Chapeauferme',
    1044: 'Verres Touvu',
    1045: 'Aéromitruban',
    1046: 'Taupichapeau',
    1047: 'Rubantriopik',
    1048: 'Psykochapeau',
    1049: 'Echarpe Rame',
    1050: 'Férotorque',
    1051: 'Annihilobi',
    1052: 'Caninécharpe',
    1053: 'Ruban Mythe',
    1054: 'Ruban Trempé',
    1055: 'Rubantêtart',
    1056: 'Obi Audace',
    1057: 'Préditorque',
    1058: 'Torque Psy',
    1059: 'Col Etincel',
    1060: 'Bandemaligne',
    1061: 'Obi Force',
    1062: 'Mackognobi',
    1063: 'Chétifruban',
    1064: 'Digestécharp',
    1065: 'Empitorque',
    1066: 'Rubanmêlé',
    1067: 'Tentacrucape',
    1068: 'Torkaillou',
    1069: 'Torque Roche',
    1070: 'Rugueusétole',
    1071: 'Ruban Fougue',
    1072: 'Ruban Rayon',
    1073: 'Ramolochapo',
    1074: 'Flagaécharpe',
    1075: 'Magnétitork',
    1076: 'Magnétonrub.',
    1077: 'Ruban Mire',
    1078: 'Copaintorque',
    1079: 'Torquecombat',
    1080: 'Ruban Doux',
    1081: 'Torque Nord',
    1082: 'Morvécharpe',
    1083: 'Glairoruban',
    1084: 'Kokiyastork',
    1085: 'Cotte Nacrée',
    1086: 'Fantomivoile',
    1087: 'Glissécharpe',
    1088: 'Lunettes UV',
    1089: 'Brochefidèle',
    1090: 'Soporilien',
    1091: 'Pièce Songe',
    1092: 'Ruban Krabby',
    1093: 'Super Etole',
    1094: 'Echarpeballe',
    1095: 'Electroruban',
    1096: 'Echarperejet',
    1097: 'Etole Noadko',
    1098: 'Osselécharpe',
    1099: 'Ossatutorque',
    1100: 'Excelécharpe',
    1101: 'Ruban Smogo',
    1102: 'Echarpogogo',
    1103: 'Ecu Solide',
    1104: 'Foret Pointu',
    1105: 'Ruban Gluant',
    1106: 'Kangoublouse',
    1107: 'Hypotruban',
    1108: 'Vortexécharp',
    1109: 'Poissiruban',
    1110: 'Poissoruban',
    1111: 'Torque Récup',
    1112: 'Obi Staross',
    1113: 'Scarabétole',
    1114: 'Ruban Ruée',
    1115: 'Magicaruban',
    1116: 'Etolecyclone',
    1117: 'Métamotorque',
    1118: 'Broche I.A.',
    1119: 'Broche Picot',
    1120: 'Echarpâgée',
    1121: 'Kabutochapo',
    1122: 'Torkabutops',
    1123: 'Broche Antik',
    1124: 'Etole Dragon',
    1125: 'Mantocéleste',
    1126: 'Cape Mirage',
    1127: 'Colfouinette',
    1128: 'Colliercorps',
    1129: 'Infrabinocle',
    1130: 'Noarfangtork',
    1131: 'Ruban Aurore',
    1132: 'Rubancoxycla',
    1133: 'Echarpimigal',
    1134: 'Migaloruban',
    1135: 'Rubantranche',
    1136: 'Torque Eclat',
    1137: 'Rubanlanturn',
    1138: 'Echarpe Vive',
    1139: 'Ruban Xatu',
    1140: 'Ruban Ouate',
    1141: 'Echarpouate',
    1142: 'Sacrécharpe',
    1143: 'Tiare Clarté',
    1144: 'Pluicouronne',
    1145: 'Ruban Zéphyr',
    1146: 'Floraécharpe',
    1147: 'Torque Coton',
    1148: 'Col Revanche',
    1149: 'Vélociruban',
    1150: 'Hélioécharpe',
    1151: 'Rubanchitine',
    1152: 'Axoloruban',
    1153: 'Maraistorque',
    1154: 'Chapocornèbr',
    1155: 'Chapo Royal',
    1156: 'Feufocape',
    1157: 'Etolecryptée',
    1158: 'Ruban Revers',
    1159: 'Rubancostaud',
    1160: 'Poncho Dense',
    1161: 'Echapécharpe',
    1162: 'Col Envol',
    1163: 'Torquequartz',
    1164: 'Snubbucape',
    1165: 'Etole Sévère',
    1166: 'Qwilfiruban',
    1167: 'Caratroruban',
    1168: 'Torque Corne',
    1169: 'Ruban Lave',
    1170: 'Ardentécharp',
    1171: 'Ruban Glacé',
    1172: 'Torque Givre',
    1173: 'Broche Zèle',
    1174: 'Ruban Portée',
    1175: 'Ruban Psy',
    1176: 'Broche Neige',
    1177: 'Cape Airmure',
    1178: 'Lacet Noir',
    1179: 'Croc Abîme',
    1180: 'Ruban Typhon',
    1181: 'Cyber Ruban',
    1182: 'Ruban Leurre',
    1183: 'Peintécharpe',
    1184: 'Lactécharpe',
    1185: 'Embryruban',
    1186: 'Ymphécharpe',
    1187: 'Destrugriffe',
    1188: 'Medhycollier',
    1189: 'Croc Sombre',
    1190: 'Echarpe Joie',
    1191: 'Col Linéon',
    1192: 'Cheniporuban',
    1193: 'Robustécharp',
    1194: 'Soie Vive',
    1195: 'Ruban Garde',
    1196: 'Papinoruban',
    1197: 'Chapo Algue',
    1198: 'Echarpenjoué',
    1199: 'Ludichapeau',
    1200: 'Grainichapo',
    1201: 'Rubanpifeuil',
    1202: 'Obitengalice',
    1203: 'Nironruban',
    1204: 'Echarpenlair',
    1205: 'Goéliruban',
    1206: 'Stockécharpe',
    1207: 'Empathichapo',
    1208: 'Ruban Magik',
    1209: 'Loyalécharpe',
    1210: 'Béatécharpe',
    1211: 'Rubanblocage',
    1212: 'Ruban Mobile',
    1213: 'Ruban Contre',
    1214: 'Echarpecool',
    1215: 'Vigorétole',
    1216: 'Col Flemme',
    1217: 'Novicécharpe',
    1218: 'Col Ninja',
    1219: 'Estimanteau',
    1220: 'Belle Boucle',
    1221: 'Joli Jonc',
    1222: 'Grand Torque',
    1223: 'Obi Makuhita',
    1224: 'Obi Cogneur',
    1225: 'Tarinotorque',
    1226: 'Ténéfiscope',
    1227: 'Trompemask',
    1228: 'Torque Fer',
    1229: 'Jonc Métal',
    1230: 'Casque Fer',
    1231: 'Intuiruban',
    1232: 'Méditétole',
    1233: 'Torque Blâme',
    1234: 'Sécurimasque',
    1235: 'Echarpe Néon',
    1236: 'Vespéruban',
    1237: 'Torque Epine',
    1238: 'Glouptiruban',
    1239: 'Obi Avaltout',
    1240: 'Carvaétole',
    1241: 'Ruban Fourbe',
    1242: 'Echarpévent',
    1243: 'Ruban Géant',
    1244: 'Chamaruban',
    1245: 'Eruptécharpe',
    1246: 'Etole Suie',
    1247: 'Rubanressort',
    1248: 'Echarpe Ruse',
    1249: 'Rubantitub',
    1250: 'Ruban Désert',
    1251: 'Vibraécharpe',
    1252: 'Lunetrouges',
    1253: 'Etole Désert',
    1254: 'Cactuchapeau',
    1255: 'Ruban Coton',
    1256: 'Col Nuage',
    1257: 'Etole Force',
    1258: 'Séviperuban',
    1259: 'Sélétorque',
    1260: 'Rubansolaroc',
    1261: 'Trempécharpe',
    1262: 'Rubanbarbich',
    1263: 'Chefécharpe',
    1264: 'Etolefrousse',
    1265: 'Balbubroche',
    1266: 'Kaoritorque',
    1267: 'Echarpe Lien',
    1268: 'Vacilyruban',
    1269: 'Griffe Garde',
    1270: 'Cape Rigide',
    1271: 'Admirécharpe',
    1272: 'Belécharpe',
    1273: 'Kecletorque',
    1274: 'Policape',
    1275: 'Torquenéfast',
    1276: 'Col Skelénox',
    1277: 'Ruban Mirage',
    1278: 'Rubantropius',
    1279: 'Echarpe Eoko',
    1280: 'Calamitorque',
    1281: 'Chapeaufroid',
    1282: 'Echarpegrêle',
    1283: 'Ruban Grésil',
    1284: 'Echarpe Sûre',
    1285: 'Torkaimorse',
    1286: 'Coquibroche',
    1287: 'Torque Abyss',
    1288: 'Rosaécharpe',
    1289: 'Relictorque',
    1290: 'Lovtorque',
    1291: 'Casquepierre',
    1292: 'Ruban Survie',
    1293: 'Cape Drattak',
    1294: 'Terhaltorque',
    1295: 'Echarpemétan',
    1296: 'Métalotorque',
    1297: 'Etourmiruban',
    1298: 'Torqueregret',
    1299: 'Etole Cran',
    1300: 'Ruban Statik',
    1301: 'Mélokritork',
    1302: 'Rozécharpe',
    1303: 'Cape Bouquet',
    1304: 'Casque Dur',
    1305: 'Casque Crâne',
    1306: 'Ruban Rebond',
    1307: 'Blocabroche',
    1308: 'Cape Paille',
    1309: 'Cheniseruban',
    1310: 'Papiloruban',
    1311: 'Ruban Nectar',
    1312: 'Torkapireine',
    1313: 'Ruban Réveil',
    1314: 'Tritotorque',
    1315: 'Capiruban',
    1316: 'Col Dégel',
    1317: 'Veste Chic',
    1318: 'Chapomagie',
    1319: 'Cape Corboss',
    1320: 'Ruban Glam',
    1321: 'Abominablobi',
    1322: 'Torkorillon',
    1323: 'Echarpe Kipu',
    1324: 'Etole Fétide',
    1325: 'Brochemiroir',
    1326: 'Miroitorque',
    1327: 'Echarpe Jako',
    1328: 'Epaissécharp',
    1329: 'Voilesableux',
    1330: 'Ruban Rapion',
    1331: 'Poudrécharpe',
    1332: 'Cradotorque',
    1333: 'Obi Coatox',
    1334: 'Vortentruban',
    1335: 'Ruban Brasse',
    1336: 'Torque Lumin',
    1337: 'Torquenneigé',
    1338: 'Cape Gelée',
    1339: 'Bâtissétole',
    1340: 'Obi Flasque',
    1341: 'Rhinatorque',
    1342: 'Ruban Podcol',
    1343: 'Yanmegaruban',
    1344: 'Cape Scorvol',
    1345: 'Cape Glacier',
    1346: 'Elitécharpe',
    1347: 'Galantorque',
    1348: 'Chaporinorme',
    1349: 'Etole Poisse',
    1350: 'Momaruban',
    1351: 'Purifivoile'
  };
}
