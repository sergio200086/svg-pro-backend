import dotenv from "dotenv";
import Fastify from "fastify";
import cors from "@fastify/cors";
import mongoose from "mongoose";

dotenv.config();

const fastify = Fastify({
  logger: true,
  ajv: {
    customOptions: {
      coerceTypes: false,
    },
  },
});

await fastify.register(cors, {
  methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.register(import("../routes/icons.js"), {
  prefix: "/icons",
});

// Example route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

mongoose
  .connect(process.env.CONEXION_MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("✅ Conectado a la base de datos :D"));

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    fastify.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
