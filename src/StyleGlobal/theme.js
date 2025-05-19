import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    brand: {
      100: "#e3f2fd",
      200: "#bbdefb",
      300: "#90caf9",
      400: "#64b5f6",
      500: "#42a5f5", // cor principal
      600: "#2196f3",
      700: "#1e88e5",
      800: "#1976d2",
      900: "#1565c0",
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          _focus: {
            borderColor: "brand.500",
            boxShadow: "0 0 0 1px #42a5f5",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Select: {
      baseStyle: {
        field: {
          _focus: {
            borderColor: "brand.500",
            boxShadow: "0 0 0 1px #42a5f5",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
      },
      variants: {
        solid: (props) => ({
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        }),
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#f7f9fc",
        color: "#333",
        fontSize: "16px",
      },
    },
  },
});
