import { Injectable } from '@angular/core';
import { MusicData, Music } from '../data models/music';
import { Observable, of } from 'rxjs';
import { Track } from '../data models/track';
import { Album } from '../data models/album';

@Injectable({providedIn: 'root'})
export class MusicDataService extends MusicData {

  // tslint:disable: max-line-length
  // tslint:disable: quotemark

  private uri: Track = { artist: 'Espacio Dios', trackName: 'Uri', date: '29 May 2020', released: true, time: '1:47', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/3f/cb/a8/3fcba8bc-c053-f1b1-f33f-ab88e47543fd/mzaf_11414520328879246352.plus.aac.p.m4a',
  lyrics: [
    "INSTRUMENTAL"
  ] };

  private malindi: Track = { artist: 'Espacio Dios', trackName: 'Malindi', date: '01 May 2020', released: true, time: '2:54', feat: '', artWork: '/assets/malindi-artwork.jpg', blurArtWork: '/assets/malindi-artwork-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: 'https://music.apple.com/za/album/malindi-single/1502225696?app=music',
  iTunesUrl: 'https://music.apple.com/za/album/malindi-single/1502225696?app=itunes',
  amaonUrl: 'https://www.amazon.com/Malindi-Espacio-Dios/dp/B085PZ742H',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Malindi?id=Bkaog5sfng53n4xj6g4obusr6my',
  deerUrl: 'https://www.deezer.com/us/album/135615622',
  jooxUrl: 'https://www.joox.com/za/album/4dlpRNgwAROnSVs9PrbtMg==',
  tidalUrl: 'https://tidal.com/browse/track/133927084?play=true',
  spotifyUrl: 'https://open.spotify.com/track/55BBZys9QWxkmmRzgHEQ7L',
  ytubeUrl: 'https://music.youtube.com/watch?v=UyL9AsSE-Pw',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/5f/4d/f4/5f4df4da-f8c4-0f69-87ec-a419e8c4c2ca/mzaf_5835146001971086978.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "PIANO BABY,", "YOU GOT ALL THE KEYS THAT UNLOCK ALL MY FEEL,", "WHEN YOU READY,", "I'LL LET YOU PLAY ME,", "BUT IF I FALL WITH NO SAFETY,", "WILL YOU BE THERE WHEN IT'S RAINY,", "LOVE NAVY,", "I HOPE THAT YOU WON'T REPLACE ME,", "WHEN YOU FIND SOMEBODY,", "THAT CAN ROCK YOUR BODY,", "AND HIT THE HIGH NOTES THAT I COULD NEVER REACH,", "WHEN I'M LOW LOW LOW LOW LOW LOW KEY,", "",
    "CHORUS:", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME", "",
    "VERSE:", "CAN YOU BE MY PROPERTY,", "WE BUILD ECONOMY IF YOU LAND ON ME,", "THAT'S MY PHILOSOPHY,", "BUT IT'S YOUR CHOICE TO BELIEVE WHAT I SAY,", "IT'S YOUR VOICE THAT LEADS THE WAY,", "I'M WITH WHATEVER YOU SAY,", "CAUSE YOU GIVE ME JOY YEAH,", "YOU EFFORTLESSLY REMOVE MY BLUE,", "LIKE THE SKY BEFORE THE MORNING,", "I'M IN A GOOD MOOD WHEN YOU IN THE MOMENT,", "", "GA KO TSHWARA 0 SKA BA TSHABA,", "GA KO TSHWARA NKA GO FA SETSHABA,", "EKE SATLO 0 TLHOKOMELA,", "EKE SATLO 0 TLHOKOMELA,", "",
    "CHORUS:", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME", "E EHH MALINDI DON'T LEAVE ME,", "I'VE BEEN WAITING FOR A LONG TIME,", "FOR YOU COME... BY AND STICK AROUND,", "AND GET TO KNOW KNOW KNOW KNOW KNOW KNOW ME",
  ] };

  private Vitality: Track = { artist: 'Espacio Dios', trackName: 'Vitality', date: '29 May 2020', released: true, time: '2:59', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/39/bc/d5/39bcd567-8c59-6ea4-c024-5a1c1c5465ac/mzaf_2375990932992014912.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "TROUBLED BOY WITH A 3RD EYE,", "YOU CAN'T TAKE ADVANTAGE OF THE FOURTHKIND,", "YOU TRIED TO STAB MY BACK WITH YOUR BLURRED SITE,", "BLURRED LINES,", "I'VE SEEN ALL KINDS,", "LET ME SIMPLIFY IT,", "I'M PURIFIED YEAH (KE TLHAPILE MATSOGO),", "I'M NOT STRESSING,", "THE ONLY WAY IS UP FROM HERE,", "",
    "PRE CHORUS:", "I'M HOPING ON A JET NOW,", "I'M TRYNA SEE A NEW VIEW ( BAD ENERGY YEAH )", "BAD ENERGY DON'T WANT NEAR ME,", "FRENEMY I DON'T WANT NO BEEF LIKE IM VEGAN,", "I SEE YOU RIDING DIRTY,", "BUT I'M TOO CLEAN WITH SWERVING,", "MY ENEMIES NOT WORTH IT,", "I'D RATHER CHILL OUT I'M INVESTED", "",
    "CHORUS:", "KGALE KE GO BONA,", "I SAW YOU FROM A MILE AWAY,", "YOU CAME WITH AN AGENDA,", "BUT BADIMO BA KA BA TENG,", "BAD ENERGY DON'T WANT YOU NEAR ME,", "FRENEMY I DON'T WANT NO BEEF LIKE I'M VEGAN,", "",
    "VERSE:", "MAGITA LE MAGANG THAT KNOW WHO I AM,", "YEAH THEY KEEP ME HUMBLE,", "YEAH IM TRYNA FIND PEACE IN THE JUNGLE,", "I CAN'T HEAR YOU SPEAK YEAH YOU MUMBLE,", "I BLOCK BAD ENERGY WITH MY BUBBLE,", "YOU CAN'T BRING ME DOWN TO YOUR LEVEL,", "I'M LIGHT ON MY FEET AROUND HEAVY METALS,", "CAUSE I'VE BEEN ROCK BOTTOM LIKE A PEDAL", "",
    "PRE CHORUS:", "I'M HOPING ON A JET NOW,", "I'M TRYNA SEE A NEW VIEW ( BAD ENERGY YEAH )", "BAD ENERGY DON'T WANT NEAR ME,", "FRENEMY I DON'T WANT NO BEEF LIKE IM VEGAN,", "I SEE YOU RIDING DIRTY,", "BUT I'M TOO CLEAN WITH SWERVING,", "MY ENEMIES NOT WORTH IT,", "I'D RATHER CHILL OUT I'M INVESTED", "",
    "CHORUS:", "KGALE KE GO BONA,", "I SAW YOU FROM A MILE AWAY,", "YOU CAME WITH AN AGENDA,", "BUT BADIMO BA KA BA TENG,", "BAD ENERGY DON'T WANT YOU NEAR ME,", "FRENEMY I DON'T WANT NO BEEF LIKE I'M VEGAN,", "", "KGALE KE GO BONA,", "I SAW YOU FROM A MILE AWAY,", "YOU CAME WITH AN AGENDA,", "BUT BADIMO BA KA BA TENG,", "BAD ENERGY DON'T WANT YOU NEAR ME,", "FRENEMY I DON'T WANT NO BEEF LIKE I'M VEGAN,",
  ] };

  private letsibolo: Track = { artist: 'Espacio Dios', trackName: 'Letsibolo Latsatsing', date: '29 May 2020', released: true, time: '4:08', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/a9/d1/f6/a9d1f627-ef13-f0fd-f24a-239f590a2d39/mzaf_2937735072263490657.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "I USED TO BE RECKLESS WITH MY SHOULDERS,", "YOU COULD CRY ON ME WHEN YOU NEEDED CLOSURE,", "I GOT COLD FEET WHEN I GOT TO KNOW YA,", "YOU PUSHED TO THE EDGE TRYNA FIND OUT IF IM FLOOTING,", "I KNOW WHO I AM WE DON'T WANT THE SAME THINGS,", "YOU FLASHING LIGHTS AND DIAMOND RINGS,", "I WAS RAISED DIFFERENTLY,", "I WANT THE SIMPLE THINGS,", "PEER PRESUSSURE ON ME BUT YOU CAN'T MAKE ME CHANGE MY NAME,", "",
    "CHORUS:", "BAKOLOBENG LOOK OVER ME,", "THEY WANT ME WANTING BENTLEY'S,", "I'M AFRAID TO LOSE MYSELF,", "KE LATLEGELE MO MADING,", "LETSIBOLO LATSATSING,", "", "NGWANA WA SENYA,", "MOTSADI WA TSIBA,", "MO 0 TLO FELANG,", "GA 0 SA BATLE GO RETSA HELA,", "KE GO NE 0 TSOGANG HELANG,", "BONANG,", "",
    "VERSE:", "OUTCAST COMING THROUGH,", "I DON'T WANT THE DRIP,", "I DON'T WANNA SIP,", "I DON'T WANNA FIT IN,", "I MIGHT NOT BE COOL BUT DON'T TAKE ME FOR A POES,", "[TRY PLAY ME YOU LOSE]", "[TRY PLAY ME YOU LOSE]", "I'VE BEEN A LOSER FOR A WHILE BUT LOSING IS SUBJECTIVE,", "I HAD TO WAKE UP AND REALIZE I'VE BEEN WINNING,", "I LEARNT FROM SINNING,", "MISTAKES ARE BLESSINGS,", "I HAD TO RESET MY SETTINGS,", "",
    "CHORUS:", "BAKOLOBENG LOOK OVER ME,", "THEY WANT ME WANTING BENTLEY'S,", "I'M AFRAID TO LOSE MYSELF,", "KE LATLEGELE MO MADING,", "LETSIBOLO LATSATSING,", "", "NGWANA WA SENYA,", "MOTSADI WA TSIBA,", "MO 0 TLO FELANG,", "GA 0 SA BATLE GO RETSA HELA,", "KE GO NE 0 TSOGANG HELANG,", "BONANG,", "", "BAKOLOBENG LOOK OVER ME,", "THEY WANT ME WANTING BENTLEY'S,", "I'M AFRAID TO LOSE MYSELF,", "KE LATLEGELE MO MADING,", "LETSIBOLO LATSATSING,", "", "NGWANA WA SENYA,", "MOTSADI WA TSIBA,", "MO 0 TLO FELANG,", "GA 0 SA BATLE GO RETSA HELA,", "KE GO NE 0 TSOGANG HELANG,", "BONANG,",
  ] };

  private wonderland: Track = { artist: 'Espacio Dios', trackName: 'Wonderland', date: '29 May 2020', released: true, time: '3:00', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/10/d8/42/10d84217-283d-fddf-ce4f-1bebc433fe90/mzaf_12889487105951568552.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "SOMETIMES I WISH THAT I COULD FIGHT ALL THESE MEMORIES,", "DON'T LIE YOU SAID YOU WANTED TIME I GAVE IT ENDLESSLY,", "REGRETTABLY,", "ENERGY WASTED WASTED WASTED ON YOU,", "I THOUGHT YOU WERE FLOWERS AND DAISIES BABY,", "I WAITED FOR HOURS FOR YOU TO BLOOM,", "AFTER ALL IT WAS RAINY,", "BUT YOU SHOWED ME YOUR TRUE COLOURS,", "BLACK AND WHITE I DON'T SEE COLOUR (ANYMORE),", "I WONDER IF I'LL MAKE IT THROUGH THE SUMMER,", "CAUSE I GET COLDER EVERYTIME I WONDER,", "I MIGHT JUST MELT AND TURN INTO WATER,", "",
    "CHORUS:", "I DON'T KNOW HOW YOU SO COLD IN THE SUMMER,", "I'VE BEEN STUCK IN THIS LAND FULL OF WONDER,", "I DON'T KNOW HOW YOU SO COLD IN THE SUMMER,", "I'VE BEEN STUCK IN THIS LAND FULL OF WONDER,", "",
    "VERSE:", "SEE GIRL I'VE BEEN RUNNING,", "RUNNING FROM MYSELF TILL I FOUND YOU,", "I HAD TO SLOW DOWN FOR SOMETHING,", "YOU WERE THAT ONE THING,", "I COULD GIVE MYSELF TO IF I FOUND YOU,", "YEAH YEAH YEAH,", "MOTLOGELE MOTLOGELE,", "0 BATLA 0 MO RAPELE (AMEN),", "I WON'T CHASE YOU IF YOU'RE NOT INDEPENDENT,", "IF LEAVING WAS YOUR DECISON,", "YOU'D HAVE MY RESPECT,", "BUT I STILL CAN'T MIND MY BUSINESS,", "MY MIND KEEPS WONDERING,", "",
    "CHORUS:", "I DON'T KNOW HOW YOU SO COLD IN THE SUMMER,", "I'VE BEEN STUCK IN THIS LAND FULL OF WONDER,", "I DON'T KNOW HOW YOU SO COLD IN THE SUMMER,", "I'VE BEEN STUCK IN THIS LAND FULL OF WONDER,", "",
    "VERSE:", "BUT YOU SHOWED ME YOUR TRUE COLOURS,", "BLACK AND WHITE I DON'T SEE COLOUR (ANYMORE),", "I WONDER IF I'LL MAKE IT THROUGH THE SUMMER,",
  ] };

  private nakong: Track = { artist: 'Espacio Dios', trackName: 'Nakong', date: '29 May 2020', released: true, time: '3:39', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/c9/49/9d/c9499d31-f091-bf6e-e1e4-0c63c5631e30/mzaf_15774754938176804444.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "YOU WERE IMPORTANT TO ME,", "BUT NOT IMMORTAL TO ME,", "IF YOU CAN COME COULD GO,", "THAT'S WHY I ROLL ON MY OWN,", "I, HIT THE BREAKS ON THE WHIP LIKE I'M DJANGO,", "DON'T TRY TO FINNESS ME WITH NO AMO,", "CAUSE I'VE BEEN LOW ON THE FLOOR,", "I'VE SEEN THE DEVIL,", "BUT I DON'T WANT NO PROBLEMS,", "DON'T WANT NO MUVHANGO,", "", "DONT'T DISTURB MY PEACE,", "I'M A FREAK, (YEAH YEAH)", "YOU HATING ON ME CAUSE YOU NOT FREE, (YEAH YEAH)", "YOU LOCKED UP IN CLOUT, PRETEND TO EAT (YEAH YEAH)", "I DON'T NEED NO ONE, TO BOOST MY SELF ESTEEM,", "DREAM CHOSE ME,", "THAT'S WHY I WORK HARD,", "REAL LIFE IS MY SLEEP,", "REAL LIFE AINT FOR WEAK,", "I DON'T HIT THE GYM BUT NGI QINILE,", "CHELETE AINT A THING IF THE VISIONS THERE,", "3 6 9, I WAS BORN IN 3'S,", "WHERE YOU THINK I GET MY FREQUENCY,", "",
    "CHORUS:", "I MOVE DIFFERENTLY NO NEED TO CATCH UP YEAH,", "YOU GO WHERE THE WIND BLOWS, YOU A YES MAN YEAH,", "U YA VUMA", "U YA VUMA", "O E KENYA DI TLHAKONG,", "O SE MO NAKONG,", "KA BOOM KA BOOM,", "BLOW UP COMING SOON,", "12 YEARS IN MY ROOM,", "TSIPA SOUND ITCHU,", "IF FAKING ON ME I CUT YOU OFF WITH AN EQ", "I HAVE TO MAINTAIN BALANCE IN MY LIFE WITHOUT YOU,", "",
    "VERSE:", "FRIENDS COME AND GO THAT'S A SOCIAL MOTION,", "TRIED TO BREAK THE CYCLE WITH YOU BUT YOU HUMAN,", "MAMA WARNED ME ABOUT YA,", "THANKFUL FOR AMA-JITA THAT GOT THIICKER,", "WATER THAN BLOOD YOU NEVER KNOW WHOSE A STICKER,", "WOULD YOU STICK AROUND IF I HAD NOTHING TO GIVE YA,", "NO PLUS ONES NO SMALL TALK,", "I CAN'T HEAR YOU BICKER,", "YOU WEREN'T THERE WHEN I NEEDED YOU IN WINTER, GO", "DONT'T DISTURB MY PEACE,", "I'M A FREAK,", "YOU HATING ON ME CAUSE YOU NOT FREE,", "YOU LOCKED UP IN CLOUT PRETEND TO EAT,", "I DON'T NEED NO ONE TO BOOST MY SELF ESTEEM,", "DREAM CHOSE ME,", "THAT'S WHY I WORK HARD,", "REAL LIFE IS MY SLEEP,", "REAL LIFE AINT FOR WEAK,", "3 6 9 I WAS BORN IN 3'S,", "WHERE YOU THINK I GET MY FREQUENCY,", "",
    "CHORUS:", "I MOVE DIFFERENTLY NO NEED TO CATCH UP YEAH,", "YOU GO WHERE THE WIND BLOWS YOU A YES MAN YEAH,", "U YA VUMA", "U YA VUMA", "O E KENYA DI TLHAKONG,", "O SE MO NAKONG,", "KA BOOM KA BOOM,", "BLOW UP COMING SOON,", "12 YEARS IN MY ROOM,", "TSIPA SOUND ITCHU,", "IF FAKING ON ME I CUT YOU OFF WITH AN EQ", "I HAVE TO MAINTAIN BALANCE IN MY LIFE WITHOUT YOU,", "", "O E KENYA DI TLHAKONG,", "O E KENYA DI TLHAKONG,", "O SE MO NAKONG,", "O SE MO NAKONG,", "O E KENYA DI TLHAKONG,", "O E KENYA DI TLHAKONG,", "O SE MO NAKONG,", "O SE MO NAKONG,",
  ] };

  private lefifi: Track = { artist: 'Espacio Dios', trackName: 'Lefifi', date: '29 May 2020', released: true, time: '3:29', feat: '', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/7d/f3/a4/7df3a458-d605-da12-5d03-61d847ce9f6a/mzaf_9092624055250562485.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "I'M INLOVE WITH THE NIGHT,", "DOUBLE CUPS IN THE NIGHT,", "NO JUDGES IN THE NIGHT,", "I GOT PROBLEMS YOU CAN'T SEE WITH A NAKED EYE,", "I HAD TO GO BLIND JUST SEE A BEAM OF LIGHT,", "HANGING WITH MY DEMONS CHANGED MY FEAR INTO PRIDE,", "I FOUND COMFORT IN THE NIGHT,", "BA RE SHESHA PHAKISA OR LIFE E TLA 0 SEYA,", "BA RE TLOGELA GEYSER OR LIFE E TLA 0 TSHISA,", "",
    "CHORUS:", "I CAN'T BURN BABY BURN,", "IF STUCK IN A WORLD WHERE THE SUN DON'T RISE NO,", "KUMNYAMA EVERYDAY,", "KUYABANDA HERE,", "YOU CAN FIND ME HERE (HMM),", "I NEVER COMPLAIN,", "CAUSE ALL THE DARK DAYS PAVE THE WAY (HMM),", "YEAH (WOO)", "",
    "VERSE:", "E PHETLHE LEFIFING,", "WHEN THE LIGHT SHINES THE TRUTH IS SEEN,", "I'M BETTER OFF HOLDING ON IT (HMM)", "SWITCH THE LIGHT'S OFF IN MY CORNER,", "STEP BACK KA GO BONA,", "YOU TURN THEM AND WA BORA", "NOW THEY CAN SEE,", "NOW THEY CAN SEE MY SCARS AND INSECURITIES,", "NOW I'M BACK TO REALITY WHERE THE GRASS IS NEVER GREEN,", "",
    "CHORUS:", "I CAN'T BURN BABY BURN,", "IF STUCK IN A WORLD WHERE THE SUN DON'T RISE NO,", "KUMNYAMA EVERYDAY,", "KUYABANDA HERE,", "YOU CAN FIND ME HERE (HMM),", "I NEVER COMPLAIN,", "CAUSE ALL THE DARK DAYS PAVE THE WAY (HMM),", "YEAH (WOO)", "",
    "VERSE:", "MFANA WA LEFIFING KE YO,", "E PHETLHE LEFIFING", "E PHETLHE LEFIFING", "",
  ] };

  private summerNights: Track = { artist: 'Espacio Dios', trackName: 'Summer Nights', date: '15 May 2020', released: true, time: '3:30', feat: '', artWork: '/assets/summer-nights-artwork.jpg', blurArtWork: '/assets/summer-nights-artwork-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: 'https://music.apple.com/us/album/summer-nights-single/1502225027',
  iTunesUrl: 'https://music.apple.com/us/album/summer-nights-single/1502225027?app=itunes',
  amaonUrl: 'https://music.amazon.com/albums/B085QC4GLH?trackAsin=B085QC163F&ref=dm_sh_29e1-e907-dmcp-f00c-94bda&musicTerritory=US&marketplaceId=ATVPDKIKX0DER',
  googlePUrl: 'https://play.google.com/store/music/album?id=Btuw3iqs5apjmpbarbh4dupl5km&tid=song-T7fi3uwt7ftghqhnue5yktrmiym',
  deerUrl: 'https://www.deezer.com/us/album/135622432',
  jooxUrl: 'https://www.joox.com/za/single/Fu5WxOb7Zv38qU+taFVvRQ==',
  tidalUrl: 'tidal.com/browse/track/133927090?play=true',
  spotifyUrl: 'https://open.spotify.com/track/18H9ch7EBa2LNJeJloP05q?si=oW0HhAF0RpOJoSCBWFP-9g',
  ytubeUrl: 'https://music.youtube.com/watch?v=Ef70SvOaw_c',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/f9/23/2f/f9232fdd-b271-bdec-2aba-9712de35b408/mzaf_3334041241159585648.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "DO YOU REMEMBER,", "WHEN WE WERE YOUNGER I WAS YOUR DECEMBER,", "WHEN WE COULDN'T MEASURE HOW DEEP WAS OUR LOVE,", "WHILE YOU WERE DROWNING,", "I COULDN'T SAVE YOU,", "I WASN'T READY,", "I WASN'T READY,", "READY FOR SOMEONE LIKE YOU,", "READY FOR SOMEONE WHO KNEW,", "WHEN I FELT BLUE,", "", "IN THE HOT SUMMER NIGHTS,", "WHEN I SIP ON GIN AND ICE,", "I GOT YOU ON MY MIND,", "IT'S A VACATION,", "LASHISA ILANGA,", "NGA BE NGA LALA NGA SALA", "BET YOU GOT THAT PRIDE NOW", "I BET YOU GOT IT FROM YOUR MAMA,", "A WEE, A GO NA MATHATA", "A WEE, A GO NA MATHATA", "LASHISA ILANGA,", "NGA BE NGA LALA NGA SALA", "LASHISA ILANGA,", "NGA BE NGA LALA NGA SALA", "",
    "CHORUS: ", "IN THE HOT SUMMER NIGHTS,", "WHEN I SIP ON GIN AND ICE,", "I GOT YOU ON MY MIND,", "IT'S A VACATION", "", "IN MY HOT SUMMER NIGHTS,", "WHEN I SIP ON GIN AND ICE,", "I GOT YOU ON MY MIND,", "IT'S A VACATION", "",
    "VERSE: ", "TINOTENDA NAKUPENDA EYA MAMA", "TINOTENDA NAKUPENDA EYA MAMA", "TINOTENDA NAKUPENDA EYA MAMA", "TINOTENDA NAKUPENDA EYA MAMA", "WENA,", "WENA WENA WENA WENA FELA", "WEDWA,", "HELA HELA HELA HELA,", "HELA", "REMEMBER", "REMEMBER", "",
    "VERSE:", "WHEN YOU'D LIGHTEN ME UP LIKE YOU'RE TESLA ", "RAISE ME UP LIKE YOU NASA ", "WHEN I COULDN'T GROW, ", "WHEN MY LIFE MOVED SLOW, ", "YOU'RE THAT FIRE WITHOUT SMOKE, ", "BUT IF I SEE YOU I MIGHT CHOKE, ", "MURDER YOU GOT AMMO,", "",
  ] };

  private bezalel: Track = { artist: 'Espacio Dios', trackName: 'Bezalel with Muano', date: '29 May 2020', released: true, time: '1:27', feat: 'Muano', artWork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: '',
  iTunesUrl: '',
  amaonUrl: '',
  googlePUrl: '',
  deerUrl: '',
  jooxUrl: '',
  tidalUrl: '',
  spotifyUrl: '',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/06/7c/a1/067ca1be-c65b-976e-a569-bd83523af362/mzaf_12438309668016384164.plus.aac.p.m4a',
  lyrics: [
    "INSTRUMENTAL"
  ] };

  private spectrum: Track = { artist: 'Espacio Dios', trackName: 'Spectrum', date: '17 Apr 2020', released: true, time: '3:17', feat: 'Lebone', artWork: '/assets/spectrum-artwork.jpg', blurArtWork: '/assets/spectrum-artwork-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: 'https://music.apple.com/za/album/spectrum-feat-lebone-single/1502216102',
  iTunesUrl: 'https://music.apple.com/za/album/spectrum-feat-lebone-single/1502216102',
  amaonUrl: 'https://www.amazon.com/dp/B085PXHQHF?linkCode=osi&th=1&psc=1&tag=featurefm-20',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Spectrum?id=Bwmijhr4jikgssp3bfk57tcevgq',
  deerUrl: 'https://www.deezer.com/us/album/135614612',
  jooxUrl: 'https://www.joox.com/za/album/71RoEkxNh9WQae4NRn9xIQ==',
  tidalUrl: 'https://tidal.com/browse/track/133927082?play=true',
  spotifyUrl: 'https://open.spotify.com/album/16tEfzxFdkXdzFKVSczlcJ',
  ytubeUrl: 'https://music.youtube.com/watch?v=XxYIaoxZNj4',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/ac/54/83/ac548343-9cbc-74aa-5123-f8515d4fd25c/mzaf_15252298218913006101.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "YEAH IT'S ALL GOOD,", "IT'S ALL GOOD", "IT'S ALL GOOD", "IN THE PHOTO'S YOU LOOK REAL GOOD,", "BUT YOU DON'T FEEL GOOD,", "WELL IF YOU WANNA HIDE THE TRUTH,", "IF THAT'S WHAT YOU WANNA DO DO DO,", "I WON'T STICK ON YOU LIKE GLUE,", "I'LL LET GO IF I HAVE TO,", "", "YEAH IT'S ALL GOOD,", "IT'S ALL GOOD", "IT'S ALL GOOD", "IN THE PHOTO'S YOU LOOK REAL GOOD,", "BUT I SEE THROUGH YOU,", "AHH YE,", "AHH YE,", "AHH YE,", "AHH YE,", "AHH YE,", "", "I KNOW IT'S HARD TO LOOK IN THE MIRROR,", "IF YOU HAVEN'T SEEN YOU INTERIOR YEAH,", "YEAH IT'S ALL GOOD IF ACT GOOD YEAH,", "IT'S ALL GOOD IF YOU'RE NOT GOOD,", "",
    "CHORUS:", "I KNOW THAT YOU LIKE TO DANCE,", "BABY DANCE BABY DANCA,", "YOU LIKE TO SHOW THAT YOU SHAPED LIKE A FANTA,", "YOU LIKE TO BE,", "IN THE CENTRE,", "(VIBES)", "ENTER,", "ENTER,", "",
    "VERSE:", "YOU LIKE TO,", "ENTER ENTER ENTER DI CIRCLE,", "BA 0 FANCA FANCA,", "NEVER SETTLE,", "FOR A CHANCER CHANCER,", "GIRL YOU KNOW BETTER,", "ALL THESE SPENDERS SPENDERS,", "HOLDING YOU RANSOM,", "YOU NOT CANDLE CANDLE,", "YOU BEZALEL,", "NALEDI LEDI,", "BEDAZZEL,", "ANCETORS MELODY YOU NEED TO CHANNEL,", "YOUR ANCESTORS REMEDY,", "HIGHER LEVEL",
  ] };

  private naledi: Track = { artist: 'Espacio Dios', trackName: 'Naledi', date: '20 Mar 2020', released: true, time: '3:59', feat: 'Muzi & Thando Nje', artWork: '/assets/naledi-artwork_400x400.png', blurArtWork: '/assets/naledi-artwork-blur.png', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: 'https://music.apple.com/za/album/naledi-feat-muzi-thando-nje-single/1497680683?app=music',
  iTunesUrl: 'https://music.apple.com/za/album/naledi-feat-muzi-thando-nje-single/1497680683?app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B084C4NX26/ref=cm_sw_r_tw_dp_U_x_XTRxEb7PRXDPH',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Naledi?id=B2t2bapuqrmqup5bltvuuoy3fja',
  deerUrl: 'https://www.deezer.com/us/album/129411932',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/129827045?play=true',
  spotifyUrl: 'https://open.spotify.com/album/3cUmxnFEQMnBSrx3uCtK76',
  ytubeUrl: 'https://music.youtube.com/watch?v=XHpFOSbvkvE',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/42/dc/9f/42dc9f7c-1321-b65f-8815-ee3384417d78/mzaf_5363110391104348562.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "I GOTTA THANK YOUR MAKER,", "SHE HEARD MY PRAYERS,", "YOU GOT ME IN JAMAICA,", "CAUSE WHEN YOU'RE HERE I'M HIGH,", "YOU SHOCK ME LIKE A TASER,", "WHEN YOU CAME THROUGH UNANNOUNCED,", "YOU HAD NO INVITATION,", "BUT YOU'RE THE LIFE OF THE PARTY NOW,", "AND YOU'RE SORRY YOU'RE NOT SORRY NOW,", "YOU PULLED UP LIKE A ROVER,", "BIG BODY TRUCK I WASN'T HEAVY ON LOVE,", "BUT RIGHT NOW I GOT NO COMPOSURE,", "I CAN'T HELP,", "I CAN'T HELP IT,", "I'M STUCK WITH YOU,", "THERE'S NO EXIT (NO,NO,NO,N0),", "",
    "CHORUS:", "GA KO FELEGETSA,", "0 SKA THIBA TSELA,", "TRUST IN THE JOURNEY WE ON,", "MY BABY 0 SKA WARA,", "NKA SE 0 TSENYETSE PRESSURE,", "BUT CAN YOU DO ME ONE FAVOUR,", "WHEN THEY TRY TO MAKE YOU BITTER,", "YOU WON'T CHANGE YOUR FLAVOUR,", "NALEDI NA,", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "",
    "VERSE:", "YOU'RE MY SHINNING STAR,", "GIRL YOU BEAM ALL NIGHT,", "YOU LIGHT UP MY HEART,", "MAKE EVERYTHING FEEL ALRIGHT,", "KE TSAMAYA LE WENA,", "ALL NIGHT LONG,", "MEET ME ON THE DANCE FLOOR,", "DANCING TO OUR SONG,", "HA KE NA LE WENA,", "KE DULA KE THABILE,", "HA KE NA LE WENA,", "MATHATA A FELA,", "KE TSAMAYA LE WENA,", "ALL NIGHT LONG,", "MEET ME ON THE DANCE FLOOR,", "",
    "CHORUS:", "GA KO FELEGETSA,", "0 SKA THIBA TSELA,", "TRUST IN THE JOURNEY WE ON,", "MY BABY 0 SKA WARA,", "NKA SE 0 TSENYETSE PRESSURE,", "BUT CAN YOU DO ME ONE FAVOUR,", "WHEN THEY TRY TO MAKE YOU BITTER,", "YOU WON'T CHANGE YOUR FLAVOUR,", "NALEDI NA,", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "OH NALEDI NALEDI", "",
    "VERSE:", "AWUGIDE NGIBONE,", "AWUTHINTE SIJOLE,", "ESBHAKABHAKENI,", "SUPER NOVA,", "ZWAKALA METSI,", "AWURINGE NGIFONE", "BUNDLE AYIPHOLE,", "WE NALEDI,", "YOU KNOW I LIKE YOU,", "YOU'RE ONE IN A MILLION,", "KWATHI GQUZU,", "NKANYEZI OH NKANYEZI", "NKANYEZI OH NKANYEZI", "AWUGIDE NGIBONE", "AWUTINTE SUOLE", "ESBHAKABHAKENI,", "SUPER NOVA,", "ZWAKALA METSI,", "NKANYEZI,",
  ] };

  private loveyourself: Track = { artist: 'Espacio Dios', trackName: 'Love Yourself', date: '21 Feb 2020', released: true, time: '2:55', feat: '', artWork: '/assets/love-yourself-artwork.jpg', blurArtWork: '/assets/love-yourself-artwork-blur.jpg', videoUrl: 'aNgiMkxpEGI', videoThumb: '/assets/love-yourself-video-thumb.jpg', videoTime: '3:09', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/love-yourself/1497685767?i=1497685769&i=1497685769',
  iTunesUrl: 'https://music.apple.com/za/album/love-yourself/1497685767?i=1497685769&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B084D297NW/ref=cm_sw_r_tw_dp_U_x_-bRxEb36JPN1C',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Love_yourself?id=B4nvdtjo6qmqfnq5tpc7qpl77ee',
  deerUrl: 'https://www.deezer.com/us/track/864402752',
  jooxUrl: 'https://www.joox.com/za/single/XQVTLT1NQvl_rSNISXaHTg==',
  tidalUrl: 'https://tidal.com/browse/track/129827014',
  spotifyUrl: 'https://open.spotify.com/album/0M61LL79Ay6y8NGOcA8Uux?highlight=spotify:track:6Qv4sg2aEhCP257C6uxINO',
  ytubeUrl: 'https://music.youtube.com/watch?v=UlvPyhy8qf8',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/88/e6/50/88e65040-65d9-cd98-b61b-6e5af6f10b27/mzaf_16659805124680689677.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "I HITCHED A RIDE RIDE RIDE", "THAT'S GOING NO WHERE", "WE ON THE ROAD WE MIGHT FIND OUR WAY", "I'LL BE GOOD IF YOU PROMISE YOU GOIN' DRIVE GENTLY", "I'M DELICATE SO HANDLE ME WITH CARE", "IMA TAKE A FLIGHT AT NIGHT", "JUST TO PROVE YOU'RE HEAVEN SENT", "BUT EVEN IF YOU'RE WILD WILD WILD", "AND I DON'T FIND YOU THERE", "YEAH I COULDN'T CARE LESS", "WHO'S PERFECT ANYWAY", "I FOUND DI BAGGAGE THAT'S IN YOUR CLOSET AND IT'S OK", "YEAH IT'S OK", "",
    "CHORUS:", "BUT YOU'RE NOT SURE HOW I OPERATE", "LOOSEN UP LET ME DEMONSTRATE", "WHY I NEED YOU (I DO)", "TO BE YOU (BE YOU)", "YEAH IT'S OK (X2)", "IT'S ALRIGHT, IF YOU'RE NOT FAKE", "CAUSE I NEED YOU (I DO)", "TO BE YOU (BE YOU)", "",
    "VERSE:", "HEY HEY HEY STRANGER", "I MIGHT DISSAPOINT YA", "I'M AN INVADER, SATIFY THEN I TURN INTO VAPOR", "I DISSAPEAR WHEN I GET THE FEELING THAT I CARE", "CAUSE FEELINGS GOT ME NO WHERE", "WAIT", "I THOUGHT WE WERE DOING THIS FOR ONE NIGHT ONLY", "WE CAN'T TAKE IT SLOWLY", "CAUSE YOU GOT 3 LIVES", "I DON'T THINK TWICE", "I LIVE THAT FAST LIFE MY G", "I GOT ONE LIFE ONLY", "EH NGIPHELA KAYI ONE KAYI ONE KAYI ONE", "I GOT ONE LIFE ONLY", "THAT'S WHY I THINK YOU SHOULD KNOW THIS", "",
    "CHORUS:", "BUT YOU'RE NOT SURE HOW I OPERATE", "LOOSEN UP LET ME DEMONSTRATE", "WHY I NEED YOU (I DO)", "TO BE YOU (BE YOU)", "YEAH IT'S OK (X2)", "IT'S ALRIGHT, IF YOU'RE NOT FAKE", "CAUSE I NEED YOU (I DO)", "TO BE YOU (BE YOU)", ""
  ] };

  private jabulani: Track = { artist: 'Espacio Dios', trackName: 'Jabulani', date: '14 Feb 2020', released: true, time: '2:51', feat: '', artWork: '/assets/jabulani-artwork_400x400.jpg', blurArtWork: '/assets/jabulani-artwork-blur.jpg', videoUrl: 'SbhWLNJ4IQM', videoThumb: '/assets/jabulani-video-thumb.webp', videoTime: '2:51', allLink: 'https://ditto.ffm.to/jabulani',
  appleMUrl: 'https://music.apple.com/za/album/jabulani-single/1497685468',
  iTunesUrl: 'https://music.apple.com/za/album/jabulani/1497685468?i=1497685469&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B084DJLJFY/ref=cm_sw_r_tw_dp_U_x_a1RxEb6ETC4AF',
  googlePUrl: 'https://play.google.com/store/music/album?id=Byni6dayml73igl53nagcvhjfki&tid=song-Tw5avzkenh7ccdivdcswdwh3pke',
  deerUrl: 'https://www.deezer.com/us/track/864326322',
  jooxUrl: 'https://www.joox.com/za/single/7ur8HGsvXBwTDRH+4j++4g==',
  tidalUrl: 'https://tidal.com/browse/album/129826882',
  spotifyUrl: 'https://open.spotify.com/track/01agXPsPoMmdSINF5YkIiq',
  ytubeUrl: 'https://music.youtube.com/watch?v=ms2Fpep9X8M',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/cb/dd/44/cbdd448d-ceaa-9006-16b3-0b4690194ed3/mzaf_1344990568780923203.plus.aac.p.m4a',
  lyrics: [
    "VERSE:", "JABU JABU JABULANI,", "SAW MY BROTHER IN A COFFIN,", "DIED BEFORE HE SAW MY PROFIT,", "BELIEVED IN ME WHEN I WAS DOUBTING,", "TRUST MY JOURNEY,", "O NGA SABI (NO),", "FEAR,", "FEAR NO MAN,", "FEAR,", "FEAR NO MAN,", "I WILL NEVER FEAR NO MAN,", "I WAS JUST A KID BACK THEN,", "QINA NDODA,", "FOUND MY ZEN,", "TELL MY STORY,", "BLOOD ON PEN,", "WHEN BRICKS FALL I BUILD AGAIN,", "KE LEGAE,", "LEVEL HIGH (EH EH EH)", "",
    "CHORUS:", "I THOUGHT YOU KNEW THIS,", "I'M LUCID,", "I SHINE DIFFERENT YEAH YEAH YEAH,", "I'M A NUISANCE,", "I CAN'T BE MUTED,", "BADIMO KNOW THIS YEAH YEAH YEAH", "GA KO TSHABE JO", "GA KO TSHABE JO", "A NGI KU SABI", "[YO EH..]", "",
    "VERSE:", "HAII SUHN (AYE)", "O MPATLANG (AYE)", "DON'T MAKE NO DEALS WITH THE DEVIL,", "ON MY SHIP IM THE CAPTAIN,", "MODIMO THIS MODIMO THAT,", "I SEE I SEE I SEE YOUR PATTERN,", "ALL THESE KIDS IN A CABIN,", "I COULDN'T FIT I'M A DRAGON,", "LET BYGONES BE BYGONES,", "BUT YOU SHOULD KNOW I'M THE NEW DAWN,", "COPY PASTE YOU A TRY ON,", "IF THEY SLEEP IT'S A TURN ON,", "CAUSE WHEN SNEEZE THEY'LL BE SICK OF,", "ME WITH NO LEAN ON,", "WHAT YOU SAY NIGGER,", "TO MY FACE NIGGER,", "",
    "CHORUS:", "I THOUGHT YOU KNEW THIS,", "I'M LUCID,", "I SHINE DIFFERENT YEAH YEAH YEAH,", "I'M A NUISANCE,", "I CAN'T BE MUTED,", "BADIMO KNOW THIS YEAH YEAH YEAH", "GA KO TSHABE JO", "GA KO TSHABE JO", "A NGI KU SABI", "[YO EH..]",
  ] };

  private goodVibesOnly: Track = { artist: 'Muzi', trackName: 'Good Vibes Only', date: '20 Sep 2019', released: true, time: '3:41', feat: 'Espacio Dios', artWork: '/assets/good-vibes-only-artwork_400x400.jpg', blurArtWork: '/assets/good-vibes-only-artwork-blur.jpg', videoUrl: 'CktGJQRESQo', videoThumb: '/assets/good-vibes-only-video-thumb.webp', videoTime: '3:43', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/good-vibes-only-feat-espacio-dios-single/1477513290',
  iTunesUrl: 'https://music.apple.com/za/album/good-vibes-only-feat-espacio-dios/1477513290?i=1477513292&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B07WS2LKZF/ref=cm_sw_r_tw_dp_U_x_T1RxEb3EE7HFC',
  googlePUrl: 'https://play.google.com/store/music/album/Muzi_Good_Vibes_Only?id=Br3vipatfzsdjfi2enukpgrykee',
  deerUrl: 'https://www.deezer.com/us/track/737987602',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/116146554',
  spotifyUrl: 'https://open.spotify.com/track/7lSnw7BW57V2bqodncifnc',
  ytubeUrl: 'https://music.youtube.com/watch?v=KyyEBeAjaPY',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/05/56/6a/05566ad6-0b44-996d-6d39-c60d11bf57de/mzaf_17910559124743662695.plus.aac.p.m4a',
  lyrics: [
    "", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,",
    "", "KO KO KO KE A KOKOTA,", "MPULELE,", "I VISION CHASE,", "MY JOURNEY SAFE,", "I VIBRATE HIGHER,", "KO KO KO KE A KOKOTA,", "MPULELE,", "I VISION CHASE,", "MY JOURNEY SAFE,", "I VIBRATE HIGHER,", "HOLY FIRE,",
    "", "I NEED A SAVIOR,", "DON'T LEAVE THE AREA", "VIBRATIONS, THEY LIFT ME UP,", "ELEVATE TILL IT'S GOOD ENOUGH,", "BANG BANG GORILLA,", "SAY IT WITH MY CHEST WA TSEBA,", "TSHWANA BOY MOVES WANG FEEL'A,", "I GOT TSOTLHE TSE KE DI BATLANG,",
    "", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,",
    "", "KO KO KO KE A KOKOTA,", "MPULELE,", "I VISION CHASE,", "MY JOURNEY SAFE,", "I VIBRATE HIGHER,", "HOLY FIRE,",
    "", "ILIZWE LIPHETHE AMAGENGE,", "ILIZWE LIPHETHE AMAGENGE,", "VUL'INDLELA SIYABANGENA,", "VUL'INDLELA SIYABANGENA,", "KO KO KO KE A KOKOTA,", " QO QO QO NGIYANQONQOZA,", "I GOT TSOTLHE TSE KE DI BATLANG,",
    "", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "TRUTH IS I DON'T WANNA WAIT,", "GOOD TIMES AND I GOT A DATE,", "YOUR BAD VIBES CAN'T CONTAMINATE,", "SIYA PHEZULU KWEZINTABA, SEE YOU LATER,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,", "RIGHT ON TIME, ANCESTORS NEVER LATE,", "GOOD VIBES ONLY,", "IMA GET MINE NO DOUBTS NO DEBATES,", "GOOD VIBES ONLY,",
  ] };

  private limitless: Track = { artist: 'Kitler', trackName: 'Limitless', date: '1 Jul 2019', released: true, time: '3:14', feat: 'Espacio Dios', artWork: '/assets/Limitless-artwork_500x500.jpg', blurArtWork: '/assets/Limitless-artwork-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/limitless-feat-espacio-dios-single/1470246553',
  iTunesUrl: 'https://music.apple.com/za/album/limitless-feat-espacio-dios/1470246553?i=1470246565&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B07TKHWYZN/ref=cm_sw_r_tw_dp_U_x_M2RxEbBPWJ80N',
  googlePUrl: 'https://play.google.com/store/music/album/Kilter_Limitless_feat_Espacio_Dios?id=Bet6hydkahhj6xsd2m2phn5hwdu',
  deerUrl: 'https://www.deezer.com/us/track/702829502',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/112172168',
  spotifyUrl: 'https://open.spotify.com/track/00QHFFYhtoWEYwCnWpP4jf',
  ytubeUrl: '', previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/48/35/12/4835124d-209e-9c4a-2b0d-3cd30df4cb6b/mzaf_8138932713150636977.plus.aac.p.m4a',
  lyrics: [

  ] };

  private seemo: Track = { artist: 'Espacio Dios', trackName: 'Seêmô', date: '27 Apr 2019', released: true, time: '3:54', feat: '', artWork: '/assets/seemo-artwork.jpg', blurArtWork: '/assets/seemo-artwork-blur.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/se%C3%AAm%C3%B4-single/1459912611',
  iTunesUrl: 'https://music.apple.com/za/album/se%C3%AAm%C3%B4/1459912611?i=1459912946&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B07QPR2S35/ref=cm_sw_r_tw_dp_U_x_m2RxEbQYFH078',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Se%C3%AAm%C3%B4?id=Bmesssnkjuhjzykcpjd6thu3zpm',
  deerUrl: 'https://www.deezer.com/us/track/666017652',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/107708721',
  spotifyUrl: 'https://open.spotify.com/track/6JZEGuG9Fmv93xIr4HA5pY',
  ytubeUrl: 'https://music.youtube.com/watch?v=zh8vXh4xR8A',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/81/70/90/81709003-6959-ecb2-88c3-00807ea8883b/mzaf_744004003947131961.plus.aac.p.m4a',
  lyrics: [

  ] };

  private mrsAfrica: Track = { artist: 'Allan Kingdom', trackName: 'Mrs. Africa', date: '19 Feb 2018', released: true, time: '2:26', feat: 'Espacio Dios', artWork: '/assets/mrs-africa-artwork_400x400.jpg', blurArtWork: '/assets/mrs-africa-artwork-blur.jpg',  videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/mrs-africa-feat-espacio-dios/1350963434?i=1350965362',
  iTunesUrl: 'https://music.apple.com/za/album/mrs-africa-feat-espacio-dios/1350963434?i=1350965362&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B079YR82JL/ref=cm_sw_r_tw_dp_U_x_03RxEbXJ425M9',
  googlePUrl: 'https://play.google.com/store/music/album/Allan_Kingdom_Mrs_Africa_feat_Espacio_Dios?id=B4mqncfzmvecbnc7yv2feqvycmq',
  deerUrl: 'https://www.deezer.com/us/track/465581692',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/84921397',
  spotifyUrl: 'https://open.spotify.com/track/5EcqvHhCwtuKmtnBmj0R70',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview62/v4/ad/a3/34/ada33410-4f5f-fc01-c4b6-16c7cd614d09/mzaf_139126295544545382.plus.aac.p.m4a',
  lyrics: [

  ] };

  private percussivePlanets: Album = {albumName: 'Percussive Planets', artwork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', allLink: 'https://ditto.ffm.to/loveyourself',
  appleMUrl: 'https://music.apple.com/za/album/percussive-planet/1441979502',
  iTunesUrl: 'https://music.apple.com/za/album/percussive-planet/1441979502?app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B07KFPS73J/ref=cm_sw_r_tw_dp_U_x_q3RxEbF9GDFFB',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Percussive_Planet?id=Bf2hky25nrs7sbgqzn3anxa6hgm',
  deerUrl: 'https://www.deezer.com/us/album/78578732',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/album/98604008',
  spotifyUrl: 'https://open.spotify.com/album/3ccWpfymhmAJHNZPSu3S6B',
  ytubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nZimIaQNO1rMTS_rBRkwtLeYHJUp4hVbs', date: '14 Feb 2018', released: true,
  tracks: [
    { artist: 'Espacio Dios', trackName: 'Wakanda', date: '14 Feb 2018', released: true, time: '3:40', feat: '', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/d4/8a/7c/d48a7cc5-1430-1cd7-d63c-d8c9e2f9bb0e/mzaf_3162136581938958006.plus.aac.p.m4a',
      lyrics: [

      ] },
    { artist: 'Espacio Dios', trackName: 'Lovesick', date: '14 Feb 2018', released: true, time: '3:13', feat: '', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/11/0f/71/110f718c-744a-bd36-21e8-adc7261c6d42/mzaf_6140126419827149534.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Mango', date: '14 Feb 2018', released: true, time: '2:49', feat: 'Bog', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/15/ff/3f/15ff3ffc-d99f-9b98-a82e-2cfcb548035f/mzaf_1829408852824203207.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Pussy Willow', date: '14 Feb 2018', released: true, time: '5:12', feat: '', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/45/1e/84/451e843f-3324-c42d-fd8a-0dcfa39c1948/mzaf_1615590560295695844.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Hyena', date: '14 Feb 2018', released: true, time: '3:04', feat: 'Shakashoelu', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/13/93/12/139312f9-82be-c3d5-fef9-9af2d25c3f09/mzaf_4013310339819332550.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Wadjet', date: '14 Feb 2018', released: true, time: '4:14', feat: 'Una Rams', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/27/f9/bb/27f9bbeb-bc33-a3c3-8b66-5f03b9159537/mzaf_8490975620410201889.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Mamela', date: '14 Feb 2018', released: true, time: '1:20', feat: '', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/d1/86/c8/d186c89c-7e49-907d-92db-36c45efe3fc6/mzaf_5906230164768541488.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Mangwane', date: '14 Feb 2018', released: true, time: '2:41', feat: 'Anatii', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: '', videoThumb: '', videoTime: '', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/fe/2b/7b/fe2b7bd2-6249-c0c1-1a50-27e3e90041a5/mzaf_4890517674521962412.plus.aac.p.m4a', lyrics: [] },
    { artist: 'Espacio Dios', trackName: 'Uri Fire', date: '14 Feb 2018', released: true, time: '2:36', feat: '', artWork: '/assets/percussive-planets-album-art_400x400.JPG', blurArtWork: '/assets/percussive-planets-album-art-wo-text.jpg', videoUrl: 'ql5Ao_925co', videoThumb: '/assets/uri-fire-video-thumb.webp', videoTime: '2:37', allLink: 'https://ditto.ffm.to/loveyourself',
      appleMUrl: '', iTunesUrl: '', amaonUrl: '', googlePUrl: '', deerUrl: '', jooxUrl: '', tidalUrl: '', spotifyUrl: '', ytubeUrl: '',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/bc/01/00/bc0100d0-7cbc-e07f-fc05-af70d098e67a/mzaf_3747963400263288723.plus.aac.p.m4a', lyrics: [] }
  ] };

  private treasure: Track = { artist: 'Kilter', trackName: 'Treasure', date: '09 Jun 2017', released: true, time: '3:49', feat: 'Espacio Dios', artWork: '/assets/treasure-artwork_400x400.png', blurArtWork: '/assets/treasure-artwork-blur.png', videoUrl: '', videoThumb: '', videoTime: '', allLink: '',
  appleMUrl: 'https://music.apple.com/za/album/treasure-feat-espacio-dios/1234555296?i=1234555724',
  iTunesUrl: 'https://music.apple.com/za/album/treasure-feat-espacio-dios/1234555296?i=1234555724&app=itunes',
  amaonUrl: 'https://www.amazon.com/dp/B0722VZ8XM/ref=cm_sw_r_tw_dp_U_x_b5RxEbMX1X4X8',
  googlePUrl: 'https://play.google.com/store/music/album/Kilter_Through_the_Distortion?id=Bptw6vbo3bl6zomiinjcke66tiu',
  deerUrl: 'https://www.deezer.com/us/track/359051981',
  jooxUrl: '',
  tidalUrl: 'https://tidal.com/browse/track/74666269',
  spotifyUrl: 'https://open.spotify.com/track/696Z5lEuz7BIfYGlMuJXh0',
  ytubeUrl: '',
  previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview117/v4/11/30/33/1130339a-ddfa-7605-a558-d01ba0779c6a/mzaf_3212154507713889191.plus.aac.p.m4a', lyrics: [] };


  private sonOfUri: Album = {albumName: 'Son Of Uri', artwork: '/assets/son-of-uri-album-art_400x400.jpg', blurArtWork: '/assets/son-of-uri-album-art-blur.jpg', allLink: '',
  appleMUrl: 'https://music.apple.com/us/album/son-of-uri/1497685445',
  iTunesUrl: 'https://music.apple.com/us/album/son-of-uri/1497685445',
  amaonUrl: 'https://music.amazon.com/albums/B084DHGNBW',
  googlePUrl: 'https://play.google.com/store/music/album/Espacio_Dios_Son_of_Uri?id=Bow4cbmtf6hhnn4btdemyv5ir4a',
  deerUrl: 'https://www.deezer.com/us/album/129447922',
  jooxUrl: 'https://www.joox.com/za/album/If0rAG6Dy2cccPMhJuyxVA==',
  tidalUrl: 'https://tidal.com/browse/album/129827216?play=true',
  spotifyUrl: 'https://open.spotify.com/album/56RCZo1g8mhY2f2lqKuWAC?si=5fMk9fIESP2GTMpjNGGsGQ',
  ytubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nGx1V1mmcVtgDS_0saB6K6TSCd2MVXJEg',
  date: '29 May 2020', released: true,
  tracks: [
    this.uri,
    this.malindi,
    this.Vitality,
    this.jabulani,
    this.letsibolo,
    this.wonderland,
    this.nakong,
    this.lefifi,
    this.naledi,
    this.spectrum,
    this.loveyourself,
    this.summerNights,
    this.bezalel
  ] };

  private musicData: Music[] = [
    {type: 'album', single: null, album: this.sonOfUri, feature: null },
    {type: 'single', single: this.summerNights, album: null, feature: null },
    {type: 'single', single: this.malindi, album: null, feature: null },
    {type: 'single', single: this.spectrum, album: null, feature: null },
    {type: 'single', single: this.naledi, album: null, feature: null },
    {type: 'single', single: this.loveyourself, album: null, feature: null },
    {type: 'single', single: this.jabulani, album: null, feature: null },
    {type: 'feature', single: null, album: null, feature: this.goodVibesOnly },
    {type: 'feature', single: null, album: null, feature: this.limitless },
    {type: 'single', single: this.seemo, album: null, feature: null },
    {type: 'feature', single: null, album: null, feature: this.mrsAfrica },
    {type: 'album', single: null, album: this.percussivePlanets, feature: null },
    {type: 'feature', single: null, album: null, feature: this.treasure },
  ];

  getListData(): Observable<Music[]> {
    return of(this.musicData);
  }

  getData(id: string, type: string): Music {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.musicData.length; i++) {
      if ( this.musicData[i].type === type ) {
        switch (this.musicData[i].type) {
          case 'single':
            if (this.musicData[i].single.trackName === id) {
              return this.musicData[i];
            }
            break;
          case 'album':
            if (this.musicData[i].album.albumName === id) {
              return this.musicData[i];
            }
            break;
          case 'feature':
            if (this.musicData[i].feature.trackName === id) {
              return this.musicData[i];
            }
            break;
          default:
            break;
        }
      }
    }

    return null;
  }
}
