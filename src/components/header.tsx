import { View, Text, Link } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import CoffeeIconPdf from "./../icons/CoffeeIconPdf";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import { Image } from "@react-pdf/renderer";
import profileImage from "./../../assets/me.jpg";

function Header() {
  return (
    <View style={styles.header}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Image
          src={profileImage}
          style={{
            width: 100,
            height: "100%",
          }}
        />
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.textName}>GULCIN GULCU</Text>
        <Text style={styles.textTitle}>Fullstack Developer</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Link
            src="https://my-portfolio-gulcin-gulcus-projects.vercel.app/"
            style={styles.textLink}
          >
            https://my-portfolio-gulcin-gulcus-projects.vercel.app/
          </Link>
          <View
            style={{
              backgroundColor: "#fffcf2",
              height: 0.5,
              alignSelf: "center",
              flexGrow: 1,
              marginRight: 20,
              opacity: 0.5,
            }}
          ></View>
        </View>
      </View>
      <View style={styles.titleSectionRight}>
        <CoffeeIconPdf size={20} color="#fffcf2" />
        <Link
          src="https://www.linkedin.com/in/gulcin-gulcu-07a668178/"
          style={{
            color: "#fffcf2",
            fontSize: 10,
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Text>LinkedIn</Text>
          <ExternalLinkIcon size={9} color="#fffcf2" />
        </Link>
        <Text style={styles.textLocation}>Västerås, Sweden</Text>
        <View>
          <Link src="mailto:gulcingulcu7@gmail.com" style={styles.textLink}>
            gulcingulcu7@gmail.com
          </Link>
        </View>
        <View>
          <Link src="https://github.com/GulcinGulcu" style={styles.textLink}>
            https://github.com/GulcinGulcu
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "25 20 25 20",
    fontWeight: "thin",
    backgroundColor: "#333533",
    color: "#fffcf2",
    display: "flex",
    position: "relative",
    flexDirection: "row",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 4,
    marginLeft: 100,
  },
  titleSectionRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: "100%",
    gap: 4,
  },
  textName: {
    fontFamily: "Inter",
    fontWeight: "light",
    fontSize: 25,
    letterSpacing: 1,
    marginBottom: "8",
  },
  textTitle: {
    fontWeight: "normal",
    fontSize: 16,
    letterSpacing: 1.5,
    marginBottom: 13,
  },
  textLocation: {
    fontSize: 10,
  },
  textLink: {
    fontSize: 9,
    color: "#fffcf2",
    textDecoration: "none",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Header;
