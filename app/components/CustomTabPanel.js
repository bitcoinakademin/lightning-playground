import { Box } from "@mui/material";

export default function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingY: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }