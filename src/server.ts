// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from "dotenv";

import { createApp } from "@utils/createApp.utils";

config();
const PORT = process.env.PORT || 3001;

async function main() {
  console.log("Iniciando o servidor da Clark Seguros...");
  console.log(`Servidor rodando no mode: ${process.env.ENVIROMENT} mode`);

  try {
    const app = createApp();
    app.listen(PORT, () => {
      console.log(`Servidor da Clark Seguros rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

void main();
