import logo from "../images/header/logo.svg"
import {
  useLocation,
} from "react-router-dom";

export const Header = () => {

  const location = useLocation()

  // const switchHeaderText
  // switch(location.pathname) {
  //   case '/sign-in':
  //     return 'sdfsf'
  // }
  
  // console.log('location',location)
    return(
        <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Лого"
        />
        {}
      </header>
    )
}