import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), icon()]
});