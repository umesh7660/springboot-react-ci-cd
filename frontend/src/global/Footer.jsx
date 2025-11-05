import '../cssStyles/Footer.css';
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../theme";
const Footer = () => {
    const theme = useTheme();
      const colors = tokens(theme.palette.mode);
    return (
        <footer className="footer-container"  style={{ background: colors.primary[400],color: colors.primary[100], }}>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; 2025 <a href="http://www.analogicgroup.com/">Analogic Tech India Ltd</a>. Version 1.1 (26-03-2025) | All Rights Reserved</p>
                </div>
        </footer>
    );
};

export default Footer;
