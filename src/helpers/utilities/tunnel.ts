import { tunnelEnvironments } from "./tunnel.environment";

export const mongoTunnelConfig = tunnelEnvironments["mongo"][process.env.APP_NAME];