import React, { PropTypes } from 'react';
import cx from 'classnames';
import LinkExternal from '../LinkExternal';

import iconLinkedIn from '../../assets/images/linkedin.svg';

import g from '../../utils/grid.module.css';
import s from './index.module.css';

const name = "Megan";

const Twitter = () =>
  <svg className={`${s.icon}`} xmlns="http://www.w3.org/2000/svg" width="37px" height="30px" viewBox="0 0 37 30" version="1.1"><title>{name}'s Twitter Profile</title><desc>Twitter Icon</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal"><stop stopColor="#9792FA" offset="0%"/><stop stopColor="#F683F4" offset="100%"/>
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="85.7919034%" y2="83.046875%" id="hover"><stop stopColor="#483FFF" offset="0%"></stop><stop stopColor="#FF00FD" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-1272.000000, -907.000000)" fill="url(#normal)"><g id="icon" transform="translate(1162.000000, 907.000000)"><path d="M121.531373 30C135.368347 30 142.93532 18.4592328 142.93532 8.45199776 142.93532 8.12405871 142.92872 7.79774385 142.91376 7.47290553 144.38248 6.40403981 145.65936 5.0702832 146.666667 3.55166406 145.318653 4.15453445 143.86812 4.56073 142.346453 4.74396834 143.899507 3.80651448 145.092053 2.32288929 145.654373 0.554587603 144.200613 1.42205357 142.59124 2.05312583 140.877733 2.39287718 139.504933 0.920768981 137.550013 0 135.386533 0 131.231907 0 127.86268 3.39190267 127.86268 7.57286714 127.86268 8.16732127 127.928827 8.74509051 128.057893 9.29967811 121.805933 8.98325606 116.261787 5.96949473 112.552 1.38705962 111.905347 2.50597998 111.533107 3.80651448 111.533107 5.19357411 111.533107 7.82107315 112.86132 10.1405664 114.880773 11.4975047 113.646867 11.4592623 112.487467 11.1178868 111.47356 10.550158 111.471947 10.5817559 111.471947 10.6133538 111.471947 10.6465759 111.471947 14.3148865 114.065453 17.3769306 117.50728 18.0713463 116.87544 18.2443965 116.2106 18.3377137 115.5242 18.3377137 115.039613 18.3377137 114.568227 18.2894309 114.11004 18.201134 115.067627 21.2100227 117.84476 23.3995807 121.13772 23.4612999 118.562547 25.492573 115.31916 26.7031864 111.794467 26.7031864 111.18756 26.7031864 110.58872 26.6681924 110 26.5982045 113.329333 28.7462717 117.282293 30 121.531373 30" id="twitter"/></g></g></g>
    </svg>

const AngelList = () =>
  <svg className={`${s.icon}`} xmlns="http://www.w3.org/2000/svg" width="20px" height="30px" viewBox="0 0 20 30" version="1.1">
    <title>{name}'s AngelList Profile</title>
    <desc>AngelList</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal"><stop stopColor="#9792FA" offset="0%"/><stop stopColor="#F683F4" offset="100%"/>
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="85.7919034%" y2="83.046875%" id="hover"><stop stopColor="#FF00FD" offset="0%"></stop><stop stopColor="#483FFF" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(-1222.000000, -907.000000)" fill="url(#normal)"><g transform="translate(1162.000000, 907.000000)"><path d="M75.3451789 12.4451879C76.2259044 9.94515317 76.9132658 7.88124983 77.4063642 6.25347792 77.8994627 4.62570602 78.1459619 3.62635987 78.1459619 3.25554381 78.1459619 2.8571826 78.0637622 2.54813444 77.8994627 2.32829498 77.7347636 2.10876854 77.5079403 1.9986923 77.2189928 1.9986923 76.8507421 1.9986923 76.4759993 2.31796555 76.0947644 2.95672074 75.71313 3.59547592 75.292643 4.62257589 74.8324045 6.03718594L72.8599109 11.9918408 75.3451789 12.4451879ZM72.7218793 17.9878134C72.1564691 17.9603726 71.6204231 17.8986047 71.1144404 17.8024053 70.608158 17.706519 70.1248477 17.5688976 69.6647091 17.3902716 69.8747528 17.8301591 70.0621242 18.2694207 70.2268233 18.7089953 70.3911228 19.1488829 70.5256587 19.5814668 70.63113 20.0070602 70.946745 19.5950307 71.2787399 19.2209802 71.6272148 18.8840739 71.97539 18.5475849 72.3403448 18.2487619 72.7218793 17.9878134L72.7218793 17.9878134ZM70.4930984 11.7446649L68.3628973 5.31600401C67.8105711 3.68134582 67.3832924 2.6136585 67.0808613 2.11189867 66.7781307 1.61055619 66.4497313 1.35983278 66.0946645 1.35983278 65.8185014 1.35983278 65.5946745 1.47001336 65.4239827 1.6895398 65.2530912 1.90927492 65.1675955 2.20465485 65.1675955 2.57557525 65.1675955 3.20744414 65.397515 4.30632843 65.8579533 5.8722281 66.3181918 7.4382321 67.0085496 9.49180602 67.9290266 12.0330542 68.0078304 11.8819732 68.1193943 11.7755488 68.2643175 11.7136766 68.4089411 11.6519087 68.6062004 11.6209204 68.8559957 11.6209204 68.9348994 11.6209204 69.0927069 11.6281197 69.3294181 11.6415793 69.5660294 11.6553518 69.9537564 11.6899919 70.4930984 11.7446649L70.4930984 11.7446649ZM68.5601566 21.6966C68.7836839 21.6966 68.9872356 21.5904886 69.1716106 21.3773267 69.3556861 21.1643736 69.4476738 20.9342047 69.4476738 20.6870287 69.4476738 20.4262889 69.2668944 19.8184177 68.9053355 18.8635194 68.543477 17.9088297 68.0933261 16.9713558 67.5541839 16.0509933 67.1597651 15.3641384 66.7718384 14.8455803 66.3905036 14.4953187 66.0088692 14.1450572 65.6476099 13.9698742 65.305727 13.9698742 65.0295639 13.9698742 64.7238369 14.1522565 64.388546 14.5159776 64.053255 14.8800117 63.8855596 15.2199438 63.8855596 15.5358782 63.8855596 15.8655853 64.049959 16.3600415 64.378658 17.0194555 64.7071573 17.6787652 65.1479195 18.3792883 65.7001458 19.1210247 66.2787399 19.9318327 66.8244741 20.5633886 67.3372486 21.0167358 67.850023 21.4699786 68.2574259 21.6966 68.5601566 21.6966L68.5601566 21.6966ZM62.6429756 21.2021438C62.827051 21.4359645 63.0834382 21.7791311 63.4122371 22.2323739 64.2800783 23.4823391 65.0819001 24.1074261 65.8185014 24.1074261 66.0680969 24.1074261 66.2919239 24.0249993 66.4891832 23.8601458 66.6863427 23.6952923 66.7850223 23.5235525 66.7850223 23.3450307 66.7850223 23.1389639 66.6534828 22.7957973 66.3905036 22.3148006 66.1272248 21.8340127 65.7658656 21.2916655 65.305727 20.6870287 64.7797687 19.9865057 64.3422025 19.4747294 63.9940273 19.152013 63.6455524 18.829401 63.3658936 18.6677819 63.1558499 18.6677819 62.6953117 18.6677819 62.2712291 18.9252873 61.883602 19.4404023 61.4956753 19.9555174 61.3017119 20.5633886 61.3017119 21.2639117 61.3017119 21.8274394 61.4365474 22.4558652 61.7061185 23.1492933 61.97539 23.8429301 62.3668125 24.5401144 62.8796868 25.2406374 63.6554404 26.3258535 64.6183656 27.1600331 65.7692615 27.7438023 66.9197579 28.3281976 68.1919059 28.6195084 69.5858053 28.6195084 72.1498771 28.6195084 74.2965582 27.6202665 76.0256487 25.6218873 77.7545395 23.623195 78.6193844 21.119717 78.6193844 18.1114535 78.6193844 17.191404 78.5533649 16.4599969 78.422125 15.9170237 78.2905855 15.3744679 78.0736501 14.9795498 77.7712191 14.7322696 77.2318771 14.2655672 76.1834562 13.8463384 74.6252572 13.475418 73.0670582 13.1044976 71.4398434 12.9190896 69.7435129 12.9190896 69.2701904 12.9190896 68.9348994 13.0015164 68.7376401 13.1662655 68.5403807 13.3312234 68.441801 13.6128308 68.441801 14.0110876 68.441801 14.9455357 68.9414914 15.6217481 69.9407723 16.0406639 70.9399533 16.4599969 72.5572801 16.6690896 74.7928527 16.6690896L75.601666 16.6690896C75.7857414 16.6690896 75.9336609 16.7412913 76.0454246 16.8854859 76.1568886 17.0296806 76.232796 17.2460769 76.2722479 17.5345705 76.0484209 17.7543057 75.5884821 18.0052378 74.8915323 18.2866364 74.1943829 18.5681395 73.6618326 18.8463037 73.2938815 19.1210247 72.504944 19.7257658 71.870518 20.4431916 71.3905036 21.2742411 70.9102894 22.1056036 70.6705819 22.8916836 70.6705819 23.6335244 70.6705819 24.0867672 70.7722578 24.6327662 70.9763089 25.2715214 71.1801602 25.9102766 71.2820359 26.3051946 71.2820359 26.4562756L71.2820359 26.6005746 71.242584 26.7859826C70.6637902 26.7447692 70.2070474 26.3913775 69.8718563 25.7248685 69.5364655 25.0586725 69.36887 24.169194 69.36887 23.0565371L69.36887 22.8711291C69.2633987 22.9672241 69.1617227 23.0359826 69.063143 23.077196 68.9644634 23.1184093 68.8559957 23.1389639 68.7376401 23.1389639 68.6192845 23.1389639 68.5075208 23.1286344 68.4023491 23.1080799 68.2968778 23.0875254 68.1785222 23.0565371 68.0472823 23.0153237 68.0867342 23.1667177 68.116398 23.3141468 68.136074 23.4583414 68.1558499 23.6026404 68.1656379 23.7158468 68.1656379 23.7983779 68.1656379 24.3066067 67.9749705 24.7430511 67.5936358 25.1067722 67.2120014 25.470702 66.7583548 25.6527712 66.2326961 25.6527712 65.4043067 25.6527712 64.5627335 25.230308 63.7080761 24.3855903 62.8530193 23.5407682 62.4260402 22.7134749 62.4260402 21.9026669 62.4260402 21.7515859 62.4424202 21.6177207 62.4752802 21.5008625 62.5079403 21.3844217 62.5640718 21.2845705 62.6429756 21.2021438L62.6429756 21.2021438ZM76.7653463 12.7954495C77.9487026 13.0292702 78.7836839 13.5509585 79.2702902 14.3613492 79.7564971 15.1721571 80 16.4496675 80 18.1938802 80 21.6553866 79.0040151 24.4885715 77.0118455 26.6932264 75.019676 28.8976726 72.4720841 30 69.36887 30 68.1459619 30 66.9592098 29.7699354 65.8087134 29.3098063 64.6578175 28.8495729 63.6686243 28.2073746 62.8402349 27.3833157 61.8934899 26.4769344 61.1833563 25.5188016 60.7100338 24.5092304 60.2366113 23.4995548 60 22.4661946 60 21.4082107 60 20.2267953 60.2432033 19.3136321 60.7297098 18.6677819 61.2159166 18.0221405 61.9851781 17.5828789 63.0373944 17.3490582 62.8402349 16.8682702 62.6953117 16.4630227 62.6035237 16.13342 62.511436 15.803713 62.4654921 15.5495465 62.4654921 15.3710247 62.4654921 14.7529284 62.7777112 14.1212682 63.4023491 13.475418 64.0266874 12.8297766 64.6153692 12.5069558 65.1675955 12.5069558 65.4043067 12.5069558 65.6539022 12.5516124 65.9170812 12.6409254 66.1801602 12.7304471 66.4822916 12.8778762 66.8244741 13.0839431 65.8116098 10.0893478 65.0756078 7.77826855 64.6153692 6.15039231 64.1548311 4.52272474 63.9250115 3.39973846 63.9250115 2.78164214 63.9250115 1.92993378 64.1351551 1.25372138 64.5562414 0.752065886 64.977028 0.25061907 65.5489303 2.66453526e-14 66.272148 2.66453526e-14 67.5079403 2.66453526e-14 69.072931 2.88462341 70.966421 8.65387023 71.2949202 9.64288695 71.5450151 10.4052823 71.7160065 10.9410562 71.86063 10.5154628 72.0641817 9.91082608 72.3274605 9.1277719 74.2209504 3.41351103 75.8511616 0.556328427 77.2189928 0.556328427 77.8895747 0.556328427 78.4251214 0.793279263 78.8264318 1.26718094 79.2275424 1.74108261 79.4280977 2.37670766 79.4280977 3.17311705 79.4280977 3.77775382 79.2077665 4.88321137 78.7673039 6.49042876 78.3265416 8.0975418 77.6594555 10.1992154 76.7653463 12.7954495L76.7653463 12.7954495Z" id="angellist"/></g></g></svg>

const LinkedIn = () =>
  <svg className={`${s.icon}`} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
    <title>LinkedIn</title>
    <desc>{name}'s LinkedIn Profile</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal"><stop stopColor="#9792FA" offset="0%"/><stop stopColor="#F683F4" offset="100%"/>
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="85.7919034%" y2="83.046875%" id="hover"><stop stopColor="#FF00FD" offset="0%"></stop><stop stopColor="#483FFF" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fill="url(#normal)">
      <g transform="translate(-1162.000000, -907.000000)">
        <g transform="translate(1162.000000, 907.000000)">
          <path d="M25.56375 25.5639583L21.1170833 25.5639583 21.1170833 18.6016667C21.1170833 16.940625 21.0866667 14.8052083 18.805 14.8052083 16.489375 14.8052083 16.1347917 16.6139583 16.1347917 18.4814583L16.1347917 25.5639583 11.6883333 25.5639583 11.6883333 11.2470833 15.956875 11.2470833 15.956875 13.2033333 16.0160417 13.2033333C16.6097917 12.0777083 18.06125 10.8908333 20.2260417 10.8908333 24.731875 10.8908333 25.56375 13.8560417 25.56375 17.7108333L25.56375 25.5639583ZM6.67375 9.29C5.2475 9.29 4.093125 8.13354167 4.093125 6.709375 4.093125 5.28625 5.2475 4.13020833 6.67375 4.13020833 8.09625 4.13020833 9.25229167 5.28625 9.25229167 6.709375 9.25229167 8.13354167 8.09625 9.29 6.67375 9.29L6.67375 9.29ZM4.44791667 25.5639583L8.89770833 25.5639583 8.89770833 11.2470833 4.44791667 11.2470833 4.44791667 25.5639583ZM27.7797917 0L2.214375 0C0.992708333 0 0 0.968333333 0 2.16229167L0 27.8352083C0 29.0302083 0.992708333 30 2.214375 30L27.7797917 30C29.0035417 30 30.0004167 29.0302083 30.0004167 27.8352083L30.0004167 2.16229167C30.0004167 0.968333333 29.0035417 0 27.7797917 0L27.7797917 0Z" id="linkedin"/>
        </g>
      </g>
    </g>
  </svg>

class SocialIcons extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {

    const { className } = this.props;

    return (
      <p className={cx(g.marginLeftSmall, className) + ``}>
        
        <LinkExternal href="https://twitter.com/megakees">
          <Twitter />
        </LinkExternal> 
        
        <LinkExternal href="https://angellist.com/megankeesee">
          <AngelList />
        </LinkExternal> 
        
        <LinkExternal href="https://www.linkedin.com/in/megankeesee">
          <LinkedIn />
        </LinkExternal>
      
      </p>
    );
  }
  
}
export default SocialIcons;