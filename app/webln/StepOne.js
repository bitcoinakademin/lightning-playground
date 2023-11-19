import {
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  Box,
  Stack,
} from "@mui/material";
import alby from "../assets/images/alby.png";
import createAlby from "../assets/images/createAlby.png";

function StepOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const albyLink = <Link href="https://getalby.com/">Alby</Link>;

  return (
    <Stack spacing={2}>
      <Typography>
        En webbplånbok är en extension i din webbläsare som installeras på samma
        sätt som vanliga extensioner. Jag använder Chrome och då installeras
        extensioner via chrome web store. Min favorit webbplånbok idag är{" "}
        {albyLink} och det är den som jag kommer använda som exempel i denna
        genomgång. Sök på getAlby i chrome web store och installera extensionen.
      </Typography>
      <img
        src={alby.src}
        alt="Install Alby"
        style={{ maxWidth: isMobile ? "100%" : 750 }}
      />
      <Typography>
        När Alby är installerat dyker en Alby-ikon upp i högra hörnet på din
        webbläsare. Tryck på den för att öppna menyn och tryck sedan på "Add a
        new account". I det nya fönstret får du möjlighet att välja mellan att
        skapa ett Alby account eller ansluta med en egen plånbok eller nod. Välj
        att ansluta med ett Alby account och gå genom de olika stegen.
      </Typography>
      <img
        src={createAlby.src}
        alt="Create Alby account"
        style={{ maxWidth: isMobile ? "100%" : 750 }}
      />
    <Typography>
        Nu är allt på plats för att testa webbplånboken!
      </Typography>
    </Stack>
  );
}

export default StepOne;
