import "./Footer.Module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="socialMediaList">
        <li>
          <InstagramIcon></InstagramIcon>
        </li>
        <li>
          {" "}
          <TwitterIcon></TwitterIcon>{" "}
        </li>
        <li>
          {" "}
          <FacebookIcon></FacebookIcon>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
