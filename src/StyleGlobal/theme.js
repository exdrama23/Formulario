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
      500: "#42a5f5",
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
          borderRadius: "md",
          _focus: {
            borderColor: "brand.600",
            boxShadow: "0 0 0 2px #2196f3",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "filled",
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: "md",
          _focus: {
            borderColor: "brand.600",
            boxShadow: "0 0 0 2px #2196f3",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "filled",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "xl",
        fontWeight: "bold",
        transition: "all 0.3s ease-in-out",
      },
      variants: {
        solid: () => ({
          bgGradient: "linear(to-r, brand.500, brand.700)",
          color: "white",
          _hover: {
            bgGradient: "linear(to-r, brand.600, brand.800)",
            transform: "scale(1.05)",
          },
          _active: {
            transform: "scale(0.98)",
          },
        }),
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#f0f4f8",
        color: "#2d3748",
        fontSize: "18px",
        lineHeight: "1.6",
      },
    },
  },
});
