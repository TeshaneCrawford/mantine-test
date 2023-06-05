'use client'
import Demo from "../components/text";
import { Box } from "@mantine/core";

export default function HomePage() {
  return <div>
    <Box
      style={{
        color: 'var(--mantine-color-red-5)',
        fontSize: 'var(--mantine-h1-font-size)',
        fontWeight: 'var(--mantine-h1-font-weight)',
      }}
    >
    Home page
    </Box>
    <Demo />
  </div>;
}
