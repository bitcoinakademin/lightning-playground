import ReactMarkdown from "markdown-to-jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Markdown(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          variant: "h4",
        },
      },
      h2: {
        component: Typography,
        props: { variant: "h2" },
      },
      h3: {
        component: Typography,
        props: { variant: "h5" },
      },
      h4: {
        component: Typography,
        props: {
          variant: "h6"
        },
      },
      p: {
        component: Typography,
        props: { paragraph: true },
      },
      a: { component: Link },
      img: {
        props: {
          width: "100%",
          objectFit: "scale-down",
        },
      },
      li: {
        component: (props) => (
          <Box component="li" sx={{ mt: 1 }}>
            <Typography component="span" {...props} />
          </Box>
        ),
      },
    },
  };
  return <ReactMarkdown options={options} {...props} />;
}
